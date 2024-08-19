import { tasks } from '@/app/lib/placeholder-data';
import styles from '@/app/ui/tasks/table.module.css';
import { DeleteButton, EditButton } from '@/app/ui/tasks/buttons';

export default function Table() {
  const fetchTasks = tasks;

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className="text-xl font-semibold text-left">Nome</th>
            <th className="text-xl font-semibold text-left">Data de criação</th>
            <th className="text-xl font-semibold text-left">Status</th>
            <th className="text-xl font-semibold text-left">Categoria</th>
          </tr>
        </thead>

        <tbody className="bg-white text-2xl">
          {fetchTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>24/09/2024</td>
              <td>{task.status}</td>
              <td>{task.tags}</td>
              <td className="flex items-center justify-center h-24 gap-5">
                <EditButton />
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
