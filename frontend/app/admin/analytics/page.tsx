"use client"

import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const analyticsData = [
  { month: "Jan", events: 12, attendance: 890, revenue: 4500 },
  { month: "Feb", events: 15, attendance: 1250, revenue: 6200 },
  { month: "Mar", events: 18, attendance: 1680, revenue: 7800 },
  { month: "Apr", events: 21, attendance: 2100, revenue: 9200 },
  { month: "May", events: 24, attendance: 2450, revenue: 10500 },
  { month: "Jun", events: 28, attendance: 3120, revenue: 12800 },
]

const topClubs = [
  { name: "Tech Club", events: 12, attendance: 850 },
  { name: "Cultural Committee", events: 10, attendance: 920 },
  { name: "Sports Committee", events: 8, attendance: 1200 },
  { name: "Photography Club", events: 7, attendance: 650 },
  { name: "Music Club", events: 6, attendance: 480 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">Campus-wide event and engagement metrics</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last 1 Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last 1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Events" value="156" change="+24 this semester" changeType="positive" icon={Calendar} />
        <StatsCard title="Total Attendance" value="12.8K" change="+1.2K vs last semester" changeType="positive" icon={Users} />
        <StatsCard title="Avg Attendance/Event" value="82%" change="+8% improvement" changeType="positive" icon={TrendingUp} />
        <StatsCard title="Total Revenue" value="$48.7K" change="From paid events" changeType="neutral" icon={BarChart3} />
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 h-96 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Events & Attendance Trend Chart</p>
            <p className="text-sm text-muted-foreground mt-2">Monthly comparison visualization</p>
          </div>
        </div>

        <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 h-96 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Revenue Distribution</p>
            <p className="text-sm text-muted-foreground mt-2">By event category</p>
          </div>
        </div>
      </div>

      {/* Top Performing Clubs */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Top Performing Clubs</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left py-3 px-4 font-semibold">Club Name</th>
                <th className="text-left py-3 px-4 font-semibold">Events Organized</th>
                <th className="text-left py-3 px-4 font-semibold">Total Attendance</th>
                <th className="text-left py-3 px-4 font-semibold">Avg/Event</th>
              </tr>
            </thead>
            <tbody>
              {topClubs.map((club, i) => (
                <tr key={i} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4">{club.name}</td>
                  <td className="py-4 px-4">{club.events}</td>
                  <td className="py-4 px-4">{club.attendance.toLocaleString()}</td>
                  <td className="py-4 px-4">{Math.round(club.attendance / club.events)} students</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
