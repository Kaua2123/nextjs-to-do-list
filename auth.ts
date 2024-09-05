import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import z from 'zod';
import { User } from '@/app/lib/definitions';
import { pool } from '@/app/lib/db';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
  try {
    if (!pool) return;

    const query = `SELECT * FROM users where email=${email}`;

    const user = await pool.query(query);
    return user.rows[0];
  } catch (error) {
    console.error('Falha ao buscar usuário.', error);
    throw new Error('Falha ao buscar usuário.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // credentials - sem integração com nenhum provedor externo
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials); // converte, de forma segura, para os devidos tipos

        // se os dados forem do tipo correto
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user; // se as senhas bateram, user retornado
        }

        console.log('invalid credentials');
        return null;
      },
    }),
  ],
});
