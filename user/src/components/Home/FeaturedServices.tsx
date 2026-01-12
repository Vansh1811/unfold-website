import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Building2, User, Award, Heart } from 'lucide-react';

const FeaturedServices = () => {
  // Top 4 highlighted services across key categories
  const featuredServices = [
    {
      id: 'company-formation',
      name: 'Company Formation & Registration',
      description:
        'End-to-end company formation services with regulatory guidance and seamless incorporation support.',
      icon: Building2,
      path: '/services/company-formation',
    },
    {
      id: 'virtual-cfo',
      name: 'Virtual CFO (vCFO) Services',
      description:
        'Strategic finance partner for growing businesses, combining FP&A, fundraising support, and board-level reporting.',
      icon: User,
      path: '/services/virtual-cfo-services',
    },
    {
      id: 'fema-foreign-investment',
      name: 'FEMA & Foreign Investment Advisory',
      description:
        'Comprehensive FDI, ODI and foreign investment advisory with FEMA, RBI and reporting compliance.',
      icon: Award,
      path: '/services/foreign-investment-fcra',
    },
    {
      id: 'us-incorporation',
      name: 'US Incorporation, Compliance & Advisory',
      description:
        'US LLC / C‑Corp setup, compliance and ongoing advisory for Indian founders building global businesses.',
      icon: Heart,
      path: '/services/us-incorporation-compliance',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-semibold text-navy">
              Strategic Growth Services
            </span>
          </div>

          {/* Styled like "Our Expert Services" */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy mb-6 leading-tight"
            style={{ fontFamily: 'Nexa Bold' }}
          >
            Most Popular
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-gold via-gold to-gold bg-clip-text text-transparent mx-0 sm:mx-3 relative"
            >
              Business Services
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </motion.span>
          </motion.h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            High-impact services that help you incorporate, scale, and expand
            across borders with complete regulatory confidence and expert
            guidance.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => {
            const IconComponent = service.icon;

            return (
              <div key={service.id} className="group">
                <Card
                  className="
                    h-full flex flex-col
                    border border-gray-100
                    bg-white/90
                    shadow-[0_10px_30px_rgba(15,23,42,0.04)]
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                    hover:border-gold/60
                    transition-all duration-300
                    rounded-2xl
                    overflow-hidden
                    relative
                  "
                >
                  {/* subtle top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="pb-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>

                    {/* Title */}
                    <CardTitle
                      className="
                        text-lg font-bold text-navy
                        group-hover:text-navy-800
                        transition-colors duration-300
                        mb-2 leading-tight min-h-[4rem]
                      "
                    >
                      {service.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0 flex flex-col flex-grow">
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 h-[4rem] overflow-hidden">
                      {service.description}
                    </p>

                    <div className="flex-grow" />

                    {/* Button */}
                    <div className="space-y-3">
                      <Link to={service.path} className="block">
                        <Button
                          className="
                            w-full bg-navy text-white
                            hover:bg-navy-800
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                            rounded-xl
                          "
                          size="sm"
                        >
                          Learn More &amp; Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
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
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-[#fbfbff] to-[#fff9f0] px-6 py-10 sm:px-10 sm:py-12 border border-gray-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            {/* soft accent stripe */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-gold/70 to-transparent" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-navy mb-3">
                Ready to Launch Your Business?
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                Choose the right combination of incorporation, finance, and
                cross‑border advisory services to set up and scale your business
                with confidence.
              </p>

              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border border-gold/60 text-gold hover:bg-gold/10 px-8 py-3 rounded-xl font-semibold"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
