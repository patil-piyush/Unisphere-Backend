"use client"

import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Club Analytics</h1>
          <p className="text-muted-foreground">Track club performance and growth</p>
        </div>
        <Select defaultValue="6months">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">Last 1 Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Members" value="145" change="+12 this month" changeType="positive" icon={Users} />
        <StatsCard title="Events Hosted" value="12" change="+3 this quarter" changeType="positive" icon={Calendar} />
        <StatsCard title="Avg Attendance" value="82%" change="+5% improvement" changeType="positive" icon={TrendingUp} />
        <StatsCard title="Engagement Rate" value="76%" change="Very active" changeType="positive" icon={BarChart3} />
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 h-96 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Member Growth Trend</p>
          </div>
        </div>

        <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 h-96 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Event Attendance Trend</p>
          </div>
        </div>
      </div>
    </div>
  )
}
