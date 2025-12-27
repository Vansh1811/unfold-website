import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { SubService } from '@/data/servicesData';

interface SubServiceCardProps extends SubService {
  categorySlug: string;
  index: number;
  featured?: boolean;
}

const SubServiceCard = ({
  name,
  slug,
  description,
  icon,
  features,
  price,
  duration,
  categorySlug,
  index,
  featured = false
}: SubServiceCardProps) => {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon];
  const FallbackIcon = Icons.Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className={`group relative h-full overflow-hidden transition-all duration-500 cursor-pointer bg-white border border-gray-200 shadow-lg hover:shadow-xl`}>
        {/* ✅ REMOVED: All badges (Trending/Popular/Featured) */}
        
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/0 via-transparent to-gold-600/0 group-hover:from-navy-600/5 group-hover:to-gold-600/5 transition-all duration-700" />
        
        <CardContent className="relative p-6 sm:p-8 h-full flex flex-col z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              y: -4
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400,
              rotate: { duration: 0.6 }
            }}
            className="mb-6"
          >
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800">
              {IconComponent ? (
                <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
              ) : (
                <FallbackIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
              )}
            </div>
          </motion.div>

          {/* ✅ SIMPLIFIED: Only show title - NO description, features, or duration info */}
          <div className="flex-grow mb-6">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-2 leading-tight tracking-tight text-navy-900 group-hover:text-navy-700 transition-colors duration-300"
              style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {name}
            </motion.h3>
            
            {/* ✅ Minimal text only */}
            <p className="text-gray-500 text-sm italic">
              View full details →
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link to={`/services/${categorySlug}/${slug}`}>
              <Button
                variant="outline"
                size="sm"
                className="w-full font-semibold border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              >
                Learn More
              </Button>
            </Link>
            
            <Link to={`/contact?service=${slug}`}>
              <Button
                variant="default"
                size="sm"
                className="w-full font-semibold bg-navy-800 hover:bg-navy-900 text-white group/btn"
                style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              >
                Get Quote
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </CardContent>
        
        {/* Bottom border effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-navy-600 to-navy-700"
        />
      </Card>
    </motion.div>
  );
};

export default SubServiceCard;
