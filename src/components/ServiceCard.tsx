import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, link = "#", index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0 group cursor-pointer">
        <CardContent className="p-8">
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold transition-all duration-300">
              <Icon className="h-8 w-8 text-navy" />
            </div>
          </motion.div>

          <h3 className="text-xl font-heading font-semibold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          <motion.a
            href={link}
            className="inline-flex items-center text-navy font-medium group-hover:text-gold transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;