"use client"

import { Calendar, Users, TrendingUp, DollarSign, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/dashboard/stats-card"
import Link from "next/link"

const stats = [
  { title: "Total Events", value: "12", change: "+2 this month", changeType: "positive" as const, icon: Calendar },
  {
    title: "Total Registrations",
    value: "1,245",
    change: "+180 this week",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Avg. Attendance",
    value: "87%",
    change: "+5% vs last month",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  { title: "Revenue", value: "$2,450", change: "From paid events", changeType: "neutral" as const, icon: DollarSign },
]

const recentEvents = [
  { name: "Tech Workshop", date: "Dec 10", registrations: 45, attendance: "92%" },
  { name: "Coding Contest", date: "Dec 5", registrations: 80, attendance: "85%" },
  { name: "Guest Lecture", date: "Dec 1", registrations: 120, attendance: "78%" },
]

export default function ClubAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Club Dashboard</h1>
          <p className="text-muted-foreground">Tech Club Overview</p>
        </div>
        <Link href="/club-admin/events/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Event
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          <div className="space-y-4">
            {recentEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
                <div>
                  <p className="font-medium">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{event.registrations} registrations</p>
                  <p className="text-sm text-green-500">{event.attendance} attendance</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/club-admin/events">
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Events
            </Button>
          </Link>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/club-admin/events/new">
              <div className="p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-center cursor-pointer">
                <Calendar className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-medium">New Event</p>
              </div>
            </Link>
            <Link href="/club-admin/attendance">
              <div className="p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors text-center cursor-pointer">
                <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                <p className="font-medium">Take Attendance</p>
              </div>
            </Link>
            <Link href="/club-admin/analytics">
              <div className="p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors text-center cursor-pointer">
                <TrendingUp className="h-8 w-8 mx-auto text-green-500 mb-2" />
                <p className="font-medium">View Analytics</p>
              </div>
            </Link>
            <Link href="/club-admin/expenses">
              <div className="p-4 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 transition-colors text-center cursor-pointer">
                <DollarSign className="h-8 w-8 mx-auto text-orange-500 mb-2" />
                <p className="font-medium">Track Expenses</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
