"use client"

import { useEffect, useState } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const COLORS = ["#0088FE", "#00C49F"]

export function RoomAvailability() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([
      { name: "Occupied", value: 400 },
      { name: "Vacant", value: 100 },
    ])
  }, [])

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

