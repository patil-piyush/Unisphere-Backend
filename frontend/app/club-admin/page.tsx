"use client"

import { Users, Calendar, BarChart3, DollarSign, TrendingUp } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const stats = [
  {
    title: "Club Members",
    value: "145",
    change: "+12 this month",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Upcoming Events",
    value: "3",
    change: "Next: Dec 20",
    changeType: "neutral" as const,
    icon: Calendar,
  },
  {
    title: "Total Attendance",
    value: "1.2K",
    change: "+250 this month",
    changeType: "positive" as const,
    icon: BarChart3,
  },
  {
    title: "Budget Available",
    value: "$8.5K",
    change: "$1.5K spent",
    changeType: "neutral" as const,
    icon: DollarSign,
  },
]

const upcomingEvents = [
  { id: 1, name: "Weekly Meetup", date: "Dec 15", attendees: 45, status: "Confirmed" },
  { id: 2, name: "Tech Workshop", date: "Dec 20", attendees: 80, status: "Planning" },
  { id: 3, name: "Monthly Hackathon", date: "Dec 28", attendees: 120, status: "Planning" },
]

const recentMembers = [
  { id: 1, name: "Alice Johnson", role: "Member", joinedDate: "Nov 2024" },
  { id: 2, name: "Bob Smith", role: "Member", joinedDate: "Oct 2024" },
  { id: 3, name: "Carol White", role: "Moderator", joinedDate: "Sep 2024" },
]

export default function ClubAdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Club Dashboard</h1>
          <p className="text-muted-foreground">Tech Club management overview</p>
        </div>
        <Link href="/club-admin/events/create">
          <Button className="bg-accent hover:bg-accent/90">
            <Calendar className="mr-2 h-4 w-4" />
            New Event
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2 glass bg-card/70 rounded-xl p-6 border border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Upcoming Events</h2>
            <Link href="/club-admin/events">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-border/50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.date} • {event.attendees} expected</p>
                </div>
                <Badge variant={event.status === "Confirmed" ? "default" : "secondary"}>{event.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Members */}
        <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
          <h2 className="text-xl font-bold mb-6">New Members</h2>
          <div className="space-y-4">
            {recentMembers.map((member) => (
              <div key={member.id} className="pb-4 border-b border-border/30 last:border-0">
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.joinedDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/club-admin/members">
            <Button variant="outline" className="w-full h-12">
              <Users className="mr-2 h-4 w-4" />
              Members
            </Button>
          </Link>
          <Link href="/club-admin/events">
            <Button variant="outline" className="w-full h-12">
              <Calendar className="mr-2 h-4 w-4" />
              Events
            </Button>
          </Link>
          <Link href="/club-admin/attendance">
            <Button variant="outline" className="w-full h-12">
              <BarChart3 className="mr-2 h-4 w-4" />
              Attendance
            </Button>
          </Link>
          <Link href="/club-admin/expenses">
            <Button variant="outline" className="w-full h-12">
              <DollarSign className="mr-2 h-4 w-4" />
              Expenses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
