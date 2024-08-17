import LoginForm from '../ui/login-form';

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-gray-100 rounded-3xl p-10 flex flex-col gap-20">
          <div className="bg-green-600  w-full text-white p-7 px-28 rounded-3xl">
            <p className="text-7xl">To-Do List</p>
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
