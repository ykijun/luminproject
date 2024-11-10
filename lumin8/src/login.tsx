'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Layout from "./layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your authentication API
    console.log("Logging in with:", email, password)
    // Simulate successful login
    localStorage.setItem("user", JSON.stringify({ email }))
    router.push("/")
  }

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button className="w-full mt-4" type="submit">Login</Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/signup" className="text-sm text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  )
}