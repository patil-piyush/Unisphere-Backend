"use client"

import { Calendar, QrCode, Award, BarChart3, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Event Discovery",
    description: "Browse and register for campus events. Filter by category, club, or date to find what interests you.",
  },
  {
    icon: QrCode,
    title: "Smart Attendance",
    description: "Dynamic QR codes that change every few seconds. No proxy attendance, guaranteed accuracy.",
  },
  {
    icon: Award,
    title: "Certificates & Badges",
    description: "Earn digital certificates for participation. Build your profile with achievement badges.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your event history, participation stats, and leaderboard rankings in real-time.",
  },
  {
    icon: Users,
    title: "Club Management",
    description: "Organizers can manage events, track registrations, and monitor attendance effortlessly.",
  },
  {
    icon: Shield,
    title: "Admin Controls",
    description: "College administrators can oversee all events, manage budgets, and moderate content.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Everything You Need for Campus Events</h2>
          <p className="text-muted-foreground text-pretty">
            From discovering events to earning certificates, UniSphere provides a complete ecosystem for college event
            management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
