
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import FoodChoices from "./pages/FoodChoices";
import DessertChoices from "./pages/DessertChoices";
import PlaceChoices from "./pages/PlaceChoices";
import Celebration from "./pages/Celebration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/food-choices" element={<FoodChoices />} />
          <Route path="/dessert-choices" element={<DessertChoices />} />
          <Route path="/place-choices" element={<PlaceChoices />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
