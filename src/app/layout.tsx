import '@/app/ui/global.css';
import type { Metadata } from 'next';
import { poppins } from './ui/fonts';

export const metadata: Metadata = {
  title: 'To Do List',
  description: 'A simple to do list app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
