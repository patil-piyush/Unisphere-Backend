"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Users, DollarSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    maxAttendees: "",
    isFree: true,
    ticketPrice: "",
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Back Button */}
      <Link href="/club-admin/events">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>
      </Link>

      {/* Form */}
      <div className="glass bg-card/70 rounded-xl p-8 border border-border/50">
        <h1 className="text-3xl font-bold mb-6">Create New Event</h1>

        <form className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., Web Development Workshop"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your event..."
              rows={4}
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="e.g., Main Auditorium"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Max Attendees */}
          <div className="space-y-2">
            <Label htmlFor="maxAttendees">Max Attendees</Label>
            <Input
              id="maxAttendees"
              name="maxAttendees"
              type="number"
              placeholder="e.g., 100"
              value={formData.maxAttendees}
              onChange={handleChange}
            />
          </div>

          {/* Ticket Price */}
          <div className="space-y-2">
            <Label>Ticket Price</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="ticketType"
                  value="free"
                  checked={formData.isFree}
                  onChange={() => setFormData({ ...formData, isFree: true })}
                />
                <span>Free Event</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="ticketType"
                  value="paid"
                  checked={!formData.isFree}
                  onChange={() => setFormData({ ...formData, isFree: false })}
                />
                <span>Paid Event</span>
              </label>
            </div>
            {!formData.isFree && (
              <div className="mt-2">
                <Input
                  name="ticketPrice"
                  type="number"
                  placeholder="Price in INR"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link href="/club-admin/events" className="flex-1">
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </Link>
            <Button className="flex-1 bg-accent hover:bg-accent/90">
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
