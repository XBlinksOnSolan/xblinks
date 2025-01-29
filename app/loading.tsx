"use client"

import React from "react"
import { useEffect, useState } from "react"

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-[#151314] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#08a0e9]"></div>
        <p className="mt-4 text-[#ffffff] text-xl font-semibold">Loading...</p>
      </div>
    </div>
  )
}

