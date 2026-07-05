import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | MNQE Analytics',
  description: 'Learn about the visionaries, cloud architects, and engineers building MNQE, a low-latency telemetry and modern analytics platform.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
