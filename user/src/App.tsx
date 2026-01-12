import './index.css'; 
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services/1_Services";
import BlogList from "./pages/Blogs/1_BlogList";
import BlogDetail from "./pages/Blogs/2_BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceCategory from "./pages/Services/2_ServiceCategory";
import ServiceDetail from "./pages/Services/3_ServiceDetail";
import ScrollToTop from './components/ui/ScrollToTop';
import PrivacyPolicy from "./pages/Legal/x_PrivacyPolicy";
import TermsOfService from "./pages/Legal/x_TermsOfService";
import CookiePolicy from "./pages/Legal/x_CookiePolicy";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />  {/* ADD THIS LINE - MUST BE INSIDE BrowserRouter */}
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:categorySlug" element={<ServiceCategory />} />
                <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceDetail />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
            
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
