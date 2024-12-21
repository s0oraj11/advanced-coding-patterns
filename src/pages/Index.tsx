import { patterns } from "@/data/patterns";
import { PatternCard } from "@/components/PatternCard";

const Index = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Advanced Coding Interview Patterns
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map((pattern) => (
            <PatternCard
              key={pattern.id}
              id={pattern.id}
              title={pattern.title}
              description={pattern.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;