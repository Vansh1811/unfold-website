import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { clientTestimonials } from '@/data/servicesData';
import { Star, Users, Award, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { icon: Users, number: '200+', label: 'Happy Clients' },
  { icon: Award, number: '15+', label: 'Industries' },
  { icon: TrendingUp, number: '150%', label: 'Avg. Growth' },
  { icon: Clock, number: '24/7', label: 'Support' },
];

const PortfolioSection = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
    {/* subtle background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-gray-50" />

    <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center sm:mb-16 lg:mb-20"
      >
        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
          Trusted by Leading Clients
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Hear how partnerships with Unfold Finleg Solutions have empowered businesses
          across industries.
        </p>
      </motion.div>

      {/* testimonials */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clientTestimonials.slice(0, 6).map((client, idx) => (
          <motion.div
            key={client.clientName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card hover>
              <CardContent className="space-y-4 p-6">
                {/* avatar */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-500 to-navy-700 text-xl font-bold text-white">
                    {client.initials ?? client.clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{client.clientName}</p>
                    <p className="text-sm text-gray-500">{client.company}</p>
                  </div>
                </div>

                {/* stars */}
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < (client.rating ?? 5)
                          ? 'fill-gold-500 text-gold-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* quote */}
                <p className="text-gray-700">&quot;{client.testimonial}&quot;</p>

                {/* industry */}
                <p className="text-sm text-gray-500">{client.industry}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {stats.map((s, i) => (
          <Card key={s.label} hover>
            <CardContent className="flex flex-col items-center space-y-1 p-6 text-center">
              <div
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${
                  i % 2 ? 'from-gold-500 to-gold-600' : 'from-navy-500 to-navy-600'
                } text-white`}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-navy-900">{s.number}</p>
              <p className="text-sm text-gray-600">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
