"use client"

import { Calendar, Search, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Weekly Tech Meetup",
    date: "Dec 15, 2024",
    time: "6:00 PM",
    attendees: 45,
    maxAttendees: 60,
    status: "Confirmed",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    date: "Dec 20, 2024",
    time: "4:00 PM",
    attendees: 38,
    maxAttendees: 80,
    status: "Planning",
  },
  {
    id: 3,
    title: "Monthly Hackathon",
    date: "Dec 28, 2024",
    time: "10:00 AM",
    attendees: 92,
    maxAttendees: 120,
    status: "Planning",
  },
]

export default function ClubEventsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Club Events</h1>
          <p className="text-muted-foreground">Manage your club events</p>
        </div>
        <Link href="/club-admin/events/create">
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search events..." className="pl-10" />
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="glass bg-card/70 rounded-xl p-6 border border-border/50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <Badge variant={event.status === "Confirmed" ? "default" : "secondary"}>{event.status}</Badge>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date} at {event.time}
                  </span>
                  <span>{event.attendees}/{event.maxAttendees} registered</span>
                </div>
                <div className="mt-3 w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-accent h-full rounded-full" style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }} />
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <Link href={`/club-admin/events/${event.id}`}>
                  <Button size="sm" variant="outline">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="sm" variant="outline" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
