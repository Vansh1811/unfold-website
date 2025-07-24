import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, link = '#', index }: ServiceCardProps) => {
  const MotionLink = motion(Link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="h-full"
    >
      <Card className="group relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-md hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/0 via-transparent to-gold-500/0 group-hover:from-navy-600/5 group-hover:to-gold-500/5 transition-all duration-700" />
        
        {/* Subtle animated border */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            background: [
              "linear-gradient(0deg, transparent, transparent)",
              "linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)",
              "linear-gradient(180deg, transparent, transparent)",
              "linear-gradient(270deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        <CardContent className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col z-10">
          {/* Enhanced icon with micro-animations */}
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              y: -2
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400,
              rotate: { duration: 0.6 }
            }}
            className="mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white drop-shadow-sm" />
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-navy-400 to-navy-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          </motion.div>

          {/* Enhanced typography with perfect spacing */}
          <motion.h3 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-navy-900 mb-3 sm:mb-4 group-hover:text-navy-700 transition-colors duration-300 leading-snug tracking-tight"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>

          {/* Description with optimal readability */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 flex-grow leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          {/* Premium CTA with advanced animations */}
          <MotionLink
            to={link}
            className="inline-flex items-center text-navy-600 hover:text-navy-800 font-semibold text-sm sm:text-base group/cta transition-all duration-300"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-3 relative">
              Learn More
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 w-0 group-hover/cta:w-full transition-all duration-300"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
              />
            </span>
            <motion.div
              animate={{ 
                x: [0, 3, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
            </motion.div>
          </MotionLink>
        </CardContent>

        {/* Hover state bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        />
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
