import { useParams, Link } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PatternDetail = () => {
  const { id } = useParams();
  const pattern = patterns.find(p => p.id === Number(id));

  if (!pattern) {
    return <div>Pattern not found</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Patterns
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{pattern.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{pattern.description}</p>

        <div className="space-y-6">
          {pattern.questions.map((question, index) => (
            <div key={question.id} className="bg-white rounded-lg p-6 shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  {index + 1}. {question.title}
                </h3>
                <span className={`difficulty-${question.difficulty}`}>
                  {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{question.description}</p>
              <a
                href={question.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Solve on LeetCode →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;