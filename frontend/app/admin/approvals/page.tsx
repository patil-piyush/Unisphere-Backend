"use client"

import { CheckCircle2, XCircle, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const pendingEvents = [
  {
    id: 1,
    name: "Inter-College Hackathon",
    club: "Tech Club",
    date: "Dec 20, 2024",
    attendees: 200,
    description: "3-day hackathon event",
    submittedDate: "Dec 10",
  },
  {
    id: 2,
    name: "Cultural Night 2024",
    club: "Cultural Committee",
    date: "Dec 25, 2024",
    attendees: 500,
    description: "Celebration of diverse cultures",
    submittedDate: "Dec 12",
  },
]

const pendingClubs = [
  {
    id: 1,
    name: "Robotics Club",
    requestedBy: "Prof. Smith",
    members: 25,
    description: "Building and programming robots",
    submittedDate: "Dec 5",
  },
  {
    id: 2,
    name: "Startup Incubator",
    requestedBy: "Dr. Johnson",
    members: 15,
    description: "Supporting student entrepreneurship",
    submittedDate: "Dec 8",
  },
]

const rejectedRequests = [
  { id: 1, type: "Event", name: "Unauthorized Event", club: "Unknown", rejectedDate: "Dec 8", reason: "No club affiliation" },
  { id: 2, type: "Club", name: "Duplicate Club", requestedBy: "User X", rejectedDate: "Dec 6", reason: "Similar club exists" },
]

export default function ApprovalsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Approvals & Requests</h1>
        <p className="text-muted-foreground">Manage pending events and club registrations</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="events">Pending Events</TabsTrigger>
          <TabsTrigger value="clubs">Pending Clubs</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        {/* Pending Events Tab */}
        <TabsContent value="events" className="space-y-4">
          {pendingEvents.map((event) => (
            <div key={event.id} className="glass bg-card/70 rounded-xl p-6 border border-border/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{event.name}</h3>
                    <Badge>Pending</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">By {event.club}</p>
                  <p className="text-sm mb-3">{event.description}</p>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <p>Submitted {event.submittedDate}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <XCircle className="mr-2 h-4 w-4" />
                  Reject
                </Button>
                <Button className="flex-1">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Approve
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Pending Clubs Tab */}
        <TabsContent value="clubs" className="space-y-4">
          {pendingClubs.map((club) => (
            <div key={club.id} className="glass bg-card/70 rounded-xl p-6 border border-border/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{club.name}</h3>
                    <Badge variant="secondary">Club</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Requested by {club.requestedBy}</p>
                  <p className="text-sm mb-3">{club.description}</p>
                  <p className="text-sm text-muted-foreground">{club.members} initial members</p>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <p>Submitted {club.submittedDate}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <XCircle className="mr-2 h-4 w-4" />
                  Reject
                </Button>
                <Button className="flex-1">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Approve
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Rejected Tab */}
        <TabsContent value="rejected" className="space-y-4">
          {rejectedRequests.map((request) => (
            <div key={request.id} className="glass bg-card/70 rounded-xl p-6 border border-destructive/20">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold mb-2">{request.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{request.type === "Event" ? `Club: ${request.club}` : `By: ${request.requestedBy}`}</p>
                  <p className="text-sm text-destructive mt-2">Reason: {request.reason}</p>
                </div>
                <div className="text-xs text-muted-foreground">{request.rejectedDate}</div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
