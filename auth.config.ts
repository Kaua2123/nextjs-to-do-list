import type { NextAuthOptions } from 'next-auth';

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  // middlewares
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {},
  },
  // diferentes opções de login
  providers: [],
};
