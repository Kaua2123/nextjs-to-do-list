'use client';

import { ListTodo, NotepadText } from 'lucide-react';
import { AltButton, Button } from '../button';
import Link from 'next/link';
import { createTask, State } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export function CreateTaskForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(createTask, initialState);
  // use form state pode ser usado para lidar com erros de formulário.

  return (
    <form action={formAction}>
      <div className="bg-gray-50 w-full p-4 rounded-5xl md:p-12 md:rounded-3xl">
        <label htmlFor="" className="block mb-3 mt-5">
          Nome da tarefa
        </label>
        <div className="relative mt-4  flex items-center">
          <input
            name="name"
            className="text-lg md:text-2xl peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
            type="text"
            placeholder="Nomeie sua tarefa"
            aria-describedby="name-error"
          />
          <ListTodo
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>
        {/* seguindo o curso "Learn" do next.js */}
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.name?.map((error: string) => (
            <p className="mt-4 text-md text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <label htmlFor="" className="block mb-3 mt-12">
          Descrição da tarefa
        </label>
        <div className="relative mt-4  flex items-center">
          <input
            name="description"
            className="text-lg md:text-2xl peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
            type="text"
            placeholder="Nos dê mais detalhes sobre a tarefa"
            aria-describedby="description-error"
          />
          <NotepadText
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.description?.map((error: string) => (
            <p className="mt-4 text-md text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <label htmlFor="" className="block mb-3 mt-12">
          Categoria
        </label>
        <div className="relative mt-4  flex items-center">
          <select
            name="tags"
            style={{ paddingLeft: '4.5rem' }}
            className="text-lg md:text-2xl peer rounded-md p-4 border border-gray-200 w-full focus:outline-green-600"
            aria-describedby="tags-error"
          >
            <option value="social">Social</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
          </select>
          <ListTodo
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>
        <div id="tags-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.tags?.map((error: string) => (
            <p className="mt-4 text-md text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 md:gap-10 mt-10 md:mt-20 md:justify-end">
        <Link href="/tasks">
          <AltButton className="md:w-auto w-full">Cancelar</AltButton>
        </Link>
        <Button className="bg-green-600">Criar tarefa</Button>
      </div>
    </form>
  );
}
