import { ListTodo, NotepadText } from 'lucide-react';
import { AltButton, Button } from '../button';
import Link from 'next/link';

export function CreateTaskForm() {
  return (
    <form action="">
      <div className="bg-gray-50 w-full p-12 rounded-3xl">
        <label htmlFor="" className="block mb-3 mt-5">
          Nome da tarefa
        </label>
        <div className="relative mt-4  flex items-center">
          <input
            className="peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
            type="text"
            placeholder="Nomeie sua tarefa"
          />
          <ListTodo
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>

        <label htmlFor="" className="block mb-3 mt-12">
          Descrição da tarefa
        </label>
        <div className="relative mt-4  flex items-center">
          <input
            className="peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
            type="text"
            placeholder="Nos dê mais detalhes sobre a tarefa"
          />
          <NotepadText
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>

        <label htmlFor="" className="block mb-3 mt-12">
          Categoria
        </label>
        <div className="relative mt-4  flex items-center">
          <select
            style={{ paddingLeft: '4.5rem' }}
            className="peer rounded-md p-4 border border-gray-200 w-full focus:outline-green-600"
          >
            <option value="">Social</option>
            <option value="">Trabalho</option>
            <option value="">Pessoal</option>
          </select>
          <ListTodo
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>
      </div>
      <div className="flex gap-10 mt-20 justify-end">
        <Link href="/tasks">
          <AltButton>Cancelar</AltButton>
        </Link>
        <Button className="bg-green-600">Criar tarefa</Button>
      </div>
    </form>
  );
}
