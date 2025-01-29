import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151314]">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z22tI3NYBWRGYqQVqbSeRktAUt8OWO.png"
              alt="xblinks"
              width={80}
              height={20}
              className="dark:hidden"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eUGN0zQpH26FFuIxskwj2ATOZ5h5OR.png"
              alt="xblinks"
              width={80}
              height={20}
              className="hidden dark:block"
            />
          </Link>

          {/* Copyright */}
          <p className="text-xs text-gray-600 dark:text-gray-400">c 2024 | All Rights Reserved</p>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              href="#features"
              className="text-xs text-gray-600 hover:text-[#08a0e9] dark:text-gray-400 dark:hover:text-[#08a0e9] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-xs text-gray-600 hover:text-[#08a0e9] dark:text-gray-400 dark:hover:text-[#08a0e9] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#giveaways"
              className="text-xs text-gray-600 hover:text-[#08a0e9] dark:text-gray-400 dark:hover:text-[#08a0e9] transition-colors"
            >
              Giveaways
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

