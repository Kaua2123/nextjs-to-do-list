import styles from '@/app/ui/tasks/table.module.css';
import { DeleteButton, EditButton } from '@/app/ui/tasks/buttons';
import { Status } from './status';
import { Tags } from './tags';
import { fetchTasks } from '@/app/lib/data';

export default async function Table() {
  // componente async. server component
  const tasks = await fetchTasks();

  return (
    <>
      <table className={`${styles.table} w-full shadow-md`}>
        <thead>
          <tr>
            <th className="text-xl font-semibold text-left">Nome</th>
            <th className="text-xl font-semibold text-left">Data de criação</th>
            <th className="text-xl font-semibold text-left">Status</th>
            <th className="text-xl font-semibold text-left">Categoria</th>
          </tr>
        </thead>

        <tbody className="bg-white text-2xl">
          {tasks &&
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>24/09/2024</td>
                <td>
                  <Status status={task.status} />
                </td>
                <td>
                  <Tags tags={task.tags} />
                </td>
                <td className="">
                  <div className="flex items-center justify-end gap-5">
                    <EditButton id={task.id} />
                    <DeleteButton id={task.id} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
