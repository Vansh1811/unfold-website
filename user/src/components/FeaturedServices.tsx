import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Building2, User, Award, Heart, CheckCircle, Clock } from 'lucide-react';

const FeaturedServices = () => {
  // Top 4 trending business incorporation services
  const featuredServices = [
    {
      id: 'private-limited-company',
      name: 'Private Limited Company Incorporation',
      slug: 'private-limited-company',
      description: 'Most popular choice for startups and growing enterprises due to its limited liability protection, ease of fundraising, and trusted status with customers and investors.',
      icon: Building2,
      features: [
        'Limited liability protection for shareholders',
        'Enhanced credibility with customers and investors', 
        'Easy fundraising through equity participation'
      ],
      duration: '7-15 days',
      popular: true,
      trending: true
    },
    {
      id: 'one-person-company',
      name: 'One Person Company (OPC) Setup',
      slug: 'one-person-company',
      description: 'Perfect for solo entrepreneurs who want limited liability protection while maintaining complete control over their business operations.',
      icon: User,
      features: [
        'Single person ownership and complete control',
        'Limited liability protection for the member',
        'Easy conversion to Private Limited Company'
      ],
      duration: '7-12 days',
      popular: true,
      trending: false
    },
    {
      id: 'public-limited-company',
      name: 'Public Limited Company Formation',
      slug: 'public-limited-company',
      description: 'Form a Public Limited Company for large-scale business operations with the ability to raise capital from the public through share offerings.',
      icon: Award,
      features: [
        'Unlimited fundraising potential through public offerings',
        'Enhanced market credibility and brand value',
        'Easier acquisition and merger opportunities'
      ],
      duration: '15-30 days',
      popular: false,
      trending: true
    },
    {
      id: 'section8-company',
      name: 'Section 8 Company (Non-Profit)',
      slug: 'section8-company',
      description: 'Establish a Section 8 company for promoting charitable, educational, scientific, or social welfare objectives without profit distribution to members.',
      icon: Heart,
      features: [
        'Tax exemptions under Section 12A and 80G',
        'No minimum capital requirement',
        'Credibility for funding and grants'
      ],
      duration: '20-35 days',
      popular: false,
      trending: true
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

        {/* Featured Services Grid - Simple and Working */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.id}
                className="group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-gold/30 transition-all duration-300 bg-white hover:shadow-lg relative overflow-hidden">
                  {/* Trending Badge */}
                  {service.trending && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold">
                        🔥 Trending
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    
                    {/* Badges Row */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs font-semibold ${
                          service.popular 
                            ? 'bg-gold/10 text-gold hover:bg-gold/20' 
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {service.popular ? '⭐ Popular' : 'Featured'}
                      </Badge>
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <CardTitle className="text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 mb-3 leading-tight min-h-[3rem]">
                      {service.name}
                    </CardTitle>
                    
                    {/* Description */}
                    <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </CardDescription>

                    {/* Benefits Badge */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                        {service.popular ? 'Perfect for startups seeking investment and growth' : 'Ideal for individual entrepreneurs and freelancers'}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      
                      <div className="text-xs text-gold font-medium pl-6">
                        +3 more features included
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
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
                          className="w-full text-xs border-gray-300 text-gray-600 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
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
