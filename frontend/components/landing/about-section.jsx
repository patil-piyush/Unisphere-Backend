"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Real-time attendance tracking with dynamic QR codes",
  "Automatic certificate generation upon completion",
  "Comprehensive analytics for organizers and admins",
  "Gamified leaderboards to boost participation",
  "Seamless integration with college systems",
  "Mobile-friendly interface for on-the-go access",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-3">About UniSphere</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Future of College Event Management</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              UniSphere is designed to transform how colleges manage events. Our platform combines smart attendance
              tracking, certificate automation, and powerful analytics to create an engaging campus experience for
              students and organizers alike.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
                <Image
                  src="/college-students-at-campus-event-with-technology.jpg"
                  alt="UniSphere Dashboard Preview"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
