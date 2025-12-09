"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QRAttendance } from "@/components/dashboard/qr-attendance"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"

const events = [
  { id: "1", name: "Tech Fest 2024", registered: 180, attended: 145 },
  { id: "2", name: "AI Workshop", registered: 30, attended: 24 },
  { id: "3", name: "Coding Contest", registered: 80, attended: 72 },
]

const recentAttendees = [
  { name: "Priya Sharma", time: "2 mins ago", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Raj Kumar", time: "3 mins ago", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Emily Chen", time: "5 mins ago", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "John Doe", time: "7 mins ago", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Sarah Lee", time: "10 mins ago", avatar: "/placeholder.svg?height=32&width=32" },
]

export default function AttendancePage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Attendance Panel</h1>
        <p className="text-muted-foreground">Track event attendance with dynamic QR codes</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Select
          value={selectedEvent.id}
          onValueChange={(value) => setSelectedEvent(events.find((e) => e.id === value) || events[0])}
        >
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="Select Event" />
          </SelectTrigger>
          <SelectContent>
            {events.map((event) => (
              <SelectItem key={event.id} value={event.id}>
                {event.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <QRAttendance
          eventId={selectedEvent.id}
          eventName={selectedEvent.name}
          totalRegistered={selectedEvent.registered}
          attendedCount={selectedEvent.attended}
        />

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Live Attendance Feed</h3>
            <Badge variant="secondary" className="bg-green-500/10 text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
              Live
            </Badge>
          </div>

          <div className="space-y-4">
            {recentAttendees.map((attendee, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={attendee.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {attendee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{attendee.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {attendee.time}
                    </p>
                  </div>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
