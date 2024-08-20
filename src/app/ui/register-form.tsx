import { ArrowRight, AtSign, KeyRound } from 'lucide-react';
import { Button } from './button';

export default function RegisterForm() {
  return (
    <form action="">
      <label htmlFor="" className="block mb-3 mt-5">
        Email
      </label>
      <div className="relative mt-4  flex items-center">
        <input
          className="peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
          type="text"
          placeholder="Informe-nos seu email"
        />
        <AtSign
          className="text-gray-400 peer-focus:text-gray-900  absolute ml-4 pointer-events-none"
          size={20}
        />
      </div>

      <label htmlFor="" className="block mb-3 mt-5">
        Senha
      </label>
      <div className="relative mt-4 flex items-center">
        <input
          className="peer rounded-md p-4 px-20 border border-gray-200 focus:outline-green-600 w-full"
          type="password"
          placeholder="Cadastre uma senha"
        />
        <KeyRound
          className="text-gray-400 peer-focus:text-gray-900 absolute ml-4 pointer-events-none"
          size={20}
        />
      </div>

      <Button className="w-full flex justify-between mt-16 bg-green-600">
        Criar conta
        <ArrowRight />
      </Button>
    </form>
  );
}
