import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Not Found</h2>
          <p className="text-gray-600 mb-6">The car you're looking for doesn't exist or has been removed.</p>
          <Link href="/cars">
            <Button className="bg-blue-600 hover:bg-blue-700">Browse All Cars</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
