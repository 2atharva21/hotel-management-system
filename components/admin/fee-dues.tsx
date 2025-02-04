import { Progress } from "@/components/ui/progress"

export function FeeDues() {
  const dues = [
    { name: "John Doe", amount: 500, paid: 300 },
    { name: "Jane Smith", amount: 750, paid: 500 },
    { name: "Bob Johnson", amount: 1000, paid: 250 },
  ]

  return (
    <div className="space-y-8">
      {dues.map((due, index) => (
        <div key={index} className="flex items-center">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{due.name}</p>
            <p className="text-sm text-muted-foreground">
              ${due.paid} / ${due.amount}
            </p>
          </div>
          <div className="ml-auto">
            <Progress value={(due.paid / due.amount) * 100} className="w-[80px]" />
          </div>
        </div>
      ))}
    </div>
  )
}

