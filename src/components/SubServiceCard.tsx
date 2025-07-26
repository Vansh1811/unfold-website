import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
      <Card className={`group relative h-full overflow-hidden transition-all duration-500 cursor-pointer ${
        featured 
          ? 'bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200 shadow-gold hover:shadow-gold-lg' 
          : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
      }`}>
        {featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10"
            style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
          >
            Popular
          </motion.div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/0 via-transparent to-gold-600/0 group-hover:from-navy-600/5 group-hover:to-gold-600/5 transition-all duration-700" />

        <CardContent className="relative p-6 sm:p-8 h-full flex flex-col z-10">
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
            <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ${
              featured 
                ? 'bg-gradient-to-br from-gold-600 via-gold-700 to-gold-800'
                : 'bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800'
            }`}>
              {IconComponent ? (
                <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
              ) : (
                <FallbackIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
              )}
            </div>
          </motion.div>

          <div className="flex-grow mb-6">
            <motion.h3 
              className={`text-xl sm:text-2xl font-bold mb-3 leading-tight tracking-tight transition-colors duration-300 ${
                featured 
                  ? 'text-navy-800 group-hover:text-navy-700'
                  : 'text-navy-900 group-hover:text-navy-700'
              }`}
              style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {name}
            </motion.h3>

            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm sm:text-base line-clamp-3 mb-4">
              {description}
            </p>

            {/* ✅ Fixed Feature List */}
            <div className="space-y-2 mb-4">
              {(features?.slice(0, 4) || []).map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + featureIndex * 0.05 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                    featured ? 'text-gold-600' : 'text-navy-600'
                  }`} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {(price || duration) && (
            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {price && (
                  <div>
                    <span className="font-semibold text-navy-700" style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}>
                      Price:
                    </span>
                    <p className={`${featured ? 'text-gold-600' : 'text-navy-600'} font-bold`}>
                      {price}
                    </p>
                  </div>
                )}
                {duration && (
                  <div>
                    <span className="font-semibold text-navy-700" style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}>
                      Duration:
                    </span>
                    <p className="text-gray-600 font-medium">{duration}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link to={`/services/${categorySlug}/${slug}`}>
              <Button
                variant="outline"
                size="sm"
                className={`w-full font-semibold transition-all duration-300 ${
                  featured
                    ? 'border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white'
                    : 'border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white'
                }`}
                style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              >
                Learn More
              </Button>
            </Link>
            
            <Link to={`/contact?service=${slug}`}>
              <Button
                variant={featured ? "gold" : "default"}
                size="sm"
                className="w-full font-semibold group/btn"
                style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              >
                Get Quote
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </CardContent>

        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
            featured
              ? 'bg-gradient-to-r from-gold-600 to-gold-700'
              : 'bg-gradient-to-r from-navy-600 to-navy-700'
          }`}
        />
      </Card>
    </motion.div>
  );
};

export default SubServiceCard;
