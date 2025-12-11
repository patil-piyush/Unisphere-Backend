"use client"

import { FileText, Download, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const reports = [
  {
    id: 1,
    name: "Monthly Activity Report",
    type: "PDF",
    date: "Dec 10, 2024",
    size: "2.5 MB",
    status: "Available",
  },
  {
    id: 2,
    name: "Budget Utilization Q4",
    type: "Excel",
    date: "Dec 8, 2024",
    size: "1.2 MB",
    status: "Available",
  },
  {
    id: 3,
    name: "Attendance Analytics",
    type: "PDF",
    date: "Dec 5, 2024",
    size: "3.1 MB",
    status: "Available",
  },
]

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Reports & Analytics</h1>
        <p className="text-muted-foreground">Generate and download campus reports</p>
      </div>

      {/* Generate Report */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-4">Generate New Report</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="px-4 py-2 rounded-lg border border-border/50 bg-background">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annual</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-border/50 bg-background">
              <option>Activity Report</option>
              <option>Budget Report</option>
              <option>Attendance Report</option>
            </select>
            <Button className="bg-primary hover:bg-primary/90">
              <FileText className="mr-2 h-4 w-4" />
              Generate
            </Button>
          </div>
        </div>
      </div>

      {/* Available Reports */}
      <div className="glass bg-card/70 rounded-xl p-6 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Available Reports</h2>
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-border/50 transition-colors">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{report.name}</h3>
                  <p className="text-sm text-muted-foreground">{report.date} • {report.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{report.type}</Badge>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
