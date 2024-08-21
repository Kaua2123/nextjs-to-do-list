'use server'; // server action.
// executadas do lado do servidor
// FUNÇÕES assíncronas usadas para manipulação de dados

import { z } from 'zod';
import { pool } from './db';

const createTaskSchema = z.object({
  // tipo de dado que se espera receber
  id: z.string(),
  name: z
    .string({
      invalid_type_error: 'Por favor, digite um nome correto.',
    })
    .min(4, 'Nome da tarefa precisa ter mais de 4 caracteres.'),
  description: z.string({
    invalid_type_error: 'Por favor, digite uma descrição correta.',
  }),
  tags: z.string({
    invalid_type_error: 'Por favor, selecione uma categoria.',
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const CreateTask = createTaskSchema.omit({
  // omitindo os dados que nao serao fornecidos pelo usuario
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function createTask(formData: FormData) {
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
    const query = {
      text: 'INSERT INTO tasks(name, description, tags, status) VALUES ($1, $2, $3, $4)',
      values: [name, description, tags, 'pending'],
    };

    const res = await pool.query(query);
    console.log(res.rows[0]);
  } catch (error) {
    console.log(error);
  }
}
