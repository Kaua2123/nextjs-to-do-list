import Navbar from '@/app/ui/navbar';
import { CreateTaskForm } from '@/app/ui/tasks/create-form';

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="h-screen p-36 flex flex-col gap-20">
        <p className="text-5xl">Tarefas / Criar tarefa </p>
        <CreateTaskForm />
      </div>
    </>
  );
}
