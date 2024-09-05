import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  // middlewares
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {},
  },
  // diferentes opções de login
  providers: [],
} satisfies NextAuthConfig;
