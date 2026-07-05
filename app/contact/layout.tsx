import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Our Operations | MNQE Analytics',
  description: 'Reach out to the MNQE technical and acquisition team for enterprise licenses, custom telemetry pipelines, or domain inquiries.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
