import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Suite & Analytics Engine | MNQE Analytics',
  description: 'Discover the MNQE Enterprise Suite: built-in real-time analytics dashboards, database pipelines, and memory-safe caching architectures.',
  alternates: {
    canonical: '/product',
  },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
