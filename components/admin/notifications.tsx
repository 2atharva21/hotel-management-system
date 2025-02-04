import { Bell } from "lucide-react"

export function Notifications() {
  const notifications = [
    { id: 1, message: "New application received", time: "5 minutes ago" },
    { id: 2, message: "Maintenance request for Room A101", time: "1 hour ago" },
    { id: 3, message: "Fee payment overdue for 5 students", time: "2 hours ago" },
  ]

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-start space-x-4 p-4 border rounded">
          <Bell className="h-5 w-5 mt-1" />
          <div>
            <p className="font-medium">{notification.message}</p>
            <p className="text-sm text-muted-foreground">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

