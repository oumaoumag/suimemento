"use client"

import { TrendingUp, Users, Award, Globe } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: "250K+",
      label: "Active Users",
      color: "text-sui-400",
      gradient: "sui-gradient",
    },
    {
      icon: Award,
      value: "1.2M+",
      label: "Badges Minted",
      color: "text-cyber-400",
      gradient: "cyber-gradient",
    },
    {
      icon: Globe,
      value: "500+",
      label: "Global Events",
      color: "text-neon-400",
      gradient: "neon-gradient",
    },
    {
      icon: TrendingUp,
      value: "50K+",
      label: "Daily Trades",
      color: "text-sui-400",
      gradient: "sui-gradient",
    },
  ]

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 glass-dark border-y border-sui-500/20"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="relative container-responsive">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 ${stat.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-sui-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Additional Tech Metrics */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 lg:pt-12 border-t border-sui-500/20">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-lg lg:text-xl font-bold gradient-text mb-1">0.4s</div>
            <div className="text-gray-400 text-xs lg:text-sm">Avg Response</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-lg lg:text-xl font-bold gradient-text mb-1">99.9%</div>
            <div className="text-gray-400 text-xs lg:text-sm">Uptime</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-lg lg:text-xl font-bold gradient-text mb-1">$0.001</div>
            <div className="text-gray-400 text-xs lg:text-sm">Gas Fee</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-lg lg:text-xl font-bold gradient-text mb-1">∞</div>
            <div className="text-gray-400 text-xs lg:text-sm">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  )
}
