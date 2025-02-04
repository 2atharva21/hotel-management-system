import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentApplications() {
  return (
    <div className="space-y-8">
      {["Alice Johnson", "Bob Smith", "Charlie Brown"].map((name, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">Applied for room {["A101", "B205", "C310"][index]}</p>
          </div>
          <div className="ml-auto font-medium">{["Pending", "Approved", "Under Review"][index]}</div>
        </div>
      ))}
    </div>
  )
}

