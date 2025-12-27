import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Building2, User, Award, Heart } from 'lucide-react';

const FeaturedServices = () => {
  // Top 4 trending business incorporation services
  const featuredServices = [
    {
      id: 'private-limited-company',
      name: 'Private Limited Company Incorporation',
      slug: 'private-limited-company',
      description: 'Limited liability protection with ease of fundraising for startups and enterprises.',
      icon: Building2,
    },
    {
      id: 'one-person-company',
      name: 'One Person Company (OPC) Setup',
      slug: 'one-person-company',
      description: 'Solo entrepreneurship with limited liability and complete control over business.',
      icon: User,
    },
    {
      id: 'public-limited-company',
      name: 'Public Limited Company Formation',
      slug: 'public-limited-company',
      description: 'Large-scale operations with unlimited fundraising potential through public offerings.',
      icon: Award,
    },
    {
      id: 'section8-company',
      name: 'Section 8 Company (Non-Profit)',
      slug: 'section8-company',
      description: 'Charitable and educational organizations with tax exemptions and credibility.',
      icon: Heart,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-semibold text-navy">
              Business Incorporation Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Most Popular Business Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            End-to-end company formation services across all major business types in India. 
            Our experts handle name approvals, document drafting, government filings, and 
            post-incorporation compliance for a seamless business launch.
          </p>
        </div>

        {/* ✅ FIXED: Featured Services Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <div key={service.id} className="group">
                {/* ✅ Fixed height: h-full ensures all cards match */}
                <Card className="h-full flex flex-col border-2 border-gray-100 hover:border-navy/30 transition-all duration-300 bg-white hover:shadow-lg relative overflow-hidden">
                  
                  <CardHeader className="pb-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    
                    {/* Title */}
                    <CardTitle className="text-lg font-bold text-navy group-hover:text-navy-700 transition-colors duration-300 mb-2 leading-tight min-h-[4rem]">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  
                  {/* ✅ Flex-grow pushes buttons to bottom */}
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    {/* Brief Description - Fixed height */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 h-[4rem] overflow-hidden">
                      {service.description}
                    </p>

                    {/* ✅ Spacer that grows to push buttons down */}
                    <div className="flex-grow"></div>
                    
                    {/* Action Buttons - Always at bottom */}
                    <div className="space-y-3">
                      <Link 
                        to={`/services/company-formation/${service.slug}`}
                        className="block"
                      >
                        <Button 
                          className="w-full bg-navy hover:bg-navy-700 text-white transition-all duration-300"
                          size="sm"
                        >
                          Learn More & Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      
                      <Link to="/contact" className="block">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full text-xs border-navy text-navy hover:border-navy hover:bg-navy hover:text-white transition-all duration-300"
                        >
                          Get Expert Consultation
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy/5 to-gold/5 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">
              Ready to Launch Your Business?
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose the perfect business structure for your venture with our expert guidance 
              and comprehensive incorporation services. We handle everything from name approval 
              to post-incorporation compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/company-formation">
                <Button className="bg-navy hover:bg-navy-700 text-white px-8 py-3 rounded-xl font-semibold">
                  View All Business Types
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-xl font-semibold"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">6</div>
                <div className="text-sm text-gray-600">Business Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">7-35</div>
                <div className="text-sm text-gray-600">Days Process</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">100%</div>
                <div className="text-sm text-gray-600">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">200+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
