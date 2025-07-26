import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  subServiceCount: number;
  index: number;
  featured?: boolean;
}

const ServiceCategoryCard = ({
  title,
  description,
  icon,
  slug,
  subServiceCount,
  index,
  featured = false
}: ServiceCategoryCardProps) => {
  // Dynamically get the icon component with fallback
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon] as LucideIcon;
  const FallbackIcon = Icons.Building2; // Fallback icon

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
      <Card className={`group relative h-full overflow-hidden transition-all duration-500 cursor-pointer ${
        featured 
          ? 'bg-gradient-to-br from-navy-50 to-blue-50 border-2 border-gold-200 shadow-lg hover:shadow-2xl' 
          : 'bg-white/90 backdrop-blur-sm border-0 shadow-md hover:shadow-xl'
      }`}>
        {/* Featured Badge */}
        {featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10"
          >
            Popular
          </motion.div>
        )}

        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/0 via-transparent to-gold-500/0 group-hover:from-navy-600/5 group-hover:to-gold-500/5 transition-all duration-700" />
        
        {/* Animated Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <CardContent className="relative p-6 sm:p-8 h-full flex flex-col z-10">
          {/* Icon Section */}
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
            <div className="relative">
              <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 ${
                featured 
                  ? 'bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700'
                  : 'bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800'
              }`}>
                {IconComponent ? (
                  <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
                ) : (
                  <FallbackIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
                )}
              </div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl ${
                featured 
                  ? 'bg-gradient-to-br from-gold-400 to-gold-600'
                  : 'bg-gradient-to-br from-navy-400 to-navy-600'
              }`} />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-grow mb-6">
            <motion.h3 
              className={`text-xl sm:text-2xl font-bold mb-3 leading-tight tracking-tight transition-colors duration-300 ${
                featured 
                  ? 'text-navy-800 group-hover:text-navy-700'
                  : 'text-navy-900 group-hover:text-navy-700'
              }`}
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>

            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm sm:text-base line-clamp-3">
              {description}
            </p>
          </div>

          {/* Service Count Badge */}
          <div className="mb-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
              featured
                ? 'bg-gold-100 text-gold-700'
                : 'bg-navy-100 text-navy-700'
            }`}>
              <span>{subServiceCount}</span>
              <span>{subServiceCount === 1 ? 'service' : 'services'}</span>
            </span>
          </div>

          {/* CTA Section */}
          <Link
            to={`/services/${slug}`}
            className={`group/cta inline-flex items-center gap-2 font-semibold text-sm sm:text-base transition-all duration-300 ${
              featured
                ? 'text-gold-600 hover:text-gold-700'
                : 'text-navy-600 hover:text-navy-800'
            }`}
          >
            <span className="relative">
              Explore Services
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover/cta:w-full transition-all duration-300 ${
                  featured 
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600'
                    : 'bg-gradient-to-r from-navy-500 to-navy-600'
                }`}
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
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
            </motion.div>
          </Link>
        </CardContent>

        {/* Bottom Accent Line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
            featured
              ? 'bg-gradient-to-r from-gold-500 to-gold-600'
              : 'bg-gradient-to-r from-navy-500 to-navy-600'
          }`}
        />
      </Card>
    </motion.div>
  );
};

export default ServiceCategoryCard;
