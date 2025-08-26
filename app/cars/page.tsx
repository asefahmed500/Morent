"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import FilterSidebar from "@/components/filter-sidebar"
import PickupDropoffForms from "@/components/pickup-dropoff-forms"
import CarCard from "@/components/car-card"
import { allCars } from "@/lib/car-data"
import { useSearchParams } from "next/navigation"

export default function CarsPage() {
  const searchParams = useSearchParams()
  const urlSearchQuery = searchParams.get('search') || ""
  
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([200])
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Update search query when URL parameter changes
  useEffect(() => {
    if (urlSearchQuery !== searchQuery) {
      setSearchQuery(urlSearchQuery)
    }
  }, [urlSearchQuery])

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const matchesSearch = !searchQuery || 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.type.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(car.type)

      const matchesCapacity = selectedCapacities.length === 0 || selectedCapacities.includes(car.capacity)

      const matchesPrice = car.price <= priceRange[0]

      return matchesSearch && matchesType && matchesCapacity && matchesPrice
    })
  }, [searchQuery, selectedTypes, selectedCapacities, priceRange])

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    }
  }

  const handleCapacityChange = (capacity: string, checked: boolean) => {
    if (checked) {
      setSelectedCapacities([...selectedCapacities, capacity])
    } else {
      setSelectedCapacities(selectedCapacities.filter((c) => c !== capacity))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            selectedTypes={selectedTypes}
            selectedCapacities={selectedCapacities}
            priceRange={priceRange}
            showMobileFilters={showMobileFilters}
            onTypeChange={handleTypeChange}
            onCapacityChange={handleCapacityChange}
            onPriceChange={setPriceRange}
            onToggleMobileFilters={() => setShowMobileFilters(!showMobileFilters)}
          />

          {/* Main Content */}
          <main className="flex-1">
            <PickupDropoffForms />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id.toString()} // Convert numeric ID to string
                  name={car.name}
                  type={car.type}
                  image={car.image}
                  fuel={car.fuel}
                  transmission={car.transmission}
                  capacity={car.capacity}
                  price={car.price}
                  originalPrice={car.originalPrice}
                  liked={car.liked}
                />
              ))}
            </div>

            {/* Show More Button */}
            {filteredCars.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No cars found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedTypes([])
                    setSelectedCapacities([])
                    setPriceRange([200])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <Button className="px-8 bg-blue-600 hover:bg-blue-700 text-white">Show more car</Button>
                <p className="text-sm text-gray-400 mt-2">{filteredCars.length} Car</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}