"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/#about" },
        { label: "Key Personnel", href: "/#about" },
        { label: "Safety", href: "/#safety" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Mining", href: "/#markets" },
        { label: "Landfills", href: "/#markets" },
        { label: "Oil & Gas", href: "/#markets" },
        { label: "Concrete", href: "/#markets" },
      ],
    },
    {
      title: "Locations",
      links: [
        { label: "Rockdale, TX", href: "/request-service" },
        { label: "Waco, TX", href: "/request-service" },
        { label: "Midland, TX", href: "/request-service" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal" },
        { label: "Terms of Service", href: "/legal" },
        { label: "Disclaimer", href: "/legal" },
      ],
    },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative bg-black pt-16 pb-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-[0.02em] leading-[0.9]">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
            >
              READY TO
            </motion.span>
            <motion.span
              className="block"
              style={{ color: "#ffcc40" }}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1] as const,
                delay: 0.1,
              }}
            >
              START A PROJECT?
            </motion.span>
          </h2>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/request-service">
              <motion.button
                className="font-mono bg-[#ffcc40] text-[#121212] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                REQUEST SERVICE
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Company blurb */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/50 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            Mine Service Inc. is a heavy civil and industrial contractor serving
            Texas since 1985. Mining, landfills, oil & gas, concrete, and site
            development — built with experience, strength, safety, and results.
          </p>
        </motion.div>

        {/* Link columns */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-display font-black text-white text-sm tracking-[0.02em] uppercase mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href={item.href}
                        className="text-white/60 hover:text-[#ffcc40] font-mono text-xs transition-colors inline-block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <img
              src="/images/msi-logo-wht.png"
              alt="Mine Service Inc."
              className="h-8 w-auto"
            />
          </div>

          <p className="text-white/40 font-mono text-xs">
            © {new Date().getFullYear()} Mine Service Inc. All rights reserved.
          </p>

          <a
            href="https://www.rowgle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 font-mono text-xs hover:text-[#ff6600] transition-colors"
          >
            Designed by Rowgle
          </a>
        </motion.div>
      </div>
    </footer>
  )
}