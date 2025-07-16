"use client"

import { Twitter, Github, MessageCircle, Zap, Network, Shield } from "lucide-react"
import Link from "next/link"
import SuiLogo from "./SuiLogo"

export default function Footer() {
  const footerLinks = {
    Platform: [
      { name: "Events", href: "/events" },
      { name: "Marketplace", href: "/marketplace" },
      { name: "Collections", href: "/collections" },
      { name: "Profile", href: "/profile" },
      { name: "Organizer Portal", href: "/organizer" },
    ],
    Technology: [
      { name: "Sui Blockchain", href: "#" },
      { name: "Smart Contracts", href: "#" },
      { name: "AI Integration", href: "#" },
      { name: "Security", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Developer Tools", href: "/tools" },
      { name: "Support", href: "/support" },
    ],
    Community: [
      { name: "Discord", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Blog", href: "/blog" },
    ],
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark-gradient"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 sui-gradient rounded-full opacity-5 blur-3xl"></div>

      <div className="relative container-responsive py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 sui-gradient rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 sui-gradient rounded-xl flex items-center justify-center">
                  <SuiLogo className="w-8 h-8" color="white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">SuiMemento</span>
                <span className="text-sm text-sui-300">Powered by Sui Blockchain</span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The future of event engagement is here. Experience next-generation NFT badges with AI-powered evolution on
              the fastest, most secure blockchain network.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sui-500/20 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-sui-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sui-500/20 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-sui-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sui-500/20 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-sui-400" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4 text-lg">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-sui-400 transition-colors duration-200 text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Features */}
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-sui-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            <div className="flex items-center space-x-3 glass-effect rounded-lg p-4">
              <div className="w-10 h-10 sui-gradient rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">Quantum Security</h4>
                <p className="text-gray-400 text-sm">Military-grade protection</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 glass-effect rounded-lg p-4">
              <div className="w-10 h-10 cyber-gradient rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">Lightning Fast</h4>
                <p className="text-gray-400 text-sm">0.4s transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 glass-effect rounded-lg p-4">
              <div className="w-10 h-10 neon-gradient rounded-lg flex items-center justify-center">
                <Network className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">Global Network</h4>
                <p className="text-gray-400 text-sm">Worldwide connectivity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sui-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 SuiMemento. All rights reserved. Built on Sui Blockchain.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-sui-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-sui-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-gray-400 hover:text-sui-400 text-sm transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
