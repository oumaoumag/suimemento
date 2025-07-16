"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Ticket, Award, TrendingUp, Zap, Cpu, Network, Shield } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discover Events",
      description: "Browse AI-curated tech events using our quantum search algorithms",
      color: "sui-gradient",
      delay: "0s",
    },
    {
      icon: Ticket,
      title: "Secure Access",
      description: "Get verified entry with blockchain-based identity authentication",
      color: "cyber-gradient",
      delay: "0.2s",
    },
    {
      icon: Award,
      title: "Mint Neural Badge",
      description: "Create your unique NFT badge with AI-generated metadata on Sui",
      color: "neon-gradient",
      delay: "0.4s",
    },
    {
      icon: TrendingUp,
      title: "Evolve & Trade",
      description: "Watch your badges evolve with ML algorithms and trade in the metaverse",
      color: "sui-gradient",
      delay: "0.6s",
    },
  ]

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dark-gradient"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 sui-gradient rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 cyber-gradient rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>

      <div className="relative container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-sui-500/30 mb-6">
            <Cpu className="w-4 h-4 text-sui-400 mr-2" />
            <span className="text-sm font-medium text-sui-200">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Quantum-Powered</span> Process
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of event engagement with our AI-driven blockchain technology
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="card-cyber glass-dark border-sui-500/20 hover-lift group animate-fade-in"
              style={{ animationDelay: step.delay }}
            >
              <CardContent className="p-6 lg:p-8 text-center relative">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 glass-effect rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-sui-400">{index + 1}</span>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 floating group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-sui-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="absolute top-1/2 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-sui-500 to-cyber-500 opacity-50"></div>
          <div className="absolute top-1/2 left-2/4 w-1/4 h-0.5 bg-gradient-to-r from-cyber-500 to-sui-400 opacity-50"></div>
          <div className="absolute top-1/2 left-3/4 w-1/4 h-0.5 bg-gradient-to-r from-sui-400 to-sui-500 opacity-50"></div>
        </div>

        {/* Tech Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="w-12 h-12 sui-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Quantum Security</h4>
            <p className="text-gray-400 text-sm">Military-grade encryption with zero-knowledge proofs</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="w-12 h-12 cyber-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Lightning Fast</h4>
            <p className="text-gray-400 text-sm">Sub-second transactions on Sui's parallel execution</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="w-12 h-12 neon-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <Network className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Global Network</h4>
            <p className="text-gray-400 text-sm">Connect with innovators across the decentralized web</p>
          </div>
        </div>
      </div>
    </section>
  )
}
