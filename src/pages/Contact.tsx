import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business compliance into a competitive advantage? 
              Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-navy">
                    Send us a message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-navy mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="John" className="bg-white" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy mb-2 block">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" className="bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@company.com" className="bg-white" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" className="bg-white" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">
                      Phone Number
                    </label>
                    <Input placeholder="+1 (555) 123-4567" className="bg-white" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-navy mb-2 block">
                      How can we help you? *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your compliance challenges and business goals..."
                      className="bg-white min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="btn-primary w-full md:w-auto">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Details */}
              <Card className="shadow-card border-0">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-heading font-semibold text-navy">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Email</div>
                        <div className="text-muted-foreground">info@unfoldconsulting.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Address</div>
                        <div className="text-muted-foreground">
                          123 Business District<br />
                          Suite 400<br />
                          New York, NY 10001
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Business Hours</div>
                        <div className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-card border-0 bg-navy text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="text-white/90 mb-6">
                    For urgent matters, call us directly or schedule a consultation.
                  </p>
                  <div className="space-y-3">
                    <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold w-full">
                      Schedule Consultation
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy w-full">
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical engagement last?",
                answer: "Engagement duration varies based on your needs, ranging from 3-month projects to ongoing partnerships."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes, we work with businesses of all sizes, from startups to large enterprises."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We serve 15+ industries including finance, healthcare, technology, manufacturing, and more."
              },
              {
                question: "How quickly can you start?",
                answer: "We typically can begin engagements within 1-2 weeks of signing an agreement."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-light-gray rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-semibold text-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;