"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, MapPin, Share2, Edit2 } from "lucide-react"
import Link from "next/link"

const eventDetail = {
  id: 1,
  title: "Weekly Tech Meetup",
  description: "Join us for our weekly tech meetup where we discuss latest trends, share projects, and network.",
  date: "Dec 15, 2024",
  time: "6:00 PM",
  location: "Main Hall, Tech Block",
  attendees: 45,
  maxAttendees: 60,
  registrations: [
    { id: 1, name: "John Doe", email: "john@college.edu", registeredDate: "Dec 10" },
    { id: 2, name: "Jane Smith", email: "jane@college.edu", registeredDate: "Dec 11" },
    { id: 3, name: "Mike Johnson", email: "mike@college.edu", registeredDate: "Dec 12" },
  ],
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/club-admin/events">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>
      </Link>

      {/* Event Header */}
      <div className="glass bg-card/70 rounded-xl p-8 border border-border/50">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{eventDetail.title}</h1>
              <Badge>Confirmed</Badge>
            </div>
            <p className="text-muted-foreground">{eventDetail.description}</p>
          </div>
          <div className="flex gap-2 ml-4">
            <Button variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              <Edit2 className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/30">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="font-semibold">{eventDetail.date}, {eventDetail.time}</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-semibold">{eventDetail.location}</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Attendees</p>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="font-semibold">{eventDetail.attendees}/{eventDetail.maxAttendees}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Registrations */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Registrations ({eventDetail.registrations.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Email</th>
                <th className="text-left py-3 px-4 font-semibold">Registered Date</th>
                <th className="text-left py-3 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {eventDetail.registrations.map((reg) => (
                <tr key={reg.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4">{reg.name}</td>
                  <td className="py-4 px-4">{reg.email}</td>
                  <td className="py-4 px-4">{reg.registeredDate}</td>
                  <td className="py-4 px-4">
                    <Button size="sm" variant="outline">
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
