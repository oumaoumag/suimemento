"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Calendar, TrendingUp, Settings, Copy, Trophy, Target, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const user = {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    displayName: "CyberExplorer",
    avatar: "/placeholder.svg?height=100&width=100",
    joinDate: "Jan 2024",
    totalBadges: 42,
    totalEvents: 28,
    marketplaceRating: 4.9,
    totalSales: 18,
    level: 12,
    xp: 4850,
    nextLevelXp: 5000,
  }

  const badges = [
    {
      id: 1,
      name: "Sui DevCon 2025",
      badgeDesign: "Neural Network",
      image: "/placeholder.svg?height=200&width=200",
      event: { date: "Mar 15, 2025", location: "San Francisco" },
      rarity: "Legendary",
      level: 5,
      mintDate: "Mar 15, 2025",
      category: "Tech",
    },
    {
      id: 2,
      name: "Web3 AI Summit",
      badgeDesign: "Quantum Core",
      image: "/placeholder.svg?height=200&width=200",
      event: { date: "Apr 10, 2025", location: "Singapore" },
      rarity: "Epic",
      level: 4,
      mintDate: "Apr 10, 2025",
      category: "AI",
    },
  ]

  const achievements = [
    {
      id: 1,
      name: "Neural Pioneer",
      description: "First 1000 users",
      icon: Trophy,
      earned: true,
      earnedDate: "Jan 2024",
    },
    {
      id: 2,
      name: "Event Enthusiast",
      description: "25+ events attended",
      icon: Calendar,
      earned: true,
      earnedDate: "Mar 2024",
    },
    {
      id: 3,
      name: "Badge Collector",
      description: "50+ badges collected",
      icon: Award,
      earned: false,
      progress: 42,
      target: 50,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "badge_minted",
      description: "Minted DeFi Innovation Lab badge",
      date: "2h ago",
      icon: Award,
    },
    {
      id: 2,
      type: "badge_sold",
      description: "Sold Gaming Expo badge for 22.1 SUI",
      date: "1d ago",
      icon: TrendingUp,
    },
    {
      id: 3,
      type: "level_up",
      description: "Reached level 12",
      date: "3d ago",
      icon: Zap,
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

  const copyAddress = () => {
    navigator.clipboard.writeText(user.address)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 sui-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="relative container-responsive py-12">
          <Card className="card-cyber glass-dark border-sui-500/20 mb-8 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 sui-gradient rounded-full blur-lg opacity-50"></div>
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative w-24 h-24 rounded-full border-4 border-sui-500/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 sui-gradient rounded-full flex items-center justify-center text-white font-bold">
                    {user.level}
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-3xl font-bold text-white mb-2">{user.displayName}</h1>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <span className="text-gray-400 font-mono text-sm">
                      {user.address.slice(0, 10)}...{user.address.slice(-8)}
                    </span>
                    <button onClick={copyAddress} className="text-gray-400 hover:text-sui-400 transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Level {user.level}</span>
                      <span className="text-sm text-gray-400">
                        {user.xp}/{user.nextLevelXp} XP
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="sui-gradient h-3 rounded-full transition-all duration-300"
                        style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">Member since {user.joinDate}</p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{user.totalBadges}</div>
                      <div className="text-sm text-gray-400">Badges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{user.totalEvents}</div>
                      <div className="text-sm text-gray-400">Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{user.marketplaceRating}</div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{user.totalSales}</div>
                      <div className="text-sm text-gray-400">Sales</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Link href="/collections">
                    <Button className="btn-cyber sui-gradient text-white">
                      <Award className="w-4 h-4 mr-2" />
                      Collections
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 glass-dark border border-sui-500/20">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger value="badges" className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white">
                Badges
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white"
              >
                Achievements
              </TabsTrigger>
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-sui-500/20 data-[state=active]:text-white"
              >
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className="card-cyber glass-dark border-sui-500/20 animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Award className="w-5 h-5 mr-2 text-sui-400" />
                        Recent Badges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {badges.map((badge) => (
                          <div
                            key={badge.id}
                            className="flex items-center gap-3 p-4 glass-effect rounded-lg hover-lift"
                          >
                            <Image
                              src={badge.image || "/placeholder.svg"}
                              alt={badge.name}
                              width={50}
                              height={50}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-white truncate">{badge.name}</h4>
                              <p className="text-sm text-gray-400 truncate">{badge.badgeDesign}</p>
                              <Badge className={`${getRarityColor(badge.rarity)} text-xs mt-1`}>{badge.rarity}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card
                    className="card-cyber glass-dark border-sui-500/20 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                        Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">This Month</span>
                        <span className="font-semibold text-white">5 badges</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sales</span>
                        <span className="font-semibold text-white">284.6 SUI</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Level</span>
                        <span className="font-semibold text-white">4.2</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className="card-cyber glass-dark border-sui-500/20 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Target className="w-5 h-5 mr-2 text-purple-400" />
                        Next Goal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Badge Collector</span>
                        <span className="text-sm font-medium text-white">42/50</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "84%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="badges">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {badges.map((badge, index) => (
                  <Card
                    key={badge.id}
                    className="card-cyber glass-dark border-sui-500/20 overflow-hidden hover-lift group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={badge.image || "/placeholder.svg"}
                        alt={badge.name}
                        width={200}
                        height={200}
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

            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={achievement.id}
                    className={`card-cyber border-sui-500/20 animate-fade-in ${
                      achievement.earned ? "glass-effect bg-yellow-500/5 border-yellow-500/30" : "glass-dark"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            achievement.earned ? "sui-gradient" : "bg-gray-600"
                          }`}
                        >
                          <achievement.icon
                            className={`w-6 h-6 ${achievement.earned ? "text-white" : "text-gray-400"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold mb-2 ${achievement.earned ? "text-white" : "text-gray-400"}`}>
                            {achievement.name}
                          </h3>
                          <p className={`text-sm mb-3 ${achievement.earned ? "text-gray-300" : "text-gray-500"}`}>
                            {achievement.description}
                          </p>
                          {achievement.earned ? (
                            <Badge className="bg-green-500/20 border border-green-500/30 text-green-300">
                              Earned {achievement.earnedDate}
                            </Badge>
                          ) : (
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-400">Progress</span>
                                <span className="text-sm text-gray-400">
                                  {achievement.progress}/{achievement.target}
                                </span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                  className="sui-gradient h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${(achievement.progress! / achievement.target!) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card className="card-cyber glass-dark border-sui-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={activity.id}
                        className="flex items-center gap-4 p-4 glass-effect rounded-lg animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-10 h-10 sui-gradient rounded-full flex items-center justify-center">
                          <activity.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white">{activity.description}</p>
                          <p className="text-sm text-gray-400">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
