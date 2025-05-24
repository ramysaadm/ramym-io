import './globals.css';
import { Inter } from 'next/font/google';
import StructuredData from './components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Ramy Mohareb - Senior Solution Architect | Innovation Leader',
    template: '%s | Ramy Mohareb',
  },
  description:
    'Award-nominated Solution Architect with 10+ years designing enterprise ECM and cloud solutions. Innovation Award Finalist 2025. Expert in AWS, OpenText, and digital transformation.',
  keywords: [
    'Solution Architect',
    'Enterprise Software',
    'Cloud Architecture',
    'OpenText',
    'ECM',
    'Dubai',
    'AWS',
    'Digital Transformation',
    'Ramy Mohareb',
    'Innovation Award',
    'Enterprise Content Management',
    'Technical Consulting',
  ],
  authors: [{ name: 'Ramy Mohareb', url: 'https://ramym.io' }],
  creator: 'Ramy Mohareb',
  publisher: 'Ramy Mohareb',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ramym.io',
    title: 'Ramy Mohareb - Senior Solution Architect | Innovation Leader',
    description:
      'Award-nominated Solution Architect with 10+ years designing enterprise ECM and cloud solutions. Innovation Award Finalist 2025.',
    siteName: 'RamyM.io',
    images: [
      {
        url: 'https://ramym.io/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ramy Mohareb - Senior Solution Architect',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramy Mohareb - Senior Solution Architect | Innovation Leader',
    description:
      'Innovation Award Finalist 2025 | Enterprise Architecture Expert | AWS & OpenText Specialist',
    images: ['https://ramym.io/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://ramym.io',
  },
  category: 'technology',
  classification: 'Business',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
    { media: '(prefers-color-scheme: dark)', color: '#f97316' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://ramym.io" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7QKDN8TDB2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7QKDN8TDB2');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
