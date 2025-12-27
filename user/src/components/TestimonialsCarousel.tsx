import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Building } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-r from-navy/5 to-gold/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Quote className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-semibold text-navy">
              Client Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why hundreds of businesses trust Unfold Finleg Solutions 
            for their compliance and growth needs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl hover:bg-navy hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex items-center space-x-2 px-4">
                  {clientTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-gold w-6' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl hover:bg-navy hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
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
                  <div className="lg:col-span-2">
                    {(() => {
                      const testimonial = clientTestimonials[currentIndex];
                      return (
                        <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-gray-100 hover:border-gold/30 transition-all duration-300 overflow-hidden">
                          <CardContent className="p-8 h-full flex flex-col justify-between">
                            <div>
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
                            <div className="flex items-start space-x-4">
                              <Avatar className="w-16 h-16 border-2 border-gold/20">
                                <AvatarFallback className="bg-gradient-to-br from-navy to-navy-700 text-gold font-bold text-lg">
                                  {testimonial.initials}
                                </AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1">
                                <h4 className="text-xl font-heading font-bold text-navy">
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
                  </div>

                  {/* Side Testimonials (Small) */}
                  <div className="space-y-6">
                    {[1, 2].map((offset) => {
                      const testimonialIndex = (currentIndex + offset) % clientTestimonials.length;
                      const testimonial = clientTestimonials[testimonialIndex];
                      
                      return (
                        <Card 
                          key={testimonialIndex}
                          className="bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gold/20 transition-all duration-300 cursor-pointer"
                          onClick={() => goToSlide(testimonialIndex)}
                        >
                          <CardContent className="p-6">
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
                                <h5 className="font-semibold text-navy text-sm">
                                  {testimonial.clientName}
                                </h5>
                                <p className="text-xs text-gray-500">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
          
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
