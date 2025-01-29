"use client"

export function GradientCorners() {
  return (
    <div className="fixed inset-0 pointer-events-none dark:visible invisible">
      {/* Top left corner */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] dark:bg-[#089fe9]/10 rounded-full blur-[100px] animate-corner-tl" />

      {/* Top right corner */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] dark:bg-[#089fe9]/10 rounded-full blur-[100px] animate-corner-tr" />

      {/* Bottom left corner */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] dark:bg-[#089fe9]/10 rounded-full blur-[100px] animate-corner-bl" />

      {/* Bottom right corner */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] dark:bg-[#089fe9]/10 rounded-full blur-[100px] animate-corner-br" />
    </div>
  )
}

