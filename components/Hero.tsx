"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Zap, Cpu, Network, Award } from "lucide-react"
import Link from "next/link"
import SuiLogo from "./SuiLogo"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-sui-900/20 via-transparent to-cyber-900/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 sui-gradient rounded-full opacity-20 floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 cyber-gradient rounded-full opacity-20 floating-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 neon-gradient rounded-full opacity-20 floating"></div>

      <div className="relative container-responsive text-center">
        {/* Tech Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-sui-500/30 mb-8 animate-fade-in">
          <SuiLogo className="w-5 h-5 mr-2" />
          <Sparkles className="w-4 h-4 text-sui-400 mr-2" />
          <span className="text-sm font-medium text-sui-200">Next-Gen Blockchain Technology</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block text-white mb-2">Future of</span>
          <span className="block gradient-text neon-pulse mb-2">Event Verification</span>
          <span className="block text-gray-300 text-2xl md:text-3xl lg:text-4xl font-normal">on Sui Blockchain</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Experience the next generation of event engagement with AI-powered NFT badges. Secure, verifiable, and
          infinitely upgradeable on the fastest blockchain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
          <Link href="/events">
            <Button
              size="lg"
              className="btn-cyber sui-gradient text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-300 pulse-glow w-full sm:w-auto"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/mint">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold glass-effect border-sui-500/50 text-white hover:bg-sui-500/10 transition-all duration-300 w-full sm:w-auto bg-transparent"
            >
              <Award className="w-5 h-5 mr-2" />
              Mint Badge
            </Button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="card-cyber glass-effect rounded-2xl p-6 lg:p-8 text-center hover-lift animate-fade-in">
            <div className="w-16 h-16 lg:w-20 lg:h-20 sui-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 floating">
              <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">Quantum Security</h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Military-grade blockchain verification with zero-knowledge proofs
            </p>
          </div>

          <div
            className="card-cyber glass-effect rounded-2xl p-6 lg:p-8 text-center hover-lift animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 floating-delayed">
              <Cpu className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">AI-Powered Evolution</h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Smart badges that learn and evolve based on your engagement patterns
            </p>
          </div>

          <div
            className="card-cyber glass-effect rounded-2xl p-6 lg:p-8 text-center hover-lift animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 neon-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 floating">
              <Network className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">Global Network</h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Connect with innovators across the decentralized metaverse
            </p>
          </div>
        </div>

        {/* Tech Stats */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">0.4s</div>
            <div className="text-gray-400 text-sm lg:text-base">Transaction Speed</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">$0.001</div>
            <div className="text-gray-400 text-sm lg:text-base">Gas Fees</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-400 text-sm lg:text-base">Uptime</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">∞</div>
            <div className="text-gray-400 text-sm lg:text-base">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  )
}
