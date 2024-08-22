'use client';

import { useEffect } from 'react';
import { Button } from '../ui/button';
import Navbar from '../ui/navbar';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <div
        style={{ height: '80vh' }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-16">
          <p className="text-5xl">Ops! Parece que algo deu errado!</p>
          <Button onClick={() => reset()}>Tentar novamente</Button>
        </div>
      </div>
    </>
  );
}
