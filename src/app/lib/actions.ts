'use server'; // server action.
// executadas do lado do servidor
// FUNÇÕES assíncronas usadas para manipulação de dados

import { z } from 'zod';
import { pool } from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Status } from './definitions';
import { signIn, signOut } from '../../../auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';

const TaskSchema = z.object({
  // tipo de dado que se espera receber
  id: z.string(),
  name: z
    .string({
      invalid_type_error: 'Por favor, digite um nome correto.',
    })
    .min(4, 'Nome da tarefa precisa ter mais de 4 caracteres.'),
  description: z
    .string({
      invalid_type_error: 'Por favor, digite uma descrição correta.',
    })
    .min(1, 'Descrição não pode ficar em branco.'),
  status: z.enum(['pending', 'in_progress', 'completed'], {
    invalid_type_error: 'Por favor, selecione um status.',
  }),
  tags: z.enum(['pessoal', 'trabalho', 'social'], {
    invalid_type_error: 'Por favor, selecione uma categoria.',
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type State =
  | undefined
  | {
      errors?: {
        // todos os campos de task que podem lançar um ou mais erros
        name?: string[];
        description?: string[];
        tags?: string[];
      };
      message?: string | null;
    };

const UserSchema = z.object({
  id: z.string(),
  email: z
    .string({
      invalid_type_error: 'Por favor, digite um email correto.',
    })
    .min(3, 'O email deve ter, pelo menos, 3 caracteres.'),
  password: z
    .string({
      invalid_type_error: 'Por favor, digite uma senha correta.',
    })
    .min(5, 'Por segurança, a senha deve ter ao menos 5 caracteres.'),
});

const CreateTask = TaskSchema.omit({
  // omitindo os dados que nao serao fornecidos pelo usuario
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

const CreateUser = UserSchema.omit({
  id: true,
});

export async function createTask(prevState: State, formData: FormData) {
  // prev state contem o estado passado pelo hook useActionState
  const validatedFormData = CreateTask.safeParse({
    // valida os dados de forma segura. retorna um objeto checnado se a validação foi sucedida ou não
    name: formData.get('name'),
    description: formData.get('description'),
    tags: formData.get('tags'),
  });

  if (!validatedFormData.success) {
    return {
      errors: validatedFormData.error.flatten().fieldErrors, // exibe os erros de cada campo, graças ao flatten
      message: 'Há campos faltando. Por favor, preencha todos',
    };
  }

  const { name, description, tags } = validatedFormData.data;

  try {
    if (!pool) return;

    const query = {
      text: 'INSERT INTO tasks(name, description, tags, status) VALUES ($1, $2, $3, $4)',
      values: [name, description, tags, 'pending'],
    };

    await pool.query(query);
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Falha ao tentar criar uma tarefa.',
    };
  }

  // revalida o caminho passado
  // invalida / atualiza o cache dessa rota específica, refletindo as atualizações mais recentes
  revalidatePath('/tasks');

  //redirecionando o usuário
  redirect('/tasks');
}

export type UpdateTaskState =
  | undefined
  | {
      errors?: {
        // todos os campos de task que podem lançar um ou mais erros
        description?: string[];
      };
      message?: string | null;
    };

const UpdateTask = TaskSchema.omit({
  // omitindo os dados que nao serao fornecidos pelo usuario
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true,
});

export async function updateTask(
  id: string,
  statusFormData: Status,
  prevState: UpdateTaskState,
  formData: FormData,
) {
  const validatedFormData = UpdateTask.safeParse({
    description: formData.get('description'),
    status: statusFormData,
    tags: formData.get('tags'),
  });

  if (!validatedFormData.success) {
    return {
      errors: validatedFormData.error.flatten().fieldErrors, // exibe os erros de cada campo, graças ao flatten
      message: 'Há campos faltando. Por favor, preencha todos',
    };
  }

  const { description, status, tags } = validatedFormData.data;

  try {
    if (!pool) return;

    const query = {
      text: `UPDATE tasks SET description = $1, tags = $2, status = $3 WHERE tasks.id = $4`,
      values: [description, tags, status, id],
    };

    await pool.query(query);
  } catch (error) {
    console.log(error);
    throw new Error('Falha ao tentar editar a tarefa.');
  }

  revalidatePath('/tasks');
  redirect('/tasks');
}

export async function deleteTask(id: string) {
  try {
    if (!pool) return;

    await pool.query(`DELETE FROM tasks WHERE tasks.id = ${id}`);
  } catch (error) {
    console.log(error);
    throw new Error('Falha ao tentar deletar a tarefa.');
  }

  revalidatePath('/tasks');
}

export type RegisterState =
  | undefined
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };

      message?: string | null;
    };

export async function createUser(prevState: RegisterState, formData: FormData) {
  const validatedFormData = CreateUser.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFormData.success) {
    return {
      errors: validatedFormData.error.flatten().fieldErrors, // exibe os erros de cada campo, graças ao flatten
      message: 'Há campos faltando. Por favor, preencha todos',
    };
  }

  const { email, password } = validatedFormData.data;

  const hashPassword = await bcrypt.hash(password, 8);

  try {
    if (!pool) return;

    const query = {
      text: `INSERT INTO users(email, password) VALUES ($1, $2)`,
      values: [email, hashPassword],
    };

    await pool.query(query);
  } catch (error) {
    console.log(error);
    throw new Error('Falha ao tentar criar uma nova conta.');
  }

  redirect('/tasks');
}
// o state é sempre referente ao retorno da função.
export type AuthState =
  | undefined
  | {
      errors?: {
        errorMessage?: string;
      };
      message?: string | null;
    };

export async function authenticate(prevState: AuthState, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: true,
      redirectTo: '/tasks',
    });

    return {
      errors: {},
      message: 'Logado com sucesso.',
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            errors: {
              errorMessage: 'Credenciais inválidas.',
            },
          };
        default:
          return {
            errors: {
              errorMessage: 'Algo deu errado.',
            },
          };
      }
    }
    throw error;
  }
}

export async function handleSignOut() {
  console.log('signing out...');
  await signOut({
    redirect: true,
    redirectTo: 'localhost:3000',
  });
}
