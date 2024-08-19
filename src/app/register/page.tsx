import Link from 'next/link';
import RegisterForm from '../ui/register-form';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-gray-50 rounded-3xl p-10 flex flex-col gap-20">
        <div className="bg-green-600  flex items-center justify-center w-full text-white p-7 px-28 rounded-3xl">
          <p className="text-7xl">To-do List</p>
        </div>
        <div>
          <RegisterForm />

          <Link href="/login">
            <button className="mt-4 text-xl hover:text-green-600">
              Já tenho uma conta.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
