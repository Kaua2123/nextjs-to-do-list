import { Pencil, Plus, Trash } from 'lucide-react';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

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

export function EditButton() {
  return (
    <>
      <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100">
        <Pencil size={18} />
      </button>
    </>
  );
}

export function DeleteButton() {
  return (
    <>
      <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100">
        <Trash size={18} />
      </button>
    </>
  );
}
