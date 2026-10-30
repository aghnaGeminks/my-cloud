import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyCloud Storage',
  description: 'Sistem penyimpanan file pribadi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}