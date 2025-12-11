"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Save } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    clubName: "Tech Club",
    description: "Exploring latest technologies and innovations",
    website: "https://techclub.college.edu",
    email: "techclub@college.edu",
    phone: "+91 9876543210",
  })

  const handleChange = (e: any) => {
    setSettings({ ...settings, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Club Settings</h1>
        <p className="text-muted-foreground">Manage your club information</p>
      </div>

      {/* Settings Form */}
      <div className="glass bg-card/70 rounded-xl p-8 border border-border/50">
        <form className="space-y-6">
          {/* Club Name */}
          <div className="space-y-2">
            <Label htmlFor="clubName">Club Name</Label>
            <Input
              id="clubName"
              name="clubName"
              value={settings.clubName}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={settings.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              value={settings.website}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={settings.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
            />
          </div>

          {/* Save Button */}
          <Button className="w-full bg-accent hover:bg-accent/90">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </form>
      </div>

      {/* Danger Zone */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-destructive/20">
        <h2 className="text-xl font-bold text-destructive mb-4">Danger Zone</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Delete your club. This action is irreversible.
        </p>
        <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
          Delete Club
        </Button>
      </div>
    </div>
  )
}
