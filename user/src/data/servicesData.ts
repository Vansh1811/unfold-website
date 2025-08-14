export interface SubService {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  duration?: string;
  popular?: boolean;
  trending?: boolean;
  rating?: number;
  reviews?: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subServices: SubService[];
}

export interface MoreService {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subServices: SubService[];
}

export const mainServiceCategories: ServiceCategory[] = [
  {
    id: 'company-formation',
    name: 'Company Formation & Registration',
    slug: 'company-formation',
    description: 'Complete business incorporation services for all company types with expert guidance.',
    icon: 'Building2',
    subServices: [
      {
        id: 'private-limited-company',
        name: 'Private Limited Company Registration',
        slug: 'private-limited-company',
        description: 'Most popular business structure with limited liability protection and credibility.',
        icon: 'Building',
        features: [
          'Complete incorporation process',
          'Digital signature certificate',
          'Director identification number',
          'Certificate of incorporation',
          'PAN and TAN registration',
          'Bank account opening assistance'
        ],
        price: 'Starting at ₹6,999',
        duration: '10-15 days',
        popular: true,
        rating: 4.9,
        reviews: 1250
      },
      {
        id: 'one-person-company',
        name: 'One Person Company (OPC) Registration',
        slug: 'one-person-company',
        description: 'Perfect for solo entrepreneurs wanting limited liability with single ownership.',
        icon: 'User',
        features: [
          'Single person ownership',
          'Limited liability protection',
          'Easy compliance requirements',
          'Nominee appointment',
          'Professional credibility',
          'Easy conversion to Pvt Ltd'
        ],
        price: 'Starting at ₹8,999',
        duration: '10-15 days',
        rating: 4.8,
        reviews: 890
      },
      {
        id: 'llp-registration',
        name: 'Limited Liability Partnership (LLP)',
        slug: 'llp-registration',
        description: 'Ideal for professional services with partnership flexibility and limited liability.',
        icon: 'Users',
        features: [
          'Partnership deed preparation',
          'LLP agreement drafting',
          'Designated partner appointment',
          'Minimum compliance requirements',
          'Tax benefits',
          'Professional management'
        ],
        price: 'Starting at ₹9,999',
        duration: '12-18 days',
        rating: 4.7,
        reviews: 645
      },
      {
        id: 'nidhi-company',
        name: 'Nidhi Company Registration',
        slug: 'nidhi-company',
        description: 'Specialized non-banking financial company for mutual benefit of shareholders.',
        icon: 'Landmark',
        features: [
          'Complete documentation preparation',
          'ROC filing and approval',
          'Minimum capital compliance',
          'Post-incorporation compliance',
          'Annual filing support',
          'NBFC regulations guidance'
        ],
        price: 'Starting at ₹15,999',
        duration: '15-20 days',
        rating: 4.6,
        reviews: 234
      },
      {
        id: 'section8-company',
        name: 'Section 8 Company (Non-Profit)',
        slug: 'section8-company',
        description: 'Non-profit company registration for charitable, educational, and social causes.',
        icon: 'Heart',
        features: [
          'NGO/Non-profit registration',
          'Tax exemption under 80G',
          'CSR funding eligibility',
          'Annual compliance management',
          'Foreign funding permissions',
          'Charitable activities license'
        ],
        price: 'Starting at ₹12,999',
        duration: '20-25 days',
        rating: 4.5,
        reviews: 178
      },
      {
        id: 'producer-company',
        name: 'Producer Company Registration',
        slug: 'producer-company',
        description: 'Specialized for agricultural and farming businesses with cooperative benefits.',
        icon: 'Wheat',
        features: [
          'Agricultural business setup',
          'Farmer producer organization',
          'Government scheme benefits',
          'Cooperative structure',
          'Market linkage support',
          'Subsidy assistance'
        ],
        price: 'Starting at ₹18,999',
        duration: '25-30 days',
        rating: 4.4,
        reviews: 156
      }
    ]
  },
  {
    id: 'legal-compliance',
    name: 'Legal Compliance & Advisory',
    slug: 'legal-compliance',
    description: 'Comprehensive legal compliance services ensuring regulatory adherence.',
    icon: 'Scale',
    subServices: [
      {
        id: 'annual-compliance',
        name: 'Annual Compliance Management',
        slug: 'annual-compliance',
        description: 'Complete annual compliance for companies, LLPs, and other business entities.',
        icon: 'Calendar',
        features: [
          'Annual return filing (AOC-4, MGT-7)',
          'Board meeting compliance',
          'AGM conduct and minutes',
          'Statutory audit coordination',
          'ROC fee payment',
          'Penalty avoidance strategies'
        ],
        price: 'Starting at ₹4,999/year',
        duration: 'Annual service',
        popular: true,
        rating: 4.8,
        reviews: 2100
      },
      {
        id: 'secretarial-services',
        name: 'Secretarial Services',
        slug: 'secretarial-services',
        description: 'Professional company secretary services for corporate governance.',
        icon: 'FileCheck',
        features: [
          'Board meeting management',
          'Statutory register maintenance',
          'Corporate governance advisory',
          'Regulatory compliance monitoring',
          'Legal documentation',
          'Investor relations support'
        ],
        price: 'Starting at ₹8,999/month',
        duration: 'Monthly service',
        rating: 4.7,
        reviews: 567
      },
      {
        id: 'secretarial-audit',
        name: 'Secretarial Audit',
        slug: 'secretarial-audit',
        description: 'Mandatory secretarial audit for applicable companies under Companies Act.',
        icon: 'Search',
        features: [
          'Compliance verification',
          'Statutory audit requirements',
          'Form MR-3 filing',
          'Non-compliance identification',
          'Audit report preparation',
          'Regulatory advisory'
        ],
        price: 'Starting at ₹15,999',
        duration: '15-30 days',
        rating: 4.6,
        reviews: 345
      },
      {
        id: 'labour-law-compliance',
        name: 'Labour Law Registrations & Compliance',
        slug: 'labour-law-compliance',
        description: 'Complete labour law compliance for employee welfare and statutory requirements.',
        icon: 'Users2',
        features: [
          'Contract Labour Act registration',
          'Shops & Establishment Act',
          'Professional Tax registration',
          'Labour license compliance',
          'Employee welfare compliance',
          'Industrial relations support'
        ],
        price: 'Starting at ₹5,999',
        duration: '10-15 days',
        rating: 4.5,
        reviews: 432
      }
    ]
  },
  {
    id: 'taxation-accounting',
    name: 'Taxation & Accounting',
    slug: 'taxation-accounting',
    description: 'Complete taxation and accounting services for individuals and businesses.',
    icon: 'Calculator',
    subServices: [
      {
        id: 'gst-registration-accounting',
        name: 'GST Registration & Accounting',
        slug: 'gst-registration-accounting',
        description: 'Complete GST registration and ongoing compliance management.',
        icon: 'Receipt',
        features: [
          'GST registration process',
          'Monthly GSTR filing',
          'Input tax credit optimization',
          'GST audit and advisory',
          'E-way bill management',
          'GST refund processing'
        ],
        price: 'Starting at ₹2,999/month',
        duration: 'Monthly service',
        popular: true,
        rating: 4.9,
        reviews: 3200
      },
      {
        id: 'income-tax-services',
        name: 'Income Tax Return Filing',
        slug: 'income-tax-services',
        description: 'Professional income tax return filing for individuals and businesses.',
        icon: 'FileText',
        features: [
          'ITR preparation and filing',
          'Tax planning strategies',
          'Refund claim processing',
          'Notice handling support',
          'Tax computation optimization',
          'Investment advisory for tax saving'
        ],
        price: 'Starting at ₹1,999',
        duration: '7-15 days',
        rating: 4.8,
        reviews: 4500
      },
      {
        id: 'tds-return-filing',
        name: 'TDS Return Filing',
        slug: 'tds-return-filing',
        description: 'Accurate TDS return filing and certificate generation services.',
        icon: 'FileCheck',
        features: [
          'Monthly/Quarterly TDS returns',
          'TDS certificate generation',
          'Form 16/16A preparation',
          'TDS reconciliation',
          'Lower deduction certificate',
          'TDS refund assistance'
        ],
        price: 'Starting at ₹2,499/month',
        duration: 'Monthly service',
        rating: 4.7,
        reviews: 1890
      },
      {
        id: 'virtual-accounting',
        name: 'Virtual Accounting Services',
        slug: 'virtual-accounting',
        description: 'Complete bookkeeping and accounting services with digital convenience.',
        icon: 'BookOpen',
        features: [
          'Daily transaction recording',
          'Financial statements preparation',
          'Bank reconciliation',
          'Expense management',
          'Accounts payable/receivable',
          'MIS reporting'
        ],
        price: 'Starting at ₹4,999/month',
        duration: 'Monthly service',
        rating: 4.6,
        reviews: 1200
      }
    ]
  },
  {
    id: 'intellectual-property',
    name: 'Intellectual Property Rights',
    slug: 'intellectual-property',
    description: 'Protect your innovations and brand with comprehensive IP services.',
    icon: 'Shield',
    subServices: [
      {
        id: 'trademark-registration',
        name: 'Trademark Registration',
        slug: 'trademark-registration',
        description: 'Complete trademark registration and brand protection services.',
        icon: 'Award',
        features: [
          'Trademark search and clearance',
          'Application filing and prosecution',
          'Opposition handling',
          'Registration certificate',
          'Renewal management',
          'Brand protection strategy'
        ],
        price: 'Starting at ₹6,999',
        duration: '12-18 months',
        popular: true,
        rating: 4.8,
        reviews: 890
      },
      {
        id: 'trademark-objection-hearing',
        name: 'Trademark Objection & Hearing',
        slug: 'trademark-objection-hearing',
        description: 'Expert handling of trademark objections and hearing representation.',
        icon: 'Gavel',
        features: [
          'Objection analysis and response',
          'Hearing preparation and representation',
          'Legal documentation support',
          'Follow-up proceedings',
          'Status monitoring',
          'Registration facilitation'
        ],
        price: 'Starting at ₹8,999',
        duration: '3-6 months',
        rating: 4.7,
        reviews: 456
      },
      {
        id: 'patent-registration',
        name: 'Patent Registration',
        slug: 'patent-registration',
        description: 'Protect your innovations with comprehensive patent registration services.',
        icon: 'Lightbulb',
        features: [
          'Patent search and analysis',
          'Application drafting and filing',
          'Patent prosecution support',
          'Opposition and examination',
          'Grant facilitation',
          'Patent portfolio management'
        ],
        price: 'Starting at ₹35,999',
        duration: '18-36 months',
        rating: 4.6,
        reviews: 234
      }
    ]
  },
  {
    id: 'hr-payroll',
    name: 'HR & Payroll Services',
    slug: 'hr-payroll',
    description: 'Complete HR management and payroll processing solutions.',
    icon: 'Users2',
    subServices: [
      {
        id: 'payroll-management',
        name: 'Payroll Management Services',
        slug: 'payroll-management',
        description: 'End-to-end payroll processing with statutory compliance.',
        icon: 'CreditCard',
        features: [
          'Monthly salary processing',
          'Statutory deductions (PF, ESI, TDS)',
          'Form 16 generation',
          'Payroll reports and analytics',
          'Employee self-service portal',
          'Compliance management'
        ],
        price: 'Starting at ₹199/employee/month',
        duration: 'Monthly service',
        popular: true,
        rating: 4.8,
        reviews: 1567
      },
      {
        id: 'esic-pf-compliance',
        name: 'ESIC & PF Registration & Filing',
        slug: 'esic-pf-compliance',
        description: 'Complete ESIC and PF registration with ongoing compliance management.',
        icon: 'Shield',
        features: [
          'ESIC and PF registration',
          'Monthly return filing',
          'Employee enrollment and exits',
          'Claim processing assistance',
          'Inspection handling',
          'Penalty avoidance strategies'
        ],
        price: 'Starting at ₹2,999/month',
        duration: 'Monthly service',
        rating: 4.7,
        reviews: 789
      }
    ]
  },
  {
    id: 'business-licensing',
    name: 'Business Licensing & Registration',
    slug: 'business-licensing',
    description: 'Various business licenses and registrations for different industries.',
    icon: 'FileCheck2',
    subServices: [
      {
        id: 'fssai-registration',
        name: 'FSSAI Food License Registration',
        slug: 'fssai-registration',
        description: 'Food Safety and Standards Authority license for food businesses.',
        icon: 'Utensils',
        features: [
          'FSSAI license application',
          'Food safety compliance',
          'Documentation support',
          'License renewal services',
          'Compliance monitoring',
          'Amendment and modification'
        ],
        price: 'Starting at ₹2,999',
        duration: '7-15 days',
        rating: 4.8,
        reviews: 1234
      },
      {
        id: 'import-export-code',
        name: 'Import Export Code (IEC)',
        slug: 'import-export-code',
        description: 'IEC registration for businesses engaged in international trade.',
        icon: 'Globe',
        features: [
          'IEC application and filing',
          'Documentation preparation',
          'Digital signature assistance',
          'Certificate delivery',
          'Modification services',
          'Export-import guidance'
        ],
        price: 'Starting at ₹3,999',
        duration: '7-10 days',
        rating: 4.7,
        reviews: 567
      },
      {
        id: 'startup-india-registration',
        name: 'Startup India Registration',
        slug: 'startup-india-registration',
        description: 'DPIIT recognition and Startup India benefits registration.',
        icon: 'Rocket',
        features: [
          'DPIIT recognition certificate',
          'Tax exemption benefits',
          'IPR fast-track processing',
          'Government tender benefits',
          'Funding opportunities access',
          'Compliance relaxations'
        ],
        price: 'Starting at ₹4,999',
        duration: '15-20 days',
        trending: true,
        rating: 4.9,
        reviews: 890
      },
      {
        id: 'msme-registration',
        name: 'MSME Registration (Udyam)',
        slug: 'msme-registration',
        description: 'Micro, Small & Medium Enterprise registration for government benefits.',
        icon: 'Factory',
        features: [
          'Udyam registration certificate',
          'Government scheme benefits',
          'Subsidy and loan benefits',
          'Priority sector lending',
          'Tender preference',
          'Compliance simplification'
        ],
        price: 'Starting at ₹1,999',
        duration: '3-7 days',
        rating: 4.6,
        reviews: 2100
      }
    ]
  }
];

