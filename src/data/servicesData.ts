export interface SubService {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  duration?: string;
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
    id: 'incorporation',
    name: 'Incorporation',
    slug: 'incorporation',
    description: 'Complete business incorporation services for all company types.',
    icon: 'Building2',
    subServices: [
      {
        id: 'nidhi-company',
        name: 'Nidhi Company Registration',
        slug: 'nidhi-company',
        description: 'Register your Nidhi Company with complete compliance and documentation.',
        icon: 'Landmark',
        features: [
          'Complete documentation preparation',
          'ROC filing and approval',
          'Digital signature certificate',
          'Post-incorporation compliance'
        ],
        price: 'Starting at ₹15,000',
        duration: '15-20 days'
      },
      {
        id: 'section8-company',
        name: 'Section 8 Company Registration',
        slug: 'section8-company',
        description: 'Non-profit company registration for charitable and social causes.',
        icon: 'Heart',
        features: [
          'NGO/Non-profit registration',
          'Tax exemption assistance',
          'Compliance management',
          'Annual filing support'
        ],
        price: 'Starting at ₹12,000',
        duration: '20-25 days'
      },
      {
        id: 'one-person-company',
        name: 'Register a One Person Company',
        slug: 'one-person-company',
        description: 'Solo entrepreneur? Register your OPC with limited liability protection.',
        icon: 'User',
        features: [
          'Single person ownership',
          'Limited liability protection',
          'Easy compliance requirements',
          'Nominee appointment'
        ],
        price: 'Starting at ₹8,000',
        duration: '10-15 days'
      },
      {
        id: 'llp-registration',
        name: 'Register a Limited Liability Partnership',
        slug: 'llp-registration',
        description: 'Partnership with limited liability - perfect for professional services.',
        icon: 'Users',
        features: [
          'Partnership deed preparation',
          'LLP agreement drafting',
          'Designated partner appointment',
          'Annual compliance support'
        ],
        price: 'Starting at ₹10,000',
        duration: '12-18 days'
      },
      {
        id: 'producer-company',
        name: 'Producer Company Registration',
        slug: 'producer-company',
        description: 'Specialized registration for agricultural and farming businesses.',
        icon: 'Wheat',
        features: [
          'Agricultural business setup',
          'Farmer producer organization',
          'Government scheme assistance',
          'Compliance management'
        ],
        price: 'Starting at ₹18,000',
        duration: '25-30 days'
      }
    ]
  },
  {
    id: 'trademark',
    name: 'Trademark',
    slug: 'trademark',
    description: 'Protect your brand with comprehensive trademark services.',
    icon: 'Shield',
    subServices: [
      {
        id: 'trademark-hearing',
        name: 'Trademark Hearing',
        slug: 'trademark-hearing',
        description: 'Expert representation for trademark hearings and objections.',
        icon: 'Gavel',
        features: [
          'Professional representation',
          'Hearing preparation',
          'Legal documentation',
          'Follow-up support'
        ],
        price: 'Starting at ₹5,000',
        duration: '1-3 months'
      },
      {
        id: 'trademark-renewal',
        name: 'Trademark Renewal',
        slug: 'trademark-renewal',
        description: 'Renew your trademark registration to maintain protection.',
        icon: 'RefreshCw',
        features: [
          'Renewal application filing',
          'Documentation support',
          'Status tracking',
          'Certificate delivery'
        ],
        price: 'Starting at ₹8,000',
        duration: '2-4 months'
      },
      {
        id: 'trademark-objection',
        name: 'Trademark Objection',
        slug: 'trademark-objection',
        description: 'Handle trademark objections with expert legal support.',
        icon: 'AlertTriangle',
        features: [
          'Objection analysis',
          'Response preparation',
          'Legal representation',
          'Resolution support'
        ],
        price: 'Starting at ₹6,000',
        duration: '2-6 months'
      }
    ]
  },
  {
    id: 'virtual-cfo',
    name: 'Virtual CFO',
    slug: 'virtual-cfo',
    description: 'Professional financial management services for growing businesses.',
    icon: 'Calculator',
    subServices: [
      {
        id: 'tds-return-filing',
        name: 'TDS Return Filing',
        slug: 'tds-return-filing',
        description: 'Accurate and timely TDS return filing with compliance assurance.',
        icon: 'FileText',
        features: [
          'Monthly/Quarterly TDS returns',
          'TDS certificate generation',
          'Compliance monitoring',
          'Penalty avoidance'
        ],
        price: 'Starting at ₹2,000/month',
        duration: 'Monthly service'
      },
      {
        id: 'hr-payroll-services',
        name: 'HR and Payroll Services',
        slug: 'hr-payroll-services',
        description: 'Complete HR and payroll management for your business.',
        icon: 'Users2',
        features: [
          'Payroll processing',
          'Employee management',
          'Statutory compliance',
          'HR policy development'
        ],
        price: 'Starting at ₹5,000/month',
        duration: 'Monthly service'
      },
      {
        id: 'esic-pf-filing',
        name: 'ESIC and PF Return Filing',
        slug: 'esic-pf-filing',
        description: 'Employee provident fund and ESIC compliance management.',
        icon: 'Shield',
        features: [
          'Monthly PF returns',
          'ESIC compliance',
          'Employee registration',
          'Claim assistance'
        ],
        price: 'Starting at ₹3,000/month',
        duration: 'Monthly service'
      }
    ]
  },
  {
    id: 'gst-income-tax',
    name: 'GST & Income Tax',
    slug: 'gst-income-tax',
    description: 'Comprehensive tax services for individuals and businesses.',
    icon: 'Receipt',
    subServices: [
      {
        id: 'gst-registration',
        name: 'GST Registration and Accounting',
        slug: 'gst-registration',
        description: 'GST registration and ongoing accounting services.',
        icon: 'Calculator',
        features: [
          'GST registration',
          'Monthly return filing',
          'Input tax credit optimization',
          'GST audit support'
        ],
        price: 'Starting at ₹2,500/month',
        duration: 'Monthly service'
      },
      {
        id: 'income-tax-filing',
        name: 'Income Tax Return Filing',
        slug: 'income-tax-filing',
        description: 'Professional income tax return filing for individuals and businesses.',
        icon: 'FileCheck',
        features: [
          'ITR preparation and filing',
          'Tax planning advice',
          'Refund processing',
          'Notice handling'
        ],
        price: 'Starting at ₹1,500',
        duration: '7-10 days'
      },
      {
        id: 'tds-return-tax',
        name: 'TDS Return Filing',
        slug: 'tds-return-tax',
        description: 'Accurate TDS return filing and compliance management.',
        icon: 'FileText',
        features: [
          'TDS return preparation',
          'Certificate generation',
          'Compliance tracking',
          'Penalty avoidance'
        ],
        price: 'Starting at ₹2,000/month',
        duration: 'Monthly service'
      }
    ]
  },
  {
    id: 'payroll',
    name: 'Payroll',
    slug: 'payroll',
    description: 'Complete payroll management and statutory compliance services.',
    icon: 'CreditCard',
    subServices: [
      {
        id: 'payroll-gst',
        name: 'GST Registration and Accounting',
        slug: 'payroll-gst',
        description: 'GST services integrated with payroll management.',
        icon: 'Calculator',
        features: [
          'Payroll GST compliance',
          'Service tax handling',
          'Input credit optimization',
          'Monthly reconciliation'
        ],
        price: 'Starting at ₹3,000/month',
        duration: 'Monthly service'
      },
      {
        id: 'payroll-income-tax',
        name: 'Income Tax Return Filing',
        slug: 'payroll-income-tax',
        description: 'Employee income tax management and filing services.',
        icon: 'FileCheck',
        features: [
          'Employee ITR filing',
          'Form 16 generation',
          'Tax deduction management',
          'Refund processing'
        ],
        price: 'Starting at ₹500/employee',
        duration: 'Annual service'
      },
      {
        id: 'payroll-tds',
        name: 'TDS Return Filing',
        slug: 'payroll-tds',
        description: 'Payroll TDS management and return filing.',
        icon: 'FileText',
        features: [
          'Salary TDS calculation',
          'TDS return filing',
          'Form 16 preparation',
          'Employee TDS certificates'
        ],
        price: 'Starting at ₹2,500/month',
        duration: 'Monthly service'
      }
    ]
  },
  {
    id: 'registration-licensing',
    name: 'Registration & Licensing',
    slug: 'registration-licensing',
    description: 'Various business registrations and licensing services.',
    icon: 'FileCheck2',
    subServices: [
      {
        id: 'trademark-protection',
        name: 'Protect Your Brand with Trademark',
        slug: 'trademark-protection',
        description: 'Complete trademark registration and brand protection services.',
        icon: 'Shield',
        features: [
          'Trademark search and filing',
          'Brand protection strategy',
          'Opposition handling',
          'Registration certificate'
        ],
        price: 'Starting at ₹6,000',
        duration: '12-18 months'
      },
      {
        id: 'patent-registration',
        name: 'Patent Registration',
        slug: 'patent-registration',
        description: 'Protect your innovations with patent registration.',
        icon: 'Lightbulb',
        features: [
          'Patent search and analysis',
          'Application drafting',
          'Filing and prosecution',
          'Patent grant support'
        ],
        price: 'Starting at ₹25,000',
        duration: '18-36 months'
      },
      {
        id: 'import-export-code',
        name: 'Import Export Code',
        slug: 'import-export-code',
        description: 'IEC registration for international trade businesses.',
        icon: 'Globe',
        features: [
          'IEC application filing',
          'Documentation support',
          'Digital signature',
          'Certificate delivery'
        ],
        price: 'Starting at ₹3,000',
        duration: '7-10 days'
      },
      {
        id: 'fssai-registration',
        name: 'Instant FSSAI Registration',
        slug: 'fssai-registration',
        description: 'Food business license registration with FSSAI.',
        icon: 'Utensils',
        features: [
          'FSSAI license application',
          'Food safety compliance',
          'Documentation support',
          'License renewal'
        ],
        price: 'Starting at ₹2,500',
        duration: '7-15 days'
      },
      {
        id: 'esic-pf-registration',
        name: 'ESIC and PF Return Filing',
        slug: 'esic-pf-registration',
        description: 'Employee social security and provident fund services.',
        icon: 'Shield',
        features: [
          'ESIC registration',
          'PF registration',
          'Monthly return filing',
          'Employee enrollment'
        ],
        price: 'Starting at ₹3,000/month',
        duration: 'Monthly service'
      }
    ]
  }
];

