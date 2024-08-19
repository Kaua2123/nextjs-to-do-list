import { Pencil, Plus, Trash } from 'lucide-react';
import { Button } from '@/app/ui/button';

export function CreateTaskButton() {
  return (
    <>
      <Button className="flex items-center justify-center w-96">
        Criar tarefa
        <Plus />
      </Button>
    </>
  );
}

export function EditButton() {
  return (
    <>
      <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
        <Pencil />
      </button>
    </>
  );
}

export function DeleteButton() {
  return (
    <>
      <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
        <Trash />
      </button>
    </>
  );
}
