import styles from '@/app/ui/tasks/table.module.css';
import { DeleteButton, EditButton } from '@/app/ui/tasks/buttons';
import { Status } from './status';
import { Tags } from './tags';
import { fetchFilteredTasks } from '@/app/lib/data';
import { convertDateFormat } from '@/app/lib/utils';

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // componente async. server component
  const tasks = await fetchFilteredTasks(query, currentPage);

  return (
    <>
      <div className="md:hidden grid gap-16 items-center justify-center">
        {tasks &&
          tasks.map((task, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl min-w-96 h-40 grid"
            >
              <p className="text-xl">{convertDateFormat(task.created_at)}</p>
              <p className="text-2xl font-bold">{task.name}</p>
            </div>
          ))}
      </div>
      <table className={`${styles.table} w-full rounded-md hidden md:table`}>
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
                <td>{convertDateFormat(task.created_at)}</td>
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
