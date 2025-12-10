"use client"

import { useState, useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import { RefreshCw, Users, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QRAttendanceProps {
  eventId: string
  eventName: string
  totalRegistered: number
  attendedCount: number
}

export function QRAttendance({ eventId, eventName, totalRegistered, attendedCount }: QRAttendanceProps) {
  const [qrValue, setQrValue] = useState("")
  const [timeLeft, setTimeLeft] = useState(30)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const generateQRCode = () => {
    const timestamp = Date.now()
    const code = `${eventId}-${timestamp}-${Math.random().toString(36).substring(7)}`
    setQrValue(code)
    setTimeLeft(30)
  }

  useEffect(() => {
    generateQRCode()
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          generateQRCode()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [eventId])

  const handleManualRefresh = () => {
    setIsRefreshing(true)
    generateQRCode()
    setTimeout(() => setIsRefreshing(false), 500)
  }

  const attendancePercentage = Math.round((attendedCount / totalRegistered) * 100)

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">{eventName}</h3>
          <p className="text-muted-foreground">Dynamic QR Attendance</p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleManualRefresh}
          className={cn(isRefreshing && "animate-spin")}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* QR Code Display */}
      <div className="flex flex-col items-center">
        <div className="relative p-4 bg-white rounded-2xl shadow-lg">
          <QRCodeSVG value={qrValue} size={200} level="H" includeMargin />
          {/* Timer overlay */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-card rounded-full shadow-md flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className={cn("font-mono font-bold", timeLeft <= 5 ? "text-destructive" : "text-foreground")}>
              {timeLeft}s
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-6 text-center">
          QR code refreshes every 30 seconds for security
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center p-4 rounded-xl bg-secondary/50">
          <Users className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
          <p className="text-2xl font-bold">{totalRegistered}</p>
          <p className="text-xs text-muted-foreground">Registered</p>
        </div>
        <div className="text-center p-4 rounded-xl bg-green-500/10">
          <CheckCircle2 className="h-5 w-5 mx-auto mb-2 text-green-500" />
          <p className="text-2xl font-bold text-green-500">{attendedCount}</p>
          <p className="text-xs text-muted-foreground">Attended</p>
        </div>
        <div className="text-center p-4 rounded-xl bg-primary/10">
          <div className="text-2xl font-bold text-primary">{attendancePercentage}%</div>
          <p className="text-xs text-muted-foreground mt-2">Attendance</p>
        </div>
      </div>
    </div>
  )
}
