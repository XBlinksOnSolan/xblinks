import Link from "next/link"

export function GetStartedButton() {
  return (
    <Link href="#" className="block w-[140px]">
      <svg
        width="100%"
        viewBox="0 0 215 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full transition-transform duration-300 hover:scale-105"
      >
        <path
          d="M214.5 54.289L195.797 72.4995L0.5 72.0013V16.6835L14.2315 0.5H214.5V54.289Z"
          fill="#08A0E9"
          stroke="#03415E"
        />
        <rect x="0.5" y="17" width="196" height="55" fill="#08A0E9" stroke="#03415E" />
        <path d="M214.5 0.5L196 17.5" stroke="#03415E" />
        <text x="49.5" y="49.74" className="fill-[#433e3f] dark:fill-[#ffffff] font-medium text-lg">
          Get Started
        </text>
      </svg>
    </Link>
  )
}

export default GetStartedButton

