import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans | MNQE Analytics',
  description: 'Flexible options for teams of all sizes. From standard tracking buffers to enterprise dedicated cloud cluster scaling.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
