'use client';

import { generatePages } from '@/app/lib/utils';
import clsx from 'clsx';
import { Circle } from 'lucide-react';
import { useState } from 'react';

export default function Pagination({
  totalPages,
}: {
  totalPages: number | undefined;
}) {
  const [isCurrentPage, setIsCurrentPage] = useState(false);
  const allPages = generatePages(totalPages);

  return (
    allPages &&
    allPages.map(() => (
      <>
        <button
          onClick={() => setIsCurrentPage(true)}
          className={clsx('rounded-full inline-flex items-center', {
            'bg-gray-200': !isCurrentPage,
            'bg-green-600': isCurrentPage,
          })}
        >
          <Circle color="inherit" />
        </button>
      </>
    ))
  );
}
