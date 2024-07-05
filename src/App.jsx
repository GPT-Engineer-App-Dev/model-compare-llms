import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Database, GitCompare } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import LLMDirectory from "./pages/LLMDirectory.jsx";
import ComparisonModal from "./components/ComparisonModal";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "LLM Directory",
    to: "/llm-directory",
    icon: <Database className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="llm-directory" element={<LLMDirectory />} />
            </Route>
          </Routes>
        </Router>
        <ComparisonModal />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;