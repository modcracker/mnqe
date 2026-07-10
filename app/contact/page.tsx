'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Send, CheckCircle2, ArrowRight, HelpCircle, AlertCircle, 
  ArrowUpRight, Building2, User, Landmark, MessageSquare 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://mnqe.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: 'https://mnqe.com/contact',
    },
  ],
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'domain-acquisition', // domain-acquisition, enterprise-demo, technical, partners
    budgetRange: 'under-50k', // for domain acquisitions
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [txHash, setTxHash] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please input your proposal or question';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setTxHash(`MNQE-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-[#0B0F19]">
        {/* Ambient background particles/glow */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Domain/Info details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <FadeIn y={15}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#6D5DFC]/10 text-[#9c8eff] border border-[#6D5DFC]/20 w-fit mb-4">
                  Get in Touch
                </span>
                <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                  Let&apos;s discuss the <span className="text-[#6D5DFC]">MNQE</span> digital asset.
                </h1>
                <p className="text-gray-400 mt-4 leading-relaxed text-base sm:text-lg">
                  Whether you are looking to acquire the premium domain <strong className="text-white">MNQE.com</strong>, seeking enterprise analytics orchestration custom builds, or interested in technology partnerships, we responsive.
                </p>
              </FadeIn>

              {/* Informative Cards & Best Practices */}
              <div className="flex flex-col gap-5">
                <FadeIn y={15} delay={0.2}>
                  <div className="bg-[#0F1424] border border-white/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#6D5DFC]/10 flex items-center justify-center text-[#9c8eff]">
                        <Landmark className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-display">MNQE.com Premium Domain</h4>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                          The MNQE.com domain asset is hosted on escrow services for your safety. Secure global ownership transfer takes less than 24 hours.
                        </p>
                        <a 
                          href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#6D5DFC] hover:text-white mt-3 transition-colors group"
                        >
                          View Live Listing
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn y={15} delay={0.3}>
                  <div className="bg-[#0F1424] border border-white/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-display">Alternative Direct Email</h4>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                          For verified corporate brokers or direct pricing offers, contact our dedicated acquisitions team.
                        </p>
                        <p className="text-sm font-semibold text-white font-mono mt-2">
                          acquisitions@mnqe.com
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Secure Transaction Guarantee Box */}
              <FadeIn y={15} delay={0.4}>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 flex gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-emerald-400 font-medium font-display block mb-0.5">Escrow Protection Enabled</strong>
                    All acquisition negotiations, escrow deposits, DNS validation transfers are processed securely through certified registries (Escrow.com, GoDaddy BrandBroker, or Sedo).
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interaction Form widget */}
            <div className="lg:col-span-7 bg-[#0F1424] border border-white/5 shadow-2xl rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6D5DFC] to-sky-400" />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold font-display text-white">Send Inquiry</h3>
                      <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                        Please fill out the details below. Our corporate desks typically respond within 2-4 business hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                      
                      {/* Name Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" /> Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name-input"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className={`px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-200 ${
                              formErrors.name 
                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/25' 
                                : 'border-white/10 hover:border-white/20 focus:border-[#6D5DFC] focus:ring-[#6D5DFC]/25'
                            }`}
                          />
                          {formErrors.name && (
                            <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.name}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="email-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> Corporate Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email-input"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className={`px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-200 ${
                              formErrors.email 
                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/25' 
                                : 'border-white/10 hover:border-white/20 focus:border-[#6D5DFC] focus:ring-[#6D5DFC]/25'
                            }`}
                          />
                          {formErrors.email && (
                            <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Company name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" /> Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company-input"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Corporation (Optional)"
                          className="px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D5DFC] focus:ring-1 focus:ring-[#6D5DFC]/25 hover:border-white/20 transition-all duration-200"
                        />
                      </div>

                      {/* Subject Selection */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Primary Topic
                        </label>
                        <select
                          id="subject-input"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-sm cursor-pointer focus:outline-none focus:border-[#6D5DFC] focus:ring-1 focus:ring-[#6D5DFC]/25 hover:border-white/20 transition-all duration-200"
                        >
                          <option value="domain-acquisition">MNQE.com Domain Acquisition Proposal</option>
                          <option value="enterprise-demo">Enterprise Analytics Dashboard Demo</option>
                          <option value="technical">Technical Integrations or Query Optimization Help</option>
                          <option value="partners">Brokers & licensing Partnerships</option>
                        </select>
                      </div>

                      {/* Dynamic budget selection show/hide based on Topic choice */}
                      {formData.subject === 'domain-acquisition' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col gap-2 overflow-hidden"
                        >
                          <label htmlFor="budget-input" className="text-xs font-semibold uppercase tracking-wider text-[#9c8eff] flex items-center gap-1">
                            Estimated Acquisition Range (USD)
                          </label>
                          <select
                            id="budget-input"
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleInputChange}
                            className="px-4 py-3 rounded-xl bg-[#0B0F19] border border-[#6D5DFC]/30 text-white text-sm cursor-pointer focus:outline-none focus:border-[#6D5DFC] focus:ring-1 focus:ring-[#6D5DFC]/25 transition-all duration-200"
                          >
                            <option value="under-15k">$5,000 to $15,000</option>
                            <option value="15k-30k">$15,000 to $30,000</option>
                            <option value="30k-50k">$30,000 to $50,000</option>
                            <option value="over-50k">Enterprise / $50,000+</option>
                          </select>
                        </motion.div>
                      )}

                      {/* Message Box */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" /> Core Inquiry or Proposal <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message-input"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder={
                            formData.subject === 'domain-acquisition'
                              ? 'Write down your corporate proposal, broker representation or direct transfer offering details here...'
                              : 'Describe what solutions or metrics questions you want to discuss with us...'
                          }
                          className={`px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-200 resize-none ${
                            formErrors.message 
                              ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/25' 
                              : 'border-white/10 hover:border-white/20 focus:border-[#6D5DFC] focus:ring-[#6D5DFC]/25'
                          }`}
                        />
                        {formErrors.message && (
                          <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 font-semibold text-white bg-[#6D5DFC] hover:bg-[#5C4CEB] py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/10 active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending proposal securely...
                          </>
                        ) : (
                          <>
                            Submit Secured Inquiry
                            <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white">Inquiry Received Successfully</h3>
                    <p className="text-gray-400 text-sm mt-3 max-w-md leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your corporate inquiry regarding the <span className="text-white font-mono">{formData.subject === 'domain-acquisition' ? 'Domain Acquisition' : 'Analytics Platforms'}</span> has been submitted to our secure registry queue.
                    </p>

                    <div className="bg-[#0B0F19] rounded-2xl p-6 border border-white/5 mt-8 w-full max-w-md text-left text-xs font-mono text-gray-400 flex flex-col gap-3">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Transaction Hash:</span>
                        <span className="text-[#9c8eff]">{txHash}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Recipient Node:</span>
                        <span className="text-white">acquisitions@mnqe.com</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Routing Protocol:</span>
                        <span className="text-emerald-400">SSL ENCRYPTED SECURE</span>
                      </div>
                      {formData.subject === 'domain-acquisition' && (
                        <div className="flex justify-between">
                          <span>Verified Budget:</span>
                          <span className="text-white">${formData.budgetRange === 'under-15k' ? '5,000 - 15,000' : formData.budgetRange === '15k-30k' ? '15,000 - 30,000' : formData.budgetRange === '30k-50k' ? '30,000 - 50,000' : '50,000+'}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          subject: 'domain-acquisition',
                          budgetRange: 'under-50k',
                          message: '',
                        });
                      }}
                      className="mt-8 font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 text-sm border border-white/5 hover:border-white/10 cursor-pointer"
                    >
                      Submit Another Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
