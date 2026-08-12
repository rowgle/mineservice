"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const sections = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Use" },
  { id: "data", label: "Data & Cookies" },
  { id: "disclaimer", label: "Disclaimer" },
]

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img
              src="/images/msi-logo-wht.png"
              alt="Mine Service Inc."
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="font-mono text-xs text-white/50 hover:text-[#ffcc40] transition-colors tracking-widest"
          >
            ← BACK HOME
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
            LEGAL
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-black tracking-[0.02em] mb-4">
            POLICIES &{" "}
            <span style={{ color: "#ffcc40" }}>NOTICES</span>
          </h1>
          <p className="text-white/50 text-sm font-mono">
            Last updated: August 11, 2026
          </p>
        </motion.div>

        {/* Jump links */}
        <div className="flex flex-wrap gap-3 mb-14">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-xs tracking-widest px-4 py-2 rounded-full border border-white/15 text-white/60 hover:border-[#ffcc40] hover:text-[#ffcc40] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="space-y-16 text-sm leading-relaxed text-white/70">
          {/* PRIVACY */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-black tracking-[0.02em] text-white mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-4">
              <p>
                Mine Service Inc. (“MSI,” “we,” “us,” or “our”) operates this
                website. We respect your privacy and are committed to protecting
                personal information you share with us.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Information We Collect
              </h3>
              <p>
                We may collect information you voluntarily provide when you
                contact us, request service, apply for employment, or otherwise
                communicate with us. This may include your name, company, email
                address, phone number, project details, and any message content
                you submit through our forms.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                How We Use Information
              </h3>
              <p>
                We use submitted information to respond to inquiries, evaluate
                project requests, process employment applications, improve our
                website, and communicate about our services. We do not sell your
                personal information.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Sharing of Information
              </h3>
              <p>
                We may share information with trusted service providers who
                assist in operating our website or business (for example, email
                or hosting providers), under appropriate confidentiality
                obligations. We may also disclose information when required by
                law or to protect our rights and safety.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Data Security
              </h3>
              <p>
                We implement reasonable administrative and technical measures to
                protect personal information. No method of transmission over the
                internet is completely secure, and we cannot guarantee absolute
                security.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Your Choices
              </h3>
              <p>
                You may contact us to request access to, correction of, or
                deletion of personal information we hold about you, subject to
                applicable law and legitimate business needs.
              </p>
              <h3 className="text-white font-bold text-base pt-2">Contact</h3>
              <p>
                Questions about this Privacy Policy:{" "}
                <a
                  href="mailto:info@mineserviceinc.com"
                  className="text-[#ffcc40] hover:underline"
                >
                  info@mineserviceinc.com
                </a>{" "}
                or 512-446-7011.
              </p>
            </div>
          </section>

          <div className="h-px bg-white/10" />

          {/* TERMS */}
          <section id="terms" className="scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-black tracking-[0.02em] text-white mb-6">
              Terms of Use
            </h2>
            <div className="space-y-4">
              <p>
                By accessing or using this website, you agree to these Terms of
                Use. If you do not agree, do not use the site.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Website Content
              </h3>
              <p>
                Content on this site is provided for general informational
                purposes about Mine Service Inc. and its services. We may update,
                change, or remove content at any time without notice.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                No Contract Formation
              </h3>
              <p>
                Submitting a contact form, service request, or career
                application does not create a binding contract for work,
                employment, or services. Any engagement is subject to separate
                written agreements, estimates, or employment processes.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Intellectual Property
              </h3>
              <p>
                Logos, text, graphics, and other materials on this site are owned
                by Mine Service Inc. or its licensors. You may not copy,
                reproduce, or distribute site content for commercial purposes
                without our prior written consent.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Acceptable Use
              </h3>
              <p>
                You agree not to misuse the website, attempt unauthorized access,
                transmit harmful code, or use the site in any way that violates
                applicable law.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Limitation of Liability
              </h3>
              <p>
                To the fullest extent permitted by law, Mine Service Inc. is not
                liable for any indirect, incidental, or consequential damages
                arising from your use of this website or reliance on its content.
              </p>
              <h3 className="text-white font-bold text-base pt-2">
                Governing Law
              </h3>
              <p>
                These terms are governed by the laws of the State of Texas,
                without regard to conflict-of-law principles.
              </p>
            </div>
          </section>

          <div className="h-px bg-white/10" />

          {/* DATA & COOKIES */}
          <section id="data" className="scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-black tracking-[0.02em] text-white mb-6">
              Data & Cookies
            </h2>
            <div className="space-y-4">
              <p>
                This website may use essential cookies or similar technologies
                required for basic functionality, security, and performance. We
                may also use analytics tools to understand how visitors use the
                site so we can improve content and navigation.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling
                certain cookies may affect site functionality.
              </p>
              <p>
                Form submissions (contact, service requests, and career
                applications) are processed to fulfill your request. We retain
                that information only as long as needed for business and legal
                purposes.
              </p>
            </div>
          </section>

          <div className="h-px bg-white/10" />

          {/* DISCLAIMER */}
          <section id="disclaimer" className="scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-black tracking-[0.02em] text-white mb-6">
              Disclaimer
            </h2>
            <div className="space-y-4">
              <p>
                Information on this website is believed to be accurate at the
                time of publication but is provided “as is” without warranties of
                any kind, express or implied. Project descriptions, capabilities,
                and past work examples are illustrative and do not guarantee
                availability, pricing, or results for any future engagement.
              </p>
              <p>
                Mine Service Inc. is a general contractor specializing in civil
                and industrial construction. Specific licenses, insurance, and
                project qualifications are confirmed during the bid or contracting
                process. Nothing on this site constitutes professional engineering
                advice, legal advice, or an offer to perform work in any
                jurisdiction where MSI is not properly authorized.
              </p>
              <p>
                Third-party sites linked from this website are not under our
                control. We are not responsible for their content or practices.
              </p>
              <p className="pt-4 text-white/50 font-mono text-xs">
                Mine Service Inc. · 855 E US Highway 79 · Rockdale, TX 76567 ·
                512-446-7011
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}