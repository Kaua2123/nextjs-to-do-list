import { Check, Loader2, Clock } from 'lucide-react';
import clsx from 'clsx';

export function Status({ status }: { status?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-3 px-2 py-2 rounded-xl text-xl',
        {
          'bg-green-400 text-white': status === 'completed',
          'bg-gray-200 text-gray-600': status === 'pending',
          'bg-blue-400 text-white': status === 'in progress',
          'bg-gray-200 text-gray-200 animate-pulse': !status,
        },
      )}
    >
      {status == 'completed' && (
        <>
          Completed
          <Check size={14} />
        </>
      )}

      {status == 'pending' && (
        <>
          Pending
          <Clock size={14} />
        </>
      )}

      {status == 'in progress' && (
        <>
          In Progress
          <Loader2 size={14} />
        </>
      )}
      {!status && (
        <>
          loading...
          <Loader2 size={14} />
        </>
      )}
    </span>
  );
}