export const moreServices: MoreService[] = [
  {
    id: 'startup',
    name: 'Startup',
    slug: 'startup',
    description: 'Complete startup ecosystem support and business setup services.',
    icon: 'Rocket',
    subServices: [
      {
        id: 'startup-registration',
        name: 'Startup Registration',
        slug: 'startup-registration',
        description: 'Register your startup with government recognition and benefits.',
        icon: 'Rocket',
        features: [
          'DPIIT recognition',
          'Startup India registration',
          'Tax benefits eligibility',
          'Funding assistance'
        ],
        price: 'Starting at ₹10,000',
        duration: '15-20 days'
      },
      {
        id: 'business-plan',
        name: 'Business Plan Development',
        slug: 'business-plan',
        description: 'Professional business plan creation for funding and growth.',
        icon: 'FileText',
        features: [
          'Market research',
          'Financial projections',
          'Investor-ready presentation',
          'Strategy development'
        ],
        price: 'Starting at ₹15,000',
        duration: '10-15 days'
      }
    ]
  },
  {
    id: 'virtual-cfo-more',
    name: 'Virtual CFO',
    slug: 'virtual-cfo-more',
    description: 'Advanced financial management and strategic CFO services.',
    icon: 'TrendingUp',
    subServices: [
      {
        id: 'financial-planning',
        name: 'Financial Planning & Analysis',
        slug: 'financial-planning',
        description: 'Strategic financial planning and business analysis services.',
        icon: 'BarChart3',
        features: [
          'Financial modeling',
          'Budget planning',
          'Cash flow management',
          'Investment analysis'
        ],
        price: 'Starting at ₹25,000/month',
        duration: 'Monthly service'
      },
      {
        id: 'fundraising-support',
        name: 'Fundraising Support',
        slug: 'fundraising-support',
        description: 'Complete support for raising capital and investor relations.',
        icon: 'DollarSign',
        features: [
          'Investor pitch preparation',
          'Due diligence support',
          'Valuation assistance',
          'Legal documentation'
        ],
        price: 'Starting at ₹50,000',
        duration: '2-6 months'
      }
    ]
  },
  {
    id: 'protect-business',
    name: 'Protect Your Business',
    slug: 'protect-business',
    description: 'Comprehensive business protection and risk management services.',
    icon: 'Shield',
    subServices: [
      {
        id: 'legal-compliance',
        name: 'Legal Compliance Audit',
        slug: 'legal-compliance',
        description: 'Comprehensive legal compliance review and risk assessment.',
        icon: 'Scale',
        features: [
          'Compliance gap analysis',
          'Risk assessment',
          'Legal documentation review',
          'Remediation planning'
        ],
        price: 'Starting at ₹20,000',
        duration: '15-30 days'
      },
      {
        id: 'insurance-advisory',
        name: 'Business Insurance Advisory',
        slug: 'insurance-advisory',
        description: 'Expert advice on business insurance and risk coverage.',
        icon: 'Umbrella',
        features: [
          'Insurance needs analysis',
          'Policy comparison',
          'Claims assistance',
          'Risk management'
        ],
        price: 'Starting at ₹5,000',
        duration: '7-10 days'
      }
    ]
  },
  {
    id: 'compliance-more',
    name: 'Compliance',
    slug: 'compliance-more',
    description: 'Advanced compliance management and regulatory services.',
    icon: 'CheckCircle',
    subServices: [
      {
        id: 'annual-compliance',
        name: 'Annual Compliance Management',
        slug: 'annual-compliance',
        description: 'Complete annual compliance management for all business types.',
        icon: 'Calendar',
        features: [
          'Annual return filing',
          'Board meeting compliance',
          'Statutory audit support',
          'Regulatory updates'
        ],
        price: 'Starting at ₹15,000/year',
        duration: 'Annual service'
      },
      {
        id: 'regulatory-advisory',
        name: 'Regulatory Advisory',
        slug: 'regulatory-advisory',
        description: 'Expert regulatory advice and compliance strategy.',
        icon: 'BookOpen',
        features: [
          'Regulatory interpretation',
          'Compliance strategy',
          'Policy development',
          'Training programs'
        ],
        price: 'Starting at ₹10,000/month',
        duration: 'Monthly service'
      }
    ]
  }
];

