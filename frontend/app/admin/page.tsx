"use client"

import { Users, Calendar, Building2, DollarSign, TrendingUp, AlertCircle } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const stats = [
  {
    title: "Total Students",
    value: "10,245",
    change: "+245 this semester",
    changeType: "positive" as const,
    icon: Users,
  },
  { title: "Active Clubs", value: "45", change: "3 pending approval", changeType: "neutral" as const, icon: Building2 },
  {
    title: "Events This Month",
    value: "78",
    change: "+15 vs last month",
    changeType: "positive" as const,
    icon: Calendar,
  },
  { title: "Total Budget", value: "$125K", change: "$18K remaining", changeType: "neutral" as const, icon: DollarSign },
]

const pendingApprovals = [
  { id: 1, type: "Event", name: "Inter-College Hackathon", club: "Tech Club", date: "Dec 20" },
  { id: 2, type: "Event", name: "Cultural Night", club: "Cultural Committee", date: "Dec 25" },
  { id: 3, type: "Club", name: "Robotics Club", requestedBy: "Prof. Smith", date: "Dec 10" },
]

const recentReports = [
  { id: 1, type: "Comment", description: "Inappropriate comment on Tech Fest post", reporter: "John Doe" },
  { id: 2, type: "Event", description: "Budget discrepancy reported", reporter: "Finance Dept" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">College-wide event management overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Pending Approvals */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Pending Approvals</h2>
            <Badge variant="secondary">{pendingApprovals.length} pending</Badge>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                    <p className="font-medium">{item.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.type === "Club" ? `Requested by: ${item.requestedBy}` : `Club: ${item.club}`}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Reject
                  </Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
            ))}
          </div>
          <Link href="/admin/events">
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Pending
            </Button>
          </Link>
        </div>

        {/* Recent Reports */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Reports</h2>
            <Badge variant="destructive">{recentReports.length} open</Badge>
          </div>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20"
              >
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {report.type}
                    </Badge>
                  </div>
                  <p className="text-sm mt-1">{report.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">Reported by: {report.reporter}</p>
                </div>
                <Button size="sm" variant="outline">
                  Review
                </Button>
              </div>
            ))}
          </div>
          <Link href="/admin/reports">
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Reports
            </Button>
          </Link>
        </div>
      </div>

      {/* Analytics Preview */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Event Analytics Overview</h2>
          <Link href="/admin/analytics">
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Full Analytics
            </Button>
          </Link>
        </div>
        <div className="h-64 flex items-center justify-center text-muted-foreground border border-dashed border-border rounded-xl">
          <p>Analytics charts will be displayed here</p>
        </div>
      </div>
    </div>
  )
}
