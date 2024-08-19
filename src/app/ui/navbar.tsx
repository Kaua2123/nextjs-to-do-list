export default function Navbar() {
  return (
    <div className="flex relative bg-green-600 justify-center items-center p-8 text-white">
      <p className="text-6xl">To-Do list</p>
      <button className="absolute right-0 mr-16 text-4xl hover:text-gray-200">
        Sair
      </button>
    </div>
  );
}
