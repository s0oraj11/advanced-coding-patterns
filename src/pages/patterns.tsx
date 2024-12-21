import { Layout } from "@/components/layout"
import { PatternCard } from "@/components/pattern-card"

const patterns = [
  {
    title: "Observer Pattern",
    description: "Learn how to implement the Observer pattern for event handling and state management",
    difficulty: "Beginner",
    category: "Behavioral",
    slug: "observer"
  },
  {
    title: "Factory Pattern",
    description: "Understand how to use the Factory pattern for object creation",
    difficulty: "Intermediate",
    category: "Creational",
    slug: "factory"
  },
  {
    title: "Decorator Pattern",
    description: "Master the Decorator pattern for extending object functionality",
    difficulty: "Advanced",
    category: "Structural",
    slug: "decorator"
  }
  // Add more patterns as needed
]

export default function PatternsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Design Patterns</h1>
          <p className="text-muted-foreground mt-2">
            Explore and learn various software design patterns with practical examples
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patterns.map((pattern) => (
            <PatternCard key={pattern.slug} {...pattern} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

