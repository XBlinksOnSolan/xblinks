"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Image from "next/image"

const LOGO_WIDTH = 120 // Width of each logo container
const LOGO_GAP = 80 // Gap between logos
const DRAG_THRESHOLD = 50 // Minimum drag distance to trigger momentum

const brandLogos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JG7cdpUF0CpDr7GjdyPaf4yQFDlmmw.png",
    alt: "Ghost Logo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kwRpfPbtxzYNKNkXxJxQXzoIwa9oAo.png",
    alt: "Stacked Bars Logo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yim452o6Zeao5ZBEnd6MteVlruV2lB.png",
    alt: "Starburst Logo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bVRuJ6qXYOdAceqG1nV3tGbouvdKHU.png",
    alt: "ME Logo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OAXVWQYS7PrdEBIU0vxLIRp2ZToRkH.png",
    alt: "SF Logo",
  },
]

export function BrandCarousel() {
  const [trackWidth, setTrackWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  // Calculate the total width of all logos
  const totalWidth = brandLogos.length * (LOGO_WIDTH + LOGO_GAP)

  // Create a repeating track of logos
  const repeatedLogos = [...brandLogos, ...brandLogos, ...brandLogos]

  useEffect(() => {
    if (containerRef.current) {
      setTrackWidth(containerRef.current.offsetWidth)
    }

    // Start the automatic animation
    controls.start({
      x: [-totalWidth, 0],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    })
  }, [controls, totalWidth])

  // Handle drag gestures
  const handleDragStart = () => {
    controls.stop()
  }

  const handleDragEnd = (event: any, info: any) => {
    const velocity = info.velocity.x
    const shouldAnimate = Math.abs(info.offset.x) > DRAG_THRESHOLD

    if (shouldAnimate) {
      // Calculate new animation duration based on velocity
      const duration = Math.min(Math.max(Math.abs(velocity / 500), 10), 30)

      controls.start({
        x: velocity > 0 ? 0 : -totalWidth,
        transition: {
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    } else {
      // Resume normal animation
      controls.start({
        x: [-totalWidth, 0],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    }
  }

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#151314] border-y border-gray-200 dark:border-gray-800 py-6">
      <div ref={containerRef} className="w-full">
        <motion.div
          className="flex items-center"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 mx-10 w-[120px] h-[60px] flex items-center justify-center"
            >
              <div className="relative w-[60px] h-[60px] bg-gray-100 dark:bg-gray-800 overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  className="p-2"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

