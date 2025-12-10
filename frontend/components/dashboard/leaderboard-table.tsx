"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface LeaderboardEntry {
  rank: number
  name: string
  avatar: string
  department: string
  points: number
  eventsAttended: number
  badges: number
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[]
  currentUserId?: string
}

export function LeaderboardTable({ entries, currentUserId }: LeaderboardTableProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-muted-foreground font-medium">{rank}</span>
    }
  }

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-muted-foreground">Rank</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Student</th>
              <th className="text-left p-4 font-medium text-muted-foreground hidden md:table-cell">Department</th>
              <th className="text-center p-4 font-medium text-muted-foreground">Events</th>
              <th className="text-center p-4 font-medium text-muted-foreground hidden sm:table-cell">Badges</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Points</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.rank}
                className={cn(
                  "border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors",
                  entry.rank <= 3 && "bg-primary/5",
                )}
              >
                <td className="p-4">
                  <div className="w-8 h-8 flex items-center justify-center">{getRankIcon(entry.rank)}</div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={entry.avatar || "/placeholder.svg"} alt={entry.name} />
                      <AvatarFallback>
                        {entry.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{entry.name}</span>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell text-muted-foreground">{entry.department}</td>
                <td className="p-4 text-center">
                  <Badge variant="secondary">{entry.eventsAttended}</Badge>
                </td>
                <td className="p-4 text-center hidden sm:table-cell">
                  <Badge variant="outline">{entry.badges}</Badge>
                </td>
                <td className="p-4 text-right">
                  <span className="font-bold text-primary">{entry.points.toLocaleString()}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
