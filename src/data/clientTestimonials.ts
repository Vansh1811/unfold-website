export interface ClientTestimonial {
  id: string;
  clientName: string;
  company: string;
  industry: string;
  testimonial: string;
  rating: number;
  logo?: string;
  initials: string;
  location?: string;
  serviceUsed?: string;
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: '1',
    clientName: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    industry: 'Technology',
    location: 'Bangalore',
    serviceUsed: 'Company Incorporation',
    testimonial: 'Unfold helped us navigate complex compliance requirements seamlessly. Their expertise saved us months of work and ensured we started on the right legal foundation.',
    rating: 5,
    initials: 'RK'
  },
  {
    id: '2',
    clientName: 'Priya Sharma',
    company: 'Green Earth Foods',
    industry: 'Food & Beverage',
    location: 'Mumbai',
    serviceUsed: 'FSSAI Registration',
    testimonial: 'The FSSAI registration process was handled professionally with excellent attention to detail. Their team made the entire licensing process smooth and efficient.',
    rating: 5,
    initials: 'PS'
  },
  {
    id: '3',
    clientName: 'Amit Patel',
    company: 'Digital Marketing Pro',
    industry: 'Marketing',
    location: 'Ahmedabad',
    serviceUsed: 'Trademark Registration',
    testimonial: 'Their trademark services protected our brand effectively with comprehensive legal support. Highly recommend their expertise for intellectual property matters.',
    rating: 5,
    initials: 'AP'
  },
  {
    id: '4',
    clientName: 'Sunita Reddy',
    company: 'Healthcare Plus',
    industry: 'Healthcare',
    location: 'Hyderabad',
    serviceUsed: 'Virtual CFO Services',
    testimonial: 'Virtual CFO services transformed our financial management completely. The strategic insights and professional guidance have been invaluable for our growth.',
    rating: 5,
    initials: 'SR'
  },
  {
    id: '5',
    clientName: 'Vikram Singh',
    company: 'Manufacturing Hub',
    industry: 'Manufacturing',
    location: 'Delhi',
    serviceUsed: 'Complete Incorporation',
    testimonial: 'Complete incorporation support with ongoing compliance management. They made the complex business setup process effortless and stress-free.',
    rating: 5,
    initials: 'VS'
  },
  {
    id: '6',
    clientName: 'Neha Gupta',
    company: 'Fashion Forward',
    industry: 'Fashion & Retail',
    location: 'Jaipur',
    serviceUsed: 'GST Registration',
    testimonial: 'GST registration and accounting services are absolutely top-notch. Their team is always available for support and handles everything with precision.',
    rating: 5,
    initials: 'NG'
  },
  {
    id: '7',
    clientName: 'Arjun Mehta',
    company: 'EduTech Innovations',
    industry: 'Education Technology',
    location: 'Pune',
    serviceUsed: 'Startup Registration',
    testimonial: 'Exceptional support for our startup registration and DPIIT recognition. Their guidance was crucial in setting up our education technology venture.',
    rating: 5,
    initials: 'AM'
  },
  {
    id: '8',
    clientName: 'Kavita Joshi',
    company: 'Organic Farms Ltd',
    industry: 'Agriculture',
    location: 'Nashik',
    serviceUsed: 'Producer Company',
    testimonial: 'Producer company registration was handled expertly with complete understanding of agricultural business needs. Excellent service for farming enterprises.',
    rating: 5,
    initials: 'KJ'
  },
  {
    id: '9',
    clientName: 'Rohit Agarwal',
    company: 'FinTech Solutions',
    industry: 'Financial Technology',
    location: 'Gurgaon',
    serviceUsed: 'Compliance Management',
    testimonial: 'Comprehensive compliance management has kept our FinTech operations smooth and regulatory-compliant. Their proactive approach is remarkable.',
    rating: 5,
    initials: 'RA'
  },
  {
    id: '10',
    clientName: 'Deepika Nair',
    company: 'Wellness Retreat',
    industry: 'Wellness & Tourism',
    location: 'Kerala',
    serviceUsed: 'Section 8 Company',
    testimonial: 'Section 8 company registration for our wellness NGO was seamless. Their expertise in non-profit regulations saved us significant time and effort.',
    rating: 5,
    initials: 'DN'
  }
];

// Utility functions for testimonials
export const getTestimonialsByRating = (minRating: number = 4): ClientTestimonial[] => {
  return clientTestimonials.filter(testimonial => testimonial.rating >= minRating);
};

export const getTestimonialsByIndustry = (industry: string): ClientTestimonial[] => {
  return clientTestimonials.filter(testimonial => 
    testimonial.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

export const getFeaturedTestimonials = (count: number = 6): ClientTestimonial[] => {
  return clientTestimonials.slice(0, count);
};
