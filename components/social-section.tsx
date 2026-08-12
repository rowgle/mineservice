"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { Instagram } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  { image: "/images/msi-social-01.jpeg", likes: "40" },
  { image: "/images/msi-social-02.jpeg", likes: "85" },
  { image: "/images/msi-social-03.jpeg", likes: "71" },
  { image: "/images/msi-social-05.jpeg", likes: "28" },
  { image: "/images/msi-social-06.jpeg", likes: "26" },
  { image: "/images/msi-social-07.jpeg", likes: "26" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="social" className="relative py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#ffcc40] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            FOLLOW THE TEAM
          </motion.span>
          <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-[0.02em] mb-6">
            @MINESERVICEINC
          </h3>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Mine Service Inc job site ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#ffcc40]/0 group-hover:bg-[#ffcc40]/20 flex items-center justify-center transition-colors duration-300">
                <div className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-mono text-xs">{post.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://instagram.com/mineserviceinc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono flex items-center gap-2 bg-[#ffcc40] text-[#121212] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @mineserviceinc</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}