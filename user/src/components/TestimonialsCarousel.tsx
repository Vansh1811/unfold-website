import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Building, Sparkles } from 'lucide-react';
import { clientTestimonials } from '@/data/servicesData';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-gold fill-gold' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements - Same as ServicesSection */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Matching ServicesSection Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-navy-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-navy-100"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-gold-500" />
            </motion.div>
            <span style={{ fontFamily: 'Nexa Bold' }}>Client Testimonials</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-gold-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading with Gold Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-6 leading-tight"
            style={{ fontFamily: 'Nexa Bold' }}
          >
            What
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent mx-0 sm:mx-3 relative"
            >
              Our Clients Say
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </motion.span>
          </motion.h2>
          

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            Discover why hundreds of businesses trust
            <span className="text-navy-700 font-semibold"> Unfold Finleg Solutions</span> for their compliance and growth needs.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          {/* Navigation Controls */}
          <div className="flex justify-center mb-8">
            <motion.div 
              className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-xl hover:bg-navy hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <div className="flex items-center space-x-2 px-4">
                  {clientTestimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-gold w-6' : 'bg-gray-300 hover:bg-gray-400 w-2'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
                
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-xl hover:bg-navy hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <div className="relative h-[600px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                  {/* Featured Testimonial (Large) */}
                  <motion.div 
                    className="lg:col-span-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {(() => {
                      const testimonial = clientTestimonials[currentIndex];
                      return (
                        <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                          <CardContent className="p-8 h-full flex flex-col justify-between relative">
                            {/* Background Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-navy/5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10">
                              {/* Rating */}
                              <div className="flex items-center space-x-1 mb-6">
                                {renderStars(testimonial.rating)}
                                <span className="ml-2 text-sm font-semibold text-gray-600">
                                  {testimonial.rating}.0
                                </span>
                              </div>

                              {/* Quote */}
                              <div className="relative mb-8">
                                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold/20" />
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic pl-6">
                                  "{testimonial.testimonial}"
                                </p>
                              </div>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-start space-x-4 relative z-10">
                              <Avatar className="w-16 h-16 border-2 border-gold/20">
                                <AvatarFallback className="bg-gradient-to-br from-navy to-navy-700 text-gold font-bold text-lg">
                                  {testimonial.initials}
                                </AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-navy" style={{ fontFamily: 'Nexa Bold' }}>
                                  {testimonial.clientName}
                                </h4>
                                
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                  <div className="flex items-center text-gray-600">
                                    <Building className="w-4 h-4 mr-1" />
                                    <span className="text-sm font-medium">
                                      {testimonial.company}
                                    </span>
                                  </div>
                                  
                                  {testimonial.location && (
                                    <div className="flex items-center text-gray-600">
                                      <MapPin className="w-4 h-4 mr-1" />
                                      <span className="text-sm">
                                        {testimonial.location}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mt-3">
                                  <Badge variant="secondary" className="bg-navy/10 text-navy text-xs">
                                    {testimonial.industry}
                                  </Badge>
                                  {testimonial.serviceUsed && (
                                    <Badge variant="secondary" className="bg-gold/10 text-gold text-xs">
                                      {testimonial.serviceUsed}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })()}
                  </motion.div>

                  {/* Side Testimonials (Small) */}
                  <div className="space-y-6">
                    {[1, 2].map((offset) => {
                      const testimonialIndex = (currentIndex + offset) % clientTestimonials.length;
                      const testimonial = clientTestimonials[testimonialIndex];
                      
                      return (
                        <motion.div
                          key={testimonialIndex}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Card 
                            className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            onClick={() => goToSlide(testimonialIndex)}
                          >
                            <CardContent className="p-6 relative">
                                                           {/* Background Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-navy/5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              <div className="relative z-10">
                                <div className="flex items-center space-x-1 mb-4">
                                  {renderStars(testimonial.rating)}
                                </div>
                                
                                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                  "{testimonial.testimonial}"
                                </p>
                                
                                <div className="flex items-center space-x-3">
                                  <Avatar className="w-10 h-10 border border-gold/20">
                                    <AvatarFallback className="bg-gradient-to-br from-navy to-navy-700 text-gold font-bold text-sm">
                                      {testimonial.initials}
                                    </AvatarFallback>
                                  </Avatar>
                                  
                                  <div>
                                    <h5 className="font-semibold text-navy text-sm" style={{ fontFamily: 'Nexa Bold' }}>
                                      {testimonial.clientName}
                                    </h5>
                                    <p className="text-xs text-gray-500">
                                      {testimonial.company}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction Rate' },
            { number: '15+', label: 'Industries Served' },
            { number: '12+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-navy mb-2" style={{ fontFamily: 'Nexa Bold' }}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
