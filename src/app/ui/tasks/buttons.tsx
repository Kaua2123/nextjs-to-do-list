import { Pencil, Plus, Trash } from 'lucide-react';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { deleteTask } from '@/app/lib/actions';

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

export function EditButton({ id }: { id: string }) {
  return (
    <>
      <Link href={`/tasks/${id}/edit`}>
        <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100">
          <Pencil size={18} />
        </button>
      </Link>
    </>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id); // recebendo a função em si, não seu retorno

  return (
    <>
      <form action={deleteTaskWithId}>
        <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100">
          <Trash size={18} />
        </button>
      </form>
    </>
  );
}
