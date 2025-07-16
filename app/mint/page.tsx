"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Award, Sparkles, Shield, CheckCircle, AlertCircle, Zap, Cpu, Network } from "lucide-react"

export default function MintPage() {
  const [code, setCode] = useState("")
  const [isValidating, setIsValidating] = useState(false)
  const [isMinting, setIsMinting] = useState(false)
  const [mintStatus, setMintStatus] = useState<"idle" | "success" | "error">("idle")

  const handleValidateCode = async () => {
    setIsValidating(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsValidating(false)
  }

  const handleMint = async () => {
    setIsMinting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setMintStatus("success")
    setIsMinting(false)
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
              <span className="text-sm font-medium text-sui-200">Mint Badge</span>
            </div>
            <div className="w-20 h-20 cyber-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 floating">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Mint <span className="gradient-text neon-pulse">Badge</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform event code into verifiable NFT badge on Sui
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="card-cyber glass-dark border-sui-500/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <Sparkles className="w-6 h-6 mr-3 text-sui-400" />
                  Claim Badge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="code" className="text-base font-medium text-gray-300 mb-3 block">
                    Event Code
                  </Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="Enter event code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="h-12 text-base glass-dark border-sui-500/30 text-white placeholder-gray-400 focus:border-sui-400"
                  />
                  <p className="text-sm text-gray-400 mt-2">Code received at event or via email</p>
                </div>

                {code && (
                  <Button
                    onClick={handleValidateCode}
                    disabled={isValidating}
                    variant="outline"
                    className="w-full glass-effect border-sui-500/30 text-gray-300 hover:text-white hover:bg-sui-500/10 bg-transparent"
                  >
                    {isValidating ? (
                      <>
                        <Cpu className="w-4 h-4 mr-2 animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4 mr-2" />
                        Validate Code
                      </>
                    )}
                  </Button>
                )}

                {!isValidating && code && (
                  <div className="p-4 glass-effect border border-green-500/30 rounded-lg animate-fade-in">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-300 font-medium">Code validated!</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300">Event: Sui DevCon 2025</p>
                      <p className="text-gray-300">Badge: Neural Network</p>
                      <p className="text-gray-300">Rarity: Legendary</p>
                    </div>
                  </div>
                )}

                {mintStatus === "idle" && !isValidating && code && (
                  <Button
                    onClick={handleMint}
                    disabled={isMinting}
                    className="w-full h-12 text-base font-semibold btn-cyber sui-gradient text-white pulse-glow"
                  >
                    {isMinting ? (
                      <>
                        <Network className="w-5 h-5 mr-2 animate-pulse" />
                        Minting...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Mint Badge
                      </>
                    )}
                  </Button>
                )}

                {mintStatus === "success" && (
                  <div className="p-6 glass-effect border border-sui-500/30 rounded-lg text-center animate-scale-in">
                    <div className="w-16 h-16 sui-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Badge Minted!</h3>
                    <p className="text-gray-300 mb-4">NFT badge is now live on Sui</p>
                    <Button
                      variant="outline"
                      className="glass-effect border-sui-500/30 text-sui-400 hover:bg-sui-500/10 bg-transparent"
                    >
                      View in Collections
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card
                className="card-cyber glass-dark border-sui-500/20 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-sui-400" />
                    Minting Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sui-gradient rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold text-white">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Attend Event</h4>
                        <p className="text-gray-400 text-sm">Receive verification code</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 cyber-gradient rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold text-white">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Validate Code</h4>
                        <p className="text-gray-400 text-sm">Verify attendance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 neon-gradient rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold text-white">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Mint Badge</h4>
                        <p className="text-gray-400 text-sm">Create NFT on Sui</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="card-cyber glass-dark border-sui-500/20 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Network className="w-5 h-5 mr-2 text-sui-400" />
                    Badge Features
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">Blockchain verified</span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">AI-powered evolution</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-yellow-400 mr-3" />
                      <span className="text-gray-300">Tradeable NFT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="card-cyber glass-effect border border-yellow-500/30 bg-yellow-500/5 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-300 mb-2">Important</h3>
                      <p className="text-yellow-200 text-sm">
                        Each code can only be used once. Connect wallet before minting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
