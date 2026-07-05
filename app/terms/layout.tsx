import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MNQE Analytics',
  description: 'Read the terms of use, operational limits, SLA guidelines, software licenses, and cloud architecture utilization rules for MNQE.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
