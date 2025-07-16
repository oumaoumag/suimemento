"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet, User, Calendar, Award, ShoppingBag, Settings, Zap } from "lucide-react"
import Link from "next/link"
import SuiLogo from "./SuiLogo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Mint Badge", href: "/mint", icon: Award },
    { name: "Collections", href: "/collections", icon: Zap },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
    { name: "Organizer", href: "/organizer", icon: Settings },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark border-b border-sui-500/20" : "bg-transparent"
      }`}
    >
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 sui-gradient rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 sui-gradient rounded-xl flex items-center justify-center">
                <SuiLogo className="w-6 h-6 lg:w-8 lg:h-8" color="white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold gradient-text">SuiMemento</span>
              <span className="text-xs text-sui-300 hidden sm:block">Powered by Sui</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:text-sui-400 transition-colors" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-cyber sui-gradient text-white hover:opacity-90 transition-all duration-300 pulse-glow">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg glass-effect hover:bg-white/10 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-dark border-t border-sui-500/20 animate-slide-up">
            <div className="container-responsive py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button className="w-full btn-cyber sui-gradient text-white">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
