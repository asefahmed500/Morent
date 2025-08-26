"use client"

import { Star, Heart, Fuel, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header from "@/components/header"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCarById, allCars } from "@/lib/car-data"
import { useState } from "react"

interface CarDetailPageProps {
  params: {
    id: string
  }
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const carId = Number.parseInt(params.id)
  const car = getCarById(carId)

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const carImages = [
    car?.image || "/placeholder.svg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v1SDaXlIEPeCbVqfbQt8IaQsL9u2Nm.png", // Interior image 1
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1loepGMO9jjaIKzeonsC3UdMEc9UKN.png", // Interior image 2
  ]

  if (!car) {
    notFound()
  }

  const recentCars = allCars.filter((c) => c.id !== car.id).slice(0, 2)
  const recommendationCars = allCars.filter((c) => c.id !== car.id && c.type === "SUV").slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Car Hero and Images */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                      Sports car with the best design and acceleration
                    </h1>
                    <p className="text-blue-100 mt-3 text-base">
                      Safety and comfort while driving a futuristic and elegant sports car
                    </p>
                  </div>
                  <div className="flex justify-center pt-4">
                    <img
                      src={carImages[selectedImageIndex] || "/placeholder.svg"}
                      alt={car.name}
                      className="w-full max-w-sm h-auto object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {carImages.map((image, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden cursor-pointer transition-colors ${
                    selectedImageIndex === index ? "border-2 border-blue-500" : "hover:border-blue-500"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <CardContent className="p-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Car Details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>
                    <div className="flex items-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= Math.floor(car.rating || 4) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{car.reviewCount || 440}+ Reviewer</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className={`h-5 w-5 ${car.liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                  </Button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {car.description ||
                    "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'."}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Type Car</span>
                    <span className="font-medium text-gray-900">{car.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-medium text-gray-900">{car.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Steering</span>
                    <span className="font-medium text-gray-900">{car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Gasoline</span>
                    <span className="font-medium text-gray-900">{car.fuel}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-gray-900">${car.price}.00/</span>
                      <span className="text-gray-500">days</span>
                    </div>
                    {car.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">${car.originalPrice}.00</div>
                    )}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Rent Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
                <Badge className="bg-blue-600 text-white">13</Badge>
              </div>

              <div className="space-y-6">
                {/* Review 1 */}
                <div className="flex space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/avatar-alex.png" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Alex Stanton</h4>
                        <p className="text-sm text-gray-500">CEO at Bukalapak</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">21 July 2022</p>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We are very happy with the service from the MORENT App. Morent has a low price...
                    </p>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="flex space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/avatar-skylar.png" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Skylar Dias</h4>
                        <p className="text-sm text-gray-500">CEO at Amazon</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">20 July 2022</p>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We are greatly helped by the services of the MORENT Application. Morent has a low...
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button variant="link" className="text-blue-600">
                  Show All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Car</h2>
            <Link href="/cars">
              <Button variant="link" className="text-blue-600">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentCars.map((recentCar) => (
              <Card key={recentCar.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{recentCar.name}</h3>
                      <p className="text-sm text-gray-500">{recentCar.type}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className={`h-5 w-5 ${recentCar.liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                    </Button>
                  </div>
                  <div className="mb-6">
                    <img
                      src={recentCar.image || "/placeholder.svg"}
                      alt={recentCar.name}
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-4 w-4" />
                      <span>{recentCar.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Settings className="h-4 w-4" />
                      <span>{recentCar.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{recentCar.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-bold text-gray-900">${recentCar.price}.00/</span>
                        <span className="text-gray-500">day</span>
                      </div>
                      {recentCar.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">${recentCar.originalPrice}.00</div>
                      )}
                    </div>
                    <Link href={`/cars/${recentCar.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">Rent Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recommendation Car</h2>
            <Link href="/cars">
              <Button variant="link" className="text-blue-600">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendationCars.map((recCar) => (
              <Card key={recCar.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{recCar.name}</h3>
                      <p className="text-sm text-gray-500">{recCar.type}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className={`h-5 w-5 ${recCar.liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                    </Button>
                  </div>
                  <div className="mb-6">
                    <img
                      src={recCar.image || "/placeholder.svg"}
                      alt={recCar.name}
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-4 w-4" />
                      <span>{recCar.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Settings className="h-4 w-4" />
                      <span>{recCar.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{recCar.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-bold text-gray-900">${recCar.price}.00/</span>
                        <span className="text-gray-500">day</span>
                      </div>
                      {recCar.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">${recCar.originalPrice}.00</div>
                      )}
                    </div>
                    <Link href={`/cars/${recCar.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">Rent Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
