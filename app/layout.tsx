import type React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "xbl;nk😉",
  description:
    "Customizable rewards made easy, using Solana's innovative blinks solution",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lIEhaqMTJCMH0QRfCVpCH0HJC8kfLa.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lIEhaqMTJCMH0QRfCVpCH0HJC8kfLa.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="scroll-smooth">
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <ThemeToggle />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
