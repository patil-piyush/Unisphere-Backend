"use client"

import type React from "react"
import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { cn } from "@/lib/utils"

export default function ClubAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background" suppressHydrationWarning>
      {/* Sidebar */}
      <aside
        suppressHydrationWarning
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r border-border/50 bg-card/50 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <DashboardSidebar role="club-admin" />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden" suppressHydrationWarning>
        {/* Header */}
        <header suppressHydrationWarning className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-30">
          <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* Page Content */}
        <main suppressHydrationWarning className="flex-1 overflow-y-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          suppressHydrationWarning
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
