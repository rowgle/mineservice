"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  HardHat,
  Mountain,
  Truck,
  Factory,
  Landmark,
  Shield,
  Zap,
  Layers,
} from "lucide-react"

const stats = [
  { value: "1985", label: "FOUNDED" },
  { value: "300+", label: "EMPLOYEES" },
  { value: "$40M+", label: "AVG. ANNUAL REVENUE" },
  { value: "TX+", label: "STATEWIDE & BEYOND" },
]

const clients = [
  "ALCOA",
  "TXU Energy / Luminant",
  "ConocoPhillips",
  "Federal Agencies",
  "State Agencies",
  "Municipalities",
]

const capabilities = [
  {
    icon: HardHat,
    title: "Site Work",
    items: [
      "Building pads & subgrade stabilization",
      "Flexbase, curb & gutter, sidewalks",
      "Asphalt & concrete pavement",
      "Storm drains & retention ponds",
    ],
  },
  {
    icon: Mountain,
    title: "Mining Operations",
    items: [
      "Overburden removal & reclamation",
      "Lignite, sand & gravel excavation",
      "Heavy haul roads & drainage",
      "Detention ponds & revegetation",
    ],
  },
  {
    icon: Layers,
    title: "Landfill Construction",
    items: [
      "Cell excavation & clay liners",
      "Geosynthetic & leachate systems",
      "Protective cover & cell closures",
      "Caps, dikes & fencing",
    ],
  },
  {
    icon: Truck,
    title: "Oil & Gas Field",
    items: [
      "Well pads & frac ponds",
      "Access roads & site fencing",
      "Roustabout crews",
      "Blasting, coating & painting",
    ],
  },
  {
    icon: Factory,
    title: "Industrial & Power",
    items: [
      "Plant infrastructure construction",
      "Ash, gypsum & coal handling",
      "Landfill & waste management",
      "Concrete structures & paving",
    ],
  },
  {
    icon: Landmark,
    title: "Streets & Highways",
    items: [
      "ROW prep, excavation & embankment",
      "Storm drains & subgrade work",
      "Flexbase, curb & pavement",
      "Road repairs & driveways",
    ],
  },
  {
    icon: Shield,
    title: "Erosion Control",
    items: [
      "Fabriform concrete blankets",
      "Silt fence & check dams",
      "Riprap & gabions",
      "Erosion control blankets",
    ],
  },
  {
    icon: Zap,
    title: "Mechanical & Electrical",
    items: [
      "Millwrights, pipefitters, welders",
      "Boilermakers & ironworkers",
      "High / low voltage systems",
      "Duct banks & conduit runs",
    ],
  },
]

const plants = [
  { name: "Waco", type: "Aggregate Plant" },
  { name: "Cameron", type: "Aggregate Plant" },
  { name: "Bronte", type: "Aggregate Plant" },
  { name: "Hylton", type: "Aggregate Plant" },
  { name: "Midland", type: "Oil & Gas Support" },
  { name: "Sweetwater", type: "Oil & Gas Support" },
]

export default function ResumePage() {
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

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
            COMPANY RESUME
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-black tracking-[0.02em] mb-5">
            PROVEN WORK.{" "}
            <span style={{ color: "#ffcc40" }}>REAL RESULTS.</span>
          </h1>
          <p className="text-white/55 text-sm md:text-base leading-relaxed">
            Since 1985, Mine Service Inc. has delivered civil construction,
            mining support, industrial infrastructure, and heavy site work
            across Texas and beyond — for Fortune 500 operators, energy
            producers, and public agencies.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-black text-[#ffcc40] tracking-[0.02em]">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-white/40 tracking-widest mb-5">
            TRUSTED BY
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {clients.map((c) => (
              <span
                key={c}
                className="font-mono text-sm text-white/70 tracking-wide"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured: Mission-Critical / Data Center capability */}
      <section className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
                GROWTH MARKET
              </p>
              <h2 className="font-display text-2xl md:text-4xl font-black tracking-[0.02em] mb-4">
                DATA CENTER &{" "}
                <span style={{ color: "#ffcc40" }}>MISSION-CRITICAL</span>{" "}
                SITE WORK
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                Central Texas is scaling fast with hyperscale and AI-driven
                infrastructure. MSI brings decades of industrial site
                development, heavy civil, power-plant support, and pad
                construction experience — the same capabilities required for
                data center campuses, substations, and mission-critical
                facilities.
              </p>
              <ul className="space-y-2 text-sm text-white/70 font-mono">
                <li className="border-l-2 border-[#ffcc40]/50 pl-3">
                  Large-scale site development & building pads
                </li>
                <li className="border-l-2 border-[#ffcc40]/50 pl-3">
                  Stormwater, retention & utility corridors
                </li>
                <li className="border-l-2 border-[#ffcc40]/50 pl-3">
                  Access roads, fencing & security infrastructure
                </li>
                <li className="border-l-2 border-[#ffcc40]/50 pl-3">
                  Industrial plant & generation support history
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src="/images/msi-cover-01.jpg"
                alt="Mine Service Inc. site and industrial work"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
            WHAT WE DELIVER
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-black tracking-[0.02em]">
            FULL-SCOPE CIVIL &{" "}
            <span style={{ color: "#ffcc40" }}>INDUSTRIAL</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 hover:border-[#ffcc40]/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ffcc40]/15 flex items-center justify-center mb-4">
                <cap.icon className="w-5 h-5 text-[#ffcc40]" />
              </div>
              <h3 className="font-display text-base font-black tracking-[0.02em] mb-3">
                {cap.title}
              </h3>
              <ul className="space-y-1.5">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-white/50 font-mono leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo strip */}
<section className="max-w-7xl mx-auto px-6 pb-16">
  <div className="grid md:grid-cols-3 gap-4">
    {[
      {
        label: "Heavy civil / site pad",
        src: "/images/msi-sky-shot-01.jpg",
      },
      {
        label: "Mining & reclamation",
        src: "/images/msi-cover-shoot.jpg",
      },
      {
        label: "Industrial plant support",
        src: "/images/msi-bucket.jpg",
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

      {/* Footprint */}
      <section className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
              OPERATIONS FOOTPRINT
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-black tracking-[0.02em]">
              PLANTS & SUPPORT SITES
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {plants.map((p) => (
              <div
                key={p.name}
                className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="font-display text-sm font-black text-white tracking-[0.02em]">
                  {p.name}
                </div>
                <div className="font-mono text-[10px] text-white/40 mt-1 tracking-wide">
                  {p.type}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs font-mono mt-8 max-w-xl mx-auto">
            Headquarters: Rockdale, Texas · Field offices mobilized per project
            · Aggregate production & delivery across Central Texas
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display text-2xl md:text-4xl font-black tracking-[0.02em] mb-4">
          READY TO PUT MSI ON{" "}
          <span style={{ color: "#ffcc40" }}>YOUR JOB?</span>
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
          Request a service review or contact the team directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/request-service"
            className="font-mono bg-[#ffcc40] text-black font-bold text-sm tracking-wide px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
          >
            Request Service
          </Link>
          <Link
            href="/contact"
            className="font-mono border border-white/30 text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-full hover:border-[#ffcc40] hover:text-[#ffcc40] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}