import Navbar from '../ui/navbar';
import Table from '../ui/tasks/table';
import { CreateTaskButton } from '../ui/tasks/buttons';
import Search from '../ui/search';
import { fetchTasksPages } from '../lib/data';
import { TasksSkeleton } from '../ui/skeletons';
import { Suspense } from 'react';
import Pagination from '../ui/tasks/pagination';

// todos os Page Components aceitam a prop searchParams
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTasksPages(query);
  console.log(totalPages);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="flex flex-col p-36 gap-5">
          <div>
            <p className="text-5xl mb-8">Tarefas</p>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex md:flex-row flex-col gap-5 items-center">
              <Search />
              <CreateTaskButton />
            </div>
            <div>
              <div className="">
                <div className="w-full">
                  <div className="bg-gray-50 rounded-3xl p-6 w-full">
                    <Suspense fallback={<TasksSkeleton />}>
                      <Table query={query} currentPage={currentPage} />
                    </Suspense>
                  </div>
                  <div className="mt-10 ml-10 flex gap-4">
                    <Pagination totalPages={totalPages} />
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
