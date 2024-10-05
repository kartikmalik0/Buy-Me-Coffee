import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuel My Rocket',
  description: 'Help me reach the stars, one gallon at a time!',
};

function StarField() {
  const stars = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  return <div className="fixed inset-0 overflow-hidden pointer-events-none">{stars}</div>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarField />
        {children}
      </body>
    </html>
  );
}