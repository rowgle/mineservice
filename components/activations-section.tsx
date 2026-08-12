"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { Users, HardHat, Shield, Briefcase } from "lucide-react"

const teams = [
  {
    icon: Briefcase,
    title: "Leadership",
    description: "Company direction and strategic growth.",
    people: [
      "Blake Debault — President / Owner",
      "Eddie Noak — VP Operations & Estimating",
      "Andrew Hooper — VP Finance",
      "Ryan Reyes — VP Business Development",
      "Jess Miller — VP Industrial Welding",
    ],
  },
  {
    icon: HardHat,
    title: "Field Operations",
    description: "On-site leadership and project execution.",
    people: [
      "David Roeglin — Area Superintendent",
      "Ray Jaramillo — Concrete Superintendent",
      "RD Johnson — Trucking & Aggregate",
      "Scott Mendoza — West Texas Project Manager",
      "Colt Pounders — Project Manager",
    ],
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Job-site safety, compliance, and training.",
    people: [
      "Matt Belcik — Safety Director",
      "Elvis McQuinn — Safety Coordinator",
      "Mike Reed — Safety Coordinator",
      "Benny Carrizales — Safety Coordinator",
    ],
  },
  {
    icon: Users,
    title: "Administration",
    description: "Finance, HR, Marketing, and operational support.",
    people: [
      "Jimmy Ray Peebles — Controller",
      "Sabrina Lemay — HR & Payroll Manager",
      "Will Butler — Maintenance Manager",
      "Eddie Hill — West Texas Maintenance",
    ],
  },
]

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company History & Philosophy */}
        <div className="mt-20 max-w-4xl mx-auto">
          {/* History */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
              SINCE 1985
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-[0.02em] mb-6">
              OUR HISTORY
            </h3>
            <div className="space-y-5 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                Mine Service was formed in February of 1985 as a general
                contracting company specializing in civil construction works.
                Mine Service serves a wide and diversified area of the
                construction industry. We have enjoyed substantial growth since
                the organization was formed and our expectations are high that
                this growth pattern will continue as we are able to broaden our
                markets.
              </p>
              <p>
                Mine Service has contracted work with Aluminum Company of
                America (ALCOA); TXU Energy/Luminant; ConocoPhillips, Federal,
                State and Municipal Agencies; and numerous other commercial and
                private companies and individuals.
              </p>
              <p>
                Mine Service employs on average three hundred (300) employees
                with most of the employees assigned directly to jobs in the
                field. The home office for Mine Service is located in Rockdale,
                Texas, with field offices being located on an as needed per
                project basis. We also have aggregate plant sites in Bronte,
                Cameron, Hylton and Waco, Texas.
              </p>
              <p>
                The company’s steady growth and expansion, the satisfaction of
                our customers, and our reputation all attest to the past history
                of the company and provide guidelines for our future
                development.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 mb-16" />

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-24"
          >
            <p className="font-mono text-[#ffcc40] text-xs tracking-widest mb-3">
              HOW WE WORK
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-[0.02em] mb-6">
              OUR PHILOSOPHY
            </h3>
            <div className="space-y-5 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                It is the objective of Mine Service that all projects undertaken
                are built in accordance with the customer’s schedule and
                specification. It is our goal to maintain excellence and
                consistent work performance on any project we undertake. We
                strive to achieve this by recruiting and keeping experienced and
                competent employees.
              </p>
              <p>
                It is the intent of Mine Service to provide a safe and stable
                working environment for all employees. Safety is a main priority
                at Mine Service and to insure this, we have on staff, a full
                time safety coordinator qualified to train OSHA (Occupational
                Safety and Health Administration) and MSHA (Mine Safety and
                Health Administration) regulations to our employees.
              </p>
              <p>
                Quality Control is also a main priority with Mine Service. We
                believe that the quality of our services is of the utmost
                importance to our customers. This belief results in increasing
                the whole of the company in both growth and satisfaction of our
                customers. We believe that when you factor all the priorities —
                safety, quality, employees, and proper management — together,
                the result is an increased profitability for the company which
                results in a better working environment for all.
              </p>
              <p>
                Our philosophy is to attain all of the goals stated to insure a
                healthy and growing business which will benefit all concerned.
              </p>
              <p>
                Mine Service’s projects cover a diversified work area including
                the entire state of Texas as well as out-of-state work. Mine
                Service currently averages annual revenues in excess of forty
                million ($40,000,000) dollars.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-white/50 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            OUR TEAM
          </motion.span>
          <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-[0.02em] mb-6">
            KEY <span style={{ color: "#ffcc40" }}>PERSONNEL</span>
          </h3>
          <motion.p
            className="text-sm text-white/50 font-mono mt-3 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Experienced leadership driving safety, quality, and results across
            every project.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teams.map((team) => (
            <motion.div
              key={team.title}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#ffcc40]/0 group-hover:bg-[#ffcc40]/5 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-[#ffcc40]/15 flex items-center justify-center mb-4">
                  <team.icon className="w-5 h-5 text-[#ffcc40]" />
                </div>
                <h3 className="font-display text-sm md:text-base font-black text-white tracking-[0.02em] uppercase mb-6">
                  {team.title}
                </h3>
                <p className="text-white/50 font-mono text-xs mb-4">
                  {team.description}
                </p>
                <ul className="space-y-2">
                  {team.people.map((person) => (
                    <li
                      key={person}
                      className="text-xs text-white/70 font-mono leading-snug border-l-2 border-[#ffcc40]/40 pl-2"
                    >
                      {person}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}