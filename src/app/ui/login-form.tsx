'use client';

import { ArrowRight, AtSign, KeyRound } from 'lucide-react';
import { Button } from './button';
import { authenticate, AuthState } from '../lib/actions';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const initialState: AuthState = { errors: {}, message: null };

  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="" className="block mb-3 mt-5">
        Email
      </label>
      <div className="relative mt-4 flex items-center">
        <input
          className="peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
          type="text"
          placeholder="Entre com seu email"
          name="email"
        />
        <AtSign
          className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
          size={20}
        />
      </div>

      <label htmlFor="" className="block mb-3 mt-5">
        Senha
      </label>
      <div
        aria-describedby="login-errors"
        className="relative mt-4 flex items-center"
      >
        <input
          className="peer rounded-md p-4 px-20 border border-gray-200 focus:outline-green-600 w-full"
          type="password"
          placeholder="Digite sua senha"
          name="password"
        />
        <KeyRound
          className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
          size={20}
        />
      </div>
      <div id="login-errors">
        <p
          className="mt-4 text-xl text-red-500"
          key={state.errors?.errorMessage}
        >
          {state.errors?.errorMessage}
        </p>
      </div>

      <Button className="w-full flex justify-between mt-16 bg-green-600">
        Entrar
        <ArrowRight />
      </Button>
    </form>
  );
}
