"use client"

import { useState, useEffect, type FormEvent } from "react"
import Link from "next/link"

export default function CareersPage() {
  const [openPosition, setOpenPosition] = useState<string | null>(null)
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [filter, setFilter] = useState("All")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Lock page scroll while modal is open
  useEffect(() => {
    if (showApplicationModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showApplicationModal])

  const positions = [
    {
      id: "heavy-equipment-operator",
      title: "Heavy Equipment Operator",
      location: "Rockdale, TX",
      type: "Full-Time",
      department: "Field Operations",
      experience: "3+ years operating heavy equipment",
      description:
        "Mine Service Inc. is seeking experienced Heavy Equipment Operators to support mining, landfill, and site development projects across Central Texas. Operators will run dozers, excavators, loaders, and related equipment in a fast-paced, safety-first environment.",
      requirements: [
        "Minimum 3 years heavy equipment experience",
        "Valid driver's license required",
        "Ability to work outdoors in all weather conditions",
        "Strong commitment to job-site safety",
        "Willingness to work overtime and travel between sites as needed",
        "CDL preferred but not required",
      ],
    },
    {
      id: "concrete-foreman",
      title: "Concrete Foreman",
      location: "Rockdale / Waco, TX",
      type: "Full-Time",
      department: "Field Operations",
      experience: "5+ years concrete experience",
      description:
        "Lead concrete crews on industrial and civil projects. Responsible for daily production, quality control, crew coordination, and enforcing safety standards on every pour.",
      requirements: [
        "5+ years hands-on concrete experience",
        "Prior foreman or lead experience preferred",
        "Strong knowledge of forming, placing, and finishing",
        "Ability to read plans and manage daily production goals",
        "Excellent communication and leadership skills",
        "Valid driver's license",
      ],
    },
    {
      id: "safety-coordinator",
      title: "Safety Coordinator",
      location: "Rockdale, TX (multi-site travel)",
      type: "Full-Time",
      department: "Safety",
      experience: "3+ years construction or industrial safety",
      description:
        "Support Mine Service Inc.'s zero-tolerance safety culture across job sites. Conduct daily briefings, site inspections, incident reporting, and MSHA/OSHA compliance support.",
      requirements: [
        "3+ years safety experience in construction, mining, or industrial environments",
        "Knowledge of MSHA and OSHA standards preferred",
        "Strong documentation and communication skills",
        "Ability to travel between Rockdale, Waco, and Midland job sites",
        "Valid driver's license",
        "First Aid / CPR certification preferred",
      ],
    },
    {
      id: "project-manager",
      title: "Project Manager",
      location: "Rockdale, TX",
      type: "Full-Time",
      department: "Management",
      experience: "5+ years project management in heavy civil or industrial",
      description:
        "Oversee project planning, scheduling, budgeting, and client communication for mining, landfill, oil & gas, and concrete work. Work closely with field leadership to deliver safe, on-time, and on-budget results.",
      requirements: [
        "5+ years project management experience",
        "Background in heavy civil, mining, or industrial construction preferred",
        "Strong estimating and scheduling skills",
        "Excellent client and crew communication",
        "Proficiency with project software and Microsoft Office",
        "Valid driver's license",
      ],
    },
    {
      id: "cdl-driver",
      title: "CDL Truck Driver",
      location: "Rockdale / Midland, TX",
      type: "Full-Time",
      department: "Field Operations",
      experience: "2+ years CDL experience",
      description:
        "Transport aggregate, equipment, and materials between job sites and yards. Safe, reliable drivers are a critical part of keeping Mine Service Inc. projects moving.",
      requirements: [
        "Valid Class A CDL",
        "Clean driving record",
        "2+ years commercial driving experience preferred",
        "Ability to pass DOT physical and drug screening",
        "Willingness to work early mornings and overtime",
        "Local and regional hauling as assigned",
      ],
    },
    {
      id: "equipment-mechanic",
      title: "Heavy Equipment Mechanic",
      location: "Rockdale, TX",
      type: "Full-Time",
      department: "Maintenance",
      experience: "3+ years heavy equipment repair",
      description:
        "Diagnose, repair, and maintain dozers, excavators, loaders, trucks, and support equipment. Keep the fleet reliable so field crews can stay productive and safe.",
      requirements: [
        "3+ years heavy equipment mechanical experience",
        "Strong diesel and hydraulic systems knowledge",
        "Ability to diagnose issues in the field and shop",
        "Own basic tools preferred",
        "Valid driver's license",
        "Welding experience a plus",
      ],
    },
  ]

  const filteredPositions =
    filter === "All" ? positions : positions.filter((pos) => pos.department === filter)

  const openApplyModal = (job: any) => {
    setSelectedJob(job)
    setShowApplicationModal(true)
    setSubmitSuccess(false)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append(
      "_subject",
      `Job Application: ${selectedJob?.title || "General Application"} — Mine Service Inc.`
    )

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmitSuccess(true)
        form.reset()
        setTimeout(() => {
          setShowApplicationModal(false)
          setSubmitSuccess(false)
        }, 3000)
      } else {
        alert("Something went wrong. Please try again or email careers@msirockdale.com")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    "w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc40] transition-colors"

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
      </header>

      {/* Page Title */}
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-[#ffcc40] text-sm uppercase tracking-[0.3em] mb-4 font-mono">
            MINE SERVICE INC.
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.02em]">
            OPEN POSITIONS
          </h1>
          <p className="text-white/50 mt-4 font-mono text-sm max-w-xl mx-auto">
            Build with a company that values experience, strength, safety, and results.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-6xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {["All", "Field Operations", "Safety", "Management", "Maintenance"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#ffcc40] text-black"
                  : "bg-white/5 text-white/70 border border-white/10 hover:border-[#ffcc40]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <section id="open-positions" className="pb-24 bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-4">
            {filteredPositions.map((pos) => (
              <div
                key={pos.id}
                className="border border-white/10 bg-[#1a1a1a] rounded-2xl p-8 md:p-10 cursor-pointer hover:border-[#ffcc40]/40 transition-all duration-300"
                onClick={() => setOpenPosition(openPosition === pos.id ? null : pos.id)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-black tracking-[0.02em] text-white">
                      {pos.title}
                    </h3>
                    <p className="text-white/50 mt-2 font-mono text-sm">
                      {pos.location} • {pos.type} • {pos.department}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openApplyModal(pos)
                    }}
                    className="font-mono px-7 py-3 bg-[#ffcc40] text-black rounded-full hover:scale-105 transition-all text-sm font-bold self-start"
                  >
                    Apply Now
                  </button>
                </div>

                {openPosition === pos.id && (
                  <div className="mt-8 pt-8 border-t border-white/10 text-white/70">
                    <p className="mb-6 text-base leading-relaxed text-white/80">
                      {pos.description}
                    </p>
                    <p className="mb-3 font-mono text-sm">
                      <span className="text-[#ffcc40]">Experience Required:</span>{" "}
                      {pos.experience}
                    </p>
                    <p className="mb-2 font-medium text-white">Key Requirements:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-8 text-sm">
                      {pos.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openApplyModal(pos)
                      }}
                      className="font-mono px-8 py-3 bg-[#ffcc40] text-black rounded-full hover:scale-105 transition-all text-sm font-bold"
                    >
                      Submit Application
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <p className="text-center text-white/40 py-12 font-mono text-sm">
              No positions currently available in this category.
            </p>
          )}
        </div>
      </section>

      {/* Field photo gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
            LIFE ON THE JOB
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-black tracking-[0.02em]">
            OUT IN THE FIELD
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              label: "One Team",
              src: "/images/msi-social-05.jpeg",
            },
            {
              label: "Safety Always",
              src: "/images/msi-crew-02.jpg",
            },
            {
              label: "In God We Trust",
              src: "/images/msi-social-02.jpeg",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] group"
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-mono text-[10px] text-white/70 tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={() => setShowApplicationModal(false)}
          />

          {/* Panel — FIXED HEIGHT so inner scroll works */}
          <div
            className="relative z-10 w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-3xl flex flex-col overflow-hidden"
            style={{ height: "min(90vh, 820px)" }}
          >
            {/* Header */}
            <div className="shrink-0 p-6 md:p-8 border-b border-white/10 flex justify-between items-start">
              <div>
                <h2 className="font-display text-2xl font-black tracking-[0.02em] text-white">
                  Apply for {selectedJob.title}
                </h2>
                <p className="text-white/50 mt-1 font-mono text-sm">
                  {selectedJob.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowApplicationModal(false)}
                className="font-mono text-white/40 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {submitSuccess ? (
              <div className="p-16 text-center">
                <p className="font-display text-2xl font-black tracking-[0.02em] mb-3 text-white">
                  Application Received
                </p>
                <p className="text-white/50 font-mono text-sm">
                  Thank you. We’ll review your application and be in touch soon.
                </p>
              </div>
            ) : (
              <div
                className="flex-1 overflow-y-auto overscroll-contain"
                style={{ minHeight: 0, scrollbarWidth: "none" }}
                onWheel={(e) => e.stopPropagation()}
              >
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="p-6 md:p-8 space-y-6"
                >
                  <input type="hidden" name="position" value={selectedJob.title} />

                  <div>
                    <h3 className="font-mono text-xs text-[#ffcc40] tracking-widest mb-4">
                      PERSONAL INFORMATION
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" name="first_name" placeholder="First Name *" required className={inputClass} />
                      <input type="text" name="last_name" placeholder="Last Name *" required className={inputClass} />
                      <input type="email" name="email" placeholder="Email Address *" required className={inputClass} />
                      <input type="tel" name="phone" placeholder="Phone Number *" required className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs text-[#ffcc40] tracking-widest mb-4">
                      LOCATION & AVAILABILITY
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" name="location" placeholder="Current City / State *" required className={inputClass} />
                      <select name="relocate" required className={`${inputClass} appearance-none`}>
                        <option value="" className="bg-black text-white/50">
                          Willing to travel between sites? *
                        </option>
                        <option value="Yes – Fully" className="bg-black">Yes – Fully</option>
                        <option value="Yes – Limited" className="bg-black">Yes – Limited</option>
                        <option value="No" className="bg-black">No</option>
                      </select>
                      <input type="text" name="start_date" placeholder="Available Start Date *" required className={`${inputClass} md:col-span-2`} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs text-[#ffcc40] tracking-widest mb-4">
                      EXPERIENCE
                    </h3>
                    <div className="space-y-4">
                      <input type="text" name="years_experience" placeholder="Years of Relevant Experience *" required className={inputClass} />
                      <textarea name="experience" rows={4} placeholder="Describe your relevant experience and why you’re a strong fit *" required className={`${inputClass} resize-y`} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs text-[#ffcc40] tracking-widest mb-4">
                      RESUME
                    </h3>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full bg-black border border-white/15 p-4 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#ffcc40] file:text-black file:font-bold file:text-sm file:font-mono"
                    />
                    <p className="text-xs text-white/30 mt-2 font-mono">Accepted: PDF, DOC, DOCX</p>
                  </div>

                  <div>
                    <textarea
                      name="additional"
                      rows={3}
                      placeholder="Anything else you'd like us to know (optional)"
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-mono w-full bg-[#ffcc40] text-black py-3.5 rounded-full text-sm font-bold hover:scale-[1.01] transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT APPLICATION"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="py-8 bg-black text-center text-sm text-white/30 font-mono border-t border-white/10">
        Mine Service Inc. is an Equal Opportunity Employer.
      </div>
    </main>
  )
}