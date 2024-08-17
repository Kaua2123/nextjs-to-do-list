import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <div className="bg-green-600 mb-28 p-28 rounded-3xl m-8 flex justify-center items-center">
        <p className="text-white font-bold text-7xl">To-Do List</p>
      </div>
      <div
        style={{ width: '120rem', margin: '0 auto' }}
        className="flex items-center justify-between"
      >
        <div className="flex flex-col items-start gap-8">
          <p className="text-7xl  leading-relaxed">
            Seu app de <br /> lista de tarefas.
          </p>
          <Link href="/login">
            <Button>
              Começar
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <div>
          <Image
            src="/to-do-list.svg"
            width={650}
            height={250}
            alt="Illustrative image"
          />
        </div>
      </div>
    </div>
  );
}
