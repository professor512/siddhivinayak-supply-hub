import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Index />
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;