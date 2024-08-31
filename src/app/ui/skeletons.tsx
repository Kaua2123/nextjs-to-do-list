import styles from '@/app/ui/tasks/table.module.css';
import { Status } from './tasks/status';
import { Tags } from './tasks/tags';
import { DeleteButton, EditButton } from './tasks/buttons';

export function TasksSkeleton() {
  const tasksNumber = [1, 2, 3, 4, 5, 6];

  return (
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
        {tasksNumber.map((task, index) => (
          <tr key={index}>
            <td>
              <span className="bg-gray-200 text-gray-200 inline-flex items-center gap-3 px-24 py-2 rounded-xl text-xl animate-pulse">
                00/00/0000
              </span>
            </td>
            <td>
              <span className="bg-gray-200 text-gray-200 inline-flex items-center gap-3 px-2 py-2 rounded-xl text-xl animate-pulse">
                00/00/0000
              </span>
            </td>
            <td>
              <Status />
            </td>
            <td>
              <Tags />
            </td>
            <td className="">
              <div className="flex items-center justify-end gap-5">
                <EditButton />
                <DeleteButton />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
