"use client"

import { Users, Search, Mail, Shield, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const members = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@college.edu",
    role: "President",
    joinedDate: "Jan 2022",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@college.edu",
    role: "Vice President",
    joinedDate: "Feb 2022",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@college.edu",
    role: "Member",
    joinedDate: "May 2023",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function MembersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Club Members</h1>
          <p className="text-muted-foreground">Manage club members and roles</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search members..." className="pl-10" />
        </div>
      </div>

      {/* Members Table */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30">
              <th className="text-left py-3 px-4 font-semibold">Member</th>
              <th className="text-left py-3 px-4 font-semibold">Email</th>
              <th className="text-left py-3 px-4 font-semibold">Role</th>
              <th className="text-left py-3 px-4 font-semibold">Joined</th>
              <th className="text-left py-3 px-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{member.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    {member.email}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant={member.role === "President" || member.role === "Vice President" ? "default" : "secondary"}>
                    {member.role}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{member.joinedDate}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Shield className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
