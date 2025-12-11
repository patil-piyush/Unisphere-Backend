"use client"

import { DollarSign, Plus, TrendingUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatsCard } from "@/components/dashboard/stats-card"

const expenses = [
  {
    id: 1,
    category: "Equipment",
    description: "Projector and screen rental",
    amount: 5000,
    date: "Dec 10",
    status: "Approved",
  },
  {
    id: 2,
    category: "Refreshments",
    description: "Coffee and snacks for meetup",
    amount: 1500,
    date: "Dec 12",
    status: "Pending",
  },
  {
    id: 3,
    category: "Supplies",
    description: "Event materials and decorations",
    amount: 2300,
    date: "Dec 8",
    status: "Approved",
  },
]

export default function ExpensesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Expense Tracking</h1>
          <p className="text-muted-foreground">Manage club expenses and budget</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Expense
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Budget" value="$10K" change="Annual allocation" changeType="neutral" icon={DollarSign} />
        <StatsCard title="Total Spent" value="$8.8K" change="88% utilization" changeType="neutral" icon={TrendingUp} />
        <StatsCard title="Remaining" value="$1.2K" change="For upcoming events" changeType="positive" icon={DollarSign} />
      </div>

      {/* Expenses List */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Recent Expenses</h2>
        <div className="space-y-3">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-border/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{expense.description}</h3>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {expense.date}
                  </span>
                  <span>{expense.category}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg mb-2">₹{expense.amount.toLocaleString()}</p>
                <Badge variant={expense.status === "Approved" ? "default" : "secondary"}>{expense.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
