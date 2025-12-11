"use client"

import { DollarSign, TrendingUp, AlertCircle } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const budgetData = [
  { category: "Events", allocated: 50000, spent: 32450, percentage: 65 },
  { category: "Club Operations", allocated: 35000, spent: 28900, percentage: 83 },
  { category: "Infrastructure", allocated: 25000, spent: 12350, percentage: 49 },
  { category: "Marketing", allocated: 15000, spent: 8200, percentage: 55 },
]

const recentTransactions = [
  { id: 1, category: "Events", description: "Tech Fest Sponsorship", amount: 5000, date: "Dec 10", status: "Approved" },
  { id: 2, category: "Club Operations", description: "Club Equipment Grants", amount: 3500, date: "Dec 8", status: "Pending" },
  { id: 3, category: "Infrastructure", description: "Audio Equipment", amount: 2850, date: "Dec 5", status: "Approved" },
]

export default function BudgetPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Budget Management</h1>
          <p className="text-muted-foreground">Campus event budget allocation and tracking</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <DollarSign className="mr-2 h-4 w-4" />
          New Budget Item
        </Button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Budget" value="$125K" change="Annual allocation" changeType="neutral" icon={DollarSign} />
        <StatsCard title="Total Spent" value="$82.2K" change="65.8% of total" changeType="neutral" icon={DollarSign} />
        <StatsCard title="Remaining" value="$42.8K" change="Available for allocation" changeType="positive" icon={TrendingUp} />
        <StatsCard title="Pending Approval" value="$3.5K" change="Awaiting verification" changeType="neutral" icon={AlertCircle} />
      </div>

      {/* Budget Breakdown */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Budget Allocation</h2>
        <div className="space-y-6">
          {budgetData.map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{item.category}</h3>
                <span className="text-sm text-muted-foreground">${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                <div className="bg-linear-to-r from-primary to-accent h-full rounded-full" style={{ width: `${item.percentage}%` }} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{item.percentage}% utilization</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left py-3 px-4 font-semibold">Description</th>
                <th className="text-left py-3 px-4 font-semibold">Category</th>
                <th className="text-left py-3 px-4 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 font-semibold">Date</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="border-b border-border/30 hover:bg-muted/30">
                  <td className="py-4 px-4">{tx.description}</td>
                  <td className="py-4 px-4">{tx.category}</td>
                  <td className="py-4 px-4 font-semibold">${tx.amount.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm">{tx.date}</td>
                  <td className="py-4 px-4">
                    <Badge variant={tx.status === "Approved" ? "default" : "secondary"}>{tx.status}</Badge>
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
