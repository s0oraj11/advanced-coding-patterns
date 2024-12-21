export interface Pattern {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  link: string;
  description: string;
}