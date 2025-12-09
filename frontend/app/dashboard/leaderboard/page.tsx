"use client"

import { useState } from "react"
import { Trophy, Medal, Award, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LeaderboardTable } from "@/components/dashboard/leaderboard-table"

const leaderboardData = [
  {
    rank: 1,
    name: "Priya Sharma",
    avatar: "/female-indian-student.png",
    department: "Computer Science",
    points: 4850,
    eventsAttended: 32,
    badges: 12,
  },
  {
    rank: 2,
    name: "Raj Patel",
    avatar: "/male-indian-student.jpg",
    department: "Electronics",
    points: 4620,
    eventsAttended: 29,
    badges: 10,
  },
  {
    rank: 3,
    name: "Emily Chen",
    avatar: "/female-asian-student.jpg",
    department: "Business Admin",
    points: 4380,
    eventsAttended: 27,
    badges: 9,
  },
  {
    rank: 4,
    name: "Michael Johnson",
    avatar: "/male-student-studying.png",
    department: "Mechanical Eng.",
    points: 4150,
    eventsAttended: 25,
    badges: 8,
  },
  {
    rank: 5,
    name: "Sarah Williams",
    avatar: "/diverse-female-student.png",
    department: "Computer Science",
    points: 3920,
    eventsAttended: 24,
    badges: 8,
  },
  {
    rank: 6,
    name: "David Kim",
    avatar: "/male-asian-student.jpg",
    department: "IT",
    points: 3780,
    eventsAttended: 23,
    badges: 7,
  },
  {
    rank: 7,
    name: "Ananya Gupta",
    avatar: "/placeholder.svg?height=40&width=40",
    department: "Electronics",
    points: 3650,
    eventsAttended: 22,
    badges: 7,
  },
  {
    rank: 8,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    department: "Civil Eng.",
    points: 3520,
    eventsAttended: 21,
    badges: 6,
  },
  {
    rank: 9,
    name: "Lisa Anderson",
    avatar: "/placeholder.svg?height=40&width=40",
    department: "Business Admin",
    points: 3380,
    eventsAttended: 20,
    badges: 6,
  },
  {
    rank: 10,
    name: "Robert Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    department: "Mechanical Eng.",
    points: 3250,
    eventsAttended: 19,
    badges: 5,
  },
]

const topThree = leaderboardData.slice(0, 3)

export default function LeaderboardPage() {
  const [filter, setFilter] = useState("all")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">See who&apos;s leading the campus event participation</p>
      </div>

      {/* Top 3 Podium */}
      <div className="glass rounded-3xl p-8">
        <div className="flex items-end justify-center gap-4 md:gap-8">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-gray-400">
                <img
                  src={topThree[1].avatar || "/placeholder.svg"}
                  alt={topThree[1].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                <Medal className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-semibold">{topThree[1].name}</p>
              <p className="text-sm text-muted-foreground">{topThree[1].points.toLocaleString()} pts</p>
            </div>
            <div className="w-24 md:w-32 h-24 md:h-28 bg-gray-400/20 rounded-t-xl mt-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-400">2</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg shadow-yellow-500/30">
                <img
                  src={topThree[0].avatar || "/placeholder.svg"}
                  alt={topThree[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-bold text-lg">{topThree[0].name}</p>
              <p className="text-sm text-muted-foreground">{topThree[0].points.toLocaleString()} pts</p>
            </div>
            <div className="w-28 md:w-36 h-32 md:h-40 bg-yellow-500/20 rounded-t-xl mt-4 flex items-center justify-center">
              <span className="text-5xl font-bold text-yellow-500">1</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-amber-600">
                <img
                  src={topThree[2].avatar || "/placeholder.svg"}
                  alt={topThree[2].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-semibold">{topThree[2].name}</p>
              <p className="text-sm text-muted-foreground">{topThree[2].points.toLocaleString()} pts</p>
            </div>
            <div className="w-24 md:w-32 h-20 md:h-24 bg-amber-600/20 rounded-t-xl mt-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-amber-600">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="text-xl font-semibold">Full Rankings</h2>
        <div className="flex gap-3">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="ee">Electronics</SelectItem>
              <SelectItem value="me">Mechanical</SelectItem>
              <SelectItem value="ba">Business Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Leaderboard Table */}
      <LeaderboardTable entries={leaderboardData} />
    </div>
  )
}
