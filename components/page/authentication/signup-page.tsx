import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="h-[100vh] flex flex-col md:flex-row">
      {/* Left Side - Hero Section */}
      <div className="md:flex-1 relative overflow-hidden h-2/5 rounded-ee-[20%] md:rounded-ee-none rounded-b-[20%] md:rounded-b-none md:h-full" style={{ backgroundColor: "#390053" }}>
        <div className="absolute inset-0">
          <img src="/ajo-background.png" alt="People silhouettes" className="w-full h-full md:object-cover opacity-25" />
        </div>
        <div className="hidden relative z-10 md:flex flex-col justify-between h-full p-12">
          <div className="flex-1 flex flex-col justify-center max-w-lg">
            <h1 className="text-white text-5xl font-bold leading-tight mb-8">
              Join the Trusted Circle.
              <br />
              Grow Your Savings
              <br />
              Digitally.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Experience the modern evolution of communal saving.
              <br />
              ÀJÓ empowers you to achieve your financial goals with
              <br />a platform built on trust, culture, and cutting-edge
              <br />
              technology. Join ÀJÓ today and benefit from:
            </p>
          </div>
          <div className="flex justify-center">
            <div className="text-white text-6xl font-bold opacity-20">ÀJÓ</div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="md:flex-1 bg-white flex md:items-center justify-center p-8 md:p-12 max-sm:px-5 h-3/5 md:h-full">
        <div className="w-full max-w-md space-y-6">
          <div className="text-start mb-8 max-sm:text-center max-sm:mb-1">
            <h2 className="text-[20px] md:text-3xl font-bold bg-gradient-to-r from-[#390053] to-[#6A0DAD] bg-clip-text text-transparent md:text-gray-900 mb-2 text-start md:text-center">Create Your ÀJÓ Account</h2>
          </div>

          <form className="space-y-6 max-sm:space-y-3">
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#6a0dad" }}
            >
              Sign Up for ÀJÓ
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full py-3 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-colors bg-transparent"
              style={{ borderColor: "#6a0dad", color: "#6a0dad" }}
            >
              Sign Up with Google
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600 space-y-4">
            <p>
              By clicking {"Sign Up for ÀJÓ"}, you agree to our{" "}
              <Link href="#" className="font-medium" style={{ color: "#6a0dad" }}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-medium" style={{ color: "#6a0dad" }}>
                Privacy Policy
              </Link>
              .
            </p>

            <p>
              Already have an account?{" "}
              <Link href="/authentication/sign-in" className="font-medium" style={{ color: "#6a0dad" }}>
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
