import { Gabarito } from "next/font/google"
import "@/app/globals.css"
import NavigationBar from "@/components/NavigationBar"

const gabarito = Gabarito({
  subsets: ['latin'],
})


export const metadata = {
  title: "MagiciaNimeList",
  description: "Website Anime Global",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} antialiased bg-color-dark` }
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
