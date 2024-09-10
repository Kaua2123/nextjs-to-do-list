import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <div className="bg-green-600 mb-28 p-10 md:p-28 rounded-3xl m-8 flex justify-center items-center">
        <p className="text-white font-bold text-7xl">To-Do List</p>
      </div>
      <div className="flex md:flex-row md:mx-52 flex-col items-center justify-between">
        <div className="flex flex-col items-center md:items-start gap-8">
          <p className="md:text-7xl text-5xl md:text-start text-center md:leading-relaxed">
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
            className="hidden md:block"
          />

          <Image
            src="/to-do-list.svg"
            width={300}
            height={420}
            alt="Illustrative image"
            className="mt-20 block md:hidden"
          />
        </div>
      </div>
    </div>
  );
}
