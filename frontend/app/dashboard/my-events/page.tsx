"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Download, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"

const upcomingEvents = [
  {
    id: "1",
    title: "Tech Fest 2024",
    date: "Dec 15, 2024",
    time: "9:00 AM",
    location: "Main Auditorium",
    image: "/placeholder.svg?height=100&width=150",
    status: "confirmed",
  },
  {
    id: "2",
    title: "AI Workshop",
    date: "Dec 18, 2024",
    time: "2:00 PM",
    location: "Computer Lab 3",
    image: "/placeholder.svg?height=100&width=150",
    status: "confirmed",
  },
]

const pastEvents = [
  {
    id: "3",
    title: "Hackathon 2024",
    date: "Nov 20, 2024",
    time: "10:00 AM",
    location: "Innovation Hub",
    image: "/placeholder.svg?height=100&width=150",
    attended: true,
    certificateAvailable: true,
    pointsEarned: 150,
  },
  {
    id: "4",
    title: "Leadership Summit",
    date: "Nov 15, 2024",
    time: "9:00 AM",
    location: "Conference Hall",
    image: "/placeholder.svg?height=100&width=150",
    attended: true,
    certificateAvailable: true,
    pointsEarned: 100,
  },
  {
    id: "5",
    title: "Photography Workshop",
    date: "Nov 10, 2024",
    time: "3:00 PM",
    location: "Art Studio",
    image: "/placeholder.svg?height=100&width=150",
    attended: false,
    certificateAvailable: false,
    pointsEarned: 0,
  },
]

export default function MyEventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Events</h1>
        <p className="text-muted-foreground">Manage your registered events and download certificates</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingEvents.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastEvents.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="glass rounded-2xl p-4 flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={150}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                      Confirmed
                    </Badge>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">View Details</Button>
                    <Button size="sm" variant="outline">
                      Cancel Registration
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {upcomingEvents.length === 0 && (
              <div className="text-center py-12 glass rounded-2xl">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No upcoming events</p>
                <Button className="mt-4">Browse Events</Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="glass rounded-2xl p-4 flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={150}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.attended ? (
                        <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Attended
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                          <XCircle className="h-3 w-3 mr-1" />
                          Missed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {event.attended && (
                        <span className="text-sm text-primary font-medium">+{event.pointsEarned} points earned</span>
                      )}
                    </div>
                    {event.certificateAvailable && (
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Download className="h-4 w-4" />
                        Download Certificate
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
