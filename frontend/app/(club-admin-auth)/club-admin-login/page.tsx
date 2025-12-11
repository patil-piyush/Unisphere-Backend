"use client"

import { ClubAdminLoginForm } from "./components/club-admin-login-form"

export default function ClubAdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-background to-secondary dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="w-full max-w-md px-6 py-12 relative z-10">
        <ClubAdminLoginForm />
      </div>
    </div>
  )
}
