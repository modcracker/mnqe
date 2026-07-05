import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Success & Case Studies | MNQE Analytics',
  description: 'See how leading startups and high-frequency systems scale their data pipelines and customize dashboards using MNQE telemetry engine.',
  alternates: {
    canonical: '/customers',
  },
};

export default function CustomersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