export const moreServices: MoreService[] = [
  {
    id: 'startup-services',
    name: 'Startup Ecosystem',
    slug: 'startup-services',
    description: 'Complete startup ecosystem support from ideation to scaling.',
    icon: 'Rocket',
    subServices: [
      {
        id: 'business-plan-development',
        name: 'Business Plan Development',
        slug: 'business-plan-development',
        description: 'Professional business plan creation for funding and strategic growth.',
        icon: 'FileText',
        features: [
          'Market research and analysis',
          'Financial projections and modeling',
          'Investor-ready presentation',
          'Go-to-market strategy',
          'Risk assessment and mitigation',
          'Funding strategy development'
        ],
        price: 'Starting at ₹25,999',
        duration: '15-20 days',
        popular: true,
        rating: 4.8,
        reviews: 345
      },
      {
        id: 'pitch-deck-creation',
        name: 'Investor Pitch Deck Creation',
        slug: 'pitch-deck-creation',
        description: 'Compelling pitch decks that attract investors and secure funding.',
        icon: 'Presentation',
        features: [
          'Professional design and content',
          'Compelling storytelling',
          'Financial projections',
          'Market opportunity analysis',
          'Competitive landscape',
          'Funding requirements'
        ],
        price: 'Starting at ₹15,999',
        duration: '7-10 days',
        rating: 4.7,
        reviews: 234
      }
    ]
  },
  {
    id: 'virtual-cfo-advanced',
    name: 'Virtual CFO Services',
    slug: 'virtual-cfo-advanced',
    description: 'Strategic financial management and CFO-level expertise for growing businesses.',
    icon: 'TrendingUp',
    subServices: [
      {
        id: 'financial-planning-analysis',
        name: 'Financial Planning & Analysis',
        slug: 'financial-planning-analysis',
        description: 'Strategic financial planning, budgeting, and performance analysis.',
        icon: 'BarChart3',
        features: [
          'Financial modeling and forecasting',
          'Budget planning and variance analysis',
          'Cash flow management',
          'Investment analysis and decisions',
          'KPI development and monitoring',
          'Board reporting and presentations'
        ],
        price: 'Starting at ₹35,999/month',
        duration: 'Monthly service',
        trending: true,
        rating: 4.9,
        reviews: 156
      },
      {
        id: 'fundraising-support',
        name: 'Fundraising & Investment Support',
        slug: 'fundraising-support',
        description: 'End-to-end support for raising capital and managing investor relations.',
        icon: 'DollarSign',
        features: [
          'Fundraising strategy development',
          'Investor identification and outreach',
          'Due diligence preparation',
          'Valuation support and modeling',
          'Term sheet negotiation support',
          'Legal documentation coordination'
        ],
        price: 'Starting at ₹75,999',
        duration: '2-6 months',
        rating: 4.8,
        reviews: 89
      }
    ]
  },
  {
    id: 'business-protection',
    name: 'Business Protection & Risk Management',
    slug: 'business-protection',
    description: 'Comprehensive business protection and risk management solutions.',
    icon: 'Shield',
    subServices: [
      {
        id: 'legal-compliance-audit',
        name: 'Legal Compliance Audit',
        slug: 'legal-compliance-audit',
        description: 'Comprehensive audit of legal compliance across all business areas.',
        icon: 'Search',
        features: [
          'Compliance gap analysis',
          'Risk assessment and rating',
          'Legal documentation review',
          'Regulatory requirement mapping',
          'Remediation action plan',
          'Ongoing monitoring system'
        ],
        price: 'Starting at ₹35,999',
        duration: '20-30 days',
        rating: 4.7,
        reviews: 123
      },
      {
        id: 'business-insurance-advisory',
        name: 'Business Insurance Advisory',
        slug: 'business-insurance-advisory',
        description: 'Expert guidance on business insurance needs and risk coverage.',
        icon: 'Umbrella',
        features: [
          'Insurance needs assessment',
          'Policy comparison and selection',
          'Claims management support',
          'Risk management strategies',
          'Premium optimization',
          'Annual policy review'
        ],
        price: 'Starting at ₹9,999',
        duration: '7-15 days',
        rating: 4.6,
        reviews: 234
      }
    ]
  }
];

