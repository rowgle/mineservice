"use client"

import type { MouseEvent } from "react"
import { motion, AnimatePresence, useSpring, type Variants } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    id: 1,
    name: "MINING",
    tagline: "SERVICES",
    description:
      "Full mining support — clearing, overburden removal, material transport, reclamation, haul roads, and drainage.",
    image: "/images/msi-tractor-tire.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 2,
    name: "LANDFILLS",
    tagline: "SERVICES",
    description:
      "Complete landfill construction including cell excavation, liners, leachate systems, caps, and closures.",
    image: "/images/msi-cover-shoot.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 3,
    name: "SITEWORK",
    tagline: "SERVICES",
    description:
      "Building pads, subgrade, storm drains, paving, sidewalks, retention ponds, and full site preparation.",
    image: "/images/msi-drainage-02.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 4,
    name: "OIL & GAS",
    tagline: "FIELD SERVICES",
    description:
      "Well pads, frac ponds, access roads, clearing, dust control, and full oilfield support services.",
    image: "/images/msi-oil-gas.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 5,
    name: "MECHANICAL",
    tagline: "MAINTENANCE",
    description:
      "Skilled welders, millwrights, and pipefitters for installations, repairs, and conveyor systems.",
    image: "/images/msi-social-02.jpeg",
    accentColor: "#ffcc40",
  },
  {
    id: 6,
    name: "AGGREGATE",
    tagline: "QUARRIES &",
    description:
      "Sand, gravel, and crushed rock from our Waco and Cameron plants — delivered to your job site.",
    image: "/images/msi-aggregate.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 7,
    name: "INDUSTRIAL",
    tagline: "CONCRETE",
    description:
      "Heavy industrial concrete for structures, pads, foundations, spillways, and mining environments.",
    image: "/images/msi-concrete-boom.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 8,
    name: "COMMERCIAL",
    tagline: "CONCRETE",
    description:
      "Flatwork, foundations, slabs, parking lots, sidewalks, curb & gutter, and loading docks.",
    image: "/images/msi-commercial-concrete.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 9,
    name: "RANCH",
    tagline: "FARM &",
    description:
      "Brush clearing, contouring, drainage, stock tanks, driveways, and land improvements.",
    image: "/images/msi-clearing-02.jpg",
    accentColor: "#ffcc40",
  },
  {
    id: 10,
    name: "STREETS",
    tagline: "HIGHWAYS &",
    description:
      "ROW prep, excavation, storm drains, flexbase, curb & gutter, asphalt, and concrete paving.",
    image: "/images/msi-drainage.jpg",
    accentColor: "#ffcc40",
  },
]

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
}

export function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])
  const currentService = services[currentIndex]

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    rotateY.set(x * 5)
    rotateX.set(-y * 5)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + services.length) % services.length
    setCurrentIndex(newIndex)
    setPage([page + newDirection, newDirection])
  }

  return (
    <section id="markets" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-white/50 text-xs tracking-widest">
            OUR SERVICES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-[0.02em] mt-2">
            SEE <span style={{ color: "#ffcc40" }}>MARKETS</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            {/* Prev */}
            <motion.button
              onClick={() => paginate(-1)}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-white/30 items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentService.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-3xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="bg-[#111] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Image */}
                    <motion.div
                      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={currentService.image || "/placeholder.svg"}
                        alt={currentService.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={currentIndex === 0}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <span
                          className="font-mono text-xs tracking-widest"
                          style={{ color: "#ffcc40" }}
                        >
                          {currentService.tagline}
                        </span>
                        <h3 className="font-display text-2xl md:text-4xl font-black text-white tracking-[0.02em] mt-2">
                          {currentService.name}
                        </h3>
                      </div>

                      <p className="text-sm text-white/60 font-mono leading-relaxed">
                        {currentService.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {["Experience", "Strength", "Safety", "Results"].map(
                          (badge) => (
                            <span
                              key={badge}
                              className="px-2.5 py-1 bg-white/5 rounded-full text-xs font-mono text-white/50"
                            >
                              {badge}
                            </span>
                          )
                        )}
                      </div>

                      <Link href="/request-service">
                        <motion.button
                          className="font-mono bg-[#ffcc40] text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide w-full md:w-auto relative overflow-hidden mt-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">REQUEST SERVICE</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <motion.button
              onClick={() => paginate(1)}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-white/30 items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1
                  setCurrentIndex(index)
                  setPage([index, newDirection])
                }}
                className="h-2 rounded-full"
                style={{
                  backgroundColor:
                    index === currentIndex ? "#ffcc40" : "rgba(255,255,255,0.2)",
                }}
                animate={{
                  width: index === currentIndex ? 28 : 10,
                }}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to ${service.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}