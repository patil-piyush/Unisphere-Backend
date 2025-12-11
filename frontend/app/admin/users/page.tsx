"use client"

import { Users, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@college.edu",
    role: "Club President",
    club: "Tech Club",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@college.edu",
    role: "Club Member",
    club: "Cultural Committee",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@college.edu",
    role: "Club Admin",
    club: "Sports Committee",
    status: "Inactive",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Users Management</h1>
          <p className="text-muted-foreground">Manage campus users and permissions</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-10" />
        </div>
      </div>

      {/* Users Table */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30">
              <th className="text-left py-3 px-4 font-semibold">User</th>
              <th className="text-left py-3 px-4 font-semibold">Email</th>
              <th className="text-left py-3 px-4 font-semibold">Role</th>
              <th className="text-left py-3 px-4 font-semibold">Club</th>
              <th className="text-left py-3 px-4 font-semibold">Status</th>
              <th className="text-left py-3 px-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">{user.email}</td>
                <td className="py-4 px-4">{user.role}</td>
                <td className="py-4 px-4">{user.club}</td>
                <td className="py-4 px-4">
                  <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                </td>
                <td className="py-4 px-4">
                  <Link href={`/admin/users/${user.id}`}>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
