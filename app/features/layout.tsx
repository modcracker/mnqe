import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Analytics Features | MNQE Analytics',
  description: 'Explore MNQE engines: instant streaming buffers, automatic schema adjustments, secure stakeholder notifications, and low-overhead tracking.',
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
