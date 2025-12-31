import { FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building2,
  MessageSquare,
  Star,
} from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  serviceSubcategory: string;
  message: string;
};

type ContactInfoItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  primary: string;
  secondary: string;
  href?: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  subServices: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'incorporation',
    label: 'Company Incorporation',
    subServices: [
      'Private Limited Company',
      'Public Limited Company',
      'LLP Registration',
      'One Person Company',
      'Section 8 Company',
      'Nidhi Company',
      'Producer Company',
      'Partnership Firm Registration',
      'Sole Proprietorship Registration',
      'Startup India Registration',
      'MSME / Udyam Registration',
      'Import Export Code (IEC)',
    ],
  },
  {
    id: 'registrationLicensing',
    label: 'Registration & Licensing',
    subServices: [
      'GST Registration',
      'Professional Tax Registration',
      'Shop & Establishment Registration',
      'FSSAI Registration',
      'PF & ESI Registration',
      'Trade License',
      'Trademark Registration',
      'PAN & TAN Application',
    ],
  },
  {
    id: 'accounting',
    label: 'Accounting & Tax Services',
    subServices: [
      'Monthly Accounting & Bookkeeping',
      'Virtual CFO Services',
      'GST Return Filing',
      'TDS Return Filing',
      'Income Tax Return Filing',
      'Tax Planning & Advisory',
      'Financial Statements & Reporting',
      'Payroll Accounting',
    ],
  },
  {
    id: 'compliance',
    label: 'Corporate & Secretarial Compliance',
    subServices: [
      'ROC Annual Filings',
      'Event Based Compliances',
      'Secretarial Audit',
      'Maintenance of Statutory Registers',
      'Board & General Meeting Support',
      'Change in Directors / Partners',
      'Change in Capital Structure',
      'Charge Creation & Modification Filings',
      'Secretarial Standard Compliances',
    ],
  },
  {
    id: 'hr',
    label: 'HR & Payroll Solutions',
    subServices: [
      'Payroll Processing',
      'PF & ESI Compliances',
      'Labour Law Advisory',
      'Drafting HR Policies & Handbooks',
      'Employee Onboarding & Exit Formalities',
      'Attendance & Leave Management Support',
    ],
  },
  {
    id: 'protectBusiness',
    label: 'Protect Your Business',
    subServices: [
      'Trademark Registration',
      'Trademark Objection & Opposition Handling',
      'Legal Drafting of Agreements & Contracts',
      'Vendor & Service Agreements',
      'Founders’ Agreement / Shareholders’ Agreement',
      'Non-Disclosure Agreements (NDA)',
      'Employment & Consultancy Agreements',
    ],
  },
  {
    id: 'advisory',
    label: 'Business Advisory',
    subServices: [
      'Fundraising & Valuation Support',
      'Due Diligence & Transaction Advisory',
      'Strategic Business Consulting',
      'Startup Compliance Roadmap',
      'Entity Structure Advisory',
      'Process & Governance Advisory',
    ],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    serviceSubcategory: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitted(false);

    try {
      const res = await fetch('http://localhost:5000/api/v1/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          serviceSubcategory: formData.serviceSubcategory,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        serviceSubcategory: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const onInputChange =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(field, e.target.value);
    };

  const onTextareaChange =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      handleChange(field, e.target.value);
    };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@unfoldfinlegsolutions.com',
      secondary: 'We respond within 4 hours',
      href: 'mailto:hello@unfoldfinlegsolutions.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 995-897-8970',
      secondary: 'Mon-Sat: 9 AM - 7 PM IST',
      href: 'tel:+919958978970',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'B-145, Ground Floor, Sector-51',
      secondary: 'Noida, Uttar Pradesh 201301',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Monday - Saturday',
      secondary: '9:00 AM - 7:00 PM IST',
    },
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'How quickly can you start working on my project?',
      answer:
        'Most projects can begin within 48 hours of our initial consultation and agreement finalization.',
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer:
        'Absolutely! We have specialized packages designed specifically for startups and growing businesses.',
    },
    {
      question: 'What makes your compliance approach different?',
      answer:
        'We focus on turning compliance into a competitive advantage rather than just meeting minimum requirements.',
    },
    {
      question: 'Do you provide ongoing support after service completion?',
      answer:
        'Yes, we offer comprehensive post-service support and annual maintenance packages for continued compliance.',
    },
  ];

  const currentCategory = serviceCategories.find(
    (c) => c.id === formData.service
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/40 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_60%)]" />

      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Let&apos;s Connect
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 mb-4 leading-tight"
              style={{ fontFamily: 'Nexa Bold' }}
            >
              Start Your
              <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent block sm:inline sm:ml-4">
                Success Story
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business compliance into a competitive
              advantage? Let&apos;s start the conversation.
            </p>
          </motion.div>

          {/* MAIN GRID: form + contact details */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* FORM (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-100 bg-white rounded-2xl">
                <CardHeader className="bg-gradient-to-r from-navy-700 to-navy-800 text-white pb-7 rounded-t-2xl">
                  <CardTitle
                    className="text-2xl lg:text-[26px] font-bold flex items-center gap-3"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    <Send className="w-6 h-6" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </CardHeader>

                <CardContent className="p-6 sm:p-7">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <User className="w-4 h-4" />
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={onInputChange('name')}
                            className={`border ${
                              errors.name
                                ? 'border-red-300'
                                : 'border-slate-200'
                            } h-11 text-sm rounded-xl bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <Mail className="w-4 h-4" />
                            Email *
                          </label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={onInputChange('email')}
                            className={`border ${
                              errors.email
                                ? 'border-red-300'
                                : 'border-slate-200'
                            } h-11 text-sm rounded-xl bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <Phone className="w-4 h-4" />
                            Phone
                          </label>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={onInputChange('phone')}
                            className="border border-slate-200 h-11 text-sm rounded-xl bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <Building2 className="w-4 h-4" />
                            Company
                          </label>
                          <Input
                            type="text"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={onInputChange('company')}
                            className="border border-slate-200 h-11 text-sm rounded-xl bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Service Interest */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <label className="text-xs font-semibold text-gray-700">
                            Service Interest
                          </label>
                          <span className="text-[11px] text-gray-500">
                            This helps route your query to the right expert.
                          </span>
                        </div>

                        <select
                          value={formData.service}
                          onChange={(e) => {
                            const newCat = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              service: newCat,
                              serviceSubcategory: '',
                            }));
                          }}
                          className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300"
                        >
                          <option value="">Select a service category</option>
                          {serviceCategories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.label}
                            </option>
                          ))}
                        </select>

                        <select
                          value={formData.serviceSubcategory}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              serviceSubcategory: e.target.value,
                            }))
                          }
                          disabled={!currentCategory}
                          className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300 disabled:bg-slate-50 disabled:text-slate-400"
                        >
                          <option value="">
                            {currentCategory
                              ? 'Select a specific service'
                              : 'Choose a category first'}
                          </option>
                          {currentCategory?.subServices.map((sub) => (
                            <option key={sub} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <MessageSquare className="w-4 h-4" />
                          Message *
                        </label>
                        <Textarea
                          placeholder="Tell us about your project, requirements, or any specific questions you have..."
                          value={formData.message}
                          onChange={onTextareaChange('message')}
                          className={`border ${
                            errors.message
                              ? 'border-red-300'
                              : 'border-slate-200'
                          } min-h-[110px] text-sm rounded-xl bg-white focus:border-gold-500 focus:ring-gold-500 transition-all duration-300 resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-1"
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-600 hover:to-gold-600 text-navy-900 py-3.5 rounded-2xl font-bold text-base transition-all duration-300 shadow-[0_18px_40px_rgba(180,137,37,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
                          style={{ fontFamily: 'Nexa Bold' }}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="animate-spin w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full" />
                              <span>Sending Message...</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 220,
                      }}
                      className="text-center py-8 bg-emerald-50/40 rounded-xl"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                      </motion.div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-navy-900 mb-2"
                        style={{ fontFamily: 'Nexa Bold' }}
                      >
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            service: '',
                            serviceSubcategory: '',
                            message: '',
                          });
                        }}
                        className="bg-navy-50 text-navy-800 hover:bg-navy-100 px-5 py-2 rounded-xl font-semibold text-sm"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* CONTACT DETAILS (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2 flex"
            >
              <Card className="relative border border-slate-100 bg-white rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] flex-1 flex flex-col overflow-hidden">
                {/* thin top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500" />

              {/* navy header bar – taller like form header */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="px-6 py-8 sm:py-9 bg-navy-900 flex items-center justify-between gap-4"
              >
                <div className="inline-flex items-center gap-2 bg-navy-800 px-4 py-2 rounded-full text-[12px] font-medium text-gold-300 shadow-sm">
                  <Phone className="w-4 h-4" />
                  Prefer a quick call?
                </div>
                <span className="text-[12px] text-blue-100 whitespace-nowrap">
                  Mon–Sat · 9:00 AM – 7:00 PM IST
                </span>
              </motion.div>


                {/* heading block */}
                <CardHeader className="pb-3 pt-4 px-5 bg-gradient-to-br from-gold-50 via-white to-blue-50/60">
                  <CardTitle
                    className="text-base font-bold text-white inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-900 shadow-sm"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    
                  </CardTitle>
                  <p className="text-xs text-gray-600 mt-3 max-w-sm">
                    Reach our team via email, phone, or visit us during business
                    hours.
                  </p>
                </CardHeader>

                {/* cards list + rating card */}
                <CardContent className="p-5 pt-4 flex-1 flex flex-col gap-3">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.15 + index * 0.06,
                      }}
                      whileHover={{ y: -2, scale: 1.01 }}
                      className="block rounded-xl border border-slate-100 bg-gradient-to-r from-white to-slate-50/70 px-4 py-3.5 hover:border-gold-400 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center shadow-sm">
                          <info.icon className="w-5 h-5 text-gold-300" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className="font-semibold text-navy-900 text-sm mb-0.5"
                            style={{ fontFamily: 'Nexa Bold' }}
                          >
                            {info.title}
                          </h3>
                          <p className="text-zinc-900 font-semibold text-sm">
                            {info.primary}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {info.secondary}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}

                {/* RATED CARD – light inline badge */}
               {/* RATED CARD – matches other cards, with gold accent */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.4 }}
                  className="mt-2 block rounded-xl border border-gold-300/70 bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-center gap-3.5">
                    {/* make icon match others */}
                    <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center shadow-sm">
                      <Star className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="flex-1">
                      <span
                        className="block text-xs font-semibold text-navy-900 mb-0.5"
                        style={{ fontFamily: 'Nexa Bold' }}
                      >
                        Trusted by 100+ businesses
                      </span>
                      <span className="text-[11px] text-gray-700">
                        Rated 4.9/5 for responsiveness and compliance expertise.
                      </span>
                    </div>
                  </div>
                </motion.div>




                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* FAQ FULL-WIDTH BELOW, styled to match */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 max-w-6xl mx-auto"
              >
                <Card className="border border-slate-100 bg-white rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden">
                  {/* lighter header so title reads clearly */}
                  <CardHeader className="pb-4 pt-5 px-6 bg-gradient-to-r from-navy-900/95 via-navy-800 to-navy-900/95 text-white">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="inline-flex items-center gap-2 bg-white/10 text-gold-300 px-3 py-1 rounded-full text-[11px] font-medium">
                        <Star className="w-3 h-3" />
                        Helpful answers
                      </div>
                      <span className="hidden sm:inline text-[11px] text-blue-100">
                        Updated regularly as we work with more founders.
                      </span>
                    </div>

                    {/* title in its own navy pill */}
                    <div className="inline-flex items-center gap-2 bg-navy-950/70 px-4 py-2 rounded-xl shadow-sm">
                      <span
                        className="text-sm sm:text-base font-bold"
                        style={{ fontFamily: 'Nexa Bold' }}
                      >
                        Frequently Asked Questions
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-blue-100 mt-3 max-w-xl">
                      Find quick answers to what most founders and finance teams ask before
                      getting started with Unfold Finleg.
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 sm:p-7 bg-gradient-to-br from-white via-white to-blue-50/40">
                    <div className="grid md:grid-cols-2 gap-6">
                      {faqItems.map((faq, index) => (
                        <motion.div
                          key={faq.question}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="rounded-xl border border-slate-100 bg-white/85 backdrop-blur-sm p-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                        >
                          <h4
                            className="font-semibold text-navy-900 mb-1.5 text-sm"
                            style={{ fontFamily: 'Nexa Bold' }}
                          >
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 leading-snug text-xs">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
