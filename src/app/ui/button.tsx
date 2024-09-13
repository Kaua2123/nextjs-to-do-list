import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // children é o que irá ser passado para dentro do componente.
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} bg-green-600 border-none rounded-lg text-white  p-4 md:p-6 md:px-10 text-xl md:text-3xl hover:bg-green-500 transition-all flex items-center justify-center gap-5`}
    >
      {children}
    </button>
  );
}

export function AltButton({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} bg-gray-200 border-none rounded-lg text-gray-600 p-4 md:p-6 md:px-10 text-xl md:text-3xl hover:bg-gray-300 transition-all flex items-center justify-center gap-5`}
    >
      {children}
    </button>
  );
}
