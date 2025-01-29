"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "features", "how-it-works", "giveaways"]
      let current = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#151314]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold pl-2 transition-transform hover:scale-110 duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z22tI3NYBWRGYqQVqbSeRktAUt8OWO.png"
              alt="xblinks"
              width={120}
              height={30}
              className="dark:hidden"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eUGN0zQpH26FFuIxskwj2ATOZ5h5OR.png"
              alt="xblinks"
              width={120}
              height={30}
              className="hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-8">
              {["Features", "How It Works", "Giveaways"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
                  className={`text-sm hover:text-[#08a0e9] transition-colors ${
                    activeSection === item.toLowerCase().replace(/\s+/g, "-")
                      ? "text-[#08a0e9]"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="bg-[#08a0e9] text-white px-4 py-2 rounded-md hover:bg-[#08a0e9]/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-transform hover:scale-110 active:scale-95 duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {["Features", "How It Works", "Giveaways"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
                  className={`text-sm hover:text-[#08a0e9] transition-colors ${
                    activeSection === item.toLowerCase().replace(/\s+/g, "-")
                      ? "text-[#08a0e9]"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
              <Link
                href="/get-started"
                className="bg-[#08a0e9] text-white px-4 py-2 rounded-md hover:bg-[#08a0e9]/90 transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

