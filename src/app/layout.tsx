import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Positron Create',
  description: 'Design editor inside your app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
