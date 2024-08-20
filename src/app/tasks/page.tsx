import { Search } from 'lucide-react';
import Navbar from '../ui/navbar';
import Table from '../ui/tasks/table';
import { CreateTaskButton } from '../ui/tasks/buttons';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="flex flex-col p-36 gap-5">
          <div>
            <p className="text-5xl mb-8">Tarefas</p>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex gap-5 items-center">
              <div className="relative flex items-center w-full">
                <input
                  placeholder="Buscar tarefas..."
                  className="px-20 p-5 rounded-md w-full peer focus:outline-green-600 border border-gray-200"
                />
                <Search
                  size={20}
                  className="pointer-events-none absolute ml-5 text-gray-400 peer-focus:text-gray-900"
                />
              </div>
              <CreateTaskButton />
            </div>
            <div>
              <div className="">
                <div className="w-full">
                  <div className="bg-gray-50 rounded-3xl p-6 w-full">
                    <Table />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
