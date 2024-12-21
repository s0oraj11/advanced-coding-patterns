import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

interface PatternCardProps {
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  slug: string
}

export function PatternCard({ title, description, difficulty, category, slug }: PatternCardProps) {
  const difficultyColor = {
    Beginner: "bg-green-500/10 text-green-500",
    Intermediate: "bg-yellow-500/10 text-yellow-500",
    Advanced: "bg-red-500/10 text-red-500"
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{category}</Badge>
          <Badge className={cn("font-medium", difficultyColor[difficulty])}>
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link to={`/patterns/${slug}`}>
            Learn Pattern
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

