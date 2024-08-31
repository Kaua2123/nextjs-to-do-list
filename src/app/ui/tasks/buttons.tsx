import { Pencil, Plus, Trash } from 'lucide-react';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { deleteTask } from '@/app/lib/actions';
import clsx from 'clsx';

export function CreateTaskButton() {
  return (
    <>
      <Link href="/tasks/create">
        <Button className="flex items-center justify-center w-96 bg-green-600">
          Criar tarefa
          <Plus />
        </Button>
      </Link>
    </>
  );
}

export function EditButton({ id }: { id?: string }) {
  const isDisabled = !id;
  return (
    <>
      <Link href={isDisabled ? '#' : `/tasks/${id}/edit`}>
        <button
          style={isDisabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
          className={clsx('p-3 rounded-lg border border-gray-300 ', {
            'hover:bg-gray-100': !isDisabled,
          })}
          aria-disabled={isDisabled}
        >
          <Pencil size={18} />
        </button>
      </Link>
    </>
  );
}

export function DeleteButton({ id }: { id?: string }) {
  const isDisabled = !id;
  const deleteTaskWithId = id ? deleteTask.bind(null, id) : ''; // recebendo a função em si, não seu retorno

  return (
    <>
      <form action={id ? deleteTaskWithId : ''}>
        <button
          style={isDisabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
          className={clsx('p-3 rounded-lg border border-gray-300 ', {
            'hover:bg-gray-100': !isDisabled,
          })}
          aria-disabled={isDisabled}
        >
          <Trash size={18} />
        </button>
      </form>
    </>
  );
}
