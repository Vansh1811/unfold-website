import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Startup from "./pages/services/Startup";
import VirtualCFO from "./pages/services/VirtualCFO";
import ProtectYourBusiness from "./pages/services/ProtectYourBusiness";
import Compliance from "./pages/services/Compliance";
import MoreServices from "./pages/services/MoreServices";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/more" element={<MoreServices />} />
              <Route path="/contact" element={<Contact />} />
                <Route path="/services/startup" element={<Startup />} />
              <Route path="/services/virtual-cfo" element={<VirtualCFO />} />
              <Route
                path="/services/protect-your-business"
                element={<ProtectYourBusiness />}
              />
              <Route path="/services/compliance" element={<Compliance />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
