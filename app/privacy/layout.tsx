import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MNQE Analytics',
  description: 'Review our high-standards data protection protocols, GDPR compliance rules, encryption policies, and telemetry tracking privacy buffers.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
