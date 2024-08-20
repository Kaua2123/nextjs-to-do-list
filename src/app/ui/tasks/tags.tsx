import clsx from 'clsx';
import { Briefcase, User, Users } from 'lucide-react';

export function Tags({ tags }: { tags: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-3 bg-gray-200 px-2 py-2 rounded-xl text-xl text-white',
        {
          'bg-gray-200 text-gray-500': tags === 'trabalho',
          'bg-pink-300': tags === 'pessoal',
          'bg-orange-400': tags === 'social',
        },
      )}
    >
      {tags == 'trabalho' && (
        <>
          Trabalho
          <Briefcase size={14} />
        </>
      )}

      {tags == 'pessoal' && (
        <>
          Pessoal
          <User size={14} />
        </>
      )}

      {tags == 'social' && (
        <>
          Social
          <Users size={14} />
        </>
      )}
    </span>
  );
}
