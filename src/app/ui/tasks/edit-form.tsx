'use client'; // client component. para interatividade, uso de hooks, etc

import { Check, Clock, ListTodo, Loader2, NotepadText } from 'lucide-react';
import { AltButton, Button } from '../button';
import Link from 'next/link';
import { Status, Task } from '@/app/lib/definitions';
import clsx from 'clsx';
import { useState } from 'react';

export function EditTaskForm({ task }: { task: undefined | Task[] }) {
  const [status, setStatus] = useState<Status>(
    task ? task[0].status : 'pending',
  );

  return (
    <form>
      <div className="bg-gray-50 w-full p-12 rounded-3xl">
        <label htmlFor="" className="block mb-3 mt-12">
          Descrição da tarefa
        </label>
        <div className="relative mt-4  flex items-center">
          <input
            name="description"
            className="peer rounded-md p-4 px-20 border border-gray-200 w-full focus:outline-green-600"
            type="text"
            placeholder="Nos dê mais detalhes sobre a tarefa"
            defaultValue={task && task[0].description}
          />
          <NotepadText
            className="peer-focus:text-gray-900 text-gray-400 absolute ml-4 pointer-events-none"
            size={20}
          />
        </div>

        <label htmlFor="" className="block mb-3 mt-12">
          Status
        </label>
        <div className="relative mt-4 flex gap-8 items-center">
          <span
            onClick={() => setStatus('pending')}
            className={clsx(
              'inline-flex items-center gap-3 px-2 py-2 rounded-xl text-xl ',
              {
                'bg-gray-200 text-gray-600': status === 'pending',
                'bg-white text-gray-600 border border-gray-400 hover:bg-gray-200 hover:text-gray-600 cursor-pointer':
                  status !== 'pending',
              },
            )}
          >
            Pending
            <Clock size={14} />
          </span>
          <span
            onClick={() => setStatus('in progress')}
            className={clsx(
              'inline-flex items-center gap-3 px-2 py-2 rounded-xl text-xl ',
              {
                'bg-blue-400 text-white': status === 'in progress',
                'bg-white text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white cursor-pointer':
                  status !== 'in progress',
              },
            )}
          >
            In Progress
            <Loader2 size={14} />
          </span>
          <span
            onClick={() => setStatus('completed')}
            className={clsx(
              'inline-flex items-center gap-3 px-2 py-2 rounded-xl text-xl ',
              {
                'bg-green-400 text-white': status === 'completed',
                'bg-white text-green-400 border border-green-400 hover:bg-green-400 hover:text-white cursor-pointer':
                  status !== 'completed',
              },
            )}
          >
            Completed
            <Check size={14} />
          </span>
        </div>

        <label htmlFor="" className="block mb-3 mt-12">
          Categoria
        </label>
        <div className="relative mt-4  flex items-center">
          <select
            defaultValue={task && task[0].tags}
            name="tags"
            style={{ paddingLeft: '4.5rem' }}
            className="peer rounded-md p-4 border border-gray-200 w-full focus:outline-green-600"
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
