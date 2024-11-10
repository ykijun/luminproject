import Layout from "./layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to SchoolConnect</h1>
        <p className="text-xl mb-8">Connect with students and alumni, share ideas, and stay informed.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/community">Join the Community</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/mentorship">Find a Mentor</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}