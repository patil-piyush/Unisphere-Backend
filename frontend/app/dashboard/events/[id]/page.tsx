"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, Heart, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const eventData = {
  id: "1",
  title: "Tech Fest 2024",
  description: `Join us for the biggest technology festival of the year! Tech Fest 2024 brings together students, professionals, and industry experts for an unforgettable experience.

**What to expect:**
- Hackathon with exciting prizes
- Workshops on AI, Web3, and Cloud Computing
- Tech talks from industry leaders
- Networking opportunities
- Career fair with top tech companies
- Fun activities and games

This is your chance to learn, network, and showcase your skills. Whether you're a beginner or an expert, there's something for everyone!`,
  image: "/technology-festival-college-event-large-banner.jpg",
  date: "December 15, 2024",
  time: "9:00 AM - 6:00 PM",
  location: "Main Auditorium, Building A",
  category: "Technology",
  club: "Tech Club",
  clubLogo: "/tech-club-logo.jpg",
  attendees: 180,
  maxAttendees: 200,
  price: 0,
  organizer: {
    name: "Rahul Sharma",
    role: "Tech Club President",
    avatar: "/male-student-organizer.jpg",
  },
  schedule: [
    { time: "9:00 AM", activity: "Registration & Breakfast" },
    { time: "10:00 AM", activity: "Opening Ceremony" },
    { time: "11:00 AM", activity: "Hackathon Kickoff" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Workshops (Parallel Sessions)" },
    { time: "4:00 PM", activity: "Tech Talks" },
    { time: "5:30 PM", activity: "Prize Distribution & Closing" },
  ],
}

const discussions = [
  {
    id: 1,
    user: { name: "Priya Patel", avatar: "/diverse-female-student.png" },
    message: "Is laptop mandatory for the hackathon?",
    time: "2 hours ago",
    likes: 5,
  },
  {
    id: 2,
    user: { name: "Amit Kumar", avatar: "/male-student-studying.png" },
    message: "Yes, you'll need a laptop. They'll provide power outlets and WiFi.",
    time: "1 hour ago",
    likes: 3,
    isReply: true,
  },
  {
    id: 3,
    user: { name: "Sarah Lee", avatar: "/asian-female-student.jpg" },
    message: "Can we form teams on the spot or do we need to register as a team?",
    time: "45 mins ago",
    likes: 2,
  },
]

const participants = [
  { name: "John Doe", department: "Computer Science", avatar: "/student-studying.png" },
  { name: "Jane Smith", department: "Electronics", avatar: "/diverse-student-studying.png" },
  { name: "Mike Johnson", department: "Mechanical", avatar: "/diverse-students-studying.png" },
  { name: "Emily Brown", department: "Computer Science", avatar: "/diverse-student-group.png" },
  { name: "David Wilson", department: "IT", avatar: "/diverse-student-group.png" },
]

export default function EventDetailPage() {
  const params = useParams()
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [newComment, setNewComment] = useState("")

  const spotsLeft = eventData.maxAttendees - eventData.attendees

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link href="/dashboard/events">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Button>
      </Link>

      {/* Hero Section */}
      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden">
        <Image src={eventData.image || "/placeholder.svg"} alt={eventData.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Badge>{eventData.category}</Badge>
            {eventData.price === 0 ? (
              <Badge variant="secondary">Free</Badge>
            ) : (
              <Badge className="bg-accent text-accent-foreground">${eventData.price}</Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{eventData.title}</h1>
          <div className="flex items-center gap-3 text-white/80">
            <Image
              src={eventData.clubLogo || "/placeholder.svg"}
              alt={eventData.club}
              width={24}
              height={24}
              className="rounded-md"
            />
            <span>{eventData.club}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
              <TabsTrigger value="participants">Participants</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              {/* Description */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {eventData.description.split("\n").map((line, i) => (
                    <p key={i} className="text-muted-foreground">
                      {line.startsWith("**") ? (
                        <strong className="text-foreground">{line.replace(/\*\*/g, "")}</strong>
                      ) : line.startsWith("-") ? (
                        <span className="block ml-4">{line}</span>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Event Schedule</h2>
                <div className="space-y-4">
                  {eventData.schedule.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-20 flex-shrink-0">
                        <span className="text-sm font-medium text-primary">{item.time}</span>
                      </div>
                      <div className="flex-1 pb-4 border-b border-border last:border-0 last:pb-0">
                        <span>{item.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizer */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Organizer</h2>
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={eventData.organizer.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {eventData.organizer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{eventData.organizer.name}</p>
                    <p className="text-sm text-muted-foreground">{eventData.organizer.role}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="discussion" className="space-y-6 mt-6">
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Discussion</h2>

                {/* Comment Input */}
                <div className="flex gap-3 mb-6">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/current-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex gap-2">
                    <Input
                      placeholder="Ask a question or share your thoughts..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Comments */}
                <div className="space-y-4">
                  {discussions.map((comment) => (
                    <div key={comment.id} className={cn("flex gap-3", comment.isReply && "ml-12")}>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {comment.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{comment.user.name}</span>
                          <span className="text-xs text-muted-foreground">{comment.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{comment.message}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                            <Heart className="h-3 w-3" />
                            {comment.likes}
                          </button>
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                            <MessageCircle className="h-3 w-3" />
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="participants" className="space-y-6 mt-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Participants</h2>
                  <Badge variant="secondary">{eventData.attendees} registered</Badge>
                </div>
                <div className="space-y-3">
                  {participants.map((participant, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                    >
                      <Avatar>
                        <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {participant.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{participant.name}</p>
                        <p className="text-sm text-muted-foreground">{participant.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Participants
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className="glass rounded-2xl p-6 sticky top-24">
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{eventData.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{eventData.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{eventData.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Spots Left</p>
                  <p className={cn("font-medium", spotsLeft <= 10 ? "text-destructive" : "text-foreground")}>
                    {spotsLeft} / {eventData.maxAttendees}
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full h-12 text-lg" onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Cancel Registration" : "Register Now"}
            </Button>

            <div className="flex items-center justify-center gap-4 mt-4">
              <Button
                variant="ghost"
                size="sm"
                className={cn(isLiked && "text-destructive")}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={cn("h-4 w-4 mr-2", isLiked && "fill-current")} />
                Save
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
