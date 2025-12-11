"use client"

import { Mail, Phone, Calendar, Shield, ArrowLeft, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const userDetail = {
  id: 1,
  name: "Rahul Sharma",
  email: "rahul@college.edu",
  phone: "+91 9876543210",
  role: "Club President",
  club: "Tech Club",
  department: "Computer Science",
  year: "3rd Year",
  joinedDate: "Jan 2022",
  status: "Active",
  avatar: "/placeholder.svg?height=120&width=120",
  permissions: ["Create Events", "Manage Club", "View Analytics"],
}

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/admin/users">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Users
        </Button>
      </Link>

      {/* User Profile */}
      <div className="glass bg-card/70 rounded-xl p-8 border border-border/50">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userDetail.avatar} />
              <AvatarFallback>{userDetail.name}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold mb-2">{userDetail.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <Badge>{userDetail.role}</Badge>
                <Badge variant="secondary">{userDetail.status}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{userDetail.club}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Department</p>
                  <p className="font-semibold">{userDetail.department}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Year</p>
                  <p className="font-semibold">{userDetail.year}</p>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Edit2 className="mr-2 h-4 w-4" />
            Edit User
          </Button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold">{userDetail.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold">{userDetail.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Joined</p>
              <p className="font-semibold">{userDetail.joinedDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Permissions */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Permissions
        </h2>
        <div className="flex flex-wrap gap-2">
          {userDetail.permissions.map((perm, i) => (
            <Badge key={i} variant="outline">
              {perm}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
