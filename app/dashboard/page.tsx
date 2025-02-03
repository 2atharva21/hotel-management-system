import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BedIcon, UtensilsIcon, MessageSquareIcon, CalendarIcon } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="room">Room</TabsTrigger>
          <TabsTrigger value="mess">Mess</TabsTrigger>
          <TabsTrigger value="complaints">Complaints</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Room Number</CardTitle>
                <BedIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">A-101</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mess Balance</CardTitle>
                <UtensilsIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$50.00</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Complaints</CardTitle>
                <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payment Due</CardTitle>
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15 Mar 2024</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>Stay updated with the latest hostel news</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>03/01/2024:</strong> Maintenance work scheduled for Block A on Saturday
                </li>
                <li>
                  <strong>02/28/2024:</strong> New gym equipment arriving next week
                </li>
                <li>
                  <strong>02/25/2024:</strong> Reminder: Keep common areas clean
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="room" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Room Details</CardTitle>
              <CardDescription>Your current room information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span>Room Number:</span>
                  <span className="font-medium">A-101</span>
                </div>
                <div className="flex justify-between">
                  <span>Floor:</span>
                  <span className="font-medium">1st Floor</span>
                </div>
                <div className="flex justify-between">
                  <span>Room Type:</span>
                  <span className="font-medium">Double Sharing</span>
                </div>
                <div className="flex justify-between">
                  <span>Roommate:</span>
                  <span className="font-medium">Jane Smith</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button>Request Room Change</Button>
        </TabsContent>
        <TabsContent value="mess" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Menu</CardTitle>
              <CardDescription>Meal options for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div>
                  <h3 className="font-semibold">Breakfast (7:00 AM - 9:00 AM)</h3>
                  <p>Oatmeal, Fresh Fruits, Toast, Eggs</p>
                </div>
                <div>
                  <h3 className="font-semibold">Lunch (12:00 PM - 2:00 PM)</h3>
                  <p>Grilled Chicken, Rice, Mixed Vegetables, Salad</p>
                </div>
                <div>
                  <h3 className="font-semibold">Dinner (7:00 PM - 9:00 PM)</h3>
                  <p>Pasta, Garlic Bread, Soup, Ice Cream</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button>Submit Meal Feedback</Button>
        </TabsContent>
        <TabsContent value="complaints" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Complaints</CardTitle>
              <CardDescription>Status of your recent maintenance requests</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Faulty Air Conditioner</span>
                  <span className="text-yellow-500">In Progress</span>
                </li>
                <li className="flex justify-between">
                  <span>Leaking Faucet</span>
                  <span className="text-green-500">Resolved</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Button>Submit New Complaint</Button>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Your recent payments and dues</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>February 2024 Rent</span>
                  <span className="text-green-500">Paid</span>
                </li>
                <li className="flex justify-between">
                  <span>January 2024 Mess Fee</span>
                  <span className="text-green-500">Paid</span>
                </li>
                <li className="flex justify-between">
                  <span>March 2024 Rent</span>
                  <span className="text-red-500">Due</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Button>Make Payment</Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}

