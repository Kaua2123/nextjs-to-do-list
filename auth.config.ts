import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  // middlewares
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnTasksPage = nextUrl.pathname.startsWith('/tasks');
      if (isOnTasksPage) {
        if (isLoggedIn) return true; // se estiver logado, retoran true. pode ficar na pagina.
        return false; // por padrão, retorna falso, pois não está logado.
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/tasks', nextUrl));
      }

      return true;
    },
  },
  // diferentes opções de login
  providers: [],
} satisfies NextAuthConfig;
