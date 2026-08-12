"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect } from "react"
import Link from "next/link"

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
}

export function HeroSection() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textX1 = useSpring(rawTextX1, springConfig)
  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const textX2 = useSpring(rawTextX2, springConfig)
  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const opacity = useSpring(rawOpacity, springConfig)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen background video */}
      <video
        ref={videoRef}
        src="/msi-hero-01.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        className="absolute inset-0 w-full h-full object-cover -scale-x-100 pointer-events-none [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      {/* Soft accent glows */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#ffcc40]/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#0057A8]/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div style={{ opacity }} className="space-y-5">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-[#121212] text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider"
            >
              <motion.span
                className="w-2 h-2 bg-[#ffcc40] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              BUILDING SINCE 1985
            </motion.div>

            <div className="space-y-1 overflow-visible">
              <motion.h1
                style={{ x: textX1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.02em] text-white leading-none whitespace-nowrap"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-block"
                >
                  MINE SERVICE
                </motion.span>
              </motion.h1>

              <motion.h1
                style={{ x: textX2 }}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-[0.02em] text-[#ffcc40] leading-none whitespace-nowrap"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block"
                >
                  ROCKDALE, TX
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-lg md:text-xl font-mono text-white/70 tracking-tight pt-2 max-w-md"
              >
                General contracting. Specializing in civil construction works.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link href="/resume">
                <motion.button
                  className="font-mono bg-[#000000] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Company Resume</span>
                  <motion.svg
                    className="w-4 h-4 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.button>
              </Link>

              <Link href="/careers">
                <motion.button
                  className="font-mono border-2 border-white text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
                  whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#121212" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Apply Now
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-4 pt-2"
            >
              {["Site Work", "Mining Operations", "Landfill Operations", "Industrial Concrete"].map(
                (benefit, i) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2 text-xs font-mono text-white/70"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#ffcc40] rounded-full" />
                    {benefit}
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 bg-white/50 rounded-full"
                animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}