"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const services = [
  "Civil Construction",
  "Concrete",
  "Aggregate / Materials",
  "Trucking",
  "Industrial Welding",
  "General Contracting",
  "Other",
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hook up Formspree / API later
    console.log(form)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img
              src="/images/msi-logo-yellow.png"
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

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
            GET IN TOUCH
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-black tracking-[0.02em]">
            CONTACT <span style={{ color: "#ffcc40" }}>US</span>
          </h1>
          <p className="text-white/50 font-mono text-sm mt-4 max-w-lg mx-auto">
            Tell us about your project. We’ll get back to you quickly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-display text-lg font-black tracking-[0.04em] mb-4">
                MINE SERVICE INC.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                General contracting and civil construction since 1985. Based in
                Rockdale, Texas — serving projects across the state and beyond.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ffcc40] mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">OFFICE</p>
                  <p className="text-sm text-white/80">Rockdale, Texas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#ffcc40] mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">PHONE</p>
                  <a
                    href="tel:+15124451234"
                    className="text-sm text-white/80 hover:text-[#ffcc40] transition-colors"
                  >
                    (512) 445-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#ffcc40] mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-white/40 mb-1">EMAIL</p>
                  <a
                    href="mailto:info@mineserviceinc.com"
                    className="text-sm text-white/80 hover:text-[#ffcc40] transition-colors"
                  >
                    info@mineserviceinc.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#ffcc40]/15 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-5 h-5 text-[#ffcc40]" />
                </div>
                <h3 className="font-display text-xl font-black tracking-[0.02em] mb-2">
                  Message Sent
                </h3>
                <p className="text-white/50 text-sm font-mono">
                  Thanks — we’ll be in touch soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "",
                      message: "",
                    })
                  }}
                  className="mt-6 font-mono text-xs text-[#ffcc40] hover:underline tracking-widest"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-white/40 tracking-widest block mb-2">
                      NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-white/40 tracking-widest block mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-white/40 tracking-widest block mb-2">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors"
                      placeholder="(512) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-white/40 tracking-widest block mb-2">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-white/40 tracking-widest block mb-2">
                    SERVICE INTERESTED IN
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ffcc40] transition-colors appearance-none"
                  >
                    <option value="" className="bg-black text-white/50">
                      Select a service...
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-black">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-white/40 tracking-widest block mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="font-mono w-full bg-[#ffcc40] text-black font-bold text-sm tracking-wide py-3.5 rounded-full flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}