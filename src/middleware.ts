import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';

export default NextAuth(authConfig).auth; // exportando ap ropriedade auth

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/tasks', '/tasks/create', '/tasks/:id/edit'],
};

// matcher para rodar em caminhos específicos
