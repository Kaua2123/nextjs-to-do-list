'use client';

import { SearchIcon } from 'lucide-react';

export default function Search() {
  return (
    <div className="relative flex items-center w-full">
      <input
        placeholder="Buscar tarefas..."
        className="px-20 p-5 rounded-md w-full peer focus:outline-green-600 border border-gray-200"
      />
      <SearchIcon
        size={20}
        className="pointer-events-none absolute ml-5 text-gray-400 peer-focus:text-gray-900"
      />
    </div>
  );
}
