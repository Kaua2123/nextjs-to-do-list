import { fetchTasksById } from '@/app/lib/data';
import { EditTaskForm } from '@/app/ui/tasks/edit-form';
import Navbar from '@/app/ui/navbar';

export default async function Page({ params }: { params: { id: string } }) {
  const task = await fetchTasksById(params.id);

  return (
    <>
      <Navbar />
      <div className="h-screen p-36 flex flex-col gap-20">
        <p className="text-5xl">
          {task && <>{task[0].name} - Detalhes e Edição da tarefa</>}
        </p>
        <EditTaskForm />
      </div>
    </>
  );
}
