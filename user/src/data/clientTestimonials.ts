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
  clientName: 'Arpit Pathak',
  company: 'TechStart Solutions',
  industry: 'Technology',
  location: 'Bangalore',
  serviceUsed: 'Company Incorporation',
  testimonial:
    'I’ve had an amazing experience with Unfold Finleg Solutions LLP. The team is highly professional, responsive, and genuinely supportive. Their guidance has been clear, timely, and incredibly helpful. I truly appreciate their dedication and would highly recommend their services to anyone seeking reliable legal support!',
  rating: 5,
  initials: 'AP',
  },

  {
    id: '2',
    clientName: 'Divyansh Kauts',
    company: 'Green Earth Foods',
    industry: 'Food & Beverage',
    location: 'Mumbai',
    serviceUsed: 'FSSAI Registration',
    testimonial: 'I highly recommend UNFOLD FINLEG SOLUTIONS for its exceptional services and expertise. They provide invaluable guidance with tailored solutions and a proactive approach that keeps us well-informed and empowered to make decisions confidently. Their dedication to precision and efficiency streamlines our financial processes, ensuring compliance and clarity in complex concepts. UNFOLD FINLEG SOLUTIONS is an indispensable partner for anyone seeking reliable and knowledgeable financial services.',
    rating: 5,
    initials: 'DK'
  },
  {
    id: '3',
    clientName: 'Dev Rathor',
    company: 'Digital Marketing Pro',
    industry: 'Marketing',
    location: 'Ahmedabad',
    serviceUsed: 'Trademark Registration',
    testimonial: 'We took services from Unfold finleg solutions LLP since 4 years we did not face any problems with unfold they are doing their job very professionally and too much cooperative I know the owner of unfold\'s personally.\nI highly recommend unfold for all professional needs they are very professional.',
    rating: 5,
    initials: 'DV'
  },
  {
    id: '4',
    clientName: 'Preeti Kotiya',
    company: 'Healthcare Plus',
    industry: 'Healthcare',
    location: 'Hyderabad',
    serviceUsed: 'Virtual CFO Services',
    testimonial: 'I had a great experience registering my trademark with India filing. The entire process was very easy and helpful. Anbuselvi Mam handled my trademark and she was extremely professional and helpful. She patiently answered all my queries and doubts and was very attentive. I would definitely recommend this service to everyone.',
    rating: 5,
    initials: 'RS'
  },
  {
    id: '5',
    clientName: 'Karan Arora',
    company: 'Manufacturing Hub',
    industry: 'Manufacturing',
    location: 'Delhi',
    serviceUsed: 'Complete Incorporation',
    testimonial: 'Professional Lawyers Who Care About Your Finances - Unfoldfinlegsolutions. As someone who values financial stability as much as legal protection, choosing ABC Unfoldfinlegsolutions has been nothing short of excellent. Their team of skilled lawyers combines comprehensive understanding of finance and exceptional attention to detail, ensuring your case receives proper care. What sets them apart though, is their genuine concern towards clients welfare during stressful time',
    rating: 5,
    initials: 'VS'
  },


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
