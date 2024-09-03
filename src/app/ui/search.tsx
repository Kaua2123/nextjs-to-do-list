'use client'; // CLIENT COMPONENT. interatividade, hooks...

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams(); // para acessar parâmetros de busca da URL atual (?query=...)
  const pathname = usePathname(); // caminho atual da rota
  const { replace } = useRouter(); // para manipular a URL da rota. substitui

  // useDebouncedCallback irá executar a função a cada 300ms após o usuario parar de digitar.
  const handleChange = useDebouncedCallback((query: string) => {
    // criando uma nova instância de URLSearchParams usando searchParams
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');
    if (query) {
      params.set('query', query); // setando um parâmetro
    } else {
      params.delete('query'); // deletando caso não haja nada digitado pelo usuario
    }

    replace(`${pathname}?${params.toString()}`);
    // pega o caminho atual da rota e atualiza os parâmetros de busca
  }, 300);

  return (
    <div className="relative flex items-center w-full">
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Buscar tarefas..."
        className="px-20 p-5 rounded-md w-full peer focus:outline-green-600 border border-gray-200"
        defaultValue={searchParams.get('query')?.toString()}
      />
      <SearchIcon
        size={20}
        className="pointer-events-none absolute ml-5 text-gray-400 peer-focus:text-gray-900"
      />
    </div>
  );
}
