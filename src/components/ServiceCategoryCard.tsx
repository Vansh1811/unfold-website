import { motion } from 'framer-motion';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';
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
}

const ServiceCategoryCard = ({ 
  title, 
  description, 
  icon, 
  slug, 
  subServiceCount, 
  index 
}: ServiceCategoryCardProps) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link to={`/services/${slug}`}>
        <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0 group cursor-pointer">
          <CardContent className="p-6 md:p-8 flex flex-col">
            <motion.div
              className="mb-4 md:mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold transition-all duration-300">
                {IconComponent && <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-navy" />}
              </div>
            </motion.div>

            <h3 className="text-lg md:text-xl font-heading font-semibold text-navy mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
              {title}
            </h3>

            <p className="flex-grow text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              {description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm text-muted-foreground">
                {subServiceCount} services
              </span>
              <motion.div
                className="inline-flex items-center text-navy font-medium group-hover:text-gold transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>Explore</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ServiceCategoryCard;
