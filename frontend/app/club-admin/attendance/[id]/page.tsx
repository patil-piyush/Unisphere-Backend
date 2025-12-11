"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, CheckCircle2, XCircle, Download } from "lucide-react"
import Link from "next/link"

const attendanceDetail = {
  eventName: "Weekly Meetup - Dec 15",
  date: "Dec 15, 2024",
  totalRegistered: 45,
  totalPresent: 42,
  attendanceRate: "93%",
  attendees: [
    { id: 1, name: "John Doe", email: "john@college.edu", attended: true, time: "6:05 PM", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Jane Smith", email: "jane@college.edu", attended: true, time: "6:10 PM", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Mike Johnson", email: "mike@college.edu", attended: false, time: "-", avatar: "/placeholder.svg?height=40&width=40" },
  ],
}

export default function AttendanceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/club-admin/attendance">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Attendance
        </Button>
      </Link>

      {/* Header */}
      <div className="glass bg-card/70 rounded-xl p-8 border border-border/50">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{attendanceDetail.eventName}</h1>
            <p className="text-muted-foreground">{attendanceDetail.date}</p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/30">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Registered</p>
            <p className="text-3xl font-bold">{attendanceDetail.totalRegistered}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Present</p>
            <p className="text-3xl font-bold">{attendanceDetail.totalPresent}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Attendance Rate</p>
            <p className="text-3xl font-bold">{attendanceDetail.attendanceRate}</p>
          </div>
        </div>
      </div>

      {/* Attendance List */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 overflow-x-auto">
        <h2 className="text-xl font-bold mb-6">Attendance Details</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30">
              <th className="text-left py-3 px-4 font-semibold">Member</th>
              <th className="text-left py-3 px-4 font-semibold">Email</th>
              <th className="text-left py-3 px-4 font-semibold">Status</th>
              <th className="text-left py-3 px-4 font-semibold">Check-in Time</th>
            </tr>
          </thead>
          <tbody>
            {attendanceDetail.attendees.map((attendee) => (
              <tr key={attendee.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={attendee.avatar} />
                      <AvatarFallback>{attendee.name}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{attendee.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">{attendee.email}</td>
                <td className="py-4 px-4">
                  {attendee.attended ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Present</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <XCircle className="w-4 h-4" />
                      <span>Absent</span>
                    </div>
                  )}
                </td>
                <td className="py-4 px-4 text-sm">{attendee.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
