"use client"

import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface FilterSidebarProps {
  selectedTypes: string[]
  selectedCapacities: string[]
  priceRange: number[]
  showMobileFilters: boolean
  onTypeChange: (type: string, checked: boolean) => void
  onCapacityChange: (capacity: string, checked: boolean) => void
  onPriceChange: (value: number[]) => void
  onToggleMobileFilters: () => void
}

export default function FilterSidebar({
  selectedTypes,
  selectedCapacities,
  priceRange,
  showMobileFilters,
  onTypeChange,
  onCapacityChange,
  onPriceChange,
  onToggleMobileFilters,
}: FilterSidebarProps) {
  const carTypes = [
    { name: "Sport", count: 10 },
    { name: "SUV", count: 12 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 14 },
  ]

  const capacityOptions = [
    { name: "2 People", count: 10 },
    { name: "4 People", count: 14 },
    { name: "6 People", count: 12 },
    { name: "8 or More", count: 16 },
  ]

  return (
    <aside className="w-full lg:w-80">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button variant="outline" className="w-full bg-transparent" onClick={onToggleMobileFilters}>
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Unified filter container without card divisions */}
      <div className={`${showMobileFilters ? "block" : "hidden"} lg:block bg-white p-6 space-y-8`}>
        {/* TYPE Section */}
        <div>
          <h3 className="font-semibold text-gray-500 text-xs uppercase tracking-wide mb-6">TYPE</h3>
          <div className="space-y-4">
            {carTypes.map((type) => (
              <div key={type.name} className="flex items-center space-x-3">
                <Checkbox
                  id={type.name}
                  checked={selectedTypes.includes(type.name)}
                  onCheckedChange={(checked) => onTypeChange(type.name, checked as boolean)}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label htmlFor={type.name} className="text-lg text-gray-600 flex-1 cursor-pointer font-medium">
                  {type.name} ({type.count})
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* CAPACITY Section */}
        <div>
          <h3 className="font-semibold text-gray-500 text-xs uppercase tracking-wide mb-6">CAPACITY</h3>
          <div className="space-y-4">
            {capacityOptions.map((capacity) => (
              <div key={capacity.name} className="flex items-center space-x-3">
                <Checkbox
                  id={capacity.name}
                  checked={selectedCapacities.includes(capacity.name)}
                  onCheckedChange={(checked) => onCapacityChange(capacity.name, checked as boolean)}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label htmlFor={capacity.name} className="text-lg text-gray-600 flex-1 cursor-pointer font-medium">
                  {capacity.name} ({capacity.count})
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* PRICE Section */}
        <div>
          <h3 className="font-semibold text-gray-500 text-xs uppercase tracking-wide mb-6">PRICE</h3>
          <div className="space-y-4">
            <div className="relative">
              <Slider
                value={priceRange}
                onValueChange={onPriceChange}
                max={200}
                step={1}
                className="w-full [&_[role=slider]]:bg-blue-600 [&_[role=slider]]:border-blue-600 [&_.relative]:bg-blue-600"
              />
            </div>
            <div className="text-lg text-gray-600 font-medium">Max. ${priceRange[0]}.00</div>
          </div>
        </div>
      </div>
    </aside>
  )
}