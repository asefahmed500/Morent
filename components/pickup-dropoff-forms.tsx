import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PickupDropoffForms() {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Pick - Up</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-2">Locations</label>
                <select className="w-full p-3 border-0 bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-2">Date</label>
                <select className="w-full p-3 border-0 bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option>Select your date</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-2">Time</label>
                <select className="w-full p-3 border-0 bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-4 h-4 rounded-full bg-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Drop - Off</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-2">Locations</label>
                <select className="w-full p-3 border-0 bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-2">Date</label>
                <select className="w-full p-3 border-0 bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option>Select your date</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-2">Time</label>
                <select className="w-full p-3 border-0 bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <Button size="icon" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg w-12 h-12">
          <ArrowUpDown className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
