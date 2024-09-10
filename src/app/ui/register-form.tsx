'use client';

import { ArrowRight, AtSign, KeyRound } from 'lucide-react';
import { Button } from './button';
import { createUser, RegisterState } from '../lib/actions';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const initialState: RegisterState = { errors: {}, message: null };
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="" className="block mb-3 mt-5">
        Email
      </label>
      <div
        aria-describedby="email-errors"
        className="relative mt-4 flex items-center"
      >
        <input
          className="peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
          type="text"
          placeholder="Informe-nos seu email"
          name="email"
        />
        <AtSign
          className="text-gray-400 peer-focus:text-gray-900  absolute ml-4 pointer-events-none"
          size={20}
        />
      </div>

      <div id="email-errors">
        {state?.errors?.email?.map((error) => (
          <p className="mt-4 text-xl text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>

      <label htmlFor="" className="block mb-3 mt-5">
        Senha
      </label>
      <div
        aria-describedby="password-errors"
        className="relative mt-4 flex items-center"
      >
        <input
          className="peer rounded-md p-4 px-20 border border-gray-200 focus:outline-green-600 w-full"
          type="password"
          placeholder="Cadastre uma senha"
          name="password"
        />
        <KeyRound
          className="text-gray-400 peer-focus:text-gray-900 absolute ml-4 pointer-events-none"
          size={20}
        />
      </div>

      <div id="password-errors">
        {state?.errors?.password?.map((error) => (
          <p className="mt-4 text-xl text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>

      <Button className="w-full flex justify-between mt-16 bg-green-600">
        Criar conta
        <ArrowRight />
      </Button>
    </form>
  );
}
