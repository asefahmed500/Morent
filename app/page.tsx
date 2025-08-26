import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowUpDown, Fuel, Users, Zap } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"
import { allCars } from "@/lib/car-data"

export default function HomePage() {
  const popularCars = allCars.slice(0, 4)
  const recommendationCars = allCars.slice(4, 12)
  const mobileCars = [
    allCars.find((car) => car.id === 2), // Nissan
    allCars.find((car) => car.id === 5), // All New Rush
    allCars.find((car) => car.id === 6), // CR-V
    allCars.find((car) => car.id === 7), // All New Terios
    allCars.find((car) => car.id === 10), // New MG ZS
    allCars.find((car) => car.id === 9), // MG ZX Exclusive
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Hero Card 1 - Always visible */}
          <Card className="bg-blue-500 text-white overflow-hidden relative min-h-[280px] md:min-h-[320px]">
            <CardContent className="p-4 md:p-6 h-full">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  The Best Platform
                  <br />
                  for Car Rental
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Ease of doing a car rental safely and
                  <br />
                  reliably. Of course at a low price.
                </p>
                <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                  Rental Car
                </Button>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <img src="/hero-car-1.png" alt="Luxury car" className="w-40 md:w-56 h-auto object-contain" />
              </div>
            </CardContent>
          </Card>

          {/* Hero Card 2 - Hidden on mobile, visible on desktop */}
          <Card className="bg-blue-600 text-white overflow-hidden relative min-h-[280px] md:min-h-[320px] hidden md:block">
            <CardContent className="p-4 md:p-6 h-full flex flex-col justify-between">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Easy way to rent a
                  <br />
                  car at a low price
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Providing cheap car rental services
                  <br />
                  and safe and comfortable facilities.
                </p>
                <Button variant="secondary" className="bg-cyan-400 hover:bg-cyan-500 text-white border-0">
                  Rental Car
                </Button>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <img src="/hero-car-2.png" alt="Luxury sedan" className="w-40 md:w-56 h-auto object-contain" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pick-up and Drop-off Section */}
        <div className="relative mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Pick-up */}
            <Card className="bg-white">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <h3 className="font-semibold">Pick - Up</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Locations</label>
                    <select className="w-full p-2 text-sm text-gray-500 bg-transparent border-0 focus:outline-none">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="md:border-l border-gray-200 md:pl-4">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Date</label>
                    <select className="w-full p-2 text-sm text-gray-500 bg-transparent border-0 focus:outline-none">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="md:border-l border-gray-200 md:pl-4">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Time</label>
                    <select className="w-full p-2 text-sm text-gray-500 bg-transparent border-0 focus:outline-none">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drop-off */}
            <Card className="bg-white">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-4 rounded-full bg-blue-300 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <h3 className="font-semibold">Drop - Off</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Locations</label>
                    <select className="w-full p-2 text-sm text-gray-500 bg-transparent border-0 focus:outline-none">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="md:border-l border-gray-200 md:pl-4">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Date</label>
                    <select className="w-full p-2 text-sm text-gray-500 bg-transparent border-0 focus:outline-none">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="md:border-l border-gray-200 md:pl-4">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Time</label>
                    <select className="w-full p-2 text-sm text-gray-500 bg-transparent border-0 focus:outline-none">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Swap Button - Hidden on mobile */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button size="icon" className="bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg">
              <ArrowUpDown className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Popular Cars Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-gray-500">Popular Car</h2>
            <Link href="/cars">
              <Button variant="link" className="text-blue-500 text-sm">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularCars.map((car) => (
              <Card key={car.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{car.name}</h3>
                      <p className="text-sm text-gray-500">{car.type}</p>
                    </div>
                    <Button variant="ghost" size="icon" className={car.liked ? "text-red-500" : "text-gray-300"}>
                      <Heart className={`h-5 w-5 ${car.liked ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <div className="mb-4 flex items-center justify-center h-20">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-4 w-4" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{car.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900">${car.price}.00/</span>
                      <span className="text-sm text-gray-500">day</span>
                      {car.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">${car.originalPrice}.00</div>
                      )}
                    </div>
                    <Link href={`/cars/${car.id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2">Rent Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Car List */}
        <div className="block sm:hidden space-y-4 mb-8">
          {mobileCars.map((car) => (
            <Card key={car.id} className="bg-white shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <Button variant="ghost" size="icon" className={car.liked ? "text-red-500" : "text-gray-300"}>
                    <Heart className={`h-5 w-5 ${car.liked ? "fill-current" : ""}`} />
                  </Button>
                </div>
                <div className="mb-4 flex items-center justify-center h-16">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{car.capacity}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${car.price}.00/</span>
                    <span className="text-sm text-gray-500">day</span>
                    {car.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">${car.originalPrice}.00</div>
                    )}
                  </div>
                  <Link href={`/cars/${car.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2">Rent Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendation Cars Section */}
        <div className="mb-8 hidden sm:block">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-gray-500">Recommendation Car</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recommendationCars.map((car) => (
              <Card key={car.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{car.name}</h3>
                      <p className="text-sm text-gray-500">{car.type}</p>
                    </div>
                    <Button variant="ghost" size="icon" className={car.liked ? "text-red-500" : "text-gray-300"}>
                      <Heart className={`h-5 w-5 ${car.liked ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <div className="mb-4 flex items-center justify-center h-20">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-4 w-4" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{car.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900">${car.price}.00/</span>
                      <span className="text-sm text-gray-500">day</span>
                      {car.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">${car.originalPrice}.00</div>
                      )}
                    </div>
                    <Link href={`/cars/${car.id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2">Rent Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="text-center mb-8">
          <Link href="/cars">
            <Button className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8">Show more car</Button>
          </Link>
          <div className="text-right text-sm text-gray-500 mt-2">120 Car</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8 md:mt-16">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="text-xl md:text-2xl font-bold text-blue-500 mb-4">MORENT</div>
              <p className="text-gray-600 text-sm">
                Our vision is to provide convenience
                <br />
                and help increase your sales business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Socials</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">©2022 MORENT. All rights reserved</p>
            <div className="flex space-x-4 md:space-x-6 text-sm text-gray-600 mt-4 md:mt-0">
              <span>Privacy & Policy</span>
              <span>Terms & Condition</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
