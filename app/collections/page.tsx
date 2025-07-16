"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Award, Calendar, MapPin, Grid3X3, List, Eye, Heart } from "lucide-react"
import Image from "next/image"

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = ["All", "Tech", "AI", "DeFi", "Web3", "Gaming"]

  const badges = [
    {
      id: 1,
      name: "Sui DevCon 2025",
      badgeDesign: "Neural Network",
      image: "/placeholder.svg?height=300&width=300",
      event: { date: "Mar 15, 2025", location: "San Francisco" },
      rarity: "Legendary",
      level: 5,
      mintDate: "Mar 15, 2025",
      category: "Tech",
      marketValue: "25.8 SUI",
      views: 1234,
      likes: 189,
    },
    {
      id: 2,
      name: "Web3 AI Summit",
      badgeDesign: "Quantum Core",
      image: "/placeholder.svg?height=300&width=300",
      event: { date: "Apr 10, 2025", location: "Singapore" },
      rarity: "Epic",
      level: 4,
      mintDate: "Apr 10, 2025",
      category: "AI",
      marketValue: "18.5 SUI",
      views: 856,
      likes: 124,
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

  const filteredBadges = badges.filter((badge) => {
    const matchesSearch = badge.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || badge.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const collectionStats = {
    totalBadges: badges.length,
    totalValue: badges.reduce((sum, badge) => sum + Number.parseFloat(badge.marketValue.split(" ")[0]), 0),
    rarityBreakdown: {
      Legendary: badges.filter((b) => b.rarity === "Legendary").length,
      Epic: badges.filter((b) => b.rarity === "Epic").length,
      Rare: badges.filter((b) => b.rarity === "Rare").length,
    },
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 sui-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="relative container-responsive py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-sui-500/30 mb-6">
              <Award className="w-4 h-4 text-sui-400 mr-2" />
              <span className="text-sm font-medium text-sui-200">Collections</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              My <span className="gradient-text neon-pulse">Collections</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Manage and showcase your NFT badge collection</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-cyber glass-dark border-sui-500/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{collectionStats.totalBadges}</div>
                <div className="text-sm text-gray-400">Total Badges</div>
              </CardContent>
            </Card>
            <Card className="card-cyber glass-dark border-sui-500/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{collectionStats.totalValue.toFixed(1)}</div>
                <div className="text-sm text-gray-400">Value (SUI)</div>
              </CardContent>
            </Card>
            <Card className="card-cyber glass-dark border-sui-500/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{collectionStats.rarityBreakdown.Legendary}</div>
                <div className="text-sm text-gray-400">Legendary</div>
              </CardContent>
            </Card>
            <Card className="card-cyber glass-dark border-sui-500/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">
                  {Math.round((collectionStats.totalValue / collectionStats.totalBadges) * 10) / 10}
                </div>
                <div className="text-sm text-gray-400">Avg Value</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 glass-dark border border-sui-500/20">
              <TabsTrigger value="all" className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white">
                All ({badges.length})
              </TabsTrigger>
              <TabsTrigger
                value="legendary"
                className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white"
              >
                Legendary ({collectionStats.rarityBreakdown.Legendary})
              </TabsTrigger>
              <TabsTrigger value="epic" className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white">
                Epic ({collectionStats.rarityBreakdown.Epic})
              </TabsTrigger>
              <TabsTrigger value="rare" className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white">
                Rare ({collectionStats.rarityBreakdown.Rare})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
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
                <div className="flex border border-sui-500/30 rounded-lg glass-dark">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-sui-500/20 text-sui-400" : "text-gray-400"}`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-sui-500/20 text-sui-400" : "text-gray-400"}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredBadges.map((badge, index) => (
                    <Card
                      key={badge.id}
                      className="card-cyber glass-dark border-sui-500/20 overflow-hidden hover-lift group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={badge.image || "/placeholder.svg"}
                          alt={badge.name}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getRarityColor(badge.rarity)} font-medium text-xs px-2 py-1`}>
                            {badge.rarity}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="glass-effect px-2 py-1 rounded-full text-xs text-white">L{badge.level}</div>
                        </div>
                        <div className="absolute bottom-3 right-3 flex gap-2">
                          <div className="glass-effect px-2 py-1 rounded-full text-xs flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {badge.views}
                          </div>
                          <div className="glass-effect px-2 py-1 rounded-full text-xs flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {badge.likes}
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="font-bold text-white mb-2 group-hover:text-sui-400 transition-colors">
                          {badge.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3">{badge.badgeDesign}</p>

                        <div className="space-y-1 mb-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1 text-sui-400" />
                            <span>{badge.event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1 text-sui-400" />
                            <span>{badge.event.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-bold gradient-text">{badge.marketValue}</div>
                          <Badge className="bg-green-500/20 border border-green-500/30 text-green-300 text-xs">
                            Owned
                          </Badge>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1 glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                          >
                            Upgrade
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                          >
                            Sell
                          </Button>
                        </div>

                        <div className="mt-2 text-xs text-gray-500 text-center">Minted {badge.mintDate}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBadges.map((badge, index) => (
                    <Card
                      key={badge.id}
                      className="card-cyber glass-dark border-sui-500/20 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                          <Image
                            src={badge.image || "/placeholder.svg"}
                            alt={badge.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-white">{badge.name}</h3>
                              <Badge className={`${getRarityColor(badge.rarity)} font-medium text-xs px-2 py-1`}>
                                {badge.rarity}
                              </Badge>
                              <div className="glass-effect px-2 py-1 rounded-full text-xs">L{badge.level}</div>
                            </div>
                            <p className="text-gray-400 mb-2">{badge.badgeDesign}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1 text-sui-400" />
                                {badge.event.date}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1 text-sui-400" />
                                {badge.event.location}
                              </span>
                              <span className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {badge.views}
                              </span>
                              <span className="flex items-center">
                                <Heart className="w-4 h-4 mr-1" />
                                {badge.likes}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold gradient-text mb-2">{badge.marketValue}</div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                              >
                                Upgrade
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                              >
                                Sell
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {filteredBadges.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 glass-effect rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-sui-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">No badges found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search criteria</p>
                  <Button className="btn-cyber sui-gradient text-white">Discover Events</Button>
                </div>
              )}
            </TabsContent>

            {["legendary", "epic", "rare"].map((rarity) => (
              <TabsContent key={rarity} value={rarity}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {badges
                    .filter((badge) => badge.rarity.toLowerCase() === rarity)
                    .map((badge, index) => (
                      <Card
                        key={badge.id}
                        className="card-cyber glass-dark border-sui-500/20 overflow-hidden hover-lift group animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={badge.image || "/placeholder.svg"}
                            alt={badge.name}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className={`${getRarityColor(badge.rarity)} font-medium text-xs px-2 py-1`}>
                              {badge.rarity}
                            </Badge>
                          </div>
                          <div className="absolute top-3 right-3">
                            <div className="glass-effect px-2 py-1 rounded-full text-xs text-white">L{badge.level}</div>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <h3 className="font-bold text-white mb-2 group-hover:text-sui-400 transition-colors">
                            {badge.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-3">{badge.badgeDesign}</p>

                          <div className="space-y-1 mb-3 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1 text-sui-400" />
                              <span>{badge.event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1 text-sui-400" />
                              <span>{badge.event.location}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="text-lg font-bold gradient-text">{badge.marketValue}</div>
                            <Badge className="bg-green-500/20 border border-green-500/30 text-green-300 text-xs">
                              Owned
                            </Badge>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="flex-1 glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                            >
                              Upgrade
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                            >
                              Sell
                            </Button>
                          </div>

                          <div className="mt-2 text-xs text-gray-500 text-center">Minted {badge.mintDate}</div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
