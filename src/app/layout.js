import { Geist, Geist_Mono } from "next/font/google"
import "@/app/globals.css"
import NavigationBar from "@/components/NavigationBar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "MagiciaNimeList",
  description: "Website Anime Global",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}
        ${geistMono.variable} antialiased` }
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
