import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ramy Mohareb - Senior Solution Architect | Innovation Leader',
  description:
    'Award-nominated Solution Architect with 10+ years designing enterprise ECM and cloud solutions. Innovation Award Finalist 2025.',
  keywords:
    'Solution Architect, Enterprise Software, Cloud Architecture, OpenText, ECM, Dubai',
  authors: [{ name: 'Ramy Mohareb' }],
  creator: 'Ramy Mohareb',
  openGraph: {
    title: 'Ramy Mohareb - Senior Solution Architect',
    description:
      'Innovation Award Finalist 2025 | Enterprise Architecture Expert',
    url: 'https://ramym.io',
    siteName: 'RamyM.io',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
