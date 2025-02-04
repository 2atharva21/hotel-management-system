"use client"

import { useState } from "react"

const rooms = [
  { id: "A101", status: "occupied" },
  { id: "A102", status: "vacant" },
  { id: "A103", status: "maintenance" },
  { id: "A104", status: "occupied" },
  { id: "A105", status: "vacant" },
  { id: "A106", status: "occupied" },
]

export function FloorPlan() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <div className="grid grid-cols-3 gap-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`p-4 border rounded cursor-pointer ${
            room.status === "occupied" ? "bg-red-100" : room.status === "vacant" ? "bg-green-100" : "bg-yellow-100"
          }`}
          onClick={() => setSelectedRoom(room)}
        >
          {room.id}
        </div>
      ))}
      {selectedRoom && (
        <div className="col-span-3 mt-4 p-4 border rounded">
          <h3 className="font-bold">Room Details: {selectedRoom.id}</h3>
          <p>Status: {selectedRoom.status}</p>
          {/* Add more room details here */}
        </div>
      )}
    </div>
  )
}

