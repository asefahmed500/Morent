"use client"

import { Heart, Fuel, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

interface CarCardProps {
  id: number | string // Accept both number and string for flexibility
  name: string
  type: string
  image: string
  fuel: string
  transmission: string
  capacity: string
  price: number
  originalPrice?: number
  liked?: boolean
}

export default function CarCard({
  id,
  name,
  type,
  image,
  fuel,
  transmission,
  capacity,
  price,
  originalPrice,
  liked = false,
}: CarCardProps) {
  const [isLiked, setIsLiked] = useState(liked)

  const handleDoubleClick = () => {
    setIsLiked(!isLiked)
  }

  // Convert ID to string for URL
  const stringId = typeof id === 'number' ? id.toString() : id

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{name}</h3>
            <p className="text-sm text-gray-400">{type}</p>
          </div>
          <div onDoubleClick={handleDoubleClick} className="cursor-pointer">
            <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-300"}`} />
          </div>
        </div>

        <div className="mb-4 flex justify-center">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-24 object-contain" />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{capacity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-gray-900">${price}.00/</span>
              <span className="text-sm text-gray-400">day</span>
            </div>
            {originalPrice && <div className="text-sm text-gray-400 line-through">${originalPrice}.00</div>}
          </div>
          <Link href={`/cars/${stringId}`}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4">Rent Now</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}