"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Send, CheckCircle2 } from "lucide-react"

const serviceOptions = [
  "Civil Construction",
  "Concrete / Flatwork",
  "Earthwork / Excavation",
  "Aggregate / Materials Supply",
  "Trucking / Hauling",
  "Industrial Welding",
  "Site Development",
  "General Contracting",
  "Other",
]

const budgetRanges = [
  "Under $100K",
  "$100K – $500K",
  "$500K – $1M",
  "$1M – $5M",
  "$5M+",
  "Not sure yet",
]

const timelineOptions = [
  "ASAP / Emergency",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Flexible",
]

export default function RequestServicePage() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    projectName: "",
    projectLocation: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    plansAvailable: "",
    bidDeadline: "",
    scope: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    setSubmitted(true)
  }

  const inputClass =
    "w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors"
  const labelClass =
    "font-mono text-xs text-white/40 tracking-widest block mb-2"

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
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

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
            PROJECT INQUIRY
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-black tracking-[0.02em]">
            REQUEST <span style={{ color: "#ffcc40" }}>SERVICE</span>
          </h1>
          <p className="text-white/50 font-mono text-sm mt-4 max-w-md mx-auto">
            Tell us about the job. The more detail you give, the faster we can
            respond with the right crew and approach.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-10 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#ffcc40]/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7 text-[#ffcc40]" />
            </div>
            <h3 className="font-display text-xl font-black tracking-[0.02em] mb-2">
              Inquiry Received
            </h3>
            <p className="text-white/50 text-sm font-mono max-w-sm mx-auto">
              Thanks — our estimating team will review your project and follow
              up shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 font-mono text-xs text-[#ffcc40] hover:underline tracking-widest"
            >
              SUBMIT ANOTHER
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-8"
          >
            {/* Contact */}
            <div>
              <h2 className="font-display text-sm font-black tracking-[0.02em] text-white mb-5 flex items-center gap-2">
                <span className="text-[#ffcc40] font-mono text-xs">01</span>
                YOUR CONTACT INFO
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>FULL NAME *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className={labelClass}>TITLE / ROLE</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Project Manager"
                  />
                </div>
                <div>
                  <label className={labelClass}>COMPANY *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="ABC Construction"
                  />
                </div>
                <div>
                  <label className={labelClass}>PHONE *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(512) 000-0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Project */}
            <div>
              <h2 className="font-display text-sm font-black tracking-[0.02em] text-white mb-5 flex items-center gap-2">
                <span className="text-[#ffcc40] font-mono text-xs">02</span>
                PROJECT DETAILS
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>PROJECT NAME</label>
                  <input
                    type="text"
                    name="projectName"
                    value={form.projectName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Highway 79 Expansion"
                  />
                </div>
                <div>
                  <label className={labelClass}>LOCATION *</label>
                  <input
                    type="text"
                    name="projectLocation"
                    required
                    value={form.projectLocation}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="City, TX or job site address"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Services */}
            <div>
              <h2 className="font-display text-sm font-black tracking-[0.02em] text-white mb-5 flex items-center gap-2">
                <span className="text-[#ffcc40] font-mono text-xs">03</span>
                SERVICES NEEDED *
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((service) => {
                  const active = form.services.includes(service)
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm font-mono transition-all ${
                        active
                          ? "border-[#ffcc40] bg-[#ffcc40]/10 text-[#ffcc40]"
                          : "border-white/15 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {service}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Scope & timing */}
            <div>
              <h2 className="font-display text-sm font-black tracking-[0.02em] text-white mb-5 flex items-center gap-2">
                <span className="text-[#ffcc40] font-mono text-xs">04</span>
                SCOPE & TIMING
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass}>EST. BUDGET RANGE</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-black text-white/50">
                      Select range...
                    </option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} className="bg-black">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>DESIRED TIMELINE</label>
                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-black text-white/50">
                      Select timeline...
                    </option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t} className="bg-black">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>PLANS / SPECS AVAILABLE?</label>
                  <select
                    name="plansAvailable"
                    value={form.plansAvailable}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-black text-white/50">
                      Select...
                    </option>
                    <option value="Yes" className="bg-black">
                      Yes
                    </option>
                    <option value="Partial" className="bg-black">
                      Partial / In progress
                    </option>
                    <option value="No" className="bg-black">
                      Not yet
                    </option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>BID DEADLINE (IF ANY)</label>
                  <input
                    type="date"
                    name="bidDeadline"
                    value={form.bidDeadline}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>PROJECT SCOPE / NOTES *</label>
                <textarea
                  name="scope"
                  required
                  rows={5}
                  value={form.scope}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the work, quantities, special requirements, site conditions, or anything else we should know..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="font-mono w-full bg-[#ffcc40] text-black font-bold text-sm tracking-wide py-3.5 rounded-full flex items-center justify-center gap-2"
            >
              Submit Inquiry
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        )}
      </div>
    </main>
  )
}