// Enhanced search functionality
export const searchServices = (query: string): (SubService & { category: string })[] => {
  if (!query.trim()) return [];

  const results: (SubService & { category: string })[] = [];
  const searchTerm = query.toLowerCase();

  // Search in main categories
  mainServiceCategories.forEach(category => {
    category.subServices.forEach(service => {
      if (
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
        category.name.toLowerCase().includes(searchTerm)
      ) {
        results.push({ ...service, category: category.name });
      }
    });
  });

  // Search in more services
  moreServices.forEach(category => {
    category.subServices.forEach(service => {
      if (
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
        category.name.toLowerCase().includes(searchTerm)
      ) {
        results.push({ ...service, category: category.name });
      }
    });
  });

  return results;
};

// Enhanced client testimonials with ratings
export interface ClientTestimonial {
  id: string;
  clientName: string;
  company: string;
  industry: string;
  testimonial: string;
  rating: number;
  initials: string;
  serviceUsed?: string;
  location?: string;
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: '1',
    clientName: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    industry: 'Technology',
    location: 'Bangalore',
    serviceUsed: 'Private Limited Company Registration',
    testimonial: 'Unfold helped us navigate complex compliance requirements seamlessly. Their expertise in company incorporation saved us months of work and ensured we started on the right legal foundation.',
    rating: 5,
    initials: 'RK'
  },
  {
    id: '2',
    clientName: 'Priya Sharma',
    company: 'Green Earth Foods',
    industry: 'Food & Beverage',
    location: 'Mumbai',
    serviceUsed: 'FSSAI Food License Registration',
    testimonial: 'The FSSAI registration process was handled professionally with excellent attention to detail. Their team made the entire food licensing process smooth and efficient.',
    rating: 5,
    initials: 'PS'
  },
  {
    id: '3',
    clientName: 'Amit Patel',
    company: 'Digital Marketing Pro',
    industry: 'Marketing & Advertising',
    location: 'Ahmedabad',
    serviceUsed: 'Trademark Registration',
    testimonial: 'Their trademark registration services protected our brand effectively with comprehensive legal support. Highly recommend their intellectual property expertise.',
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
    testimonial: 'Virtual CFO services transformed our financial management completely. The strategic insights and professional guidance have been invaluable for our business growth.',
    rating: 5,
    initials: 'SR'
  }
];

