"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Award, Calendar, MapPin, Star, Heart, Eye, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Tech", "AI", "DeFi", "Web3", "Gaming"]

  const listings = [
    {
      id: 1,
      name: "Sui DevCon 2025",
      badgeDesign: "Neural Network",
      price: "25.8",
      currency: "SUI",
      seller: "0x1234...5678",
      sellerRating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
      category: "Tech",
      event: { date: "Mar 15, 2025", location: "San Francisco" },
      rarity: "Legendary",
      level: 5,
      views: 1234,
      likes: 189,
      listedDate: "2h ago",
    },
    {
      id: 2,
      name: "Web3 AI Summit",
      badgeDesign: "Quantum Core",
      price: "18.5",
      currency: "SUI",
      seller: "0x9876...4321",
      sellerRating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      category: "AI",
      event: { date: "Apr 10, 2025", location: "Singapore" },
      rarity: "Epic",
      level: 4,
      views: 856,
      likes: 124,
      listedDate: "1d ago",
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

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || listing.category === selectedCategory
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
              <ShoppingCart className="w-4 h-4 text-sui-400 mr-2" />
              <span className="text-sm font-medium text-sui-200">Marketplace</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              NFT <span className="gradient-text neon-pulse">Marketplace</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trade AI-powered event badges in the decentralized metaverse
            </p>
          </div>

          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 glass-dark border border-sui-500/20">
              <TabsTrigger value="browse" className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white">
                Browse
              </TabsTrigger>
              <TabsTrigger
                value="my-listings"
                className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white"
              >
                My Listings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="browse">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sui-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search badges..."
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="card-cyber glass-dark border-sui-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">12.4K</div>
                    <div className="text-sm text-gray-400">Listings</div>
                  </CardContent>
                </Card>
                <Card className="card-cyber glass-dark border-sui-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">3.2K</div>
                    <div className="text-sm text-gray-400">Traders</div>
                  </CardContent>
                </Card>
                <Card className="card-cyber glass-dark border-sui-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">18.7</div>
                    <div className="text-sm text-gray-400">Avg Price</div>
                  </CardContent>
                </Card>
                <Card className="card-cyber glass-dark border-sui-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">156K</div>
                    <div className="text-sm text-gray-400">Volume</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredListings.map((listing, index) => (
                  <Card
                    key={listing.id}
                    className="card-cyber glass-dark border-sui-500/20 overflow-hidden hover-lift group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <Badge className={`${getRarityColor(listing.rarity)} font-medium text-xs px-2 py-1`}>
                          {listing.rarity}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="glass-effect px-2 py-1 rounded-full text-xs text-white">L{listing.level}</div>
                      </div>
                      <div className="absolute bottom-3 right-3 flex gap-2">
                        <button className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Heart className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Eye className="w-4 h-4 text-gray-300" />
                        </button>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white truncate group-hover:text-sui-400 transition-colors">
                          {listing.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-400">{listing.sellerRating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400 mb-3">{listing.badgeDesign}</p>

                      <div className="space-y-1 mb-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1 text-sui-400" />
                          <span>{listing.event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1 text-sui-400" />
                          <span>{listing.event.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold gradient-text">
                          {listing.price} <span className="text-sm text-gray-400">{listing.currency}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {listing.views} • {listing.likes}♥
                        </div>
                      </div>

                      <Button className="w-full btn-cyber sui-gradient text-white hover:opacity-90 transition-all duration-300">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>

                      <div className="mt-2 text-xs text-gray-500 text-center">
                        {listing.listedDate} by {listing.seller}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-listings">
              <div className="text-center py-16">
                <div className="w-24 h-24 glass-effect rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-12 h-12 text-sui-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">No listings yet</h3>
                <p className="text-gray-400 mb-6">Start by listing one of your badges</p>
                <Button className="btn-cyber sui-gradient text-white">
                  <Award className="w-4 h-4 mr-2" />
                  List Badge
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
