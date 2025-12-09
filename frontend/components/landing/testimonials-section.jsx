"use client"

import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Student, Computer Science",
    avatar: "/female-college-student-portrait.png",
    content:
      "UniSphere made tracking my event participation so easy! I love how I can see all my certificates in one place and compete on the leaderboard.",
    rating: 5,
  },
  {
    name: "Dr. Raj Patel",
    role: "Faculty Advisor, Tech Club",
    avatar: "/male-professor-portrait.png",
    content:
      "As a club advisor, the analytics dashboard gives me incredible insights into student engagement. The smart attendance system has eliminated proxy issues completely.",
    rating: 5,
  },
  {
    name: "Maya Rodriguez",
    role: "President, Cultural Committee",
    avatar: "/female-student-leader-portrait.jpg",
    content:
      "Managing our annual fest with 5000+ attendees was a breeze with UniSphere. The real-time tracking and automated certificates saved us countless hours.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Loved by Students & Organizers</h2>
          <p className="text-muted-foreground text-pretty">
            See what our campus community has to say about their experience with UniSphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:bg-card transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{`"${testimonial.content}"`}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