// Utility functions
export const getServiceBySlug = (categorySlug: string, serviceSlug: string): SubService | null => {
  const allServices = [...mainServiceCategories, ...moreServices];
  for (const category of allServices) {
    if (category.slug === categorySlug) {
      const service = category.subServices.find(s => s.slug === serviceSlug);
      if (service) return service;
    }
  }
  return null;
};

export const getCategoryBySlug = (slug: string): ServiceCategory | MoreService | null => {
  const allCategories = [...mainServiceCategories, ...moreServices];
  return allCategories.find(category => category.slug === slug) || null;
};

export const getAllServices = (): (SubService & { category: string })[] => {
  const allServices: (SubService & { category: string })[] = [];
  [...mainServiceCategories, ...moreServices].forEach(category => {
    category.subServices.forEach(service => {
      allServices.push({ ...service, category: category.name });
    });
  });
  return allServices;
};

export const getFeaturedServices = (): (SubService & { category: string })[] => {
  return [
    { ...mainServiceCategories[0].subServices[0], category: mainServiceCategories[0].name },
    { ...mainServiceCategories[2].subServices[0], category: mainServiceCategories[2].name },
    { ...mainServiceCategories[3].subServices[0], category: mainServiceCategories[3].name },
    { ...mainServiceCategories[5].subServices[2], category: mainServiceCategories[5].name }
  ];
};

export const getPopularServices = (): (SubService & { category: string })[] => {
  const popularServices: (SubService & { category: string })[] = [];
  [...mainServiceCategories, ...moreServices].forEach(category => {
    category.subServices.forEach(service => {
      if (service.popular) {
        popularServices.push({ ...service, category: category.name });
      }
    });
  });
  return popularServices;
};

export const getTrendingServices = (): (SubService & { category: string })[] => {
  const trendingServices: (SubService & { category: string })[] = [];
  [...mainServiceCategories, ...moreServices].forEach(category => {
    category.subServices.forEach(service => {
      if (service.trending) {
        trendingServices.push({ ...service, category: category.name });
      }
    });
  });
  return trendingServices;
};
