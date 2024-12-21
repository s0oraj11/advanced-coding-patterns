import { Layout } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GitFork, Users } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Advanced Coding Patterns</h1>
          <p className="text-xl text-muted-foreground">
            Learn software design patterns through interactive examples and practical implementations
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/patterns">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <GitFork className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Design Patterns</CardTitle>
              <CardDescription>
                Explore common software design patterns and their implementations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/patterns">Browse Patterns</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Documentation</CardTitle>
              <CardDescription>
                Comprehensive guides and explanations for each pattern
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/docs">Read Docs</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Community</CardTitle>
              <CardDescription>
                Join the community and share your knowledge with others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/community">Join Community</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

