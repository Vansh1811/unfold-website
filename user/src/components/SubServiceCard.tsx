import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
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
      <Card className="group relative h-full overflow-hidden transition-all duration-500 cursor-pointer bg-white border border-gray-200 shadow-md hover:shadow-2xl rounded-2xl">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />
        
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/0 via-transparent to-navy-500/0 group-hover:from-navy-600/3 group-hover:to-navy-500/3 transition-all duration-700" />
        
        <CardContent className="relative p-6 sm:p-8 h-full flex flex-col z-10">
          {/* Icon with navy blue background */}
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
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 bg-navy-100">
              {IconComponent ? (
                <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-navy-700" />
              ) : (
                <FallbackIcon className="w-8 h-8 sm:w-9 sm:h-9 text-navy-700" />
              )}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-xl sm:text-2xl font-bold mb-3 leading-tight tracking-tight text-navy-900 group-hover:text-gold-600 transition-colors duration-300"
            style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {name}
          </motion.h3>

          {/* Duration */}
          {duration && (
            <div className="text-xs text-gray-500 flex items-center gap-1 mb-4">
              <Clock className="h-3 w-3" />
              {duration}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-8 py-4 border-t border-b border-gray-200">
            {features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-navy-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
            {features.length > 3 && (
              <div className="text-sm text-navy-600 font-semibold pt-2">
                +{features.length - 3} more features
              </div>
            )}
          </div>

          {/* Single CTA Button - Full Width */}
          <Button asChild className="w-full bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-800 hover:to-navy-900 text-white font-semibold rounded-lg transition-all duration-300 py-3 group/btn" size="sm">
            <Link to={`/services/${categorySlug}/${slug}`} className="flex items-center justify-center gap-2">
              View Details
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
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
