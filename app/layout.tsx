import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import BackToTop from '@/components/BackToTop';
import PageProgressBar from '@/components/PageProgressBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const getMetadataBase = (): string => {
  const urlString = process.env.APP_URL || 'https://mnqe.com';
  try {
    if (urlString.startsWith('http://') || urlString.startsWith('https://')) {
      return new URL(urlString).origin;
    }
    return `https://${urlString}`;
  } catch {
    return 'https://mnqe.com';
  }
};

export const metadata: Metadata = {
  title: 'Buy MNQE Domain | Premium Monique Vanity Domain for Sale',
  description: 'Buy MNQE domain today! Secure MNQE.com, the ultimate Monique vanity domain and ultra-rare 4-letter LLLL .com domain for sale, currently showcasing an elite analytics platform.',
  metadataBase: new URL(getMetadataBase()),
  alternates: {
    canonical: '/',
  },
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
    title: 'Buy MNQE Domain | Premium Monique Vanity Domain for Sale',
    description: 'Buy MNQE domain today! Secure MNQE.com, the ultimate Monique vanity domain and ultra-rare 4-letter LLLL .com domain for sale.',
    url: '/',
    siteName: 'MNQE Analytics',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'MNQE.com Premium Analytics Domain Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy MNQE Domain | Premium Monique Vanity Domain for Sale',
    description: 'Buy MNQE domain today! Secure MNQE.com, the ultimate Monique vanity domain and ultra-rare 4-letter LLLL .com domain for sale.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#0B0F19] text-[#F2F2F5] antialiased" suppressHydrationWarning>
        <PageProgressBar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

