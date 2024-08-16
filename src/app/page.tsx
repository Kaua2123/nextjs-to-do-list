import Image from 'next/image';

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
        <div className="flex flex-col items-start gap-16">
          <p className="text-7xl">
            Seu app de <br /> lista de tarefas.
          </p>
          <button>Começar</button>
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
