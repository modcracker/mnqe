import React from "react";
import ViralBrandingEngine from "@/components/ViralBrandingEngine";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the MNQE Monique vanity domain for sale transferred?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Acquiring the premium Monique vanity domain (mnqe.com) is completed through standard escrow brokers such as Escrow.com or Sedo. The buyer deposits the funds, the registrar transfer authorization code is securely push-transferred to the buyer's registrar (such as GoDaddy or Cloudflare), and the funds are safely disbursed."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I buy a premium 4-letter LLLL .com domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium 4-letter LLLL .com domains are highly scarce digital assets with only 456,976 total possible combinations. A short, pronounceable vanity domain like MNQE reduces ad click costs, boosts user recall, and establishes immediate authoritative trust in search engines."
        }
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Monique",
    "url": "https://www.mnqe.com",
    "description": "Formally associated with the premium vanity brand identity and high-growth digital asset MNQE.com. Ideal for next-generation enterprise, biotech, or fashion applications.",
    "logo": "https://www.mnqe.com/logo.png"
  };

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background visual grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      
      {/* JSON-LD Schema for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <ViralBrandingEngine />
    </main>
  );
}
