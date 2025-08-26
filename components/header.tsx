"use client"

import { Search, Heart, Bell, Filter, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { useState } from "react"

interface HeaderProps {
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export default function Header({ searchQuery = "", onSearchChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    // Changed bg-card to bg-white to make the navbar background white instead of transparent
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-white">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="text-2xl font-bold text-blue-500">MORENT</div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-border pt-4 mt-6">
                    <div className="space-y-3">
                      <Link
                        href="/favorites"
                        className="flex items-center px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Heart className="h-5 w-5 mr-3" />
                        Favorites
                      </Link>
                      <Link
                        href="/notifications"
                        className="flex items-center px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Bell className="h-5 w-5 mr-3" />
                        Notifications
                        <Badge className="ml-auto">1</Badge>
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Filter className="h-5 w-5 mr-3" />
                        Settings
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-5 w-5 mr-3" />
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold text-blue-500">MORENT</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search something here"
                className="pl-10 pr-12 py-2 w-full border-border"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
              <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Button variant="ghost" size="icon" className="relative hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hidden md:flex">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs">1</Badge>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Filter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search something here"
              className="pl-10 pr-12 py-2 w-full"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
            <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}