"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
}

export function StatsCard({ title, value, change, changeType = "neutral", icon: Icon }: StatsCardProps) {
  return (
    <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {change && (
            <p
              className={cn(
                "text-sm mt-1",
                changeType === "positive" && "text-green-500",
                changeType === "negative" && "text-destructive",
                changeType === "neutral" && "text-muted-foreground",
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  )
}
