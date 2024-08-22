import { Button } from '@/app/ui/button';
import Navbar from '@/app/ui/navbar';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div
        style={{ height: '80vh' }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-16">
          <p className="text-5xl">404 - Não encontrado.</p>
          <Link href="/tasks">
            <Button>Retornar</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
