"use client"

import { Calendar, Trophy, Award, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/dashboard/stats-card"
import { EventCard } from "@/components/dashboard/event-card"
import Link from "next/link"

const stats = [
  { title: "Events Attended", value: "24", change: "+3 this month", changeType: "positive", icon: Calendar },
  { title: "Total Points", value: "2,450", change: "+180 this week", changeType: "positive", icon: Star },
  { title: "Certificates", value: "12", change: "2 pending", changeType: "neutral", icon: Award },
  { title: "Leaderboard Rank", value: "#15", change: "Up 5 places", changeType: "positive", icon: Trophy },
]

const recommendedEvents = [
  {
    id: "1",
    title: "Tech Fest 2024",
    description: "Annual technology festival featuring hackathons, workshops, and tech talks from industry experts.",
    image: "/technology-festival-college-event.jpg",
    date: "Dec 15, 2024",
    time: "9:00 AM",
    location: "Main Auditorium",
    category: "Technology",
    club: "Tech Club",
    attendees: 180,
    maxAttendees: 200,
    price: 0,
  },
  {
    id: "2",
    title: "Cultural Night",
    description: "Celebrate diversity with performances, food, and art from cultures around the world.",
    image: "/cultural-night-college-performance.jpg",
    date: "Dec 20, 2024",
    time: "6:00 PM",
    location: "Open Air Theatre",
    category: "Cultural",
    club: "Cultural Committee",
    attendees: 350,
    maxAttendees: 500,
    price: 5,
  },
  {
    id: "3",
    title: "AI Workshop",
    description: "Hands-on workshop on building AI applications with Python and modern frameworks.",
    image: "/ai-workshop-students-computers.jpg",
    date: "Dec 18, 2024",
    time: "2:00 PM",
    location: "Computer Lab 3",
    category: "Workshop",
    club: "AI Research Club",
    attendees: 28,
    maxAttendees: 30,
    price: 10,
  },
]

const upcomingEvents = [
  { title: "Photography Walk", date: "Dec 12", time: "7:00 AM" },
  { title: "Debate Competition", date: "Dec 14", time: "3:00 PM" },
  { title: "Music Jam Session", date: "Dec 16", time: "5:00 PM" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening on campus today.</p>
        </div>
        <Link href="/dashboard/events">
          <Button className="group">
            Explore Events
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recommended For You</h2>
            <Link href="/dashboard/events" className="text-primary text-sm hover:underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendedEvents.slice(0, 2).map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <div className="glass rounded-2xl p-4 space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex flex-col items-center justify-center">
                  <span className="text-xs text-muted-foreground">{event.date.split(" ")[0]}</span>
                  <span className="text-lg font-bold text-primary">{event.date.split(" ")[1]}</span>
                </div>
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              </div>
            ))}
            <Link href="/dashboard/my-events">
              <Button variant="ghost" className="w-full mt-2">
                View My Schedule
              </Button>
            </Link>
          </div>

          <div className="glass rounded-2xl p-4">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link href="/dashboard/events">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="mr-2 h-4 w-4" />
                  Browse Events
                </Button>
              </Link>
              <Link href="/dashboard/leaderboard">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Trophy className="mr-2 h-4 w-4" />
                  View Leaderboard
                </Button>
              </Link>
              <Link href="/dashboard/my-events">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Award className="mr-2 h-4 w-4" />
                  My Certificates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
