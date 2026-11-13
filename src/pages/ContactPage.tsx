import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Info, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { PROFILE, REFERENCE_STATEMENT } from '../data/portfolioData';

type InquiryType = 'Junior Accounts Officer Role' | 'Accounting & Office Support' | 'General';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<InquiryType>('Junior Accounts Officer Role');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2400);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = 'Please enter your name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (message.trim().length < 15) {
      nextErrors.message = 'Please include at least 15 characters describing your inquiry.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setInquiryType('Junior Accounts Officer Role');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `[${inquiryType}] Portfolio Inquiry from ${name || 'Visitor'}`
  )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

  return (
    <div className="space-y-12">
      <PageHeader
        kicker="Get in Touch"
        title="Contact"
        description="Direct phone, email, LinkedIn profile, Badda Dhaka location, and email preparation form."
      />

      <Reveal>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Channels */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7 dark:border-slate-800 dark:bg-[#0D1B2E]">
              <h2 className="font-display text-lg font-bold text-[#0A192F] dark:text-white">
                Direct Contact Information
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {PROFILE.targetRole}. Reach out directly via phone, email, or LinkedIn.
              </p>

              <div className="mt-6 space-y-5 border-t border-slate-200 pt-5 dark:border-slate-800">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Email Address
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F294A] hover:text-[#1D4ED8] dark:text-blue-400"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>{PROFILE.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(PROFILE.email, 'email')}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-medium text-[#0A192F] transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-[#091526] dark:text-slate-200 dark:hover:bg-[#132642]"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Mobile Number
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-[#0F294A] hover:text-[#1D4ED8] dark:text-blue-400"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>{PROFILE.phone}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(PROFILE.phone, 'phone')}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-medium text-[#0A192F] transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-[#091526] dark:text-slate-200 dark:hover:bg-[#132642]"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 flex items-start gap-2 text-sm font-medium text-[#0A192F] dark:text-slate-100">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                    <span>{PROFILE.location}</span>
                  </p>
                </div>

                {PROFILE.linkedinUrl && (
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      LinkedIn
                    </p>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#0F294A] hover:text-[#1D4ED8] dark:text-blue-400"
                    >
                      <span>{PROFILE.linkedinLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    References
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#0A192F] dark:text-slate-200">
                    {REFERENCE_STATEMENT}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Email Preparation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-800 dark:bg-[#0D1B2E]">
              {submitted ? (
                <div className="space-y-5 py-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F294A] text-white dark:bg-blue-600">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[#0A192F] dark:text-white">
                    Email Draft Ready for {name}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    This website does not send emails automatically from the browser. Click{' '}
                    <span className="font-semibold text-[#0A192F] dark:text-white">
                      Open in Email Client
                    </span>{' '}
                    below to open your default email app with your message addressed to{' '}
                    <span className="font-semibold text-[#0A192F] dark:text-white">
                      {PROFILE.email}
                    </span>
                    .
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailtoHref}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F294A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Open in Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#0A192F] transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#091526] dark:text-slate-100 dark:hover:bg-[#132642]"
                    >
                      Prepare Another Email
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-display text-lg font-bold text-[#0A192F] dark:text-white">
                      Prepare an Email Inquiry
                    </h2>
                    <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-[#091526] dark:text-slate-300">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8] dark:text-blue-400" aria-hidden="true" />
                      <span>
                        This form does not send emails directly from the browser. Clicking{' '}
                        <strong className="font-semibold text-[#0A192F] dark:text-white">
                          Prepare Email
                        </strong>{' '}
                        prepares your message to open in your default email app, or you can copy
                        the email or mobile number on the left directly.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0A192F] dark:text-slate-200"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0A192F] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 dark:border-slate-700 dark:bg-[#091526] dark:text-white dark:placeholder:text-slate-500"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0A192F] dark:text-slate-200"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0A192F] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 dark:border-slate-700 dark:bg-[#091526] dark:text-white dark:placeholder:text-slate-500"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs font-semibold text-[#0A192F] dark:text-slate-200"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="contact-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0A192F] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 dark:border-slate-700 dark:bg-[#091526] dark:text-white"
                    >
                      <option value="Junior Accounts Officer Role">
                        Junior Accounts Officer Role
                      </option>
                      <option value="Accounting & Office Support">
                        Accounting &amp; Office Support
                      </option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#0A192F] dark:text-slate-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0A192F] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 dark:border-slate-700 dark:bg-[#091526] dark:text-white dark:placeholder:text-slate-500"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F294A] px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Prepare Email</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
