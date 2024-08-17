export type ButtonProps = {
  children: React.ReactNode; // children é o que irá ser passado para dentro do componente.
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-green-600 border-none rounded-lg text-white p-6 px-10 text-3xl hover:bg-green-500 transition-all flex items-center justify-center gap-5">
      {children}
    </button>
  );
}
