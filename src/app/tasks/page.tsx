import { Plus, Search } from 'lucide-react';
import { Button } from '../ui/button';
import Navbar from '../ui/navbar';
import Table from '../ui/tasks/table';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="flex p-36 gap-5">
          <div className="relative flex items-center w-full">
            <input
              placeholder="Buscar tarefas..."
              className="px-20 p-8 rounded-md w-full peer focus:outline-green-600 border border-gray-200"
            />
            <Search
              size={20}
              className="pointer-events-none absolute ml-5 text-gray-400 peer-focus:text-gray-900"
            />
          </div>

          <Button className="flex items-center justify-center w-96">
            Criar tarefa
            <Plus />
          </Button>
        </div>
        <div className="px-36 mt-6 flex">
          <div className="w-3/5">
            <p className="text-6xl mb-8 ">Tarefas</p>
            <div className="bg-gray-50 rounded-3xl p-6">
              <Table />
            </div>
          </div>
          <div>
            <p className="text-6xl">Tarefas recentes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
