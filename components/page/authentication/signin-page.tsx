import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: "#390053" }}>
        <div className="absolute inset-0">
          <img src="/ajo-background.png" alt="People silhouettes" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <div className="flex-1 flex flex-col justify-center max-w-lg">
            <h1 className="text-[#FAF2FF] text-8xl font-bold leading-tight mb-8">
              Welcome 
              <br />
              Back Dear
              <br />
              Ajaite
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-start mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back to ÀJÓ</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email or Phone Number
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password (min 8 characters)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#6a0dad" }}
            >
              Sign In Now
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full py-3 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-colors bg-transparent"
              style={{ borderColor: "#6a0dad", color: "#6a0dad" }}
            >
              Sign In with Google
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600 space-y-4">

            <p>
              I don’t have an account account?{" "}
              <Link href="/" className="font-medium" style={{ color: "#6a0dad" }}>
                Sign up now
              </Link>
            </p>
            <div className="text-black-500 text-lg w-30 h-20 bg-[#ccc] flex justify-center items-center rounded-lg font">
                <Link href="/dashboard">Dashboard</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
