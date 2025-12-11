import { Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
// import { AuthProvider } from "@/components/auth-context"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "UniSphere — Your College Universe of Events",
  description:
    "UniSphere - College Event Management & Smart Attendance System. Discover events, track attendance, earn certificates.",
  generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {/* <AuthProvider> */}
            {children}
          {/* </AuthProvider> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
