import React from "react"

interface GridLinesProps {
  position: "top" | "bottom"
  height?: number
}

export function GridLines({ position, height = 144 }: GridLinesProps) {
  return (
    <div
      className={`absolute ${position}-0 left-1/2 transform -translate-x-1/2 w-[70%] h-${height} overflow-hidden pointer-events-none`}
    >
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 1042 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full"
      >
        <line
          x1="0.75"
          x2="0.75"
          y2={height}
          className="stroke-[#433e3f] dark:stroke-[#ffffff] opacity-20"
          strokeWidth="1.5"
        />
        <line
          x1="208.75"
          x2="208.75"
          y2={height}
          className="stroke-[#433e3f] dark:stroke-[#ffffff] opacity-20"
          strokeWidth="1.5"
        />
        <line
          x1="416.75"
          x2="416.75"
          y2={height}
          className="stroke-[#433e3f] dark:stroke-[#ffffff] opacity-20"
          strokeWidth="1.5"
        />
        <line
          x1="624.75"
          x2="624.75"
          y2={height}
          className="stroke-[#433e3f] dark:stroke-[#ffffff] opacity-20"
          strokeWidth="1.5"
        />
        <line
          x1="832.75"
          x2="832.75"
          y2={height}
          className="stroke-[#433e3f] dark:stroke-[#ffffff] opacity-20"
          strokeWidth="1.5"
        />
        <line
          x1="1040.75"
          x2="1040.75"
          y2={height}
          className="stroke-[#433e3f] dark:stroke-[#ffffff] opacity-20"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