// Portfolio/Client data
export interface ClientTestimonial {
  id: string;
  clientName: string;
  company: string;
  industry: string;
  testimonial: string;
  logo?: string;
  initials: string;
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: '1',
    clientName: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    industry: 'Technology',
    testimonial: 'Unfold helped us navigate complex compliance requirements seamlessly. Their expertise saved us months of work.',
    initials: 'TS'
  },
  {
    id: '2',
    clientName: 'Priya Sharma',
    company: 'Green Earth Foods',
    industry: 'Food & Beverage',
    testimonial: 'The FSSAI registration process was handled professionally. Excellent service and timely delivery.',
    initials: 'GE'
  },
  {
    id: '3',
    clientName: 'Amit Patel',
    company: 'Digital Marketing Pro',
    industry: 'Marketing',
    testimonial: 'Their trademark services protected our brand effectively. Highly recommend their legal expertise.',
    initials: 'DM'
  },
  {
    id: '4',
    clientName: 'Sunita Reddy',
    company: 'Healthcare Plus',
    industry: 'Healthcare',
    testimonial: 'Virtual CFO services transformed our financial management. Professional and reliable team.',
    initials: 'HP'
  },
  {
    id: '5',
    clientName: 'Vikram Singh',
    company: 'Manufacturing Hub',
    industry: 'Manufacturing',
    testimonial: 'Complete incorporation support with ongoing compliance. They made business setup effortless.',
    initials: 'MH'
  },
  {
    id: '6',
    clientName: 'Neha Gupta',
    company: 'Fashion Forward',
    industry: 'Fashion',
    testimonial: 'GST registration and accounting services are top-notch. Always available for support.',
    initials: 'FF'
  }
];

// Search functionality
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
        service.features.some(feature => feature.toLowerCase().includes(searchTerm))
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
        service.features.some(feature => feature.toLowerCase().includes(searchTerm))
      ) {
        results.push({ ...service, category: category.name });
      }
    });
  });
  
  return results;
};