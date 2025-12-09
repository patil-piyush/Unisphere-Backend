"use client"

import { useState } from "react"
import { Search, Grid, List } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EventCard } from "@/components/dashboard/event-card"
import { cn } from "@/lib/utils"

const events = [
  {
    id: "1",
    title: "Tech Fest 2024",
    description: "Annual technology festival featuring hackathons, workshops, and tech talks from industry experts.",
    image: "/technology-festival-college-event.jpg",
    date: "Dec 15, 2024",
    time: "9:00 AM",
    location: "Main Auditorium",
    category: "Technology",
    club: "Tech Club",
    attendees: 180,
    maxAttendees: 200,
    price: 0,
  },
  {
    id: "2",
    title: "Cultural Night",
    description: "Celebrate diversity with performances, food, and art from cultures around the world.",
    image: "/cultural-night-college-performance.jpg",
    date: "Dec 20, 2024",
    time: "6:00 PM",
    location: "Open Air Theatre",
    category: "Cultural",
    club: "Cultural Committee",
    attendees: 350,
    maxAttendees: 500,
    price: 5,
  },
  {
    id: "3",
    title: "AI Workshop",
    description: "Hands-on workshop on building AI applications with Python and modern frameworks.",
    image: "/ai-workshop-students-computers.jpg",
    date: "Dec 18, 2024",
    time: "2:00 PM",
    location: "Computer Lab 3",
    category: "Workshop",
    club: "AI Research Club",
    attendees: 28,
    maxAttendees: 30,
    price: 10,
  },
  {
    id: "4",
    title: "Sports Day",
    description: "Annual inter-department sports competition featuring cricket, football, basketball and more.",
    image: "/college-sports-day-athletics.jpg",
    date: "Dec 22, 2024",
    time: "8:00 AM",
    location: "Sports Ground",
    category: "Sports",
    club: "Sports Committee",
    attendees: 200,
    maxAttendees: 400,
    price: 0,
  },
  {
    id: "5",
    title: "Startup Pitch Competition",
    description: "Present your startup ideas to investors and industry mentors for feedback and funding opportunities.",
    image: "/startup-pitch-business-presentation.jpg",
    date: "Dec 25, 2024",
    time: "10:00 AM",
    location: "Business School Auditorium",
    category: "Business",
    club: "E-Cell",
    attendees: 45,
    maxAttendees: 50,
    price: 15,
  },
  {
    id: "6",
    title: "Photography Exhibition",
    description: "Showcase of student photography capturing campus life, nature, and creative perspectives.",
    image: "/photography-exhibition-art-gallery.jpg",
    date: "Dec 28, 2024",
    time: "11:00 AM",
    location: "Art Gallery",
    category: "Art",
    club: "Photography Club",
    attendees: 80,
    maxAttendees: 150,
    price: 0,
  },
]

const categories = ["All", "Technology", "Cultural", "Workshop", "Sports", "Business", "Art"]

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceFilter, setPriceFilter] = useState("all")

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" && event.price === 0) ||
      (priceFilter === "paid" && event.price > 0)
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Explore Events</h1>
        <p className="text-muted-foreground">Discover and register for upcoming campus events</p>
      </div>

      {/* Filters */}
      <div className="glass rounded-2xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger className="w-full md:w-32">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>

          {/* View Toggle */}
          <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", viewMode === "grid" && "bg-background shadow-sm")}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", viewMode === "list" && "bg-background shadow-sm")}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-muted-foreground">
        Showing {filteredEvents.length} event{filteredEvents.length !== 1 && "s"}
      </p>

      {/* Events Grid */}
      <div className={cn("grid gap-6", viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1")}>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No events found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All")
              setPriceFilter("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
