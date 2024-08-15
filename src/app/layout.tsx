import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
