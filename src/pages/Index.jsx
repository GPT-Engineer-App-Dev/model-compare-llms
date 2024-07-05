import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to LLM Directory</h1>
      <p className="text-xl mb-8">Explore and compare Large Language Models with ease.</p>
      <Button asChild>
        <Link to="/llm-directory">Explore LLM Models</Link>
      </Button>
    </div>
  );
};

export default Index;