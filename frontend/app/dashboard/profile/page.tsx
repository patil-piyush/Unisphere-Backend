"use client"

import { useState } from "react"
import { Camera, Edit2, Mail, Phone, Calendar, Award, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const userData = {
  name: "John Doe",
  email: "john.doe@college.edu",
  phone: "+1 234 567 8900",
  collegeId: "CS2024001",
  department: "Computer Science",
  year: "3rd Year",
  bio: "Passionate about technology and innovation. Always eager to learn new things and participate in campus events.",
  avatar: "/placeholder.svg?height=120&width=120",
  interests: ["Technology", "AI/ML", "Web Development", "Photography", "Music"],
  stats: {
    eventsAttended: 24,
    points: 2450,
    certificates: 12,
    rank: 15,
  },
  badges: [
    { name: "Tech Enthusiast", icon: "🖥️", color: "bg-blue-500/10 text-blue-500" },
    { name: "Event Regular", icon: "📅", color: "bg-green-500/10 text-green-500" },
    { name: "Hackathon Winner", icon: "🏆", color: "bg-yellow-500/10 text-yellow-500" },
    { name: "Early Bird", icon: "🐦", color: "bg-orange-500/10 text-orange-500" },
  ],
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your profile and preferences</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="relative inline-block">
              <Avatar className="w-28 h-28">
                <AvatarImage src={userData.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
            <p className="text-muted-foreground">{userData.department}</p>
            <Badge variant="secondary" className="mt-2">
              {userData.year}
            </Badge>

            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>ID: {userData.collegeId}</span>
              </div>
            </div>

            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue={userData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input defaultValue={userData.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea defaultValue={userData.bio} rows={3} />
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1" onClick={() => setIsEditing(false)}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Badges */}
          <div className="glass rounded-2xl p-6 mt-6">
            <h3 className="font-semibold mb-4">Badges Earned</h3>
            <div className="grid grid-cols-2 gap-3">
              {userData.badges.map((badge, index) => (
                <div key={index} className={`rounded-xl p-3 text-center ${badge.color}`}>
                  <span className="text-2xl">{badge.icon}</span>
                  <p className="text-xs font-medium mt-1">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats & Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass rounded-2xl p-4 text-center">
              <Calendar className="h-6 w-6 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold">{userData.stats.eventsAttended}</p>
              <p className="text-sm text-muted-foreground">Events</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <Star className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
              <p className="text-2xl font-bold">{userData.stats.points.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Points</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <Award className="h-6 w-6 mx-auto text-green-500 mb-2" />
              <p className="text-2xl font-bold">{userData.stats.certificates}</p>
              <p className="text-sm text-muted-foreground">Certificates</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <Trophy className="h-6 w-6 mx-auto text-orange-500 mb-2" />
              <p className="text-2xl font-bold">#{userData.stats.rank}</p>
              <p className="text-sm text-muted-foreground">Rank</p>
            </div>
          </div>

          {/* Bio */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-3">About Me</h3>
            <p className="text-muted-foreground">{userData.bio}</p>
          </div>

          {/* Interests */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {userData.interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Activity Chart Placeholder */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Event Activity</h3>
            <div className="h-48 flex items-center justify-center text-muted-foreground">
              <p>Activity chart coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
