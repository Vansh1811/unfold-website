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
  // Create a motion-enabled Link for route transitions
  const MotionLink = motion(Link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0 group cursor-pointer">
        <CardContent className="p-6 md:p-8 flex flex-col">
          <motion.div
            className="mb-4 md:mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold transition-all duration-300">
              <Icon className="h-6 w-6 md:h-8 md:w-8 text-navy" />
            </div>
          </motion.div>

          <h3 className="text-lg md:text-xl font-heading font-semibold text-navy mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>

          <p className="flex-grow text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
            {description}
          </p>

          <MotionLink
            to={link}
            className="inline-flex items-center text-navy font-medium group-hover:text-gold transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MotionLink>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
