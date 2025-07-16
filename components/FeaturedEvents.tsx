"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award, Zap, Cpu, Network } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedEvents() {
  const events = [
    {
      id: 1,
      name: "Sui DevCon 2025",
      location: "San Francisco, USA",
      date: "March 15, 2025",
      attendees: 5000,
      badgeDesign: "Neural Network",
      image: "/placeholder.svg?height=300&width=400",
      category: "Technology",
      rarity: "Legendary",
      level: 5,
      description: "The premier Sui blockchain developer conference featuring cutting-edge innovations",
    },
    {
      id: 2,
      name: "Web3 AI Summit",
      location: "Singapore",
      date: "April 10, 2025",
      attendees: 3500,
      badgeDesign: "Quantum Core",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI",
      rarity: "Epic",
      level: 4,
      description: "Exploring the intersection of artificial intelligence and blockchain technology",
    },
    {
      id: 3,
      name: "DeFi Innovation Lab",
      location: "London, UK",
      date: "May 20, 2025",
      attendees: 2800,
      badgeDesign: "Cyber Prism",
      image: "/placeholder.svg?height=300&width=400",
      category: "DeFi",
      rarity: "Rare",
      level: 3,
      description: "Revolutionary decentralized finance protocols and smart contract innovations",
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
      case "Technology":
        return Cpu
      case "AI":
        return Network
      case "DeFi":
        return Zap
      default:
        return Award
    }
  }

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 sui-gradient rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 cyber-gradient rounded-full opacity-5 blur-3xl"></div>

      <div className="relative container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-sui-500/30 mb-6">
            <Zap className="w-4 h-4 text-sui-400 mr-2" />
            <span className="text-sm font-medium text-sui-200">Featured Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Next-Gen <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Join exclusive tech events and earn unique NFT badges that evolve with your journey
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {events.map((event, index) => {
            const IconComponent = getCategoryIcon(event.category)
            return (
              <Card
                key={event.id}
                className="card-cyber glass-dark border-sui-500/20 overflow-hidden hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    width={400}
                    height={300}
                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${getRarityColor(event.rarity)} font-medium text-xs px-2 py-1`}>
                      {event.rarity}
                    </Badge>
                    <div className="glass-effect px-2 py-1 rounded-full text-xs text-white">Level {event.level}</div>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 glass-effect rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-sui-400" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-sui-400 transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base mb-4 line-clamp-2">{event.description}</p>

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
                      <span>{event.attendees.toLocaleString()} attendees</span>
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

        {/* View All Button */}
        <div className="text-center">
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 glass-effect border-sui-500/50 text-white hover:bg-sui-500/10 transition-all duration-300 bg-transparent"
            >
              <Network className="w-5 h-5 mr-2" />
              Explore All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
