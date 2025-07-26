import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building2, MessageSquare, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 2500));
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@unfoldfinlegsolutions.com',
      secondary: 'We respond within 4 hours',
      gradient: 'from-blue-500 to-blue-600',
      href: 'mailto:hello@unfoldfinlegsolutions.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 995-897-8970',
      secondary: 'Mon-Sat: 9 AM - 7 PM IST',
      gradient: 'from-green-500 to-green-600',
      href: 'tel:+919958978970'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'B-145, Ground Floor, Sector-51',
      secondary: 'Noida, Uttar Pradesh 201301',
      gradient: 'from-purple-500 to-purple-600',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Monday - Saturday',
      secondary: '9:00 AM - 7:00 PM IST',
      gradient: 'from-orange-500 to-orange-600',
      href: '#'
    }
  ];

  const faqItems = [
    {
      question: 'How quickly can you start working on my project?',
      answer: 'Most projects can begin within 48 hours of our initial consultation and agreement finalization.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! We have specialized packages designed specifically for startups and growing businesses.'
    },
    {
      question: 'What makes your compliance approach different?',
      answer: 'We focus on turning compliance into a competitive advantage rather than just meeting minimum requirements.'
    },
    {
      question: 'Do you provide ongoing support after service completion?',
      answer: 'Yes, we offer comprehensive post-service support and annual maintenance packages for continued compliance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Let's Connect
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 mb-6 leading-tight"
                style={{ fontFamily: 'Nexa Bold' }}>
              Start Your
              <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent block sm:inline sm:ml-4">
                Success Story
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business compliance into a competitive advantage? Let's start the conversation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-navy-600 to-navy-700 text-white pb-8">
                  <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center gap-3"
                             style={{ fontFamily: 'Nexa Bold' }}>
                    <Send className="w-7 h-7" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-blue-100 text-base sm:text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent className="p-6 sm:p-8">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <User className="w-4 h-4" />
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className={`border-2 ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-navy-500 focus:ring-navy-500 transition-all duration-300 h-12 text-base`}
                          />
                          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </motion.div>

                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <Mail className="w-4 h-4" />
                            Email *
                          </label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className={`border-2 ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:border-navy-500 focus:ring-navy-500 transition-all duration-300 h-12 text-base`}
                          />
                          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </motion.div>
                      </div>

                      {/* Phone and Company Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <Phone className="w-4 h-4" />
                            Phone
                          </label>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="border-2 border-gray-200 focus:border-navy-500 focus:ring-navy-500 transition-all duration-300 h-12 text-base"
                          />
                        </motion.div>

                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="space-y-2"
                        >
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <Building2 className="w-4 h-4" />
                            Company
                          </label>
                          <Input
                            type="text"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            className="border-2 border-gray-200 focus:border-navy-500 focus:ring-navy-500 transition-all duration-300 h-12 text-base"
                          />
                        </motion.div>
                      </div>

                      {/* Service Interest */}
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-semibold text-gray-700">Service Interest</label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleChange('service', e.target.value)}
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-navy-500 focus:ring-navy-500 transition-all duration-300 text-base bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="incorporation">Company Incorporation</option>
                          <option value="accounting">Accounting & Tax Services</option>
                          <option value="compliance">Legal Compliance</option>
                          <option value="hr">HR & Payroll Solutions</option>
                          <option value="advisory">Business Advisory</option>
                          <option value="other">Other Services</option>
                        </select>
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <MessageSquare className="w-4 h-4" />
                          Message *
                        </label>
                        <Textarea
                          placeholder="Tell us about your project, requirements, or any specific questions you have..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className={`border-2 ${errors.message ? 'border-red-300' : 'border-gray-200'} focus:border-navy-500 focus:ring-navy-500 transition-all duration-300 min-h-[120px] resize-none text-base`}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-4"
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 hover:from-navy-700 hover:via-navy-800 hover:to-navy-900 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ fontFamily: 'Nexa Bold' }}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                              <span>Sending Message...</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3"
                          style={{ fontFamily: 'Nexa Bold' }}>
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '', email: '', phone: '', company: '', service: '', message: ''
                          });
                        }}
                        className="bg-navy-100 text-navy-700 hover:bg-navy-200 px-6 py-2 rounded-lg font-semibold"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="cursor-pointer"
                >
                  <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <info.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-bold text-navy-900 text-lg mb-1"
                              style={{ fontFamily: 'Nexa Bold' }}>
                            {info.title}
                          </h3>
                          <p className="text-navy-700 font-semibold text-base">
                            {info.primary}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {info.secondary}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* FAQ Section */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy-900 flex items-center gap-2"
                             style={{ fontFamily: 'Nexa Bold' }}>
                    <Star className="w-5 h-5 text-gold-500" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                    >
                      <h4 className="font-semibold text-navy-700 mb-2 text-sm"
                          style={{ fontFamily: 'Nexa Bold' }}>
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
