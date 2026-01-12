import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <Outlet />
      </motion.main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster />
      <Sonner />
    </div>
  );
};

export default Layout;
