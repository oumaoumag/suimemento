"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award, Search, Zap, Cpu, Network } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Tech", "AI", "DeFi", "Web3", "Gaming"]

  const events = [
    {
      id: 1,
      name: "Sui DevCon 2025",
      location: "San Francisco",
      date: "Mar 15, 2025",
      attendees: 5000,
      badgeDesign: "Neural Network",
      image: "/placeholder.svg?height=300&width=400",
      category: "Tech",
      description: "Premier Sui blockchain developer conference",
      rarity: "Legendary",
      level: 5,
    },
    {
      id: 2,
      name: "Web3 AI Summit",
      location: "Singapore",
      date: "Apr 10, 2025",
      attendees: 3500,
      badgeDesign: "Quantum Core",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI",
      description: "AI meets blockchain technology",
      rarity: "Epic",
      level: 4,
    },
    {
      id: 3,
      name: "DeFi Innovation Lab",
      location: "London",
      date: "May 20, 2025",
      attendees: 2800,
      badgeDesign: "Cyber Prism",
      image: "/placeholder.svg?height=300&width=400",
      category: "DeFi",
      description: "Revolutionary DeFi protocols",
      rarity: "Rare",
      level: 3,
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      case "Epic":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      case "Rare":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Tech":
        return Cpu
      case "AI":
        return Network
      case "DeFi":
        return Zap
      default:
        return Award
    }
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 sui-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="relative container-responsive py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-sui-500/30 mb-6">
              <Calendar className="w-4 h-4 text-sui-400 mr-2" />
              <span className="text-sm font-medium text-sui-200">Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Tech <span className="gradient-text neon-pulse">Events</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join blockchain events and earn AI-powered NFT badges
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sui-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base glass-dark border-sui-500/30 text-white placeholder-gray-400 focus:border-sui-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "btn-cyber sui-gradient text-white"
                      : "glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => {
              const IconComponent = getCategoryIcon(event.category)
              return (
                <Card
                  key={event.id}
                  className="card-cyber glass-dark border-sui-500/20 overflow-hidden hover-lift group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getRarityColor(event.rarity)} font-medium text-xs px-2 py-1`}>
                        {event.rarity}
                      </Badge>
                      <div className="glass-effect px-2 py-1 rounded-full text-xs text-white">L{event.level}</div>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 glass-effect rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-sui-400" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sui-400 transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 text-sui-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 text-sui-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2 text-sui-400" />
                        <span>{event.attendees.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">{event.badgeDesign}</span>
                      </div>
                    </div>

                    <Button className="w-full btn-cyber sui-gradient text-white hover:opacity-90 transition-all duration-300">
                      <Zap className="w-4 h-4 mr-2" />
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 glass-effect rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-sui-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">No events found</h3>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="btn-cyber sui-gradient text-white"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
