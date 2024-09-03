'use client';

import { generatePages } from '@/app/lib/utils';
import clsx from 'clsx';
import { Circle } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({
  totalPages,
}: {
  totalPages: number | undefined;
}) {
  const allPages = generatePages(totalPages);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    console.log('chamada. pageNumber: ', pageNumber);
    const params = new URLSearchParams(searchParams); // pegando parametros de busca
    params.set('page', pageNumber.toString()); // setando nos parametros de busca a página
    return `${pathname}?${params.toString()}`; // constroi a URL completa usando pathname e params de busca
  };

  return (
    allPages &&
    allPages.map((page, index) => (
      <Link
        href={createPageURL(page)}
        key={index}
        className={clsx('rounded-full inline-flex items-center', {
          'bg-gray-200': page !== currentPage,
          'bg-green-600': page === currentPage,
        })}
      >
        <Circle color="inherit" />
      </Link>
    ))
  );
}
