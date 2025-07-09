import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { SubService } from '@/data/servicesData';

interface SubServiceCardProps extends SubService {
  categorySlug: string;
  index: number;
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
  index
}: SubServiceCardProps) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0 group">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold transition-all duration-300">
              {IconComponent && <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-navy" />}
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-heading font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>

          <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-3 mb-6">
            {features.slice(0, 4).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3 mb-6">
            {price && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Price:</span>
                <span className="font-semibold text-navy">{price}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-semibold text-navy">{duration}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to={`/services/${categorySlug}/${slug}`} className="flex-1">
              <Button className="w-full bg-gold hover:bg-yellow-500 text-navy font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
              Get Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SubServiceCard;