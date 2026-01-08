export interface SubService {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  duration?: string;
  popular?: boolean;
  trending?: boolean;
  rating?: number;
  
  procedure?: {
    step: number;
    title: string;
    description: string;
    documents: string[];
    timeline: string;
  }[];
  requiredDocuments?: string[];
  benefits?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  pricing?: {
    governmentFees: string;
    professionalFees: string;
    totalEstimate: string;
  };
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

export const mainServiceCategories: ServiceCategory[] = [
  //1. Company Formation & Registration
  {
  id: 'company-formation',
  name: 'Company Formation & Registration',
  slug: 'company-formation',
  description:
    'End-to-end company formation services across all major business types in India with expert guidance and complete regulatory compliance.',
  icon: 'Building2',
  subServices: [
    {
      id: 'private-limited-company',
      name: 'Private Limited Company Incorporation',
      slug: 'private-limited-company',
      description:
        'Most popular choice for startups and growing enterprises due to its limited liability protection, ease of fundraising, and trusted status with customers and investors.',
      icon: 'Building',
      features: [
        'Limited liability protection for shareholders',
        'Enhanced credibility with customers and investors',
        'Easy fundraising through equity participation',
        'Perpetual succession and legal entity status',
        'Tax benefits and deductions available',
        'Separate legal identity from promoters',
        'Complete MCA filing assistance',
        'Post-incorporation compliance setup'
      ],
      benefits: [
        'Personal assets protected from business liabilities',
        'Trusted status with customers, vendors, and investors',
        'Attract investors through share offerings',
        'Company continues regardless of ownership changes',
        'Own legal identity separate from promoters',
        'Various tax deductions under Income Tax Act'
      ],
      procedure: [
        {
          step: 1,
          title: 'Initial Consultation',
          description:
            'Consultation to fix company name, minimum directors/shareholders, and compliance requirements',
          documents: [
            'Business concept discussion',
            'Shareholding pattern planning',
            'Director eligibility verification'
          ],
          timeline: '1 day'
        },
        {
          step: 2,
          title: 'Digital Requirements Setup',
          description:
            'Obtaining Digital Signature Certificates (DSCs) and Director Identification Numbers (DINs) for all directors',
          documents: [
            'PAN cards of directors',
            'Aadhaar cards',
            'Passport size photographs',
            'Address proof'
          ],
          timeline: '2-3 days'
        },
        {
          step: 3,
          title: 'Documentation & Filing',
          description:
            'Drafting and e-filing of Memorandum and Articles of Association (MoA/AoA)',
          documents: [
            'Consent to act as director (DIR-2)',
            'Nominee consent form (INC-3)',
            'MoA/AoA drafting'
          ],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Certificate Issuance',
          description:
            'Processing and issuance of Certificate of Incorporation (CoI)',
          documents: [
            'Incorporation certificate',
            'PAN and TAN certificates',
            'Company master data'
          ],
          timeline: '1-2 days'
        },
        {
          step: 5,
          title: 'Post-Incorporation Setup',
          description:
            'Post-incorporation compliance setup and bank account opening assistance',
          documents: [
            'Current account opening',
            'Compliance calendar setup',
            'Statutory registers'
          ],
          timeline: '2-5 days'
        }
      ],
      requiredDocuments: [
        'PAN, Aadhaar, and address proof of all directors & shareholders',
        'Passport size photographs of all directors',
        'Consent to act as director (DIR-2) from all directors',
        'Nominee consent form (INC-3)',
        'Proof of registered office address (rent agreement/ownership proof)',
        'No Objection Certificate (NOC) from property owner',
        'Utility bill of registered office (not older than 2 months)'
      ],
      faqs: [
        {
          question:
            'What is the minimum capital required for Private Limited Company?',
          answer:
            'There is no minimum capital requirement as per the current Companies Act, 2013. You can start even with a very low authorised and paid-up capital.'
        },
        {
          question: 'How many directors and shareholders are required?',
          answer:
            'Minimum 2 directors and 2 shareholders are required. A person can be both a director and a shareholder.'
        },
        {
          question: 'Can foreign nationals be directors or shareholders?',
          answer:
            'Yes, foreign nationals can be directors and shareholders in an Indian Private Limited Company subject to FDI norms and RBI rules.'
        },
        {
          question: 'What are the ongoing compliance requirements?',
          answer:
            'Annual ROC filings, board meetings, AGM, statutory registers, and periodic returns as per Companies Act, 2013.'
        }
      ],
      pricing: {
        governmentFees: '₹4,000-5,000',
        professionalFees: '₹10,000+',
        totalEstimate: '₹15,000-25,000'
      },
      popular: true,
      rating: 4.9
    },
    {
      id: 'one-person-company',
      name: 'One Person Company (OPC) Setup',
      slug: 'one-person-company',
      description:
        'Perfect for solo entrepreneurs who want limited liability protection while maintaining complete control over their business operations.',
      icon: 'User',
      features: [
        'Single person ownership and complete control',
        'Limited liability protection for the member',
        'Separate legal entity status',
        'Easy conversion to Private Limited Company',
        'Simplified compliance requirements',
        'Perpetual succession through nominee',
        'Professional credibility and brand value',
        'Corporate benefits with individual control'
      ],
      benefits: [
        'Complete business control by single person',
        'Personal assets protected from business liabilities',
        'Separate legal identity from the owner',
        'Can be easily converted to Pvt Ltd when scaling',
        'Less complex compliance compared to Pvt Ltd',
        'Business continues through appointed nominee'
      ],
      procedure: [
        {
          step: 1,
          title: 'Eligibility & Consultation',
          description:
            'Verify OPC eligibility and business structure consultation',
          documents: ['Individual eligibility check', 'Business model assessment'],
          timeline: '1 day'
        },
        {
          step: 2,
          title: 'Nominee Appointment',
          description: 'Appointment of nominee and obtaining necessary consents',
          documents: ['Nominee consent form', 'Nominee KYC documents'],
          timeline: '1-2 days'
        },
        {
          step: 3,
          title: 'DSC & Documentation',
          description: 'Digital signature setup and MoA/AoA preparation',
          documents: ['DSC for director', 'DIN application', 'MoA/AoA drafting'],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Filing & Incorporation',
          description: 'Online filing and Certificate of Incorporation issuance',
          documents: ['Incorporation application', 'Certificate processing'],
          timeline: '3-5 days'
        }
      ],
      requiredDocuments: [
        'PAN, Aadhaar, and address proof of the member',
        'PAN, Aadhaar, and address proof of the nominee',
        'Consent of nominee to act as nominee',
        'Registered office address proof',
        'Passport size photographs',
        'Utility bill of registered office'
      ],
      faqs: [
        {
          question: 'Who can incorporate an OPC?',
          answer:
            'Only a natural person who is an Indian citizen and resident can incorporate an OPC.'
        },
        {
          question: 'Can an OPC be converted to Private Limited Company?',
          answer:
            'Yes, OPC can be voluntarily or mandatorily converted into a Private Limited Company by following prescribed procedures.'
        },
        {
          question: 'What is the role of nominee in OPC?',
          answer:
            'The nominee becomes member of OPC on death or incapacity of the sole member to ensure continuity.'
        }
      ],
      popular: true,
      rating: 4.8
    },
    {
      id: 'public-limited-company',
      name: 'Public Limited Company Formation',
      slug: 'public-limited-company',
      description:
        'Form a Public Limited Company for large-scale business operations with the ability to raise capital from the public through share offerings.',
      icon: 'Award',
      features: [
        'Unlimited fundraising potential through public offerings',
        'Enhanced market credibility and brand value',
        'Easier acquisition and merger opportunities',
        'Transferable shares and liquid investments',
        'Professional management structure',
        'Access to capital markets',
        'Global expansion opportunities',
        'Institutional investor attraction'
      ],
      benefits: [
        'Can raise large capital from public and institutions',
        'Shares can be freely transferred',
        'Higher market credibility and trust',
        'Better valuation and exit opportunities',
        'Professional governance structure',
        'Access to both debt and equity markets'
      ],
      procedure: [
        {
          step: 1,
          title: 'Pre-Incorporation Planning',
          description:
            'Detailed consultation for capital structure and regulatory requirements',
          documents: ['Business plan assessment', 'Capital structure planning'],
          timeline: '3-5 days'
        },
        {
          step: 2,
          title: 'Name Reservation & DSC',
          description:
            'Company name approval and digital signature setup for directors',
          documents: ['Name availability check', 'DSC and DIN applications'],
          timeline: '3-5 days'
        },
        {
          step: 3,
          title: 'Documentation Filing',
          description:
            'Comprehensive MoA/AoA drafting and regulatory filings with MCA',
          documents: ['MoA/AoA with detailed objectives', 'Director consent forms'],
          timeline: '5-10 days'
        },
        {
          step: 4,
          title: 'Incorporation Certificate',
          description:
            'Certificate of Incorporation processing and issuance',
          documents: ['Incorporation certificate', 'Commencement of business filing'],
          timeline: '5-10 days'
        }
      ],
      requiredDocuments: [
        'PAN, Aadhaar, and address proof of all directors & subscribers',
        'Minimum 7 subscribers with full details',
        'Registered office proof and NOC',
        'Statutory declarations and affidavits',
        'Passport size photographs',
        'Bank proof for minimum paid-up capital'
      ],
      faqs: [
        {
          question: 'What is the minimum capital required for a Public Limited Company?',
          answer:
            'Current company law does not prescribe a high minimum capital, but practical requirements for listing and investors are higher.'
        },
        {
          question: 'How many directors and shareholders are required?',
          answer:
            'Minimum 3 directors and 7 shareholders are required; there is no maximum limit for shareholders.'
        },
        {
          question: 'Can a Public Limited Company list on the stock exchange immediately?',
          answer:
            'No, separate SEBI and stock exchange regulations apply; incorporation is only the first step.'
        }
      ],
      pricing: {
        governmentFees: '₹8,000-12,000',
        professionalFees: '₹30,000+',
        totalEstimate: '₹40,000-80,000'
      },
      rating: 4.7
    },
    {
      id: 'section8-company',
      name: 'Section 8 Company (Non-Profit) Registration',
      slug: 'section8-company',
      description:
        'Establish a Section 8 company for promoting charitable, educational, scientific, or social welfare objectives without profit distribution to members.',
      icon: 'Heart',
      features: [
        'Tax exemptions under Section 12A and 80G',
        'No minimum capital requirement',
        'Limited liability for members',
        'Credibility for funding and grants',
        'Perpetual succession',
        'Professional management structure',
        'CSR funding eligibility',
        'Foreign funding permissions support'
      ],
      benefits: [
        'Complete tax exemption on eligible income',
        'Donors can claim tax benefits under 80G',
        'No mandatory minimum capital',
        'Limited liability protection for members',
        'Access to government and international grants',
        'Professional credibility for charitable initiatives'
      ],
      procedure: [
        {
          step: 1,
          title: 'Objective Definition',
          description:
            'In-depth consultation to capture charitable objectives and mission',
          documents: ['Charitable objectives document', 'Mission statement'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Name Approval & DSC',
          description:
            'Name approval and digital signature certificates for directors',
          documents: ['Name availability with suitable suffix', 'DSC applications'],
          timeline: '5-7 days'
        },
        {
          step: 3,
          title: 'Special Documentation',
          description:
            'Drafting charitable-oriented MoA/AoA and required declarations',
          documents: ['Charitable MoA/AoA', 'Board resolutions', 'Director consents'],
          timeline: '5-10 days'
        },
        {
          step: 4,
          title: 'Regulatory Filing',
          description:
            'Filing incorporation application and obtaining approval',
          documents: ['Section 8 application', 'Supporting documents'],
          timeline: '8-15 days'
        }
      ],
      requiredDocuments: [
        'PAN, Aadhaar, and address proof of all directors',
        'Detailed charitable objectives and activities note',
        'Affidavit regarding non-profit nature',
        'List of proposed activities and beneficiaries',
        'Registered office proof and NOC',
        'Projected income and expenditure statement'
      ],
      faqs: [
        {
          question: 'What tax benefits are available to Section 8 companies?',
          answer:
            'Section 8 companies can obtain 12A and 80G registrations for tax exemptions and donor deductions.'
        },
        {
          question: 'Can Section 8 company distribute profit to members?',
          answer:
            'No, profits must be fully reinvested into the organisation’s charitable objects.'
        }
      ],
      pricing: {
        governmentFees: '₹2,000-3,000',
        professionalFees: '₹12,000+',
        totalEstimate: '₹15,000-30,000'
      },
      rating: 4.5
    },
    {
      id: 'producer-company',
      name: 'Producer Company Formation',
      slug: 'producer-company',
      description:
        'Form a Producer Company for agricultural and allied activities, combining the benefits of cooperative societies with corporate governance.',
      icon: 'Wheat',
      features: [
        'Corporate benefits with cooperative principles',
        'Limited liability for members',
        'Democratic management structure',
        'Tax benefits for agricultural activities',
        'Easy access to institutional funding',
        'Professional governance framework',
        'Market linkage support',
        'Government scheme benefits'
      ],
      benefits: [
        'Combines cooperative principles with corporate structure',
        'Limited liability protection for producer members',
        'Democratic decision-making process',
        'Tax advantages for agricultural activities',
        'Better access to credit and funding',
        'Professional management with member control'
      ],
      procedure: [
        {
          step: 1,
          title: 'Member Consultation',
          description:
            'Consultation with producer members and activity planning',
          documents: ['Producer member details', 'Activity scope definition'],
          timeline: '3-5 days'
        },
        {
          step: 2,
          title: 'Name & Objectives',
          description:
            'Name approval and drafting producer-oriented objectives',
          documents: ['Name approval application', 'Producer-specific objectives'],
          timeline: '5-7 days'
        },
        {
          step: 3,
          title: 'Documentation Filing',
          description:
            'MoA/AoA drafting specific to producer activities and filing',
          documents: ['Producer Company MoA/AoA', 'Member consent forms'],
          timeline: '7-10 days'
        },
        {
          step: 4,
          title: 'Incorporation Process',
          description:
            'Processing incorporation application and certificate issuance',
          documents: ['Incorporation certificate', 'Post-incorporation setup'],
          timeline: '5-8 days'
        }
      ],
      requiredDocuments: [
        'Details of minimum 10 producer members or 2 producer institutions',
        'PAN, Aadhaar of all directors and members',
        'Evidence of producer status or agricultural activity',
        'Producer consent forms',
        'Registered office address proof',
        'Land ownership/lease documents'
      ],
      faqs: [
        {
          question: 'Who can form a Producer Company?',
          answer:
            'Only primary producers or producer institutions engaged in agriculture or allied activities can form a Producer Company.'
        },
        {
          question: 'What activities can a Producer Company undertake?',
          answer:
            'Production, harvesting, procurement, processing, marketing, selling, export of primary produce, and related services.'
        }
      ],
      pricing: {
        governmentFees: '₹5,000-7,000',
        professionalFees: '₹15,000+',
        totalEstimate: '₹25,000-40,000'
      },
      rating: 4.4
    },
    {
      id: 'nidhi-company',
      name: 'Nidhi Company Incorporation',
      slug: 'nidhi-company',
      description:
        'Establish a Nidhi Company for mutual benefit financial activities, focusing on borrowing and lending among members.',
      icon: 'Coins',
      features: [
        'Mutual benefit society structure',
        'Regulated financial activities among members',
        'Member-focused lending and borrowing',
        'Simpler regulatory regime than banks',
        'Community-based financial services',
        'Democratic governance structure',
        'Specific exemptions under RBI framework',
        'Member dividend distribution allowed'
      ],
      benefits: [
        'Mutual benefit financial society for members',
        'Lower regulatory compliance than banks',
        'Member-centric lending and borrowing',
        'Community-based financial inclusion',
        'Democratic management by members',
        'Certain exemptions from RBI provisions'
      ],
      procedure: [
        {
          step: 1,
          title: 'Member Planning',
          description:
            'Planning member structure and financial activity scope',
          documents: ['Member planning documents', 'Financial activity scope'],
          timeline: '3-5 days'
        },
        {
          step: 2,
          title: 'Capital & Compliance',
          description:
            'Capital structure planning and compliance framework setup',
          documents: ['Capital structure plan', 'Compliance checklist'],
          timeline: '5-7 days'
        },
        {
          step: 3,
          title: 'Documentation',
          description: 'Nidhi-specific MoA/AoA drafting and filing',
          documents: ['Nidhi Company MoA/AoA', 'Member agreements'],
          timeline: '7-10 days'
        },
        {
          step: 4,
          title: 'Registration Process',
          description:
            'Processing registration and obtaining necessary approvals',
          documents: ['Registration certificate', 'Initial compliance setup'],
          timeline: '10-15 days'
        }
      ],
      requiredDocuments: [
        'Minimum 7 members and 3 directors details',
        'PAN, Aadhaar, and address proof of all members',
        'Proof of minimum capital as per rules',
        'Member consent and subscription forms',
        'Registered office proof and NOC',
        'Bank certificate for capital deposit'
      ],
      faqs: [
        {
          question: 'What is the minimum capital required for a Nidhi Company?',
          answer:
            'Nidhi Rules prescribe minimum paid-up capital and net worth thresholds that must be met within specified timelines.'
        },
        {
          question: 'Who can be members of a Nidhi Company?',
          answer:
            'Only individuals can be members; companies or trusts cannot become members.'
        }
      ],
      pricing: {
        governmentFees: '₹6,000-8,000',
        professionalFees: '₹20,000+',
        totalEstimate: '₹30,000-50,000'
      },
      rating: 4.3
    },
    {
      id: 'llp-formation',
      name: 'Limited Liability Partnership (LLP) Formation',
      slug: 'llp-formation',
      description:
        'Form a Limited Liability Partnership combining advantages of partnership and company structure with professional management and limited liability benefits.',
      icon: 'Building',
      features: [
        'Limited liability protection for partners',
        'Partnership structure with corporate benefits',
        'Separate legal entity from partners',
        'Flexible profit sharing arrangement',
        'Easy governance and management structure',
        'Perpetual succession',
        'Tax-efficient structure for professionals',
        'Complete LLP Agreement and filing'
      ],
      benefits: [
        'Limited liability protection for all partners',
        'Flexible profit sharing and management',
        'Professional credibility and brand value',
        'Separate legal entity status',
        'Easier compliance compared to private company',
        'Suitable for professional services firms'
      ],
      procedure: [
        {
          step: 1,
          title: 'Partner Consultation & Planning',
          description:
            'Determine partner structure, profit sharing, and LLP objectives',
          documents: [
            'Partner details',
            'Profit sharing plan',
            'Business objectives'
          ],
          timeline: '1-2 days'
        },
        {
          step: 2,
          title: 'DSC & DIN Acquisition',
          description:
            'Obtain Digital Signature Certificates and Designated Partner Identification Numbers',
          documents: [
            'PAN of all partners',
            'Aadhaar cards',
            'Passport photographs'
          ],
          timeline: '2-3 days'
        },
        {
          step: 3,
          title: 'LLP Agreement Drafting',
          description:
            'Draft comprehensive LLP Agreement and initial filing documents',
          documents: ['LLP Agreement', 'Incorporation forms'],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Registration & Certificate',
          description:
            'File with ROC and obtain LLP Registration Certificate',
          documents: ['Registration certificate', 'LLP identification number'],
          timeline: '3-5 days'
        }
      ],
      requiredDocuments: [
        'PAN, Aadhaar, and address proof of all designated partners',
        'Passport size photographs of all partners',
        'Consent of partners to be registered',
        'Registered office address proof (rent agreement/ownership)',
        'NOC from property owner',
        'Utility bill (not older than 2 months)'
      ],
      faqs: [
        {
          question: 'What is the minimum number of partners required in LLP?',
          answer:
            'Minimum 2 partners are required, with at least 1 Indian resident designated partner.'
        },
        {
          question: 'Is LLP suitable for professionals?',
          answer:
            'Yes, LLP is ideal for professional service firms such as law, consulting, and accounting practices.'
        }
      ],
      rating: 4.7
    },

    // NEW: Sole Proprietorship & MSME (Udyam) Registration
    {
      id: 'sole-proprietorship-msme',
      name: 'Sole Proprietorship & MSME (Udyam) Registration',
      slug: 'sole-proprietorship-msme',
      description:
        'Registration support for sole proprietors under MSME (Udyam) and local registrations to unlock government benefits and establish business identity.',
      icon: 'IdCard',
      features: [
        'Advisory on choosing sole proprietorship structure',
        'Udyam MSME registration for the proprietor',
        'Assistance with Shops & Establishment registration where required',
        'PAN and GST registration guidance as needed',
        'Support for bank current account opening documentation',
        'Advisory on schemes and subsidies available to MSMEs',
        'Basic compliance checklist for small proprietors',
        'Periodic update support for Udyam and other registrations'
      ],
      benefits: [
        'Legal recognition of the business in the proprietor’s name',
        'Access to MSME loans, subsidies, and schemes',
        'Simplified registration with minimal compliance burden',
        'Improved credibility with banks and customers',
        'Foundation for future conversion to company or LLP'
      ],
      procedure: [
        {
          step: 1,
          title: 'Structure & Eligibility Consultation',
          description:
            'Discuss business model and confirm suitability of sole proprietorship plus MSME registration.',
          documents: ['Basic business details', 'Projected turnover'],
          timeline: '1-2 days'
        },
        {
          step: 2,
          title: 'MSME (Udyam) & Local Registration',
          description:
            'File Udyam application and, where applicable, Shops & Establishment or trade registrations.',
          documents: [
            'PAN and Aadhaar of proprietor',
            'Business address proof'
          ],
          timeline: '2-5 days'
        },
        {
          step: 3,
          title: 'Post-Registration Support',
          description:
            'Share certificates, set up basic compliance calendar, and advise on next steps (banking, GST, etc.).',
          documents: [
            'Udyam certificate',
            'Local registration certificates (if any)'
          ],
          timeline: '1-3 days'
        }
      ],
      requiredDocuments: [
        'PAN and Aadhaar of proprietor',
        'Business trade name and activity details',
        'Business address proof (rent agreement/ownership/utility bill)',
        'Bank account details (or plan for opening)',
        'Email and mobile number for OTP-based registrations'
      ],
      faqs: [
        {
          question: 'Is separate incorporation needed for a sole proprietorship?',
          answer:
            'No, proprietor and business are legally the same person; registrations like Udyam give recognition.'
        },
        {
          question: 'Can a sole proprietorship later be converted into a company or LLP?',
          answer:
            'Yes, the business can be migrated to a company/LLP structure later, with fresh incorporation and transfer of assets/contracts.'
        }
      ],
      rating: 4.6
    },

    // NEW: Trust & Society Registration
    {
      id: 'trust-society-registration',
      name: 'Trust & Society Registration',
      slug: 'trust-society-registration',
      description:
        'End-to-end assistance for forming charitable trusts and societies, including deed/bylaw drafting, registration, and tax exemption applications.',
      icon: 'Handshake',
      features: [
        'Advisory on choosing between trust, society, and Section 8 company',
        'Drafting of trust deed or society bylaws aligned with objectives',
        'Registration with appropriate state or charity authorities',
        'PAN application and basic post-registration compliances',
        'Support for applying 12A and 80G income tax exemptions',
        'Guidance on maintaining registers, minutes, and accounts',
        'Advisory on FCRA and foreign funding eligibility at a later stage',
        'Compliance checklist for donors and CSR contributors'
      ],
      benefits: [
        'Legal recognition of charitable or not-for-profit entity',
        'Eligibility to receive donations and grants formally',
        'Access to tax exemptions for entity and donors (on approval)',
        'Clear governance structure for trustees/members',
        'Stronger credibility with beneficiaries and regulators'
      ],
      procedure: [
        {
          step: 1,
          title: 'Objectives & Structure Finalisation',
          description:
            'Discuss charitable objectives and recommend suitable structure (trust/society).',
          documents: [
            'Draft note of proposed activities',
            'List of founders/trustees/members'
          ],
          timeline: '3-5 days'
        },
        {
          step: 2,
          title: 'Deed/Bylaw Drafting & Execution',
          description:
            'Draft trust deed or bylaws and execute on appropriate stamp paper.',
          documents: [
            'Draft trust deed/bylaws',
            'KYC of founders/trustees'
          ],
          timeline: '5-10 days'
        },
        {
          step: 3,
          title: 'Registration & Tax Applications',
          description:
            'File registration with relevant registrar and assist with PAN, 12A, and 80G applications.',
          documents: [
            'Signed registration forms',
            'Deed/bylaws and supporting documents'
          ],
          timeline: 'Varies by authority'
        }
      ],
      requiredDocuments: [
        'Draft objects and activity note',
        'Trustee/founder KYC (PAN, Aadhaar, address proof)',
        'Registered office address proof and NOC',
        'Photographs of trustees/founders',
        'Capital/contribution details, if any'
      ],
      faqs: [
        {
          question: 'How is a trust different from a Section 8 company?',
          answer:
            'Trusts are simpler and governed by trust/society laws; Section 8 companies are under Companies Act with stricter corporate-style compliance.'
        },
        {
          question: 'Do all trusts automatically get 80G benefit for donors?',
          answer:
            'No, separate applications and approvals are required for 12A and 80G with income tax authorities.'
        }
      ],
      rating: 4.5
    }
  ]
},
// 2. Legal Compliance & Advisory Services
  {
    id: 'legal-compliance',
    name: 'Legal Compliance & Advisory',
    slug: 'legal-compliance',
    description: 'Comprehensive legal compliance services ensuring regulatory adherence and corporate governance.',
    icon: 'Scale',
    subServices: [
      {
        id: 'annual-compliance',
        name: 'Annual Compliance Management',
        slug: 'annual-compliance',
        description: 'Complete annual compliance for companies, LLPs, and other business entities with expert guidance.',
        icon: 'Calendar',
        features: [
          'Annual return filing (AOC-4, MGT-7)',
          'Board meeting compliance and minutes',
          'Annual General Meeting (AGM) conduct',
          'Statutory audit coordination and support',
          'ROC fee payment and management',
          'Penalty avoidance strategies and planning',
          'Compliance calendar maintenance',
          'Regulatory updates and advisory'
        ],
       
        popular: true,
        rating: 4.8,
      },
      {
        id: 'secretarial-services',
        name: 'Secretarial Services',
        slug: 'secretarial-services',
        description: 'Professional company secretary services for comprehensive corporate governance.',
        icon: 'FileCheck',
        features: [
          'Board meeting management and coordination',
          'Statutory register maintenance and updates',
          'Corporate governance advisory services',
          'Regulatory compliance monitoring system',
          'Legal documentation preparation and review',
          'Investor relations support and management',
          'Shareholder communication and meetings',
          'Compliance reporting and documentation'
        ],
      
        rating: 4.7,
      },
      {
        id: 'labour-law-compliance',
        name: 'Labour Law Registrations & Compliance',
        slug: 'labour-law-compliance',
        description: 'Complete labour law compliance for employee welfare and statutory requirements management.',
        icon: 'Users2',
        features: [
          'Contract Labour Act registration and compliance',
          'Shops & Establishment Act registration',
          'Professional Tax registration and filing',
          'Labour license compliance management',
          'Employee welfare compliance monitoring',
          'Industrial relations support and advisory',
          'Labour law audit and assessment',
          'Penalty avoidance and dispute resolution'
        ],
        
        rating: 4.5,
          },
    {
      id: 'share-transfers',
      name: 'Share Transfers & Transmissions',
      slug: 'share-transfers',
      description: 'Complete share transfer and transmission services with regulatory compliance and documentation.',
      icon: 'ArrowRight',
      features: [
        'Share transfer deed preparation and filing',
        'Transmission of shares (inheritance)',
        'Regulatory filing with ROC',
        'Share certificate issuance',
        'NSDL/CDSL updates for listed companies',
        'Stamp duty and legal compliance',
        'Transfer registration processing',
        'Dividend and bonus adjustments'
      ],
      benefits: [
        'Smooth transfer of ownership with legal compliance',
        'Expert handling of both voluntary and involuntary transfers',
        'Ensures proper documentation and NOC from company',
        'Protects rights of both transferor and transferee',
        'Minimal delays in transfer registration',
        'Professional guidance throughout the process'
      ],
      procedure: [
        {
          step: 1,
          title: 'Transfer Assessment',
          description: 'Review share transfer deed and documents, verify shareholding pattern, check company bylaws for restrictions',
          documents: ['Share transfer deed', 'Shareholder documents', 'Company bylaws'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Documentation Preparation',
          description: 'Prepare share transfer deed, draft board resolutions, prepare stamp duty calculation',
          documents: ['Transfer deed', 'Board resolutions', 'Stamp duty calculation'],
          timeline: '3-5 days'
        },
        {
          step: 3,
          title: 'Regulatory Filing',
          description: 'Submit with company registrar, file with ROC if applicable, update NSDL/CDSL',
          documents: ['ROC filing', 'NSDL/CDSL submission', 'Filing acknowledgment'],
          timeline: '5-7 days'
        },
        {
          step: 4,
          title: 'Certificate Issuance',
          description: 'Issue new share certificates, provide transfer completion document, update shareholder register',
          documents: ['New share certificates', 'Transfer completion letter', 'Updated register'],
          timeline: '2-3 days'
        }
      ],
      requiredDocuments: [
        'Existing share certificates',
        'Share transfer deed (signed by both parties)',
        'Board resolution approving transfer',
        'PAN and ID proof of transferee',
        'No objection certificate from transferor',
        'Proof of funds for transfer consideration',
        'Share valuation certificate (if applicable)'
      ],
      faqs: [
        {
          question: 'What is the timeline for share transfer?',
          answer: 'Usually 10-15 days from submission of complete documents'
        },
        {
          question: 'Are there any stamp duties involved?',
          answer: 'Yes, stamp duty is calculated based on share value and state regulations'
        },
        {
          question: 'Can shares be partially transferred?',
          answer: 'Yes, but minimum holding requirements must be met'
        },
        {
          question: 'What happens to dividends during transfer?',
          answer: 'Dividends are credited to transferee if registered before record date'
        }
      ],
      
      rating: 4.6,
        },
    {
      id: 'name-office-change',
      name: 'Change in Company Name, Registered Office & Capital',
      slug: 'name-office-change',
      description: 'Facilitate changes in company name, registered office address, or share capital with full compliance.',
      icon: 'Edit',
      features: [
        'Company name change application and approval',
        'Registered office change with landlord NOC',
        'Share capital increase or decrease',
        'Board resolution preparation',
        'ROC filing and processing',
        'Certificate of change issuance',
        'Regulatory notification updates',
        'Stakeholder communication support'
      ],
      benefits: [
        'Rebrand and reposition your company',
        'Update registered office to reflect new location',
        'Increase capital for expansion or meet regulatory requirements',
        'Maintain regulatory compliance throughout changes',
        'Minimize business disruption during transitions',
        'Professional handling of all stakeholder communications'
      ],
      procedure: [
        {
          step: 1,
          title: 'Board Resolution & Planning',
          description: 'Obtain board approval for change, define new name/office/capital structure, prepare board resolutions',
          documents: ['Board resolution', 'Change proposal', 'Supporting documents'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Regulatory Approvals',
          description: 'Apply for name availability with MCA, obtain NOC from property owner, get landlord consent and rent agreement',
          documents: ['Name availability application', 'Property NOC', 'Rent agreement'],
          timeline: '5-10 days'
        },
        {
          step: 3,
          title: 'Shareholder Approval',
          description: 'Conduct EGM or pass resolutions, obtain shareholder approvals, maintain meeting minutes',
          documents: ['EGM notice', 'Meeting minutes', 'Shareholder resolutions'],
          timeline: '3-5 days'
        },
        {
          step: 4,
          title: 'ROC Filing & Certificate',
          description: 'File with Registrar of Companies, obtain certificate of change, update all statutory documents',
          documents: ['ROC filing', 'Certificate of change', 'Updated documents'],
          timeline: '7-15 days'
        }
      ],
      requiredDocuments: [
        'Board resolution for change',
        'Shareholder resolution/EGM minutes',
        'Draft amended MOA/AOA',
        'NOC from property owner (office change)',
        'Utility bill for new office (proof)',
        'PAN and Identity proof of authorized signatories',
        'Copy of current incorporation certificate',
        'Valuation report (for capital increase)',
        'Bank certificate for capital deposit'
      ],
      faqs: [
        {
          question: 'Can I change company name multiple times?',
          answer: 'Yes, but there\'s a 5-year gap requirement between name changes'
        },
        {
          question: 'What happens to existing contracts after name change?',
          answer: 'They remain valid; you should update creditors and debtors about the change'
        },
        {
          question: 'Is there a maximum office changes allowed?',
          answer: 'You can change office, but frequent changes may raise compliance questions'
        },
        {
          question: 'How long does capital increase take?',
          answer: 'Usually 15-25 days depending on amount and complexity'
        }
      ],
      
      rating: 4.5,

     },
    {
      id: 'moa-aoa-alteration',
      name: 'Alteration in Memorandum & Articles of Association',
      slug: 'moa-aoa-alteration',
      description: 'Professional services for amending company constitutional documents (MOA/AOA).',
      icon: 'FileText',
      features: [
        'MOA/AOA amendment drafting',
        'Board resolution and member approval',
        'Shareholder approval process coordination',
        'ROC filing and e-filing support',
        'Amendment certificate processing',
        'Compliance with Companies Act requirements',
        'Regulatory filing documentation',
        'Post-amendment compliance setup'
      ],
      benefits: [
        'Update company constitution to reflect new business objectives',
        'Modify management structure and governance rules',
        'Implement better compliance frameworks',
        'Expand or restrict business scope',
        'Modernize outdated provisions',
        'Ensure compliance with latest regulations'
      ],
      procedure: [
        {
          step: 1,
          title: 'Amendment Planning',
          description: 'Identify required amendments, draft new MOA/AOA clauses, review existing provisions',
          documents: ['Amendment proposal', 'Clause drafts', 'Review notes'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Legal Drafting',
          description: 'Prepare comprehensive amended MOA/AOA, ensure statutory compliance, cross-check with Companies Act',
          documents: ['Amended MOA/AOA', 'Legal opinion', 'Compliance checklist'],
          timeline: '3-5 days'
        },
        {
          step: 3,
          title: 'Board & Shareholder Approval',
          description: 'Obtain board approval, conduct general meeting for shareholder approval, pass special resolution if required',
          documents: ['Board approval', 'Meeting minutes', 'Special resolution'],
          timeline: '3-7 days'
        },
        {
          step: 4,
          title: 'ROC Filing',
          description: 'File amended MOA/AOA with ROC, obtain e-stamping if required, receive filing certificate',
          documents: ['ROC filing', 'E-stamp certificate', 'Filing acknowledgment'],
          timeline: '5-10 days'
        }
      ],
      requiredDocuments: [
        'Board resolution for amendment',
        'Shareholder meeting notice and minutes',
        'Draft amended MOA/AOA',
        'Legal expert opinion (if complex changes)',
        'Current MOA/AOA certified copy',
        'Supporting resolutions and documents',
        'Authorized signatory proof',
        'Form INC-22 (if applicable)'
      ],
      faqs: [
        {
          question: 'Which amendments require special resolution?',
          answer: 'Changes in objectives, capital structure, and major governance rules require special resolution'
        },
        {
          question: 'Can we amend MOA and AOA separately?',
          answer: 'Yes, both can be amended independently based on requirements'
        },
        {
          question: 'How often can we amend MOA/AOA?',
          answer: 'As often as needed, but frequent changes may require explanations'
        },
        {
          question: 'What if shareholders don\'t approve amendment?',
          answer: 'The amendment cannot proceed; alternative clauses must be proposed'
        }
      ],
     
      rating: 4.6,
        
       },
    
      {
        id: 'business-insurance-advisory',
        name: 'Business Insurance Advisory',
        slug: 'business-insurance-advisory',
        description: 'Expert guidance on business insurance needs and comprehensive risk coverage solutions.',
        icon: 'Umbrella',
        features: [
          'Comprehensive insurance needs assessment',
          'Policy comparison and optimal selection',
          'Claims management support and assistance',
          'Risk management strategies development',
          'Premium optimization and cost reduction',
          'Annual policy review and recommendations',
          'Insurance portfolio management',
          'Regulatory compliance and advisory services'
        ],
        benefits: [
          'Identify critical insurance gaps in coverage',
          'Optimize insurance costs and premiums',
          'Ensure appropriate risk coverage',
          'Simplify claims management process',
          'Peace of mind with comprehensive protection',
          'Expert guidance on insurance requirements'
        ],
        procedure: [
          {
            step: 1,
            title: 'Risk Assessment',
            description: 'Comprehensive evaluation of business risks and vulnerabilities',
            documents: ['Business profile', 'Risk checklist', 'Industry analysis'],
            timeline: '2-3 days'
          },
          {
            step: 2,
            title: 'Insurance Gap Analysis',
            description: 'Identify gaps between current coverage and required protection',
            documents: ['Current policies', 'Gap analysis', 'Coverage recommendations'],
            timeline: '2-3 days'
          },
          {
            step: 3,
            title: 'Policy Selection & Negotiation',
            description: 'Source optimal policies and negotiate best premiums',
            documents: ['Policy quotes', 'Comparison analysis', 'Negotiation details'],
            timeline: '3-5 days'
          },
          {
            step: 4,
            title: 'Implementation & Monitoring',
            description: 'Activate policies and set up ongoing monitoring and review',
            documents: ['Policy documents', 'Coverage summary', 'Review schedule'],
            timeline: 'Ongoing'
          }
        ],
        requiredDocuments: [
          'Business registration and license copies',
          'Current insurance policies (if any)',
          'Business financial statements',
          'List of assets and liabilities',
          'Employee count and structure',
          'Description of business activities and risks',
          'Loss history (if applicable)'
        ],
        faqs: [
          {
            question: 'What types of insurance do you advise on?',
            answer: 'General liability, professional indemnity, property, cyber, workers compensation, and more'
          },
          {
            question: 'Can you help reduce insurance costs?',
            answer: 'Yes, we negotiate with insurers and identify cost-saving opportunities'
          },
          {
            question: 'How often should policies be reviewed?',
            answer: 'Annually at minimum, or when business changes significantly'
          },
          {
            question: 'Do you help with claims?',
            answer: 'Yes, we provide end-to-end claims management support'
          }
        ],
        
        rating: 4.6,
      },
      {
        id: 'annual-filing-llp',
        name: 'Annual Filing of LLP',
        slug: 'annual-filing-llp',
        description: 'Complete annual compliance filing for Limited Liability Partnerships with regulatory submissions.',
        icon: 'FileCheck',
        features: [
          'Annual return (Form 11) preparation and filing',
          'Statement of account and solvency filing',
          'Designated Partner information updates',
          'Changes in partners notification',
          'Capital and liability details filing',
          'Financial statements compilation',
          'ROC filing and processing',
          'Penalty avoidance and compliance',
          'Regulatory deadline tracking',
          'Compliance calendar management'
        ],
        benefits: [
          'Maintain regulatory compliance and good standing',
          'Avoid penalties and show-cause notices',
          'Keep corporate records updated',
          'Enable smooth partner additions/removals',
          'Professional compliance documentation',
          'Timely filing with regulatory authorities',
          'Peace of mind with expert handling'
        ],
        procedure: [
          {
            step: 1,
            title: 'Information Collection',
            description: 'Collect all partner details, capital changes, and financial information',
            documents: ['Partner list', 'Capital updates', 'Financial statements'],
            timeline: '2-3 days'
          },
          {
            step: 2,
            title: 'Form Preparation',
            description: 'Prepare Form 11 and Statement of Account with all details',
            documents: ['Form 11', 'Statement of account', 'Supporting documents'],
            timeline: '3-5 days'
          },
          {
            step: 3,
            title: 'Certification & Signing',
            description: 'Obtain designated partner signatures and certificates',
            documents: ['Signed forms', 'DP declarations', 'Certificates'],
            timeline: '2-3 days'
          },
          {
            step: 4,
            title: 'ROC Filing',
            description: 'File forms with Registrar of Companies and obtain acknowledgment',
            documents: ['Filing receipt', 'Filing number', 'Acknowledgment'],
            timeline: '1 day'
          }
        ],
        requiredDocuments: [
          'Current list of all partners and their details',
          'Capital account statements for all partners',
          'Financial statements (if required)',
          'Details of any partner changes during the year',
          'Designated partner contact information',
          'PAN and address proof of designated partners',
          'Previous year filing proof',
          'Any amendments to LLP agreement'
        ],
        faqs: [
          {
            question: 'When is the annual return deadline?',
            answer: 'Within 60 days of the end of the financial year'
          },
          {
            question: 'What penalty applies for late filing?',
            answer: 'Penalty from ₹5,000-25,000 depending on delay, plus possible prosecution'
          },
          {
            question: 'Can we file if there are partner changes?',
            answer: 'Yes, partner changes must be disclosed in the annual filing'
          },
          {
            question: 'Is audit mandatory for LLP?',
            answer: 'No audit required if contribution doesn\'t exceed ₹25 lakhs; otherwise required'
          }
        ],
        
        rating: 4.7,
      },
      {
        id: 'board-meetings-general-meetings',
        name: 'Conducting of Board Meetings & General Meetings',
        slug: 'board-meetings-general-meetings',
        description: 'Professional conducting and documentation of board and general meetings with advisory support.',
        icon: 'Users',
        features: [
          'Board meeting scheduling and coordination',
          'General meeting (AGM/EGM) organization',
          'Agenda preparation and distribution',
          'Notice and call letter generation',
          'Meeting minutes documentation',
          'Resolution drafting and approval',
          'Record maintenance and filing',
          'Compliance monitoring and support',
          'Virtual meeting coordination',
          'Post-meeting follow-up and implementation'
        ],
        benefits: [
          'Ensure proper corporate governance and compliance',
          'Professional meeting documentation and records',
          'Timely notice and agenda distribution',
          'Legal validity of decisions and resolutions',
          'Audit-ready meeting records',
          'Reduced compliance risks and penalties',
          'Expert guidance on meeting procedures'
        ],
        procedure: [
          {
            step: 1,
            title: 'Meeting Planning',
            description: 'Determine meeting type, schedule, and required participants',
            documents: ['Meeting schedule', 'Participant list', 'Agenda items'],
            timeline: '2-3 days'
          },
          {
            step: 2,
            title: 'Notice & Documentation Preparation',
            description: 'Prepare and distribute official notice and agenda to all members',
            documents: ['Meeting notice', 'Agenda', 'Supporting documents'],
            timeline: '2-3 days'
          },
          {
            step: 3,
            title: 'Meeting Conduction',
            description: 'Coordinate meeting execution and documentation of proceedings',
            documents: ['Attendance register', 'Discussion notes', 'Voting records'],
            timeline: '1 day'
          },
          {
            step: 4,
            title: 'Minutes & Records Finalization',
            description: 'Prepare, approve, and file meeting minutes and resolutions',
            documents: ['Meeting minutes', 'Approved resolutions', 'Filed documents'],
            timeline: '2-3 days'
          }
        ],
        requiredDocuments: [
          'Previous meeting minutes (if amendment)',
          'List of members/partners and contact details',
          'Proposed agenda items',
          'Documents to be tabled in meeting',
          'Director/Partner approval for agenda',
          'Any special resolutions draft',
          'Financial statements (if AGM)',
          'Audit reports (if AGM)'
        ],
        faqs: [
          {
            question: 'How often must AGM be held?',
            answer: 'Mandatory once every financial year within 6 months of year-end'
          },
          {
            question: 'What is the minimum notice period?',
            answer: 'Minimum 14 days notice required before meeting date'
          },
          {
            question: 'Can meetings be held virtually?',
            answer: 'Yes, virtual/hybrid meetings are permitted with proper coordination'
          },
          {
            question: 'How long must minutes be retained?',
            answer: 'Minutes must be retained for minimum 8 years'
          }
        ],
 
        rating: 4.6,
      },
      {
        id: 'secretarial-standard-compliance',
        name: 'Secretarial Standard Compliances',
        slug: 'secretarial-standard-compliance',
        description: 'Ensure adherence to secretarial standards with expert compliance guidance and implementation.',
        icon: 'CheckSquare',
        features: [
          'Secretarial standard (SS) compliance review',
          'Meeting procedure standardization',
          'Documentation and record maintenance',
          'Statutory requirement alignment',
          'Internal audit for secretarial compliance',
          'Compliance calendar and deadline management',
          'Staff training and awareness programs',
          'Regular monitoring and reporting',
          'Non-compliance remediation',
          'Certification and attestation support'
        ],
        benefits: [
          'Ensure proper corporate governance standards',
          'Maintain audit-ready documentation',
          'Reduce compliance gaps and risks',
          'Professional meeting and record standards',
          'Investor and stakeholder confidence',
          'Enhanced compliance culture',
          'Protection from penalties and prosecution'
        ],
        procedure: [
          {
            step: 1,
            title: 'Compliance Assessment',
            description: 'Review current practices against secretarial standards requirements',
            documents: ['Policy review', 'Record audit', 'Gap analysis'],
            timeline: '3-5 days'
          },
          {
            step: 2,
            title: 'Standard Documentation',
            description: 'Prepare standard policies and procedures aligned with SS requirements',
            documents: ['Policy documents', 'Process manuals', 'Template documents'],
            timeline: '3-5 days'
          },
          {
            step: 3,
            title: 'Implementation & Training',
            description: 'Implement standards and train staff on proper procedures',
            documents: ['Training materials', 'Implementation checklist', 'Staff sign-offs'],
            timeline: '2-3 days'
          },
          {
            step: 4,
            title: 'Monitoring & Certification',
            description: 'Monitor compliance and provide periodic certification',
            documents: ['Compliance report', 'Certification letter', 'Action items'],
            timeline: 'Ongoing'
          }
        ],
        requiredDocuments: [
          'Current policies and procedures',
          'Meeting minutes and records',
          'Board resolutions and approvals',
          'Statutory compliances documentation',
          'Internal audit reports',
          'Organizational structure details',
          'Employee policies and handbook',
          'Previous compliance reports'
        ],
        faqs: [
          {
            question: 'Which companies need secretarial audit?',
            answer: 'Mandatory for listed companies; discretionary for private companies'
          },
          {
            question: 'What are secretarial standards?',
            answer: 'Standards issued by ICSI for secretarial practices and corporate governance'
          },
          {
            question: 'How often should compliance be checked?',
            answer: 'Recommended quarterly; mandatory annually for audit purposes'
          },
          {
            question: 'What is the cost of secretarial audit?',
            answer: 'Varies based on company size; typically ₹25,000-1,00,000+ per year'
          }
        ],
        
        rating: 4.5,
      },



    ]
  },
  // 3. Policy & Agreement Drafting Services
{
  id: 'policy-agreement-drafting',
  name: 'Policy & Agreement Drafting Services',
  slug: 'policy-agreement-drafting',
  description:
    'Specialized drafting of corporate policies and commercial agreements that define roles, responsibilities, and protections while ensuring legal and regulatory compliance.',
  icon: 'FileSignature',
  subServices: [
    // 5.1 Shareholders’ Agreement (SHA)
    {
      id: 'shareholders-agreement',
      name: "Shareholders' Agreement (SHA)",
      slug: 'shareholders-agreement',
      description:
        'Bespoke Shareholders’ Agreements governing rights, obligations, governance, exits, and protections among shareholders.',
      icon: 'Users',
      features: [
        'Definition of shareholding structure, capital contributions, and rights',
        'Board composition, reserved matters, and voting rights framework',
        'Restrictions on share transfers, tag-along and drag-along rights',
        'Anti-dilution, pre-emptive rights, and further funding provisions',
        'Dividend, distribution, and exit waterfall mechanisms',
        'Dispute resolution, deadlock mechanisms, and exit strategies',
        'Confidentiality, non-compete, and non-solicitation clauses',
        'Alignment with Companies Act, FEMA, and SEBI requirements, where applicable'
      ],
      benefits: [
        'Reduced risk of founder and investor disputes over control and economics',
        'Clear rules for decision making, exits, and future funding rounds',
        'Enhanced investor confidence through robust governance provisions',
        'Transparent expectations for promoters, investors, and key stakeholders',
        'Better protection of minority and majority shareholder interests',
        'Improved readiness for future fundraising and due diligence',
        'Stronger legal enforceability of negotiated rights',
        'Stable governance foundation for long-term growth'
      ],
      procedure: [
        {
          step: 1,
          title: 'Stakeholder Consultation & Term Sheet Review',
          description:
            'Understand cap table, investor expectations, and commercial terms from term sheet or deal discussions.',
          documents: [
            'Company incorporation documents and cap table',
            'Existing or proposed term sheet',
            'Board/shareholder approvals, if any'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Drafting of SHA',
          description:
            'Prepare first draft of SHA reflecting commercial terms and statutory/compliance requirements.',
          documents: [
            'List of reserved matters and governance preferences',
            'Key economic rights and exit preferences of parties'
          ],
          timeline: '1–3 weeks'
        },
        {
          step: 3,
          title: 'Negotiation & Finalization',
          description:
            'Incorporate comments from all parties, support negotiations, and finalize the agreement.',
          documents: [
            'Tracked changes versions and negotiation notes',
            'Final agreed draft SHA'
          ],
          timeline: '2–4 weeks (deal-dependent)'
        },
        {
          step: 4,
          title: 'Execution & Post-Execution Actions',
          description:
            'Coordinate signing, stamping, and any necessary corporate or regulatory filings.',
          documents: [
            'Signed and stamped SHA',
            'Board/shareholder resolutions implementing terms'
          ],
          timeline: '3–7 days'
        }
      ],
      requiredDocuments: [
        'Company incorporation documents and share register/cap table',
        'KYC of shareholders and directors',
        'Term sheet or heads of terms, if available',
        'Board/shareholder resolutions for investment/structure'
      ],
      faqs: [
        {
          question: 'Do I need an SHA if I already have Articles of Association?',
          answer:
            'Yes, Articles are public and generic, while an SHA is a private, detailed contract capturing specific commercial and governance arrangements among shareholders.'
        },
        {
          question: 'When should a Shareholders’ Agreement be signed?',
          answer:
            'Ideally before or at the time of a new investment or change in ownership so that rights and obligations are clear from day one.'
        }
      ],
      rating: 4.8
    },

    // 5.2 Engagement Contract / Service Agreements
    {
      id: 'engagement-service-agreements',
      name: 'Engagement Contract / Service Agreements',
      slug: 'engagement-service-agreements',
      description:
        'Tailored engagement and service agreements defining scope, deliverables, timelines, and liabilities for clients, vendors, and consultants.',
      icon: 'Handshake',
      features: [
        'Clear description of services, deliverables, and timelines',
        'Commercial terms including fees, milestones, and payment schedules',
        'Limitation of liability, indemnity, and warranties',
        'Intellectual property ownership and licensing provisions',
        'Confidentiality and data protection clauses',
        'Termination, renewal, and dispute resolution mechanisms',
        'Service-level commitments and performance benchmarks, where needed',
        'Alignment with applicable commercial and IP laws'
      ],
      benefits: [
        'Reduced disputes due to clearly defined expectations',
        'Better protection of IP, confidential information, and business interests',
        'Stronger legal position in case of non-performance or breach',
        'Professional image and standardized contracting practices',
        'Improved cash flow predictability through clear payment terms',
        'Simplified onboarding of vendors, clients, and consultants',
        'Consistency across multiple projects and relationships',
        'Support for risk allocation and mitigation in key engagements'
      ],
      procedure: [
        {
          step: 1,
          title: 'Scope & Relationship Assessment',
          description:
            'Understand the nature of services, parties involved, and commercial expectations.',
          documents: [
            'Scope of work or business plan',
            'Parties’ KYC and key commercial terms'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Draft Agreement Preparation',
          description:
            'Draft tailored agreement with appropriate commercial and risk protection clauses.',
          documents: [
            'Existing templates or prior agreements, if any',
            'Special conditions or service-level requirements'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Review, Negotiation & Execution',
          description:
            'Refine based on feedback from both sides and coordinate signing and stamping.',
          documents: [
            'Revised drafts with comments',
            'Executed agreement copies'
          ],
          timeline: '1–3 weeks'
        }
      ],
      requiredDocuments: [
        'Statement of work or business plan',
        'KYC of parties involved',
        'Agreed commercial terms or existing offer letters'
      ],
      faqs: [
        {
          question: 'Can one standard service agreement work for all clients?',
          answer:
            'A base template helps, but key commercial and risk terms should still be tailored for larger or higher-risk engagements.'
        },
        {
          question: 'Is a signed PO enough without a detailed agreement?',
          answer:
            'Purchase orders are helpful but typically do not cover liability, IP, confidentiality, and termination in sufficient detail, so a full agreement is safer.'
        }
      ],
      rating: 4.7
    },

    // 5.3 I-SAFE Agreement
    {
      id: 'i-safe-agreement',
      name: 'I-SAFE Agreement (India Simple Agreement for Future Equity)',
      slug: 'i-safe-agreement',
      description:
        'Customized I-SAFE agreements for startups raising convertible investments with clear conversion triggers and protections.',
      icon: 'Sparkles',
      features: [
        'Definition of investment amount and instrument type',
        'Conversion triggers based on future equity rounds or events',
        'Valuation caps, discounts, and price protection mechanisms',
        'Treatment in down-rounds and liquidation preference alignment',
        'Investor information rights and limited protective provisions',
        'Founder protections and anti-dilution guardrails where possible',
        'Alignment with Companies Act, FEMA, and regulatory norms',
        'Integration with existing cap table and shareholder arrangements'
      ],
      benefits: [
        'Faster early-stage fundraising with simpler documentation',
        'Clarity for founders and investors on conversion economics',
        'Reduced negotiation friction compared to full equity rounds',
        'Better regulatory alignment for Indian startup structures',
        'Improved visibility on dilution and cap table impact',
        'Balanced protection of investor downside and founder control',
        'Standardization across multiple early-stage rounds',
        'Better preparedness for future priced equity rounds'
      ],
      procedure: [
        {
          step: 1,
          title: 'Funding Structure & Cap Table Review',
          description:
            'Assess current cap table and proposed investment to choose appropriate I-SAFE structure.',
          documents: [
            'Current cap table and prior funding docs',
            'Proposed investment amount and terms/term sheet'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Drafting I-SAFE Agreement',
          description:
            'Prepare draft I-SAFE with conversion mechanics, caps, discounts, and rights.',
          documents: [
            'Investor details and regulatory preferences',
            'Key commercial negotiation points'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Negotiation, Execution & Filings',
          description:
            'Finalize terms, execute agreement, and support necessary corporate/regulatory filings.',
          documents: [
            'Board/shareholder approvals',
            'Executed I-SAFE agreement and MCA/RBI forms, if any'
          ],
          timeline: '2–4 weeks'
        }
      ],
      requiredDocuments: [
        'Incorporation documents and updated cap table',
        'Investor/nominee KYC and term sheet',
        'Existing shareholder/investment agreements, if any'
      ],
      faqs: [
        {
          question: 'How is an I-SAFE different from a convertible note?',
          answer:
            'Both are convertible instruments, but I-SAFE is designed around Indian regulatory nuances and usually has different interest, maturity, and regulatory treatment than a debt-like note.'
        },
        {
          question: 'Will an I-SAFE immediately change my shareholding?',
          answer:
            'No, cap table typically changes at the time of conversion triggered by a future equity round or specified event, not when funds are first received.'
        }
      ],
      rating: 4.8
    },

    // 5.4 POSH Policy
    {
      id: 'posh-policy',
      name: 'POSH Policy (Prevention of Sexual Harassment)',
      slug: 'posh-policy',
      description:
        'Comprehensive POSH policy drafting and implementation support to ensure a safe, compliant workplace.',
      icon: 'Shield',
      features: [
        'Drafting POSH policy aligned with Indian POSH law requirements',
        'Guidance on constitution and functioning of Internal Committee (IC)',
        'Definition of complaint, inquiry, and resolution processes',
        'Confidentiality safeguards and protection against victimisation',
        'Timelines for inquiries, reporting, and record-keeping',
        'Integration with broader HR and disciplinary policies',
        'Templates for notices, minutes, and IC documentation',
        'Awareness, training, and rollout advisory'
      ],
      benefits: [
        'Legal compliance with mandatory POSH requirements',
        'Safer, inclusive, and gender-sensitive workplace culture',
        'Reduced risk of legal claims, penalties, and reputational damage',
        'Clear processes for reporting and addressing complaints',
        'Better confidence among employees to report concerns',
        'Stronger employer defence through documented compliance',
        'Improved stakeholder perception around workplace ethics',
        'Support for sustaining POSH compliance over time'
      ],
      procedure: [
        {
          step: 1,
          title: 'Organization Assessment & IC Details',
          description:
            'Understand workforce profile and collect details of proposed IC members.',
          documents: [
            'Company and employee headcount details',
            'List and KYC of IC members'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Policy Drafting & Alignment',
          description:
            'Draft POSH policy and align with HR practices and disciplinary framework.',
          documents: [
            'Existing HR policies or employee handbook',
            'Management inputs on processes and escalation matrices'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Rollout & Training Guidance',
          description:
            'Provide rollout plan, templates, and training guidance for staff and IC.',
          documents: [
            'Training materials and communication templates',
            'Internal circulars announcing policy and IC'
          ],
          timeline: '1–3 weeks'
        }
      ],
      requiredDocuments: [
        'Company details and organization chart',
        'List of IC members with basic KYC',
        'Existing HR/disciplinary policies, if any'
      ],
      faqs: [
        {
          question: 'Is a POSH policy mandatory for all organisations?',
          answer:
            'Any workplace with 10 or more employees must constitute an Internal Committee and have a written POSH policy as per law.'
        },
        {
          question: 'Do POSH policies apply to remote or hybrid work?',
          answer:
            'Yes, harassment in virtual settings or outside office but connected to work can still be covered by POSH provisions and policy.'
        }
      ],
      rating: 4.8
    },

    // 5.5 HR Policies
    {
      id: 'hr-policies',
      name: 'HR Policies (Leave, Attendance, Code of Conduct, etc.)',
      slug: 'hr-policies',
      description:
        'End-to-end drafting of HR policies covering leave, attendance, conduct, appraisal, remote work, and workplace discipline.',
      icon: 'ClipboardList',
      features: [
        'Leave and attendance policy drafting with statutory compliance',
        'Code of conduct, discipline, and grievance redressal frameworks',
        'Remote/hybrid work policies and performance expectations',
        'Appraisal, promotion, and performance management policies',
        'Working hours, overtime, and shift policy documentation',
        'Health, safety, and workplace behaviour guidelines',
        'Integration with payroll, benefits, and POSH policies',
        'Customisation by business size, sector, and culture'
      ],
      benefits: [
        'Standardised treatment of employees across the organisation',
        'Clear expectations and processes, reducing ad-hoc decisions',
        'Better compliance with labour and employment laws',
        'Improved employee experience and reduced ambiguity',
        'Support for scaling teams while retaining consistency',
        'Stronger defence in disputes through documented policies',
        'Alignment of HR practices with business strategy',
        'Improved employer brand and professionalism'
      ],
      procedure: [
        {
          step: 1,
          title: 'Current Practice & Gap Analysis',
          description:
            'Review existing HR processes and identify gaps against legal and best practice benchmarks.',
          documents: [
            'Existing HR manual or policies',
            'Company structure, pay bands, and role levels'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Drafting & Management Review',
          description:
            'Draft policy suite and refine through discussions with management and HR.',
          documents: [
            'Draft policies with tracked changes',
            'Management feedback notes'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Finalization & Implementation Support',
          description:
            'Finalize policies and assist with communication and roll-out to employees.',
          documents: [
            'Final policy documents',
            'Internal communication templates'
          ],
          timeline: '1–3 weeks'
        }
      ],
      requiredDocuments: [
        'Company structure and pay bands',
        'Existing HR handbooks or policies (if any)',
        'Details of current leave, attendance, and discipline practices'
      ],
      faqs: [
        {
          question: 'How often should HR policies be updated?',
          answer:
            'Policies should be reviewed at least annually or whenever there are major legal or business changes impacting people practices.'
        },
        {
          question: 'Do HR policies need to be signed by employees?',
          answer:
            'Acknowledgement (physical or digital) is recommended so employees confirm they have read and understood the policies.'
        }
      ],
      rating: 4.7
    },

    // 5.6 Internal Business Governance Policies
    {
      id: 'internal-governance-policies',
      name: 'Internal Business Governance Policies',
      slug: 'internal-governance-policies',
      description:
        'Design of internal governance frameworks around delegation, ethics, conflicts, IT/data handling, and board processes.',
      icon: 'Scale',
      features: [
        'Delegation of authority (DOA) matrices and approval hierarchies',
        'Codes of ethics, business conduct, and conflict-of-interest policies',
        'IT, data security, and acceptable use policies',
        'Risk management, reporting, and escalation procedures',
        'Board and committee process and documentation policies',
        'Whistle-blower and grievance redressal frameworks',
        'Alignment with regulatory and audit requirements',
        'Templates and checklists for governance implementation'
      ],
      benefits: [
        'Stronger internal control environment and risk management',
        'Clear accountability and decision-making lines',
        'Better readiness for audits, due diligence, and investor reviews',
        'Reduced risk of fraud, misconduct, and policy breaches',
        'Improved culture of ethics and compliance',
        'Consistent decision-making across departments and locations',
        'Better documentation and traceability of key approvals',
        'Support for scaling without losing control or oversight'
      ],
      procedure: [
        {
          step: 1,
          title: 'Risk & Process Mapping',
          description:
            'Assess key risks, processes, and reporting layers to design appropriate governance policies.',
          documents: [
            'Org chart and business process flows',
            'Notes from prior audits or compliance checks'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 2,
          title: 'Policy Drafting & Alignment',
          description:
            'Draft governance policies tailored to company size, sector, and regulatory environment.',
          documents: [
            'Draft policies and DOA matrices',
            'Management feedback and board comments'
          ],
          timeline: '3–6 weeks'
        },
        {
          step: 3,
          title: 'Approval & Rollout',
          description:
            'Support management/board approvals and internal communication and training.',
          documents: [
            'Approved policy set',
            'Training and communication materials'
          ],
          timeline: '2–4 weeks'
        }
      ],
      requiredDocuments: [
        'Organisation chart and process flows',
        'Outputs from compliance/audit reviews',
        'Existing governance or risk policies, if any'
      ],
      faqs: [
        {
          question: 'Are internal governance policies only for large enterprises?',
          answer:
            'Even growing SMEs and startups benefit from governance policies, especially once teams and approvals become multi-layered.'
        },
        {
          question: 'How do these policies interact with board charters?',
          answer:
            'Board and committee charters set high-level oversight, while internal governance policies drive day-to-day decision-making and controls.'
        }
      ],
      rating: 4.8
    },

    // 5.7 Joint Venture (JV) Agreements
    {
      id: 'joint-venture-agreements',
      name: 'Joint Venture (JV) Agreements',
      slug: 'joint-venture-agreements',
      description:
        'Comprehensive JV agreements covering contributions, governance, IP, profit sharing, exits, and dispute resolution.',
      icon: 'GitBranch',
      features: [
        'Definition of JV scope, objectives, and business plan',
        'Capital contributions and shareholding arrangements',
        'Management structure, board composition, and decision rights',
        'Profit/loss sharing, funding obligations, and guarantee structures',
        'IP ownership, licensing, and technology-sharing provisions',
        'Exit, deadlock, and dispute resolution mechanisms',
        'Compliance with sectoral, FDI, and competition regulations',
        'Domestic and cross-border JV structuring inputs'
      ],
      benefits: [
        'Aligned expectations between JV partners from the outset',
        'Reduced likelihood of conflicts on capital, control, or IP',
        'Clear structure for operations, funding, and governance',
        'Better protection of proprietary technology and know-how',
        'Improved bankability and investor confidence in the JV',
        'Stronger documentation for regulatory and tax purposes',
        'Defined exit and dispute mechanisms avoiding stalemates',
        'Support for long-term collaborative value creation'
      ],
      procedure: [
        {
          step: 1,
          title: 'JV Objectives & Term Sheet Discussion',
          description:
            'Understand business objectives, partner expectations, and any existing MoU/term sheet.',
          documents: [
            'Business plan or project details',
            'Existing MoU or term sheet'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'JV Agreement Drafting',
          description:
            'Draft JV agreement detailing governance, contributions, IP, and commercial terms.',
          documents: [
            'KYC and corporate details of partners',
            'Key commercial terms and risk-sharing arrangements'
          ],
          timeline: '3–6 weeks'
        },
        {
          step: 3,
          title: 'Negotiation, Execution & Registrations',
          description:
            'Support negotiations, finalize document, and handle registrations/filings if required.',
          documents: [
            'Executed JV agreement',
            'Board approvals and regulatory filings'
          ],
          timeline: '4–8 weeks'
        }
      ],
      requiredDocuments: [
        'Company/individual KYC of JV partners',
        'Business plan or detailed project note',
        'Term sheet or MoU',
        'Board/management approvals and authorisations'
      ],
      faqs: [
        {
          question: 'Is a JV Agreement always accompanied by a new JV entity?',
          answer:
            'Not always; some JVs operate contractually without a separate company, though many structures do involve forming a new entity.'
        },
        {
          question: 'How long should a JV typically last?',
          answer:
            'Duration depends on the project; agreements can be open-ended or tied to specific milestones with built-in review and exit options.'
        }
      ],
      rating: 4.8
    },

    // 5.8 Vendor, Supplier & Service Agreements
    {
      id: 'vendor-supplier-agreements',
      name: 'Vendor, Supplier & Service Agreements',
      slug: 'vendor-supplier-agreements',
      description:
        'Robust vendor and supplier agreements covering procurement, quality, delivery, and liability to secure supply chains.',
      icon: 'Truck',
      features: [
        'Clear definition of goods/services, quality standards, and specifications',
        'Delivery timelines, logistics terms, and risk transfer points',
        'Pricing, taxes, and payment milestone structures',
        'Warranties, indemnities, and limitation of liability',
        'Returns, replacements, and service level commitments',
        'Confidentiality and IP protection where relevant',
        'Termination and dispute resolution mechanisms',
        'Compliance with sectoral and import/export requirements where applicable'
      ],
      benefits: [
        'Reduced commercial and operational risk in procurement and outsourcing',
        'Better leverage in case of non-performance or quality failures',
        'Improved supplier relationships with clear expectations',
        'Standardised templates that speed up contracting cycles',
        'Stronger documentation for audits and cost controls',
        'Protection of brand and customer relationships via service standards',
        'Transparent allocation of risk between parties',
        'Support for scalable, repeatable vendor onboarding'
      ],
      procedure: [
        {
          step: 1,
          title: 'Requirements & Risk Assessment',
          description:
            'Understand procurement/services scope, criticality, and risk areas.',
          documents: [
            'Specification/requirements documents',
            'Vendor credentials and proposals'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Drafting & Negotiation',
          description:
            'Prepare contract with risk-mitigating clauses and negotiate with vendor/supplier.',
          documents: [
            'Draft contract and mark-ups',
            'Internal approval notes'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Execution & Ongoing Updates',
          description:
            'Finalize, sign, and support periodic updates or renewals as needed.',
          documents: [
            'Signed contracts',
            'Renewal or amendment documents'
          ],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'Scope/requirements for goods or services',
        'Vendor/supplier/company credentials and KYC',
        'Commercial terms or existing proposals'
      ],
      faqs: [
        {
          question: 'Should small-value vendors also sign detailed agreements?',
          answer:
            'For very small, low-risk engagements a shorter version may be used, but some written contract is still advisable for clarity.'
        },
        {
          question: 'Can a single master agreement cover multiple purchase orders?',
          answer:
            'Yes, a master services or supply agreement can govern ongoing transactions with individual POs referencing it.'
        }
      ],
      rating: 4.7
    },

    // 5.9 NDAs
    {
      id: 'nda-agreements',
      name: 'Non-Disclosure & Confidentiality Agreements (NDA)',
      slug: 'nda-agreements',
      description:
        'Custom NDAs (one-way, mutual, multilateral) to safeguard confidential information in discussions and collaborations.',
      icon: 'Lock',
      features: [
        'Clear definition of confidential information and exclusions',
        'Purpose and permitted use of shared information',
        'Obligations of receiving parties, including security standards',
        'Return or destruction of information obligations',
        'Term, survival, and residual knowledge provisions',
        'Remedies for breach and limitation of liability options',
        'Tailored carve-outs for investors, advisors, and affiliates',
        'Compatibility with cross-border data and IP considerations'
      ],
      benefits: [
        'Reduced risk of misuse or leakage of sensitive information',
        'Confidence to share data with partners, investors, and vendors',
        'Better legal standing in case of unauthorised disclosure',
        'Standardised approach to confidentiality across deals',
        'Clarity for employees and counterparties on obligations',
        'Support for faster negotiation by using clear, balanced templates',
        'Improved perception of professionalism and risk management',
        'Basis for broader data and IP protection strategies'
      ],
      procedure: [
        {
          step: 1,
          title: 'Relationship & Information Mapping',
          description:
            'Understand parties, purpose, and nature of information to be shared.',
          documents: [
            'Parties’ identification and contact details',
            'High-level description of project or discussion'
          ],
          timeline: '2–3 days'
        },
        {
          step: 2,
          title: 'Drafting & Customisation',
          description:
            'Draft NDA with appropriate scope, term, and restrictions for the scenario.',
          documents: [
            'Special confidentiality or exclusivity concerns',
            'Jurisdiction or governing law preferences'
          ],
          timeline: '3–5 days'
        },
        {
          step: 3,
          title: 'Execution',
          description:
            'Finalize and execute NDA between parties, including e-sign or physical signatures.',
          documents: [
            'Signed NDA copies',
            'Record of authorised signatories'
          ],
          timeline: '2–3 days'
        }
      ],
      requiredDocuments: [
        'Parties’ basic KYC/identification',
        'Nature and purpose of information sharing'
      ],
      faqs: [
        {
          question: 'Are NDAs enforceable if signed electronically?',
          answer:
            'Properly executed electronic signatures are generally enforceable if they meet applicable e-sign and contract law requirements.'
        },
        {
          question: 'Can an NDA stop someone from using their general skills and experience?',
          answer:
            'No, NDAs usually protect specific confidential information, not a person’s general skills or knowledge.'
        }
      ],
      rating: 4.8
    },

    // 5.10 Employment & Consultant Agreements
    {
      id: 'employment-consultant-agreements',
      name: 'Employment & Consultant Agreements',
      slug: 'employment-consultant-agreements',
      description:
        'Employment and consultancy contracts capturing role, compensation, IP, confidentiality, and exit terms.',
      icon: 'Briefcase',
      features: [
        'Clear description of role, responsibilities, and reporting lines',
        'Compensation, benefits, and variable pay structures',
        'Confidentiality, IP assignment, and invention clauses',
        'Non-compete, non-solicit, and conflict-of-interest provisions where permitted',
        'Notice periods, termination conditions, and garden leave options',
        'Probation, confirmation, and performance review terms',
        'Alignment with labour, social security, and tax laws',
        'Variants for employees, consultants, advisors, and freelancers'
      ],
      benefits: [
        'Reduced disputes around role, pay, and expectations',
        'Better protection of IP, confidential information, and client relationships',
        'Clear exit rules and restrictions to prevent abrupt disruption',
        'Compliance with employment and engagement regulations',
        'Improved professionalism and clarity for new hires',
        'Support for consistent treatment across similar roles',
        'Enhanced ability to enforce post-termination obligations',
        'Stronger position in regulatory or labour disputes'
      ],
      procedure: [
        {
          step: 1,
          title: 'Role & Engagement Scoping',
          description:
            'Understand job description, engagement type, and compensation structure.',
          documents: [
            'Job description or scope of work',
            'Offer letter or compensation details'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Drafting Agreement',
          description:
            'Draft employment or consultant agreement aligned with law and HR policy.',
          documents: [
            'Company HR/engagement policy inputs',
            'Special role-specific conditions'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Review & Signature',
          description:
            'Incorporate feedback from both sides and finalize for execution.',
          documents: [
            'Revised drafts with comments',
            'Executed agreement'
          ],
          timeline: '1–2 weeks'
        }
      ],
      requiredDocuments: [
        'Employee/consultant KYC',
        'Job description or scope of work',
        'Compensation and benefits details'
      ],
      faqs: [
        {
          question: 'Should consultants sign the same agreement as employees?',
          answer:
            'No, consultants are typically engaged on different legal terms than employees, so separate templates are advisable.'
        },
        {
          question: 'Are non-compete clauses enforceable?',
          answer:
            'Enforceability varies by jurisdiction and context; clauses must be carefully drafted to be reasonable and legally sustainable.'
        }
      ],
      rating: 4.7
    },

    // 5.11 Memorandum of Understanding (MoU)
    {
      id: 'mou-drafting',
      name: 'Memorandum of Understanding (MoU)',
      slug: 'mou-drafting',
      description:
        'Drafting MoUs that capture intent, roles, and next steps for collaborations before detailed contracts.',
      icon: 'FilePlus',
      features: [
        'Clarity on objectives and scope of collaboration',
        'High-level roles, responsibilities, and contributions of each party',
        'Non-binding and binding clauses tailored to context',
        'Confidentiality and exclusivity options where needed',
        'Timelines for detailed documentation and milestones',
        'Dispute resolution and governing law clauses',
        'Compatibility with later definitive agreements',
        'Adaptability for domestic and cross-border collaborations'
      ],
      benefits: [
        'Provides clear framework for initial cooperation',
        'Reduces misunderstandings before formal contracts',
        'Speeds up early-stage alignment and planning',
        'Can be customized to be non-binding or partially binding',
        'Helps in documenting intent for regulators, investors, or boards',
        'Forms a reference point for later agreement negotiations',
        'Creates clarity on immediate responsibilities and deliverables',
        'Professionalises early discussions with partners'
      ],
      procedure: [
        {
          step: 1,
          title: 'Objective & Scope Gathering',
          description:
            'Collect information on parties, goals, and broad expectations.',
          documents: [
            'Parties’ details and profiles',
            'Summary of agreed collaboration points'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'MoU Drafting & Iteration',
          description:
            'Draft MoU and refine based on comments from all parties.',
          documents: [
            'Draft MoU and mark-ups',
            'Internal approval notes'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Signing & Record Keeping',
          description:
            'Coordinate signing of MoU and maintain executed copies for reference.',
          documents: [
            'Signed MoU',
            'Authorisation documents for signatories'
          ],
          timeline: '3–7 days'
        }
      ],
      requiredDocuments: [
        'Identity and background of parties',
        'Summary of agreed terms and areas of collaboration'
      ],
      faqs: [
        {
          question: 'Is an MoU legally binding?',
          answer:
            'MoUs can be largely non-binding, but specific clauses (like confidentiality or exclusivity) can be drafted to be binding if desired.'
        },
        {
          question: 'When should we move from an MoU to a full agreement?',
          answer:
            'Once high-level terms are agreed and parties wish to proceed with actual execution and risk allocation, a detailed definitive agreement should follow.'
        }
      ],
      rating: 4.6
    },

    // 5.12 Franchise, Licensing & Distribution Agreements
    {
      id: 'franchise-licensing-distribution',
      name: 'Franchise, Licensing & Distribution Agreements',
      slug: 'franchise-licensing-distribution',
      description:
        'Comprehensive franchising, licensing, and distribution agreements ensuring brand protection, compliance, and revenue security.',
      icon: 'Store',
      features: [
        'Definition of territory, exclusivity, and channel rights',
        'Franchise/licence fees, royalties, and revenue-sharing models',
        'Brand usage, quality control, and operational standards',
        'Marketing, training, and support obligations',
        'IP ownership, infringement handling, and protection measures',
        'Term, renewal, and termination conditions',
        'Reporting, audit, and inspection rights',
        'Compliance with sectoral, competition, and foreign exchange norms where relevant'
      ],
      benefits: [
        'Protected brand and consistent customer experience across locations',
        'Predictable revenue streams through well-designed fee structures',
        'Reduced disputes with franchisees/licensees/distributors',
        'Better control over use of trademarks and trade dress',
        'Improved scalability of business models domestically and internationally',
        'Clear expectations on performance, reporting, and investment',
        'Enhanced attractiveness for potential partners and investors',
        'Stronger documentation for regulatory and tax compliance'
      ],
      procedure: [
        {
          step: 1,
          title: 'Business Model & Territory Discussion',
          description:
            'Understand the franchise/licensing/distribution model, territories, and partner profile.',
          documents: [
            'Business and financial plan',
            'Brand/trademark details'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'Agreement Drafting',
          description:
            'Draft robust agreements incorporating commercial, operational, and brand protection clauses.',
          documents: [
            'Franchisee/licensee/distributor KYC',
            'Negotiated commercial terms'
          ],
          timeline: '3–6 weeks'
        },
        {
          step: 3,
          title: 'Negotiation, Execution & Local Compliance',
          description:
            'Assist in negotiations, finalize agreements, and guide notarisation/registration where required.',
          documents: [
            'Executed agreements',
            'Statutory registrations or filings, if applicable'
          ],
          timeline: '4–8 weeks'
        }
      ],
      requiredDocuments: [
        'Brand/trademark ownership proofs',
        'Franchisee/licensee/distributor KYC',
        'Commercial terms or financial plan for the arrangement'
      ],
      faqs: [
        {
          question: 'Do franchise and licence agreements need registration or notarisation?',
          answer:
            'Requirements vary by state and structure; registration or notarisation may be advisable for enforceability and stamp duty compliance.'
        },
        {
          question: 'Can one template work for all territories and partners?',
          answer:
            'A master template helps, but key commercial and regulatory terms often need adaptation to territory and partner profile.'
        }
      ],
      rating: 4.8
    }
  ]
},
//4. NBFC Registration & Compliance Services
{
  id: 'nbfc-registration-compliance',
  name: 'NBFC Registration & Compliance Services',
  slug: 'nbfc-registration-compliance',
  description:
    'Specialised advisory for NBFC registration with RBI and ongoing regulatory compliance, reporting, audit support, and policy framework implementation.',
  icon: 'Banknote',
  subServices: [
    {
      id: 'nbfc-registration-all-types',
      name: 'NBFC Registration (All Types)',
      slug: 'nbfc-registration-all-types',
      description:
        'End-to-end advisory and execution for registration of all categories of NBFCs with RBI, from eligibility assessment to Certificate of Registration.',
      icon: 'FileBadge',
      features: [
        'Eligibility analysis for NBFC category selection (loan, investment, MFI, IFC, AFC, factor, etc.)',
        'Guidance on capital adequacy and net-worth requirements',
        'Business plan and policy framework drafting (KYC, Fair Practices Code, ALM, ICAAP, etc.)',
        'Preparation of documentation as per RBI checklists and annexures',
        'Online NBFC registration through COSMOS portal and physical file submission',
        'Liaison with statutory auditors for required certifications',
        'Regular follow-ups and responses to RBI queries and clarifications',
        'Support until issuance of Certificate of Registration (CoR)'
      ],
      benefits: [
        'Higher probability of first-time approval from RBI through structured approach',
        'Clarity on correct NBFC category and regulatory expectations',
        'Reduced risk of delays or rejection due to documentation gaps',
        'Well-drafted policies ready for post-registration operations',
        'Lower internal effort in navigating RBI systems and formats',
        'Better comfort for promoters, investors, and lenders on compliance readiness',
        'Early identification of capital or ownership issues needing rectification',
        'Smooth transition from planning to licensed NBFC status'
      ],
      procedure: [
        {
          step: 1,
          title: 'Category & Eligibility Assessment',
          description:
            'Determine the most suitable NBFC category and check net-worth, promoter, and business eligibility as per RBI norms.',
          documents: [
            'Company incorporation documents and shareholding details',
            'Preliminary business plan and funding structure'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'Capital & Policy Framework Preparation',
          description:
            'Guide on capital infusion and draft core policies such as KYC, Fair Practices Code, ALM, and risk management.',
          documents: [
            'Draft policy documents and internal approvals',
            'Net-worth certificates and audited financials'
          ],
          timeline: '3–6 weeks'
        },
        {
          step: 3,
          title: 'Application Filing on COSMOS & Physical Dossier',
          description:
            'Compile annexures, upload application on COSMOS, and submit physical file to RBI with all enclosures.',
          documents: [
            'RBI application forms and annexures',
            'Board resolutions and statutory declarations'
          ],
          timeline: 'As per RBI schedules'
        },
        {
          step: 4,
          title: 'Query Handling & CoR Issuance Support',
          description:
            'Support responses to RBI queries and provide clarifications until CoR is granted.',
          documents: [
            'RBI query letters and response drafts',
            'Updated financials or policy revisions, if requested'
          ],
          timeline: 'Regulator-dependent'
        }
      ],
      requiredDocuments: [
        'Company MOA/AOA with NBFC objects',
        'Net-worth certificate and latest audited financials',
        'Promoters’/directors’ KYC and CIBIL reports',
        'Detailed business plan and draft policy documents',
        'Board resolutions and statutory declarations',
        'Annexures as per current RBI NBFC application checklist'
      ],
      faqs: [
        {
          question: 'What is the minimum net-worth required for NBFC registration?',
          answer:
            'RBI prescribes minimum net-worth thresholds that vary over time and by category, so a fresh eligibility check is done before filing.'
        },
        {
          question: 'How long does NBFC registration typically take?',
          answer:
            'Timelines depend on completeness of documents and RBI processing, but the process usually spans several months from application to CoR.'
        }
      ],
      rating: 4.8
    },
    {
      id: 'nbfc-regulatory-compliance',
      name: 'NBFC Regulatory Compliances & Reporting',
      slug: 'nbfc-regulatory-compliance',
      description:
        'Ongoing regulatory compliance, reporting, and documentation support for NBFCs post-registration.',
      icon: 'ClipboardCheck',
      features: [
        'Preparation of a detailed RBI and MCA compliance calendar',
        'Support for NBS/return filings and other periodic RBI submissions',
        'Co-ordination of statutory and internal audits',
        'Design and review of KYC/AML frameworks and Fair Practices Code',
        'Implementation support for IND-AS/IFRS accounting standards',
        'Monitoring of capital adequacy, asset classification, and provisioning norms',
        'Compliance for appointment/change of directors and key management',
        'Support for public deposit-related compliances for NBFC-D, where applicable'
      ],
      benefits: [
        'Reduced risk of RBI penalties, restrictions, or adverse inspection findings',
        'Predictable and timely submission of all regulatory returns',
        'Stronger internal documentation and audit preparedness',
        'Better risk management and early warning on NPAs or capital issues',
        'Comfort for lenders, investors, and rating agencies on compliance posture',
        'Lower internal burden on NBFC teams for complex regulatory tracking',
        'Improved alignment with evolving RBI and MCA regulations',
        'Higher governance standards and transparency for stakeholders'
      ],
      procedure: [
        {
          step: 1,
          title: 'Compliance Mapping & Calendar Creation',
          description:
            'Identify all applicable RBI and MCA requirements and prepare an entity-specific compliance calendar.',
          documents: [
            'Existing licences, prior filings, and NBFC classification',
            'Organisational and product details'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 2,
          title: 'Data Collection & Return Preparation',
          description:
            'Collect financial and operational data and prepare periodic returns and registers.',
          documents: [
            'Financial statements and management reports',
            'Loan/investment registers and portfolio data'
          ],
          timeline: 'Ongoing as per due dates'
        },
        {
          step: 3,
          title: 'Audit & Policy Support',
          description:
            'Assist with statutory/internal audits and drafting/updating of mandatory policy documents.',
          documents: [
            'Existing policy documents',
            'Audit reports and management responses'
          ],
          timeline: 'Annual/periodic'
        }
      ],
      requiredDocuments: [
        'Board and committee resolutions',
        'Periodic financial statements and management MIS',
        'Loan/investment registers and RBI return working files',
        'Existing compliance certificates and policies'
      ],
      faqs: [
        {
          question: 'Do all NBFCs have the same reporting requirements?',
          answer:
            'No, reporting formats and periodicity differ for deposit-taking, systemically important, and other NBFC categories.'
        },
        {
          question: 'What happens if a return is filed late?',
          answer:
            'Delays can attract penalties, warnings, or closer supervisory scrutiny from RBI depending on severity and frequency.'
        }
      ],
      rating: 4.8
    },
    {
      id: 'nbfc-event-based-compliances',
      name: 'Event-Based & Special Compliances',
      slug: 'nbfc-event-based-compliances',
      description:
        'Support for event-driven NBFC compliances such as shareholding changes, mergers, conversions, and surrender of CoR.',
      icon: 'AlertTriangle',
      features: [
        'Advisory on regulatory implications of ownership and capital changes',
        'Support for mergers, amalgamations, and business transfers involving NBFCs',
        'Assistance with transfer or change of control of NBFC entities',
        'Guidance on conversion between NBFC categories and related approvals',
        'Support for voluntary surrender of CoR and exit processes',
        'Registration and updating of principal place and branch offices',
        'Liaison with RBI, RoC, NCLT, and other authorities as required',
        'Co-ordination with auditors and legal counsel for documentation'
      ],
      benefits: [
        'Smooth handling of complex, high-stakes NBFC transactions',
        'Reduced risk of inadvertent breaches during ownership or structure changes',
        'Clear roadmap for approvals and filings with multiple authorities',
        'Better alignment of transaction documents with regulatory expectations',
        'More predictable timelines and reduced back-and-forth with RBI',
        'Lower chance of transaction delays due to compliance oversights',
        'Comfort for counterparties and investors in regulated deals',
        'Structured exit or conversion paths when changing business strategy'
      ],
      procedure: [
        {
          step: 1,
          title: 'Regulatory Impact Assessment',
          description:
            'Review proposed event and identify required approvals, filings, and timelines.',
          documents: [
            'Transaction term sheet or proposal',
            'Current licences, shareholding, and financial details'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'Documentation & Application Preparation',
          description:
            'Draft resolutions, applications, and disclosures for RBI and other authorities.',
          documents: [
            'Board/shareholder resolutions',
            'Updated KYC of promoters/directors'
          ],
          timeline: '3–8 weeks'
        },
        {
          step: 3,
          title: 'Liaison & Closure Support',
          description:
            'Coordinate with authorities, respond to queries, and support completion of transaction or exit.',
          documents: [
            'Authority correspondence and approvals',
            'Closing documentation and updated registers'
          ],
          timeline: 'Regulator/transaction-dependent'
        }
      ],
      requiredDocuments: [
        'Detailed transaction note and board/shareholder resolutions',
        'Updated KYC of key managerial personnel and new investors',
        'Recent audited/provisional financials',
        'Existing RBI approvals and returns'
      ],
      faqs: [
        {
          question: 'Does every share transfer in an NBFC need RBI approval?',
          answer:
            'Material changes in shareholding or control typically require prior RBI approval; minor transfers may not, but must still comply with norms.'
        },
        {
          question: 'How is NBFC licence surrender handled?',
          answer:
            'Surrender involves settling liabilities, ceasing NBFC activities, filing specific applications, and receiving confirmation of CoR cancellation from RBI.'
        }
      ],
      rating: 4.7
    },
    {
      id: 'nbfc-compliance-review-policy-advisory',
      name: 'Compliance Review, Policy Drafting & RBI Advisory',
      slug: 'nbfc-compliance-review-policy-advisory',
      description:
        'Periodic compliance health checks, policy drafting, and RBI advisory to keep NBFCs inspection-ready.',
      icon: 'ShieldQuestion',
      features: [
        'Detailed review of existing practices against current RBI circulars',
        'Gap analysis covering KYC/AML, Fair Practice, ALM, outsourcing, and IT/cyber norms',
        'Drafting and updating of all mandatory NBFC policies',
        'Assessment of internal controls and reporting lines',
        'Preparation support for RBI inspections and supervisory meetings',
        'Ongoing updates on new circulars and regulatory expectations',
        'Staff training and awareness sessions on NBFC compliance',
        'Support in implementing corrective and preventive actions'
      ],
      benefits: [
        'Higher readiness for RBI inspections and supervisory reviews',
        'Early identification and closure of compliance gaps',
        'Up-to-date policies aligned with latest NBFC regulations',
        'Reduced risk of serious findings or penalties in inspections',
        'Improved compliance culture across business and operations teams',
        'Greater confidence for board and audit committees',
        'Better integration of compliance with day-to-day operations',
        'Sustained alignment with fast-changing NBFC regulatory landscape'
      ],
      procedure: [
        {
          step: 1,
          title: 'Compliance Health Check',
          description:
            'Review policies, returns, and processes vis-à-vis RBI requirements and good practices.',
          documents: [
            'Existing policy documents and manuals',
            'Recent audit and inspection reports'
          ],
          timeline: '3–6 weeks'
        },
        {
          step: 2,
          title: 'Gap Report & Action Plan',
          description:
            'Prepare a gap report with prioritised recommendations and timelines.',
          documents: [
            'Draft gap analysis report',
            'Management inputs on feasibility and timelines'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 3,
          title: 'Policy Drafting & Implementation Support',
          description:
            'Draft or revise policies and assist with approvals, training, and roll-out.',
          documents: [
            'Final policy drafts',
            'Training records and implementation trackers'
          ],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'All existing NBFC policy documents',
        'Compliance and audit files',
        'Records of staff training and internal circulars'
      ],
      faqs: [
        {
          question: 'How frequently should NBFC policies be reviewed?',
          answer:
            'At least annually, and whenever there are significant RBI circulars or business changes impacting risk and compliance.'
        },
        {
          question: 'Will a one-time health check be enough?',
          answer:
            'It helps as a baseline, but periodic reviews ensure continued alignment with evolving regulations and practices.'
        }
      ],
      rating: 4.8
    },
    {
      id: 'nbfc-audit-regulatory-reporting',
      name: 'NBFC Audit & Regulatory Reporting Assistance',
      slug: 'nbfc-audit-regulatory-reporting',
      description:
        'Specialised support for NBFC statutory audits, compliance audits, and all RBI-mandated returns and certifications.',
      icon: 'FileChartColumn',
      features: [
        'Co-ordination of annual statutory audits with NBFC-specific focus',
        'Support for RBI/thematic compliance audits and inspections',
        'Preparation of workings and schedules for auditors and supervisors',
        'Assistance with preparation of statutory auditor certificates (SAC) and other mandated reports',
        'Filing or facilitation of annual and periodic returns with RBI',
        'Tracking and closure support of audit findings and action items',
        'Documentation and evidence collation for key regulatory ratios',
        'Liaison support during inspections and queries'
      ],
      benefits: [
        'Efficient audit cycles with better-prepared documentation',
        'Reduced risk of adverse audit findings or qualifications',
        'Timely completion of RBI reporting and certifications',
        'Greater clarity for management on open issues and remediation',
        'Improved relationship and communication with auditors and regulators',
        'Higher confidence of stakeholders in financial and regulatory reporting',
        'Better consolidation of compliance evidence in one place',
        'Reduced internal disruption during intense audit periods'
      ],
      procedure: [
        {
          step: 1,
          title: 'Audit Planning & Information List',
          description:
            'Understand audit scope and prepare detailed information requirements and responsibilities.',
          documents: [
            'Engagement letters and audit programmes',
            'Prior year audit reports and management letters'
          ],
          timeline: '2–3 weeks before audit start'
        },
        {
          step: 2,
          title: 'Data Preparation & Query Handling',
          description:
            'Compile ledgers, schedules, and working papers and help respond to audit queries.',
          documents: [
            'Accounting records and supporting schedules',
            'KYC records, complaint registers, and regulatory returns'
          ],
          timeline: 'During audit fieldwork'
        },
        {
          step: 3,
          title: 'Reporting & Follow-up',
          description:
            'Assist in finalisation of returns, certifications, and closure of audit observations.',
          documents: [
            'Final audit reports and SAC',
            'Action taken reports and internal trackers'
          ],
          timeline: 'Post-audit completion'
        }
      ],
      requiredDocuments: [
        'Full accounting records, ledgers, and reconciliations',
        'Portfolio and exposure details',
        'List of outstanding complaints and KYC/sample files',
        'Previous audit and inspection reports'
      ],
      faqs: [
        {
          question: 'Does NBFC audit differ from a normal company audit?',
          answer:
            'Yes, NBFC audits involve additional focus on RBI norms, provisioning, capital adequacy, and sector-specific guidelines beyond regular company law audits.'
        },
        {
          question: 'Can audit findings impact RBI supervision?',
          answer:
            'Significant adverse findings or recurring issues can attract greater RBI scrutiny or additional supervisory measures.'
        }
      ],
      rating: 4.8
    }
  ]
},
  //5. Taxation & Accounting Services
  {
    id: 'taxation-accounting',
    name: 'Taxation & Accounting',
    slug: 'taxation-accounting',
    description: 'Complete taxation and accounting services for individuals and businesses with expert guidance.',
    icon: 'Calculator',
    subServices: [
      {
        id: 'gst-registration-accounting',
        name: 'GST Registration & Accounting',
        slug: 'gst-registration-accounting',
        description: 'Complete GST registration and ongoing compliance management with expert support.',
        icon: 'Receipt',
        features: [
          'GST registration process and documentation',
          'Monthly GSTR filing (GSTR-1, GSTR-3B)',
          'Input tax credit optimization strategies',
          'GST audit and advisory services',
          'E-way bill generation and management',
          'GST refund processing and follow-up',
          'Compliance monitoring and alerts',
          'GST litigation support and representation'
        ],
    
        popular: true,
        rating: 4.9,
       
      },
      {
        id: 'income-tax-services',
        name: 'Income Tax Return Filing',
        slug: 'income-tax-services',
        description: 'Professional income tax return filing for individuals and businesses with tax optimization.',
        icon: 'FileText',
        features: [
          'ITR preparation and e-filing services',
          'Tax planning strategies and advisory',
          'Refund claim processing and follow-up',
          'Income tax notice handling and support',
          'Tax computation optimization techniques',
          'Investment advisory for tax saving benefits',
          'TDS/TCS management and reconciliation',
          'Assessment proceedings representation'
        ],
      
        popular: true,
        rating: 4.8,
      
      },
      {
        id: 'tds-return-filing',
        name: 'TDS Return Filing',
        slug: 'tds-return-filing',
        description: 'Accurate TDS return filing and certificate generation services with compliance management.',
        icon: 'FileCheck',
        features: [
          'Monthly/Quarterly TDS return preparation',
          'TDS certificate generation (Form 16/16A)',
          'Form 16/16A preparation and dispatch',
          'TDS reconciliation and correction services',
          'Lower deduction certificate applications',
          'TDS refund claim assistance and follow-up',
          'Compliance monitoring and penalty avoidance',
          'TDS audit support and representation'
        ],
   
        rating: 4.7,
        
      },
      {
        id: 'virtual-accounting',
        name: 'Virtual Accounting Services',
        slug: 'virtual-accounting',
        description: 'Complete bookkeeping and accounting services with digital convenience and expert management.',
        icon: 'BookOpen',
        features: [
          'Daily transaction recording and categorization',
          'Financial statements preparation (P&L, Balance Sheet)',
          'Bank reconciliation and cash flow management',
          'Expense management and tracking systems',
          'Accounts payable and receivable management',
          'Management Information System (MIS) reporting',
          'Budget preparation and variance analysis',
          'Financial advisory and business insights'
        ],
       
        rating: 4.6,
      
      },
      {
        id: 'accounting-software-setup',
        name: 'Accounting Software Setup & Training',
        slug: 'accounting-software-setup',
        description: 'Professional setup and training for accounting software with ongoing support.',
        icon: 'Monitor',
        features: [
          'Software selection and procurement assistance',
          'Complete software setup and configuration',
          'Chart of accounts creation and customization',
          'Data migration from existing systems',
          'User training and documentation',
          'Integration with banking and payment systems',
          'Ongoing technical support and maintenance',
          'Software optimization and customization'
        ],
      
        rating: 4.5,
       
          },
    {
      id: 'professional-tax',
      name: 'Professional Tax Services',
      slug: 'professional-tax',
      description: 'Professional tax registration, filing, and compliance management for all states.',
      icon: 'Calculator',
      features: [
        'Professional tax registration in applicable states',
        'Monthly/Quarterly PT return filing',
        'Employee PT deduction management',
        'PT certificate generation and distribution',
        'Non-resident PT compliance',
        'PT refund processing and follow-up',
        'State-wise compliance management',
        'PT audit and assessment support'
      ],
      benefits: [
        'Ensure compliance with state professional tax regulations',
        'Manage employee PT deductions properly',
        'Avoid penalties and prosecution',
        'Timely filing and certificate generation',
        'Expert guidance on exemptions and relief',
        'Year-round compliance support'
      ],
      procedure: [
        {
          step: 1,
          title: 'PT Registration',
          description: 'Identify applicable states, apply for PT registration, obtain registration certificate',
          documents: ['PT application', 'PAN certificate', 'Business registration'],
          timeline: '5-7 days'
        },
        {
          step: 2,
          title: 'Compliance Setup',
          description: 'Classify employees for PT purposes, set up PT deduction mechanism, prepare employee communication',
          documents: ['Employee list', 'Salary structure', 'PT classification'],
          timeline: '2-3 days'
        },
        {
          step: 3,
          title: 'Monthly/Quarterly Filing',
          description: 'Calculate PT liability, file PT returns, process employee receipts',
          documents: ['PT returns', 'Employee receipts', 'Payment proof'],
          timeline: 'Ongoing monthly/quarterly'
        },
        {
          step: 4,
          title: 'Annual Reconciliation',
          description: 'Verify annual PT paid vs liability, claim refunds if applicable, maintain records for audit',
          documents: ['Annual statement', 'Refund claim', 'Audit trail'],
          timeline: '2-3 days'
        }
      ],
      requiredDocuments: [
        'PAN of company',
        'Employee PT details (salary slips)',
        'State-wise PT liability calculation',
        'Bank statements showing PT payments',
        'Employee attendance records',
        'Salary registers and documents',
        'Previous PT compliance records',
        'Board resolution for PT compliance'
      ],
      faqs: [
        {
          question: 'Which states levy professional tax?',
          answer: 'Maharashtra, Delhi, Karnataka, Tamil Nadu, and a few others; rates vary by state'
        },
        {
          question: 'Is PT applicable on all employees?',
          answer: 'No, exemptions apply based on salary and designation; rates vary by state'
        },
        {
          question: 'Can we claim PT refund?',
          answer: 'Yes, if PT paid exceeds actual liability; refund process takes 30-45 days'
        },
        {
          question: 'What penalty applies for non-filing?',
          answer: 'Penalties range from ₹100 to ₹1,000 depending on state; prosecution risk exists'
        }
      ],
    
      rating: 4.6,
    
     },
   
    ]
  },
//6. Auditing Services
  {
  id: 'auditing-services',
  name: 'Auditing Services',
  slug: 'auditing-services',
  description:
    'Comprehensive statutory and specialized audits including statutory, tax, secretarial, GST, labour law, share capital, and regulator-mandated audits to ensure financial integrity and compliance.',
  icon: 'BadgeCheck',
  subServices: [
    // 7.1 Statutory Audit
    {
      id: 'statutory-audit',
      name: 'Statutory Audit',
      slug: 'statutory-audit',
      description:
        'Legally mandated examination of financial statements to ensure accuracy, transparency, and compliance with Companies Act and Ind AS.',
      icon: 'FileText',
      features: [
        'Independent examination of financial statements and disclosures',
        'Review of internal controls, processes, and statutory registers',
        'Verification of income, expenses, assets, and liabilities',
        'Checking compliance with Companies Act and applicable accounting standards',
        'Identification of control weaknesses, irregularities, or fraud indicators',
        'Discussion of audit findings and recommendations with management',
        'Preparation of statutory audit report for stakeholders and regulators',
        'Co-ordination with management, auditors, and regulators for smooth closure'
      ],
      benefits: [
        'Enhanced credibility of financial statements with stakeholders and lenders',
        'Early detection of control gaps, errors, and potential frauds',
        'Improved internal processes and documentation standards',
        'Better preparedness for regulatory inspections and due diligence',
        'Increased confidence for investors, banks, and business partners',
        'Reduced risk of non-compliance with Companies Act and other laws',
        'Clear management insights through audit recommendations',
        'Strengthened financial governance and accountability'
      ],
      procedure: [
        {
          step: 1,
          title: 'Auditor Appointment & Planning',
          description:
            'Formal appointment of statutory auditor and planning of audit scope, timelines, and key focus areas.',
          documents: [
            'Board/shareholder resolutions appointing auditor',
            'Company profile and prior year audit reports'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Data Collection & Walkthrough',
          description:
            'Obtain financial statements, ledgers, vouchers, and understand key processes and internal controls.',
          documents: [
            'Trial balance, ledgers, and vouchers',
            'Bank statements and reconciliations'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Testing, Verification & Draft Report',
          description:
            'Perform substantive and control testing, verify balances, and prepare draft audit report.',
          documents: [
            'Fixed asset, inventory, and investments registers',
            'Supporting agreements, invoices, and other evidence'
          ],
          timeline: '3–6 weeks (size-dependent)'
        },
        {
          step: 4,
          title: 'Finalization & Filing',
          description:
            'Discuss findings with management, finalize audit report, and support filing with authorities.',
          documents: [
            'Final audited financial statements',
            'Signed audit report and board minutes approving accounts'
          ],
          timeline: '1–2 weeks'
        }
      ],
      requiredDocuments: [
        'Audited/unaudited financial statements (balance sheet, P&L, cash flow)',
        'Books of accounts (ledgers, journals, vouchers)',
        'Board/shareholder minutes and statutory registers',
        'Bank statements and reconciliations',
        'Key agreements, invoices, and supporting documents',
        'Fixed asset, inventory, and investments registers'
      ],
      faqs: [],
      rating: 4.8
    },

    // 7.2 Tax Audit
    {
      id: 'tax-audit',
      name: 'Tax Audit',
      slug: 'tax-audit',
      description:
        'Tax audit under Section 44AB to verify correctness of income, deductions, and tax compliance and to file Forms 3CA/3CB and 3CD.',
      icon: 'IndianRupee',
      features: [
        'Assessment of applicability of tax audit under Income Tax Act',
        'Verification of income, expenses, and compliance with tax provisions',
        'Review of TDS, TCS, and indirect tax compliances as relevant',
        'Preparation of tax audit report in Form 3CA/3CB',
        'Preparation of detailed statement of particulars in Form 3CD',
        'Electronic filing of tax audit report on Income Tax portal',
        'Co-ordination with tax advisors and management for clarifications',
        'Guidance on corrective actions and future tax risk mitigation'
      ],
      benefits: [
        'Reduced risk of tax penalties and scrutiny for non-compliance',
        'Accurate reporting of income and deductions as per law',
        'Better documentation for handling assessments and queries',
        'Clarity on recurring tax risks and improvement areas',
        'Assurance for lenders and investors on tax hygiene',
        'Streamlined record-keeping and reconciliation processes',
        'Improved forecasting of tax liabilities',
        'Higher confidence while facing tax authorities'
      ],
      procedure: [
        {
          step: 1,
          title: 'Tax Audit Applicability & Engagement',
          description:
            'Confirm applicability of tax audit and obtain necessary engagement approvals.',
          documents: [
            'Prior year tax returns and audit reports',
            'Basic financial statements and turnover details'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Data Collection & Review',
          description:
            'Collect financial and tax records and review for completeness and consistency.',
          documents: [
            'Books of account and ledgers',
            'TDS certificates and GST returns'
          ],
          timeline: '1–3 weeks'
        },
        {
          step: 3,
          title: 'Form 3CA/3CB & 3CD Preparation',
          description:
            'Prepare audit report and statement of particulars based on verified data.',
          documents: [
            'Working papers and tax computation',
            'Details of deductions, disallowances, and compliances'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 4,
          title: 'E-Filing & Documentation',
          description:
            'Digitally submit tax audit report and share final copies with management.',
          documents: [
            'Signed and uploaded Forms 3CA/3CB and 3CD',
            'IT portal acknowledgements'
          ],
          timeline: '2–3 days'
        }
      ],
      requiredDocuments: [
        'Financial statements and ledgers',
        'Books of accounts and vouchers',
        'TDS certificates, GST returns, and challans',
        'Previous years’ tax returns and assessments',
        'Relevant agreements and statutory registers'
      ],
      faqs: [],
      rating: 4.7
    },

    // 7.3 Secretarial Audit
    {
      id: 'secretarial-audit',
      name: 'Secretarial Audit',
      slug: 'secretarial-audit',
      description:
        'Comprehensive review of company law, SEBI, and governance compliances conducted by qualified company secretaries.',
      icon: 'ShieldCheck',
      features: [
        'Review of statutory registers and secretarial records',
        'Examination of board, committee, and shareholder meeting compliances',
        'Verification of ROC, SEBI, and stock exchange filings',
        'Assessment of compliance with Companies Act and SEBI (LODR) Regulations',
        'Identification of non-compliances, gaps, and process weaknesses',
        'Preparation of Secretarial Audit Report (Form MR-3)',
        'Recommendations for remedial actions and governance improvements',
        'Follow-up support for implementing corrective measures'
      ],
      benefits: [
        'Reduced risk of director and company-level penalties',
        'Improved governance standards and board processes',
        'Higher confidence for investors, lenders, and regulators',
        'Better preparedness for inspections, due diligence, and listings',
        'Clear visibility on event-based and periodic compliance status',
        'Strengthened internal controls around secretarial functions',
        'Enhanced reputation as a compliant and well-governed entity',
        'Support in aligning practices with evolving regulatory expectations'
      ],
      procedure: [
        {
          step: 1,
          title: 'Secretarial Records Review',
          description:
            'Assess completeness and quality of secretarial records and filings.',
          documents: [
            'Statutory registers and minute books',
            'MCA, SEBI, and exchange filing history'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Compliance Testing & Gap Analysis',
          description:
            'Test compliance against applicable provisions and identify gaps and non-compliances.',
          documents: [
            'Disclosures and declarations by directors/KMP',
            'Event-based filings and approvals'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Reporting & Recommendations',
          description:
            'Prepare MR-3 report with observations and suggested remedial steps.',
          documents: [
            'Draft and final secretarial audit report',
            'Action plan for rectification'
          ],
          timeline: '1–2 weeks'
        }
      ],
      requiredDocuments: [
        'Statutory registers (members, directors, charges, etc.)',
        'Minutes of board, committee, AGM, and EGM meetings',
        'MCA, SEBI, and stock exchange filings',
        'Disclosures and declarations by directors/KMP',
        'Previous secretarial audit reports, if any'
      ],
      faqs: [],
      rating: 4.8
    },

    // 7.4 Reconciliation of Share Capital Audit
    {
      id: 'share-capital-reconciliation-audit',
      name: 'Reconciliation of Share Capital Audit',
      slug: 'share-capital-reconciliation-audit',
      description:
        'Quarterly audit to reconcile issued, listed, and dematerialized share capital as per SEBI and depository requirements.',
      icon: 'Layers',
      features: [
        'Review of share capital register and depository records',
        'Reconciliation of issued, listed, and demat shares',
        'Verification of corporate actions such as bonus, rights, and buybacks',
        'Identification and reporting of mismatches and pending demats',
        'Preparation of reconciliation of share capital audit report',
        'E-filing of audit report with stock exchanges within prescribed timelines',
        'Interaction with RTA and depositories for issue resolution',
        'Ongoing advisory on share capital and demat-related compliances'
      ],
      benefits: [
        'Accurate and reconciled share capital information for investors and exchanges',
        'Reduced risk of investor complaints and corporate action disputes',
        'Compliance with SEBI and stock exchange audit requirements',
        'Timely identification of discrepancies in shareholding records',
        'Improved co-ordination between company, RTA, and depositories',
        'Better readiness for corporate actions and capital market transactions',
        'Enhanced transparency for promoters and public shareholders',
        'Lower likelihood of regulatory observations on capital records'
      ],
      procedure: [
        {
          step: 1,
          title: 'Data Collection from Company, RTA & Depositories',
          description:
            'Obtain share capital register, ISIN details, and depository statements.',
          documents: [
            'Share capital register and ISIN details',
            'CDSL/NSDL and RTA statements'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Reconciliation & Mismatch Identification',
          description:
            'Reconcile issued, listed, and demat shares and identify mismatches or pending cases.',
          documents: [
            'Corporate action documents and approvals',
            'Demat and remat request records'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Reporting & Exchange Filing',
          description:
            'Prepare audit report and file with stock exchanges within the due date.',
          documents: [
            'Final reconciliation report',
            'Exchange filing acknowledgements'
          ],
          timeline: 'Within 30 days of quarter end'
        }
      ],
      requiredDocuments: [
        'Share capital register and ISIN details',
        'Appointment letter/authorization for auditor',
        'Statements from CDSL/NSDL and RTA',
        'Corporate action documents and board/shareholder approvals'
      ],
      faqs: [],
      rating: 4.7
    },
    {
        id: 'legal-compliance-audit',
        name: 'Legal Compliance Audit',
        slug: 'legal-compliance-audit',
        description: 'Comprehensive audit of legal compliance across all business areas with detailed reporting.',
        icon: 'Search',
        features: [
          'Comprehensive compliance gap analysis',
          'Risk assessment and rating methodology',
          'Legal documentation review and verification',
          'Regulatory requirement mapping and analysis',
          'Detailed remediation action plan development',
          'Ongoing monitoring system implementation',
          'Compliance training and awareness programs',
          'Regular compliance health check services'
        ],
        benefits: [
          'Identify and fix compliance gaps before issues arise',
          'Reduce regulatory risks and penalties',
          'Implement proactive monitoring systems',
          'Improve governance and compliance culture',
          'Prepare for external audits and inspections',
          'Strategic compliance roadmap development'
        ],
        procedure: [
          {
            step: 1,
            title: 'Compliance Assessment',
            description: 'Review all legal and regulatory requirements applicable to your business',
            documents: ['Business registration', 'Industry regulations', 'Current compliance documents'],
            timeline: '3-5 days'
          },
          {
            step: 2,
            title: 'Gap Analysis',
            description: 'Identify gaps between current state and compliance requirements',
            documents: ['Assessment report', 'Gap analysis', 'Risk matrix'],
            timeline: '3-5 days'
          },
          {
            step: 3,
            title: 'Remediation Plan',
            description: 'Develop action plan to address identified gaps',
            documents: ['Remediation plan', 'Timeline', 'Cost estimate'],
            timeline: '2-3 days'
          },
          {
            step: 4,
            title: 'Implementation Support',
            description: 'Support implementation and monitoring of compliance measures',
            documents: ['Implementation tracking', 'Monitoring reports', 'Certification'],
            timeline: 'Ongoing'
          }
        ],
        requiredDocuments: [
          'Current business registration and licenses',
          'List of applicable regulations',
          'Existing compliance policies and procedures',
          'Organizational structure and processes',
          'Past audit reports (if any)',
          'Current risk assessments'
        ],
        faqs: [
          {
            question: 'How long does a compliance audit take?',
            answer: 'Usually 15-30 days depending on business size and complexity'
          },
          {
            question: 'Will the audit disrupt operations?',
            answer: 'No, we work with your team to minimize disruption'
          },
          {
            question: 'What happens after gaps are identified?',
            answer: 'We provide a detailed remediation plan with timelines and costs'
          },
          {
            question: 'Is ongoing monitoring included?',
            answer: 'Yes, we set up systems to monitor and maintain compliance'
          }
        ],
        
        rating: 4.7,
      },

    // 7.5 GST Audit
    {
      id: 'gst-audit',
      name: 'GST Audit',
      slug: 'gst-audit',
      description:
        'Detailed review of GST compliances, reconciliations, and reporting for taxpayers crossing prescribed turnover thresholds.',
      icon: 'FileSpreadsheet',
      features: [
        'Reconciliation of GST returns with books of accounts',
        'Verification of output tax, ITC claims, and tax payments',
        'Review of place of supply, classification, and rate application',
        'Examination of e-way bill compliance and documentation',
        'Preparation of GST reconciliation statement (e.g., GSTR-9C) where applicable',
        'Identification of non-compliances and potential exposures',
        'Recommendations for corrections and process improvements',
        'Support in implementing corrective actions in subsequent periods'
      ],
      benefits: [
        'Reduced risk of GST demands, interest, and penalties',
        'Improved accuracy of GST returns and reconciliations',
        'Better control over ITC utilization and eligibility',
        'Stronger documentation trail for departmental audits',
        'Enhanced awareness of GST impact on business transactions',
        'Opportunity to correct historical mistakes proactively',
        'Streamlined internal GST processes and controls',
        'Higher comfort in case of scrutiny, audit, or investigation'
      ],
      procedure: [
        {
          step: 1,
          title: 'Data Compilation',
          description:
            'Compile GST returns, sales/purchase registers, and related records for the audit period.',
          documents: [
            'GSTR-1, GSTR-3B, GSTR-9/9C (if applicable)',
            'Sales, purchase, and ITC registers'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Reconciliation & Verification',
          description:
            'Reconcile returns with books, verify ITC claims, liabilities, and tax payments.',
          documents: [
            'Books of account and trial balance',
            'E-way bill records and tax payment proofs'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Reporting & Recommendations',
          description:
            'Prepare reconciliation statement, highlight findings, and suggest corrective actions.',
          documents: [
            'Draft and final reconciliation statements',
            'List of recommended adjustments'
          ],
          timeline: '1–2 weeks'
        }
      ],
      requiredDocuments: [
        'GSTR-1, GSTR-3B, GSTR-9/9C returns',
        'Books of account and sales/purchase registers',
        'E-way bill data and tax payment challans',
        'ITC ledgers and supporting invoices'
      ],
      faqs: [],
      rating: 4.7
    },

    // 7.6 Labour Law Audit
    {
      id: 'labour-law-audit',
      name: 'Labour Law Audit',
      slug: 'labour-law-audit',
      description:
        'Audit of HR and payroll compliances under key labour laws including EPF, ESIC, minimum wages, gratuity, bonus, and Shops & Establishment laws.',
      icon: 'Users2',
      features: [
        'Review of employee master data, payroll, and attendance records',
        'Verification of statutory deductions and deposits (EPF, ESIC, LWF, etc.)',
        'Examination of wage, overtime, leave, and benefit policies',
        'Checking compliance with minimum wage, gratuity, bonus, and other laws',
        'Review of statutory registers, returns, and licences',
        'Identification of non-compliance risks and financial exposures',
        'Preparation of labour law audit report with action points',
        'Assistance in implementing practical, phase-wise remediation'
      ],
      benefits: [
        'Lower risk of penalties, prosecutions, and labour disputes',
        'More compliant and transparent HR and payroll practices',
        'Better employee trust and workplace relations',
        'Clarity on true cost of compliance and gaps, if any',
        'Improved readiness for inspections by labour authorities',
        'Clear roadmap for regularising historical non-compliances',
        'Standardised documentation and record-keeping',
        'Support for future HR policy improvements and audits'
      ],
      procedure: [
        {
          step: 1,
          title: 'Data & Policy Review',
          description:
            'Collect payroll, attendance, and HR policy documents and understand current processes.',
          documents: [
            'Payroll records and wage/salary registers',
            'Employee registers and attendance records'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Compliance Testing',
          description:
            'Test compliance with key labour laws and verify statutory deductions and filings.',
          documents: [
            'Statutory returns and challans',
            'Leave, bonus, and gratuity records'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 3,
          title: 'Audit Report & Action Plan',
          description:
            'Deliver audit report highlighting gaps and actionable recommendations.',
          documents: [
            'Final labour law audit report',
            'Implementation roadmap'
          ],
          timeline: '1–2 weeks'
        }
      ],
      requiredDocuments: [
        'Payroll records and wage/salary registers',
        'Statutory returns and payment challans (EPF, ESIC, etc.)',
        'Employee master and attendance registers',
        'Leave, overtime, bonus, and gratuity records'
      ],
      faqs: [],
      rating: 4.6
    },
    
    // 7.7 Specialized Audits
    {
      id: 'specialized-regulatory-audits',
      name: 'Specialized Audits (SEBI/FEMA/IRDA/Other)',
      slug: 'specialized-regulatory-audits',
      description:
        'Sectoral and regulator-specific audits under SEBI, FEMA, IRDA, and other frameworks to ensure focused compliance.',
      icon: 'Radar',
      features: [
        'Identification of applicable sectoral regulations and audit scope',
        'Detailed review of regulator-specific filings, returns, and disclosures',
        'Testing of processes for SEBI listing, insider trading, and takeover regulations',
        'FEMA compliance review for foreign exchange and cross-border transactions',
        'IRDA-related audit checks for insurance sector entities',
        'Risk assessment and control testing as per regulator expectations',
        'Preparation of detailed audit reports or certificates for submission',
        'Support in responding to regulator queries and follow-up requirements'
      ],
      benefits: [
        'Targeted assurance on high-risk, regulator-focused areas',
        'Reduced likelihood of penalties, show-cause notices, or enforcement actions',
        'Better understanding of sector-specific compliance expectations',
        'Improved internal processes and documentation for regulated activities',
        'Greater comfort for boards and compliance committees',
        'Enhanced reputation with regulators and market participants',
        'Better preparedness for inspections and surprise checks',
        'Support in building long-term, sustainable compliance culture'
      ],
      procedure: [
        {
          step: 1,
          title: 'Regulatory Framework & Scope Definition',
          description:
            'Identify applicable regulator guidelines and agree the scope and objectives of the specialized audit.',
          documents: [
            'List of applicable regulations and licenses',
            'Past correspondence with regulators'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Compliance Documentation Review',
          description:
            'Gather and review all regulator-specific filings, returns, and SOPs.',
          documents: [
            'Regulator filings, returns, and acknowledgements',
            'Internal guidelines, circulars, and SOPs'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Testing, Reporting & Certifications',
          description:
            'Perform detailed testing, prepare audit report/certificates, and support submissions.',
          documents: [
            'Final specialized audit report or certificate',
            'Supporting working papers and control test results'
          ],
          timeline: 'As per regulator timelines'
        }
      ],
      requiredDocuments: [
        'Regulator-specific compliance filings, returns, and correspondences',
        'Board resolutions and agreements impacting regulated activities',
        'Internal guidelines, circulars, and SOPs',
        'Relevant statutory registers and prior audit reports'
      ],
      faqs: [],
      rating: 4.7
    }
  ]
},
//7. Intellectual Property Rights Services
  {
    id: 'intellectual-property',
    name: 'Intellectual Property Rights',
    slug: 'intellectual-property',
    description: 'Protect your innovations and brand with comprehensive IP services and expert legal support.',
    icon: 'Shield',
    subServices: [
      {
        id: 'trademark-registration',
        name: 'Trademark Registration',
        slug: 'trademark-registration',
        description: 'Complete trademark registration and brand protection services with expert guidance.',
        icon: 'Award',
        features: [
          'Comprehensive trademark search and clearance',
          'Application filing and prosecution support',
          'Opposition handling and legal representation',
          'Registration certificate processing',
          'Renewal management and monitoring',
          'Brand protection strategy development',
          'Trademark portfolio management',
          'International trademark registration support'
        ],

        popular: true,
        rating: 4.8,
       
      },
      {
        id: 'trademark-objection-hearing',
        name: 'Trademark Objection & Hearing',
        slug: 'trademark-objection-hearing',
        description: 'Expert handling of trademark objections and hearing representation with legal expertise.',
        icon: 'Gavel',
        features: [
          'Detailed objection analysis and response preparation',
          'Hearing preparation and legal representation',
          'Legal documentation support and filing',
          'Follow-up proceedings and status monitoring',
          'Trademark status monitoring and updates',
          'Registration facilitation and certificate processing',
          'Appeal handling and higher authority representation',
          'Trademark maintenance and protection advice'
        ],
       
        rating: 4.7,
      },
      {
        id: 'patent-registration',
        name: 'Patent Registration',
        slug: 'patent-registration',
        description: 'Protect your innovations with comprehensive patent registration services and expert guidance.',
        icon: 'Lightbulb',
        features: [
          'Comprehensive patent search and prior art analysis',
          'Patent application drafting and technical writing',
          'Patent prosecution support and examination handling',
          'Opposition and examination response preparation',
          'Patent grant facilitation and processing',
          'Patent portfolio management and strategy',
          'International patent filing (PCT) support',
          'Patent commercialization and licensing advice'
        ],
     
        rating: 4.6,
          },
    {
      id: 'copyright-registration',
      name: 'Copyright Registration',
      slug: 'copyright-registration',
      description: 'Protect your creative works with comprehensive copyright registration and legal protection.',
      icon: 'FileText',
      features: [
        'Copyright application preparation and filing',
        'Work originality assessment and documentation',
        'Registration with Copyright Board',
        'Copyright certificate issuance',
        'Copyright infringement protection services',
        'Multiple work registration support',
        'International copyright protection guidance',
        'Legal representation for disputes'
      ],
      benefits: [
        'Legal protection for creative works',
        'Exclusive rights to reproduce, distribute, and display work',
        'Protection against infringement and unauthorized use',
        'Public record of ownership and creation date',
        'Eligibility for statutory damages in litigation',
        'International protection opportunities'
      ],
      procedure: [
        {
          step: 1,
          title: 'Work Originality Assessment',
          description: 'Review work for originality, document creation process, verify ownership claims',
          documents: ['Original work copy', 'Creation evidence', 'Ownership proof'],
          timeline: '3-5 days'
        },
        {
          step: 2,
          title: 'Application Preparation',
          description: 'Prepare copyright application, compile required documentation, prepare work samples/proofs',
          documents: ['Copyright application form', 'Work samples', 'Supporting documents'],
          timeline: '3-5 days'
        },
        {
          step: 3,
          title: 'Copyright Office Submission',
          description: 'File application with Copyright Board, pay registration fees, receive acknowledgment',
          documents: ['Filing acknowledgment', 'Receipt', 'Reference number'],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Examination & Issuance',
          description: 'Copyright office examines application, issue copyright certificate, publish in gazette',
          documents: ['Copyright certificate', 'Gazette publication', 'Registration proof'],
          timeline: '5-10 days'
        }
      ],
      requiredDocuments: [
        'Identity proof of author/owner',
        'Proof of ownership (if not author)',
        'Copy of the copyrighted work (manuscript, code, design, etc.)',
        'Work creation date proof (emails, drafts, dates)',
        'Assignment deed (if registered owner is different from creator)',
        'Affidavit regarding originality',
        'Application form duly filled',
        'Power of attorney (if filed through agent)',
        'Copyright registration fee payment proof'
      ],
      faqs: [
        {
          question: 'How long does copyright registration take?',
          answer: 'Usually 10-15 days from complete application submission'
        },
        {
          question: 'Is copyright automatic or must it be registered?',
          answer: 'Copyright is automatic on creation; registration provides legal evidence and public record'
        },
        {
          question: 'What works can be copyrighted?',
          answer: 'Literary works, software, music, films, artistic works, compilations, databases, and other original works'
        },
        {
          question: 'How long does copyright protection last?',
          answer: 'Generally for author\'s lifetime plus 60 years after death'
        }
      ],
    
      rating: 4.5,
        },
    {
      id: 'trademark-renewal',
      name: 'Trademark Renewal',
      slug: 'trademark-renewal',
      description: 'Timely renewal of trademark registration to maintain continuous brand protection.',
      icon: 'RefreshCw',
      features: [
        'Trademark renewal eligibility verification',
        'Renewal application preparation and filing',
        'ROT filing and processing',
        'Renewal fee management and payment',
        'Extended protection period (10 years)',
        'Renewal status monitoring and updates',
        'Multiple trademark renewal management',
        'Deadline reminder and compliance tracking'
      ],
      benefits: [
        'Maintain continuous brand protection',
        'Extend trademark validity for 10 more years',
        'Prevent anyone else from using the brand',
        'Strengthen brand value and market position',
        'Legal recourse against counterfeiters',
        'Renewal on or before expiry prevents loss of rights'
      ],
      procedure: [
        {
          step: 1,
          title: 'Renewal Eligibility Check',
          description: 'Verify trademark status and expiry date, check if trademark is in use, confirm no oppositions pending',
          documents: ['Trademark certificate', 'Status report', 'Usage records'],
          timeline: '1-2 days'
        },
        {
          step: 2,
          title: 'Renewal Application Preparation',
          description: 'Prepare Form TM-R (Renewal Form), compile supporting documents, verify usage declaration',
          documents: ['Form TM-R', 'Usage proof', 'Supporting documents'],
          timeline: '2-3 days'
        },
        {
          step: 3,
          title: 'Filing with IP Office',
          description: 'File renewal application, pay renewal fees, receive filing acknowledgment',
          documents: ['Filing receipt', 'Acknowledgment letter', 'Payment proof'],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Processing & Certificate',
          description: 'IP office processes application, issue renewed trademark certificate, updated validity period reflected',
          documents: ['Renewed certificate', 'Updated validity', 'Registration proof'],
          timeline: '3-5 days'
        }
      ],
      requiredDocuments: [
        'Existing trademark certificate',
        'Form TM-R completed',
        'Proof of trademark usage (ads, labels, invoices)',
        'Renewal fee payment proof',
        'Power of attorney (if through agent)',
        'Declaration of use affidavit',
        'Copy of business registration',
        'ID proof of authorized signatory'
      ],
      faqs: [
        {
          question: 'When should I renew my trademark?',
          answer: 'Six months before expiry; can renew up to 6 months after expiry with late fee penalty'
        },
        {
          question: 'What is the renewal validity period?',
          answer: 'Ten years from the date of renewal'
        },
        {
          question: 'Can I renew if trademark is not in use?',
          answer: 'Yes, but if someone challenges, you must prove usage within past 5 years'
        },
        {
          question: 'Can I change the trademark during renewal?',
          answer: 'No, renewal is for the registered mark; changes require new application'
        }
      ],
   
      rating: 4.8,
    },
          {
        id: 'trademark-opposition',
        name: 'Trademark Opposition',
        slug: 'trademark-opposition',
        description: 'Expert representation and filing of trademark opposition against similar marks.',
        icon: 'AlertCircle',
        features: [
          'Comprehensive trademark search and analysis',
          'Opposition ground assessment and strategy',
          'Opposition application preparation and filing',
          'Trademark similarity analysis and comparison',
          'Evidence collection and documentation',
          'Hearing preparation and representation',
          'Legal arguments and submissions',
          'Correspondence with IP office',
          'Appeal filing if required',
          'Complete case documentation and records'
        ],
        benefits: [
          'Protect your trademark from identical/similar marks',
          'Prevent unauthorized use of similar marks',
          'Strengthen your brand protection',
          'Expert legal representation before IP office',
          'Increase success rate of opposition',
          'Comprehensive case strategy and guidance',
          'Post-opposition legal support'
        ],
        procedure: [
          {
            step: 1,
            title: 'Trademark Analysis',
            description: 'Analyze similarity and grounds for opposition against applicant mark',
            documents: ['Trademark comparison', 'Similarity analysis', 'Grounds documentation'],
            timeline: '2-3 days'
          },
          {
            step: 2,
            title: 'Opposition Application Filing',
            description: 'Prepare and file formal opposition before IP office',
            documents: ['Opposition form', 'Grounds statement', 'Evidence attachments'],
            timeline: '2-3 days'
          },
          {
            step: 3,
            title: 'Evidence & Arguments',
            description: 'Submit evidence and legal arguments supporting opposition',
            documents: ['Evidence documents', 'Counsel submission', 'Comparative analysis'],
            timeline: '3-5 days'
          },
          {
            step: 4,
            title: 'Hearing & Decision',
            description: 'Appear in hearing before IP office and respond to applicant',
            documents: ['Hearing notice', 'Hearing response', 'Decision and order'],
            timeline: '2-6 months'
          }
        ],
        requiredDocuments: [
          'Your trademark registration certificate',
          'Applicant trademark application details',
          'Evidence of your trademark usage',
          'Proof of prior registration date',
          'Similarity comparison documents',
          'Supporting documents for opposition grounds',
          'Company registration and authorization',
          'Power of attorney (if through agent)'
        ],
        faqs: [
          {
            question: 'What are grounds for trademark opposition?',
            answer: 'Similarity, bad faith, prior rights, descriptive nature, family trademark, etc.'
          },
          {
            question: 'How long is the opposition process?',
            answer: 'Typically 2-6 months depending on office proceedings and hearing'
          },
          {
            question: 'Can we oppose even after registration?',
            answer: 'Yes, within 5 years of registration through revocation action'
          },
          {
            question: 'What happens if opposition succeeds?',
            answer: 'The opposing application is rejected, and your mark is protected'
          }
        ],
 
        rating: 4.6,
      },



    ]
  },
//8. HR & Payroll Services
  {
    id: 'hr-payroll',
    name: 'HR & Payroll Services',
    slug: 'hr-payroll',
    description: 'Complete HR management and payroll processing solutions with statutory compliance.',
    icon: 'Users2',
    subServices: [
      {
        id: 'payroll-management',
        name: 'Payroll Management Services',
        slug: 'payroll-management',
        description: 'End-to-end payroll processing with statutory compliance and employee management.',
        icon: 'CreditCard',
        features: [
          'Monthly salary processing and calculations',
          'Statutory deductions management (PF, ESI, TDS)',
          'Form 16 generation and employee dispatch',
          'Comprehensive payroll reports and analytics',
          'Employee self-service portal access',
          'Complete compliance management and monitoring',
          'Leave and attendance management integration',
          'Salary structure optimization and advisory'
        ],
     
        popular: true,
        rating: 4.8,
      },
      {
        id: 'esic-pf-compliance',
        name: 'ESIC & PF Registration & Filing',
        slug: 'esic-pf-compliance',
        description: 'Complete ESIC and PF registration with ongoing compliance management and support.',
        icon: 'Shield',
        features: [
          'ESIC and PF registration process completion',
          'Monthly return filing and compliance management',
          'Employee enrollment and exit procedures',
          'Claim processing assistance and support',
          'Inspection handling and compliance representation',
          'Penalty avoidance strategies and planning',
          'Employee welfare compliance monitoring',
          'Statutory audit support and documentation'
        ],
     
        rating: 4.7,
      },
      {
  id: 'epfo-esic-detailed',
  name: 'EPFO & ESIC Compliance Details',
  slug: 'epfo-esic-detailed',
  description: 'Detailed EPFO and ESIC registration, filing, and compliance management for employee welfare.',
  icon: 'Shield',
  features: [
    'EPFO Provident Fund registration and account setup',
    'ESIC Social Security registration and coverage',
    'Employee enrollment and member IDs',
    'Monthly contribution calculations and payments',
    'Quarterly/Annual return filings and submissions',
    'Employee claims processing and support',
    'Inspection handling and compliance',
    'Penalty avoidance and dispute resolution',
    'Compliance monitoring and alerts',
    'Employee benefit statements and reports'
  ],
  benefits: [
    'Employee social security and insurance coverage',
    'Retirement benefits and provident fund',
    'Medical and disability coverage for employees',
    'Compliance with labor laws and regulations',
    'Reduced compliance burden and penalties',
    'Peace of mind with proper employee coverage',
    'Enhanced employee satisfaction and retention'
  ],
  procedure: [
    {
      step: 1,
      title: 'Eligibility Assessment',
      description: 'Assess business eligibility and employee coverage requirements',
      documents: ['Employee details', 'Salary information', 'Business registration'],
      timeline: '1-2 days'
    },
    {
      step: 2,
      title: 'Registration Process',
      description: 'Register with EPFO and ESIC, obtain account and codes',
      documents: ['Registration applications', 'Employee list', 'Nominee details'],
      timeline: '5-7 days'
    },
    {
      step: 3,
      title: 'Enrollment & Member IDs',
      description: 'Enroll employees and generate EPFO and ESIC member IDs',
      documents: ['Member cards', 'Enrollment confirmations', 'Account details'],
      timeline: '3-5 days'
    },
    {
      step: 4,
      title: 'Contribution & Filing',
      description: 'Calculate, pay contributions and file monthly/quarterly returns',
      documents: ['Contribution receipts', 'Filed returns', 'Payment proofs'],
      timeline: 'Ongoing Monthly'
    }
  ],
  requiredDocuments: [
    'Business registration and PAN certificate',
    'Complete employee details and payroll',
    'Bank account details for contributions',
    'Salary structure and payment schedule',
    'Employee addresses and contact information',
    'Nominee details for each employee',
    'Factory/shop registration (if applicable)',
    'Previous EPFO/ESIC documents (if existing)'
  ],
  faqs: [
    {
      question: 'Which businesses need EPFO registration?',
      answer: 'Businesses with 20 or more employees need mandatory EPFO registration'
    },
    {
      question: 'What is the employer contribution percentage?',
      answer: 'EPFO: 12% of basic+DA; ESIC varies from 4.75%-7.75% based on salary'
    },
    {
      question: 'Can employees withdraw their provident fund?',
      answer: 'Yes, at retirement, resignation, or in case of hardship with approval'
    },
    {
      question: 'What happens if contributions are not paid on time?',
      answer: 'Late payment penalties and interest apply; legal action may follow'
    }
  ],
 
  rating: 4.7,
},

    ]
  },
  //9. Business Licensing & Registration Services
{
  id: 'business-licensing',
  name: 'Business Licensing & Registration',
  slug: 'business-licensing',
  description:
    'Various business licenses and registrations for different industries with expert guidance.',
  icon: 'FileCheck2',
  subServices: [
    // 2.1 Startup India Registration
    {
      id: 'startup-india-registration',
      name: 'Startup India Registration',
      slug: 'startup-india-registration',
      description:
        'DPIIT recognition and Startup India registration to unlock tax exemptions, funding schemes, and government benefits.',
      icon: 'Rocket',
      features: [
        'Eligibility assessment for Startup India and DPIIT recognition',
        'DPIIT portal application drafting and filing',
        'Documentation support for innovation and scalability criteria',
        'Tax exemption scheme guidance and application support',
        'Advisory on government tenders and relaxed norms for startups',
        'Assistance in accessing incubation, funding, and mentoring schemes',
        'Support for IPR fast-track and fee benefits',
        'Ongoing guidance on maintaining Startup India eligibility'
      ],
      benefits: [
        'Access to Startup India tax and compliance benefits',
        'Enhanced credibility with investors, customers, and partners',
        'Simplified access to government tenders and grants',
        'Faster IPR processing and reduced costs',
        'Better visibility within the startup ecosystem',
        'Support in scaling with government-backed incentives'
      ],
      procedure: [
        {
          step: 1,
          title: 'Eligibility & Documentation Review',
          description:
            'Assess whether the entity and business model meet Startup India eligibility and gather required information.',
          documents: [
            'Incorporation documents and PAN',
            'Brief note on business model and innovation'
          ],
          timeline: '2–4 days'
        },
        {
          step: 2,
          title: 'Online Application Drafting & Filing',
          description:
            'Prepare and file Startup India/DPIIT application with supporting documents.',
          documents: [
            'Draft application form',
            'Supporting pitch deck/website/product details'
          ],
          timeline: '3–7 days'
        },
        {
          step: 3,
          title: 'Clarifications & Recognition Certificate',
          description:
            'Respond to portal queries and support till recognition certificate is issued.',
          documents: [
            'Clarification responses',
            'Startup India/DPIIT recognition certificate'
          ],
          timeline: 'As per portal processing'
        }
      ],
      requiredDocuments: [
        'Certificate of incorporation and PAN',
        'Details of directors/founders',
        'Pitch deck/website/product description',
        'Brief write-up on innovation and scalability',
        'Registered office address proof'
      ],
      faqs: [
        {
          question: 'Can an LLP or partnership firm register under Startup India?',
          answer:
            'Yes, eligible LLPs and partnership firms can also obtain Startup recognition subject to conditions.'
        },
        {
          question: 'Is there a turnover limit for Startup India recognition?',
          answer:
            'Yes, recognition is available only up to specified turnover and age of the entity as per DPIIT guidelines.'
        }
      ],
      trending: true,
      popular: true,
      rating: 4.9
    },

   

    // 2.3 Shops & Establishment Registration
    {
      id: 'shops-establishment-registration',
      name: 'Shops & Establishment Registration',
      slug: 'shops-establishment-registration',
      description:
        'State-wise Shops & Establishment registration to make your office, store, or branch legally compliant.',
      icon: 'Building2',
      features: [
        'State-specific applicability and requirement assessment',
        'Preparation and filing of registration applications',
        'Support for inspections and clarifications, if required',
        'Guidance on key labour and working hours provisions',
        'Renewal or amendment of registration details',
        'Advisory on displaying statutory notices and registers',
        'Support for multi-state or multi-location registrations',
        'Assistance in maintaining basic compliance records'
      ],
      benefits: [
        'Legal recognition of commercial establishment with authorities',
        'Avoidance of penalties for operating without registration',
        'Better readiness for labour inspections and audits',
        'Compliance support for working hours and holidays',
        'Improved credibility with banks and counterparties',
        'Simplified renewals and amendments over time'
      ],
      procedure: [
        {
          step: 1,
          title: 'State Law & Timeline Check',
          description:
            'Identify applicable Shops & Establishment law and timeline for registration.',
          documents: [
            'Business activity description',
            'Location and employee count'
          ],
          timeline: '2–3 days'
        },
        {
          step: 2,
          title: 'Application & Document Preparation',
          description:
            'Compile required details and prepare online/offline application.',
          documents: [
            'Business registration proof',
            'Premises proof and owner NOC'
          ],
          timeline: '3–7 days'
        },
        {
          step: 3,
          title: 'Filing, Inspection & Certificate',
          description:
            'File application, coordinate inspections if any, and obtain registration certificate.',
          documents: [
            'Filed application and acknowledgements',
            'Registration certificate'
          ],
          timeline: 'Authority-dependent'
        }
      ],
      requiredDocuments: [
        'Business registration (GST, incorporation, etc.)',
        'Owner/director KYC',
        'Premises proof (rent agreement/ownership docs, utility bill)',
        'Employee details and working hours information'
      ],
      faqs: [
        {
          question: 'Is Shops & Establishment registration mandatory for small offices?',
          answer:
            'Yes, most states mandate registration for commercial establishments within a specified time of starting operations.'
        },
        {
          question: 'Do branch offices also need separate registrations?',
          answer:
            'Generally each establishment/branch requires its own registration in the relevant state.'
        }
      ],
      rating: 4.7
    },

    // 2.4 Trade License
    {
      id: 'trade-license',
      name: 'Trade License',
      slug: 'trade-license',
      description:
        'Municipal trade license registration for lawful operation of shops, factories, and commercial establishments.',
      icon: 'Scroll',
      features: [
        'Identification of applicable local trade license requirements',
        'Preparation and filing of license applications with local bodies',
        'Support with inspections and officer visits',
        'Guidance on health, safety, and nuisance-related conditions',
        'Renewal and modification of trade license details',
        'Advisory on license display and record maintenance',
        'Assistance for multiple licenses across different locations',
        'Liaison with municipal authorities for clarifications'
      ],
      benefits: [
        'Legal permission to conduct specified business activities',
        'Reduced risk of fines, closure, or sealing by authorities',
        'Smooth processing of other local registrations and permits',
        'Greater comfort for landlords, banks, and counterparties',
        'Easier handling of periodic inspections and verifications',
        'Better compliance posture for long-term operations'
      ],
      procedure: [
        {
          step: 1,
          title: 'Applicability & Category Assessment',
          description:
            'Identify correct license category based on business activity and local rules.',
          documents: [
            'Business description',
            'Location and premises details'
          ],
          timeline: '2–4 days'
        },
        {
          step: 2,
          title: 'Document Collection & Application Filing',
          description:
            'Collect required documents and submit application to the municipal authority.',
          documents: [
            'Business registration proof',
            'Premises ownership/rent proof',
            'NOC from landlord if needed'
          ],
          timeline: '3–7 days'
        },
        {
          step: 3,
          title: 'Inspection & License Issuance',
          description:
            'Coordinate inspections, respond to queries, and obtain trade license.',
          documents: [
            'Inspection reports (if any)',
            'Final license certificate'
          ],
          timeline: 'Authority-dependent'
        }
      ],
      requiredDocuments: [
        'Constitution documents (GST, incorporation, partnership deed, etc.)',
        'Owner/partner/director KYC',
        'Premises proof and photographs',
        'Site plan or layout where required'
      ],
      faqs: [
        {
          question: 'Is a trade license different from Shops & Establishment registration?',
          answer:
            'Yes, trade license is issued by local bodies for specific trades/activities, while Shops & Establishment registration is a labour-related registration.'
        },
        {
          question: 'How often must trade licenses be renewed?',
          answer:
            'Typically annually or as per local body rules; reminders and timely renewals are important to avoid penalties.'
        }
      ],
      rating: 4.6
    },

    // 2.5 RERA Registration
    {
      id: 'rera-registration',
      name: 'RERA Registration',
      slug: 'rera-registration',
      description:
        'RERA registration and compliance support for real estate developers, promoters, and agents.',
      icon: 'Home',
      features: [
        'Assessment of project/agent applicability under state RERA law',
        'Preparation and filing of RERA registration applications',
        'Compilation of land, title, approval, and sanction documents',
        'Drafting and uploading of mandatory declarations and disclosures',
        'Advisory on escrow, project funds, and timeline compliances',
        'Support for quarterly updates and progress reporting',
        'Guidance on RERA-compliant sale agreements and brochures',
        'Liaison with RERA authorities for clarifications and orders'
      ],
      benefits: [
        'Legal compliance and eligibility to market and sell RERA projects',
        'Increased buyer confidence through transparent disclosures',
        'Reduced risk of penalties, project stoppage, or litigation',
        'Better management of project funds and timelines',
        'Stronger documentation for lenders and investors',
        'Improved brand reputation in a regulated sector'
      ],
      procedure: [
        {
          step: 1,
          title: 'Applicability & Project Assessment',
          description:
            'Review project details and confirm if registration is required under relevant state RERA.',
          documents: [
            'Project summary and location details',
            'Land ownership/title documents'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Document Compilation & Application Filing',
          description:
            'Compile approvals, plans, and disclosures, and file RERA application online.',
          documents: [
            'Approved building plans',
            'Title search reports and NOCs',
            'Promoter details and financials'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Registration Grant & Ongoing Compliance',
          description:
            'Obtain RERA registration and assist with periodic project updates and disclosures.',
          documents: [
            'RERA registration certificate',
            'Quarterly progress reports'
          ],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'Land/title documents and chain of ownership',
        'Approvals and sanctioned plans',
        'Promoter/company KYC and financials',
        'Details of project, area, units, and timelines'
      ],
      faqs: [
        {
          question: 'Is RERA registration mandatory for all real estate projects?',
          answer:
            'Most projects above specified thresholds of area/units must be registered before advertising or selling, with some exemptions.'
        },
        {
          question: 'Do real estate agents also require RERA registration?',
          answer:
            'Yes, many states require agents brokering RERA projects to be registered with the authority.'
        }
      ],
      rating: 4.7
    },

   

    // 2.8 FSSAI Food License Registration (existing, enriched)
    {
      id: 'fssai-registration',
      name: 'FSSAI Food License Registration',
      slug: 'fssai-registration',
      description:
        'Food Safety and Standards Authority license registration for food businesses with complete compliance support.',
      icon: 'Utensils',
      features: [
        'FSSAI license application and processing',
        'Food safety compliance guidance and support',
        'Complete documentation preparation and filing',
        'License renewal services and management',
        'Compliance monitoring and audit support',
        'Amendment and modification services',
        'Food safety training and certification support',
        'Regulatory updates and advisory services'
      ],
      benefits: [
        'Legal authorization to operate a food business',
        'Greater customer trust and brand credibility',
        'Compliance with national food safety standards',
        'Smoother license renewal and modification process',
        'Expert guidance on inspections and audits',
        'Support for expansion into new locations and categories'
      ],
      procedure: [
        {
          step: 1,
          title: 'Business Assessment',
          description:
            'Review business scale, product types, and appropriate FSSAI category.',
          documents: [
            'Business registration',
            'Food products list',
            'Premises details'
          ],
          timeline: '1–2 days'
        },
        {
          step: 2,
          title: 'Documentation Preparation',
          description:
            'Prepare application documents, declarations, and food safety plan.',
          documents: [
            'FSSAI application form',
            'Food safety plan',
            'Layout diagram'
          ],
          timeline: '2–3 days'
        },
        {
          step: 3,
          title: 'Application Filing',
          description:
            'File application on FSSAI portal and submit required documents.',
          documents: [
            'Submitted application',
            'Fee receipts',
            'Application reference number'
          ],
          timeline: '1 day'
        },
        {
          step: 4,
          title: 'License Processing & Issuance',
          description:
            'Coordinate clarifications/inspection and obtain FSSAI license.',
          documents: [
            'FSSAI license certificate',
            'Registration number and validity'
          ],
          timeline: '5–10 days (typically)'
        }
      ],
      requiredDocuments: [
        'Business registration/PAN certificate',
        'Owner/manager ID and address proof',
        'Premises layout and photographs',
        'Food safety management plan',
        'Details of food products and capacity',
        'Utility bill as address proof',
        'Past license (if renewal)'
      ],
      faqs: [
        {
          question: 'Is FSSAI license mandatory for all food businesses?',
          answer:
            'Yes, most food businesses must obtain FSSAI registration or license depending on scale and nature of operations.'
        },
        {
          question: 'What is the typical validity of FSSAI license?',
          answer:
            'Generally 1–5 years; it must be renewed before expiry to avoid penalties or closure.'
        }
      ],
      popular: true,
      rating: 4.8
    },

    // 2.9 Import Export Code (IEC)
    {
      id: 'import-export-code',
      name: 'Import Export Code (IEC)',
      slug: 'import-export-code',
      description:
        'IEC registration for businesses engaged in import or export of goods and services.',
      icon: 'Globe',
      features: [
        'Eligibility and requirement assessment for IEC',
        'Online IEC application preparation and filing',
        'Digital signature and document upload assistance',
        'Support in resolving IEC application discrepancies',
        'Advisory on linking IEC with bank and customs systems',
        'Guidance on updating IEC details when required',
        'Basic advisory on export-import documentation',
        'Support for IEC surrender or modification'
      ],
      benefits: [
        'Mandatory code to legally import or export goods and services',
        'Enables access to export incentives and schemes',
        'Facilitates customs clearance and banking transactions',
        'One-time registration with lifetime validity (subject to updates)',
        'Improves credibility with international partners and banks',
        'Quick and paper-light registration process'
      ],
      procedure: [
        {
          step: 1,
          title: 'Pre-Application Check & Data Gathering',
          description:
            'Collect entity and bank details and confirm IEC requirement.',
          documents: [
            'Business registration and PAN',
            'Bank certificate/cancelled cheque'
          ],
          timeline: '1–2 days'
        },
        {
          step: 2,
          title: 'Online Application & DSC Setup',
          description:
            'Prepare and file IEC application with digital signatures.',
          documents: [
            'Scanned KYC documents',
            'Signed application forms'
          ],
          timeline: '2–3 days'
        },
        {
          step: 3,
          title: 'IEC Certificate Issuance',
          description:
            'Obtain IEC certificate and share with client for use in trade documentation.',
          documents: [
            'IEC certificate',
            'Login credentials/acknowledgement'
          ],
          timeline: '1–3 days'
        }
      ],
      requiredDocuments: [
        'PAN of entity and authorised signatory',
        'Certificate of incorporation/registration',
        'Bank details and supporting document',
        'Address proof of business premises'
      ],
      faqs: [
        {
          question: 'Is IEC required for service exports?',
          answer:
            'Often yes, especially when claiming export incentives or dealing with certain counterparties; assessment is done case by case.'
        },
        {
          question: 'Does IEC need renewal every year?',
          answer:
            'IEC is generally permanent but requires periodic confirmation/updation on the portal as per latest rules.'
        }
      ],
      rating: 4.7
    }
  ]
},
//10. Virtual CFO Services
 {
  id: 'virtual-cfo-services',
  name: 'Virtual CFO (VCFO) Services',
  slug: 'virtual-cfo-services',
  description:
    'Strategic Virtual CFO services for startups and growth-stage companies, combining fundraising support, finance operations, compliance, and board-level reporting.',
  icon: 'Presentation',
  subServices: [
    // 13. Virtual CFO – core offering
    {
      id: 'virtual-cfo-core',
      name: 'Virtual CFO – Strategic Finance Partner',
      slug: 'virtual-cfo-core',
      description:
        'End-to-end Virtual CFO engagement covering strategic finance, fundraising, cash flow management, and compliance oversight.',
      icon: 'Briefcase',
      features: [
        'Investor-ready financial models and pitch support',
        'End-to-end fundraising and due diligence assistance',
        'Design of budgeting, forecasting, and MIS frameworks',
        'Cash flow, burn-rate and runway monitoring',
        'Board and investor reporting with actionable insights',
        'Finance policies, SOPs, and internal controls design',
        'Coordination with auditors, lawyers, and tax advisors',
        'Oversight of finance team and processes'
      ],
      benefits: [
        'CFO-level expertise without full-time hiring cost',
        'Higher investor confidence and smoother fundraises',
        'Better visibility into performance and cash position',
        'Stronger financial discipline and internal controls',
        'Lower risk of surprises in audits and diligence',
        'Founders can focus on product, customers, and growth'
      ],
      procedure: [
        {
          step: 1,
          title: 'Discovery & Scope Definition',
          description:
            'Understand business model, current finance stack, and define VCFO scope across fundraising, operations, and compliance.',
          documents: [
            'Pitch deck and business overview',
            'Recent financial statements or MIS'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Framework & Tooling Setup',
          description:
            'Set up reporting formats, budgets, dashboards, and calendar for recurring deliverables.',
          documents: [
            'Budget and forecast templates',
            'MIS and board pack formats'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Ongoing VCFO Execution',
          description:
            'Run reviews, attend founder/board meetings, support fundraising, and oversee compliance on a recurring basis.',
          documents: [
            'Monthly MIS and cash flow reports',
            'Board and investor decks'
          ],
          timeline: 'Monthly/quarterly (ongoing)'
        }
      ],
      requiredDocuments: [
        'Incorporation documents and cap table',
        'Last 12–24 months financials (if available)',
        'Access to accounting, payroll, and banking systems',
        'Key customer/vendor contracts',
        'Details of existing or planned funding rounds'
      ],
      faqs: [
        {
          question: 'How is Virtual CFO different from an accountant?',
          answer:
            'An accountant focuses on bookkeeping and filings; a Virtual CFO drives strategy, fundraising, budgeting, and board-level financial decisions.'
        },
        {
          question: 'How is VCFO engagement usually structured?',
          answer:
            'Typically as a retainer with fixed monthly hours, defined deliverables (MIS, budgets, decks), and quarterly board/strategy reviews.'
        }
      ],
      rating: 4.8
    },

    // 13.x Day-to-Day Financial Advisory (your existing sub-service)
    {
      id: 'financial-advisory-daily',
      name: 'Day-to-Day Financial Advisory',
      slug: 'financial-advisory-daily',
      description:
        'Daily operational financial guidance and real-time decision support for founders and finance teams.',
      icon: 'MessageCircle',
      features: [
        'Daily operational financial guidance',
        'Quick decision support for business issues',
        'Cash flow optimization recommendations',
        'Invoice and payment optimization',
        'Vendor negotiation support',
        'Expense management optimization',
        'Real-time financial queries resolution',
        'Strategic financial consultation'
      ],
      benefits: [
        'Real-time financial guidance for business decisions',
        'Expert advice on cash flow management',
        'Cost optimization and expense reduction strategies',
        'Quick resolution of financial queries',
        'Strategic financial planning support',
        'Improved profitability and business efficiency'
      ],
      procedure: [
        {
          step: 1,
          title: 'Financial Analysis & Baseline',
          description:
            'Review current financial position and analyze cash flow patterns.',
          documents: [
            'Financial statements',
            'Cash flow analysis',
            'Assessment notes'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Advisory Framework Setup',
          description:
            'Define scope, frequency, SLAs, and communication channels for daily advisory.',
          documents: [
            'Scope document',
            'Communication plan',
            'Engagement timeline'
          ],
          timeline: '2–3 days'
        },
        {
          step: 3,
          title: 'Ongoing Daily Support',
          description:
            'Provide day‑to‑day guidance, weekly reviews, and monthly analysis.',
          documents: [
            'Daily query log',
            'Weekly summary reports',
            'Monthly analysis pack'
          ],
          timeline: 'Continuous'
        },
        {
          step: 4,
          title: 'Optimization & Improvement',
          description:
            'Identify and implement cost-saving measures, optimise payment cycles and working capital.',
          documents: [
            'Recommendation notes',
            'Implementation plan',
            'Before‑after metrics'
          ],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'Last 3–6 months bank statements',
        'Current profit and loss statement',
        'Balance sheet',
        'Accounts receivable/payable ageing',
        'Cash flow forecast (if available)',
        'List of regular expenses',
        'Vendor and customer payment terms',
        'List of pending financial decisions',
        'Short- and medium-term growth plans'
      ],
      faqs: [
        {
          question: 'What is the scope of day-to-day advisory?',
          answer:
            'Daily financial guidance, decision support, cash flow and cost optimization, and resolution of operational finance queries.'
        },
        {
          question: 'How fast are queries responded to?',
          answer:
            'Standard queries are usually answered within 24 hours; urgent matters are prioritised within a few hours as per SLA.'
        },
        {
          question: 'Is this service suitable for small businesses?',
          answer:
            'Yes, it is especially useful for startups and SMEs that do not yet have a full-time controller or finance manager.'
        }
      ],
      rating: 4.7
    },
    {
          id: 'financial-planning-analysis',
          name: 'Financial Planning & Analysis',
          slug: 'financial-planning-analysis',
          description: 'Strategic financial planning, budgeting, and performance analysis with expert insights.',
          icon: 'BarChart3',
          features: [
            'Financial modeling and forecasting development',
            'Budget planning and variance analysis',
            'Cash flow management and optimization',
            'Investment analysis and decision support',
            'KPI development and performance monitoring',
            'Board reporting and executive presentations',
            'Financial risk assessment and management',
            'Strategic financial advisory and consultation'
          ],
          benefits: [
            'Data-driven financial planning and forecasting',
            'Better budget control and variance management',
            'Optimized cash flow and working capital',
            'Strategic financial decision support',
            'KPI-based performance monitoring',
            'Executive-level financial insights'
          ],
          procedure: [
            {
              step: 1,
              title: 'Financial Analysis',
              description: 'Comprehensive review of current financial position and performance',
              documents: ['Financial statements', 'Cash flow analysis', 'Performance metrics'],
              timeline: '3-5 days'
            },
            {
              step: 2,
              title: 'Planning Framework Development',
              description: 'Design financial model and planning framework aligned with business goals',
              documents: ['Financial model', 'Planning framework', 'Scenario analysis'],
              timeline: '5-7 days'
            },
            {
              step: 3,
              title: 'Budget & Forecast Preparation',
              description: 'Prepare detailed budgets and forecasts with variance analysis',
              documents: ['Budget templates', 'Forecasts', 'Variance reports'],
              timeline: '3-5 days'
            },
            {
              step: 4,
              title: 'Ongoing Monitoring & Reporting',
              description: 'Monthly/quarterly reporting, variance analysis, and strategic recommendations',
              documents: ['Monthly reports', 'KPI dashboard', 'Strategic recommendations'],
              timeline: 'Monthly/Quarterly'
            }
          ],
          requiredDocuments: [
            'Last 2-3 years financial statements',
            'Current budget and forecasts',
            'Business plan and strategic objectives',
            'List of KPIs being tracked',
            'Organizational structure',
            'Major capital plans and investments',
            'Historical performance data'
          ],
          faqs: [
            {
              question: 'What is financial planning and analysis?',
              answer: 'FP&A is the process of planning, budgeting, forecasting, and analyzing financial performance'
            },
            {
              question: 'How often should we review finances?',
              answer: 'Monthly minimum for active monitoring; quarterly formal reviews recommended'
            },
            {
              question: 'Can FP&A help improve profitability?',
              answer: 'Yes, by identifying cost reduction opportunities and optimizing resource allocation'
            },
            {
              question: 'Is FP&A suitable for small businesses?',
              answer: 'Absolutely, especially when scaling or preparing for fundraising'
            }
          ],
      
          trending: true,
          rating: 4.9,
          
        },
        
        {
          id: 'monthly-profitability-report',
          name: 'Monthly Profitability Report & Balance Sheet',
          slug: 'monthly-profitability-report',
          description: 'Comprehensive monthly profitability reports and balance sheets with financial analysis.',
          icon: 'BarChart2',
          features: [
            'Monthly profit and loss (P&L) statement preparation',
            'Balance sheet compilation and analysis',
            'Cash flow statement and analysis',
            'Key financial ratios and metrics calculation',
            'Variance analysis against budget/targets',
            'Expense categorization and tracking',
            'Revenue analysis and trends',
            'Executive summary and insights',
            'Customizable reporting formats',
            'Timely delivery and accessibility'
          ],
          benefits: [
            'Real-time visibility into business profitability',
            'Quick identification of profit/loss areas',
            'Data-driven decision making capability',
            'Budget variance tracking and control',
            'Early warning for financial issues',
            'Professional financial documentation',
            'Investor and lender reporting readiness'
          ],
          procedure: [
            {
              step: 1,
              title: 'Data Collection',
              description: 'Collect all financial transactions and documents for the month',
              documents: ['Invoices', 'Receipts', 'Bank statements', 'Expense bills'],
              timeline: '1-2 days'
            },
            {
              step: 2,
              title: 'Transaction Posting',
              description: 'Post all transactions to respective accounts and ledgers',
              documents: ['General ledger', 'Trial balance', 'Account statements'],
              timeline: '2-3 days'
            },
            {
              step: 3,
              title: 'Report Compilation',
              description: 'Prepare P&L, balance sheet, and cash flow statements',
              documents: ['P&L statement', 'Balance sheet', 'Cash flow statement'],
              timeline: '1-2 days'
            },
            {
              step: 4,
              title: 'Analysis & Delivery',
              description: 'Analyze results and deliver with insights and recommendations',
              documents: ['Financial analysis', 'Ratio analysis', 'Executive summary'],
              timeline: '1 day'
            }
          ],
          requiredDocuments: [
            'All invoices and receipts for the month',
            'Bank statements and reconciliation',
            'Payroll records and salary information',
            'Expense bills and payment proofs',
            'Inventory records and valuations',
            'Loan statements and interest details',
            'Capital transactions and adjustments',
            'Previous month closing balances'
          ],
          faqs: [
            {
              question: 'When should monthly reports be ready?',
              answer: 'Ideally within 3-5 days of month-end for timely decision-making'
            },
            {
              question: 'What if there are discrepancies?',
              answer: 'We identify and reconcile all discrepancies before finalizing reports'
            },
            {
              question: 'Can reports be customized?',
              answer: 'Yes, reports can be customized based on specific business requirements'
            },
            {
              question: 'How are reports delivered?',
              answer: 'Reports are delivered via email in Excel/PDF format with secure access'
            }
          ],
  
          rating: 4.8,
         
        },
  ]
},
//11. Investor & Fundraising Services
  {
  id: 'investor-fundraising',
  name: 'Investor & Fundraising Services',
  slug: 'investor-fundraising',
  description: 'Complete fundraising support, investor relations, and capital raising solutions for business growth.',
  icon: 'DollarSign',
  subServices: [
    {
      id: 'business-plan-development',
      name: 'Business Plan Development',
      slug: 'business-plan-development',
      description: 'Professional business plan creation for funding and strategic growth with comprehensive market analysis.',
      icon: 'FileText',
      features: [
        'Comprehensive market research and competitive analysis',
        'Detailed financial projections and revenue modeling',
        'Investor-ready presentation and pitch deck',
        'Go-to-market strategy development',
        'Risk assessment and mitigation planning',
        'Funding strategy development and recommendations',
        'Business model validation and optimization',
        'Executive summary and detailed documentation'
      ],
      benefits: [
        'Comprehensive roadmap for business success',
        'Professional document for investor presentations',
        'Market-validated business strategy',
        'Clear financial projections and targets',
        'Risk mitigation planning',
        'Go-to-market strategy guidance'
      ],
      procedure: [
        {
          step: 1,
          title: 'Business Concept Review',
          description: 'Understand your business idea, market, and goals',
          documents: ['Business concept', 'Initial research', 'Market overview'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Market & Competitive Analysis',
          description: 'Research market size, trends, and competitive landscape',
          documents: ['Market analysis', 'Competitor analysis', 'Industry report'],
          timeline: '5-7 days'
        },
        {
          step: 3,
          title: 'Financial Modeling',
          description: 'Develop detailed financial projections and revenue model',
          documents: ['Financial model', 'Profit projections', 'Cash flow forecast'],
          timeline: '3-5 days'
        },
        {
          step: 4,
          title: 'Plan Finalization',
          description: 'Compile comprehensive business plan with all documentation',
          documents: ['Complete business plan', 'Executive summary', 'All supporting docs'],
          timeline: '2-3 days'
        }
      ],
      requiredDocuments: [
        'Business concept and description',
        'Founder background and experience',
        'Market research data',
        'Financial assumptions and projections',
        'Marketing and sales strategy',
        'Organizational structure',
        'Risk assessment document',
        'Funding requirements breakdown'
      ],
      faqs: [
        {
          question: 'How detailed should the business plan be?',
          answer: 'Typically 20-30 pages for investors; we provide comprehensive but concise documentation'
        },
        {
          question: 'Can we update the plan later?',
          answer: 'Yes, business plans should be reviewed and updated annually or when major changes occur'
        },
        {
          question: 'Do you help with investor presentations?',
          answer: 'Yes, we prepare investor-ready pitch decks and presentation materials'
        },
        {
          question: 'What is included in financial projections?',
          answer: 'Income statement, cash flow, balance sheet projections for 3-5 years'
        }
      ],
   
      popular: true,
      rating: 4.8,
    },
    {
      id: 'pitch-deck-creation',
      name: 'Investor Pitch Deck Creation',
      slug: 'pitch-deck-creation',
      description: 'Compelling pitch decks that attract investors and secure funding with professional design.',
      icon: 'Presentation',
      features: [
        'Professional design and compelling content creation',
        'Compelling storytelling and narrative development',
        'Detailed financial projections and modeling',
        'Market opportunity analysis and sizing',
        'Competitive landscape analysis and positioning',
        'Funding requirements and use of funds breakdown',
        'Team presentation and capability showcase',
        'Multiple format delivery (PPT, PDF, interactive)'
      ],
      benefits: [
        'Professional presentation that impresses investors',
        'Clear articulation of business opportunity',
        'Compelling storytelling that engages audiences',
        'Visual design that stands out from competitors',
        'Data-backed projections and financials',
        'Multiple format options for different audiences'
      ],
      procedure: [
        {
          step: 1,
          title: 'Strategy & Content Planning',
          description: 'Define key messages, narrative flow, and investor interests',
          documents: ['Content outline', 'Key messages', 'Story arc'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Slide Development',
          description: 'Create slides with compelling visuals and data',
          documents: ['Slide deck', 'Design mockups', 'Content drafts'],
          timeline: '3-5 days'
        },
        {
          step: 3,
          title: 'Design & Refinement',
          description: 'Professional design, branding, and visual optimization',
          documents: ['Final deck', 'Design assets', 'Brand guidelines'],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Delivery & Training',
          description: 'Multiple format delivery and presentation training',
          documents: ['PPT version', 'PDF version', 'Video presentation guide'],
          timeline: '2-3 days'
        }
      ],
      requiredDocuments: [
        'Business overview and value proposition',
        'Financial projections and key metrics',
        'Market size and opportunity data',
        'Competitive analysis',
        'Go-to-market strategy',
        'Team credentials and photos',
        'Product/service demonstrations',
        'Logo and brand assets'
      ],
      faqs: [
        {
          question: 'How many slides should the pitch deck have?',
          answer: 'Typically 12-15 slides; we optimize for investor attention spans'
        },
        {
          question: 'Can we customize the deck for different investors?',
          answer: 'Yes, we create templates allowing easy customization for different investor types'
        },
        {
          question: 'Do you help with pitch practice?',
          answer: 'Yes, we provide presentation coaching and feedback'
        },
        {
          question: 'What formats do you deliver?',
          answer: 'PowerPoint, PDF, Google Slides, and animated video presentations'
        }
      ],
    
      rating: 4.7,
    },
   
    
    {
      id: 'fundraising-support',
      name: 'Fundraising & Investment Support',
      slug: 'fundraising-support',
      description: 'End-to-end support for raising capital and managing investor relations with expert guidance.',
      icon: 'TrendingUp',
      features: [
        'Comprehensive fundraising strategy development',
        'Investor identification and targeted outreach',
        'Due diligence preparation and documentation',
        'Valuation support and financial modeling',
        'Term sheet negotiation support and guidance',
        'Legal documentation coordination and review',
        'Investor presentation and pitch preparation',
        'Post-funding investor relations management'
      ],
      benefits: [
        'Develop winning fundraising strategy',
        'Access to investor networks and contacts',
        'Professional financial preparation and documentation',
        'Expert valuation and negotiation support',
        'Increased chances of successful fundraising',
        'Long-term investor relationship management'
      ],
      procedure: [
        {
          step: 1,
          title: 'Strategy Development',
          description: 'Define fundraising goals, investor targets, and strategy',
          documents: ['Fundraising plan', 'Investor criteria', 'Target list'],
          timeline: '5-7 days'
        },
        {
          step: 2,
          title: 'Financial Preparation',
          description: 'Prepare financial models, projections, and valuation support',
          documents: ['Financial model', 'Valuation report', 'Projections'],
          timeline: '7-10 days'
        },
        {
          step: 3,
          title: 'Investor Engagement',
          description: 'Conduct investor outreach, meetings, and pitch presentations',
          documents: ['Pitch deck', 'Investor presentations', 'Meeting notes'],
          timeline: '2-6 months'
        },
        {
          step: 4,
          title: 'Closing & Relationship Management',
          description: 'Facilitate term sheet negotiation, due diligence, and post-funding relations',
          documents: ['Term sheet', 'Due diligence docs', 'Investor agreements'],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'Business plan and executive summary',
        'Financial projections (3-5 years)',
        'Current financial statements',
        'Cap table and share structure',
        'Products/services demonstration',
        'Market analysis and competitive positioning',
        'Team credentials and backgrounds',
        'Legal documents (articles, bylaws, etc.)'
      ],
      faqs: [
        {
          question: 'How much capital can we raise?',
          answer: 'Depends on business stage, market, and investor appetite; ranges from seed to Series rounds'
        },
        {
          question: 'What is a realistic fundraising timeline?',
          answer: 'Typically 3-6 months from strategy to closing, depending on complexity'
        },
        {
          question: 'How do you determine company valuation?',
          answer: 'Using multiple methods: comparables, DCF, venture capital method based on stage'
        },
        {
          question: 'What happens after we raise funds?',
          answer: 'We provide ongoing investor relations support and performance reporting'
        }
      ],
    
      rating: 4.8,
    }
  ]
},
//12. US Incorporation, Compliance & Advisory Services
{
  id: 'us-incorporation-compliance',
  name: 'US Incorporation, Compliance & Advisory Services',
  slug: 'us-incorporation-compliance',
  description:
    'End-to-end US company formation, compliance, and cross-border tax advisory for Indian founders and global businesses.',
  icon: 'Globe2',
  subServices: [
    // 12.1 Company Formation
    {
      id: 'us-company-formation',
      name: 'Company Formation (C-Corp, S-Corp, LLC, LLP, Partnership – All US States)',
      slug: 'us-company-formation',
      description:
        'Incorporation experts enabling swift US entity setup across all states with complete support on entity type, state selection, EIN, and banking.',
      icon: 'Building2',
      features: [
        'Consultation to determine optimal entity type and state of registration',
        'Guidance on access to US market, venture capital, and global customers',
        'Reservation of company name and appointment of registered agent',
        'Preparation and filing of Articles of Incorporation/Organization with state authorities',
        'Application for EIN from the IRS',
        'Drafting of bylaws or operating/partnership agreements as applicable',
        'Assistance with initial meetings, board documentation, and compliance setup',
        'High-level guidance on US banking and financial account setup'
      ],
      procedure: [
        {
          step: 1,
          title: 'Entity & State Consultation',
          description:
            'Detailed consultation to choose the right US entity type (C-Corp, S-Corp, LLC, LLP, Partnership) and state (Delaware, Wyoming, California, etc.) based on business goals, investors, and tax impact.',
          documents: [
            'Business overview and expansion plan',
            'Details of founders/shareholders',
            'Preferred state or investor requirements, if any'
          ],
          timeline: '1–2 days'
        },
        {
          step: 2,
          title: 'Name Reservation & Registered Agent Setup',
          description:
            'Reservation of company name with the chosen state and appointment of a registered agent to receive legal and regulatory notices.',
          documents: [
            'Proposed company names',
            'Passport and address proofs of incorporators/members',
            'Registered agent authorization details'
          ],
          timeline: '2–3 days'
        },
        {
          step: 3,
          title: 'State Filings & Incorporation',
          description:
            'Preparation and filing of Articles of Incorporation/Organization with the state authority along with applicable government fees.',
          documents: [
            'Finalized entity structure and shareholding pattern',
            'Articles/Certificate of Incorporation or Organization drafts',
            'Digital signatures or powers of attorney, if required'
          ],
          timeline: '3–5 days (state-dependent)'
        },
        {
          step: 4,
          title: 'EIN & Post-Incorporation Documentation',
          description:
            'Application for EIN with the IRS and drafting of bylaws, operating agreements, and related organizational documents.',
          documents: [
            'Approved state incorporation documents',
            'Founder details for EIN application',
            'Capital structure and governance preferences'
          ],
          timeline: '3–7 days'
        },
        {
          step: 5,
          title: 'Compliance & Banking Guidance',
          description:
            'Assistance with initial meetings, board/minute documentation, and guidance on US banking and compliance setup.',
          documents: [
            'Board and shareholder resolutions',
            'KYC documents required by banks',
            'Initial compliance checklist'
          ],
          timeline: '3–10 days (bank-dependent)'
        }
      ],
      benefits: [
          'Access to the US market, global customers, and venture capital ecosystem',
          'Enhanced credibility with US investors, partners, and counterparties',
          'Flexible choice of entity and state to optimize taxes and governance',
          'Limited liability protection for founders and shareholders/members',
          'Clear separation between personal and business assets and obligations',
          'Stronger IP, contract, and enforcement framework under US law',
          'Improved chances of acceptance by US payment gateways and platforms',
          'Foundation for future US fundraising, ESOPs, and M&A transactions'
      ],

      requiredDocuments: [
        'Passport copies and proof of address for all incorporators/members',
        'Choice of entity type and preferred state of incorporation',
        'US business address for registered office (or registered agent address)',
        'Digital signatures or powers of attorney, if needed for filings'
      ],
      faqs: [
        {
          question: 'Which US state is best for incorporating my startup?',
          answer:
            'States like Delaware and Wyoming are popular for startups due to investor familiarity, flexible corporate laws, and efficient incorporation processes, but the final choice depends on your business model and compliance needs.'
        },
        {
          question: 'Can Indian residents own 100% of a US company?',
          answer:
            'Yes, Indian residents can generally own 100% of a US C-Corp or LLC, subject to Indian foreign exchange regulations and specific US regulatory requirements in restricted sectors.'
        },
        {
          question: 'Do I need to visit the US physically to register a company?',
          answer:
            'In most cases, US companies can be formed remotely using digital documentation and registered agents, although some banks may ask for in‑person verification for account opening.'
        },
        {
          question: 'How long does it take to incorporate a company in the US?',
          answer:
            'Incorporation can often be completed within 1–2 weeks including state approval and EIN issuance, depending on the state and accuracy of submitted documentation.'
        }
      ],
      rating: 4.9
    },

    // 12.2 Agreements
    {
      id: 'us-agreement-drafting',
      name: 'Operating, Co-Founder & Other Day-to-Day Agreements',
      slug: 'us-agreement-drafting',
      description:
        'Comprehensive agreement drafting under US laws, covering operating agreements, co-founder and shareholder arrangements, and routine business contracts.',
      icon: 'FileSignature',
      features: [
        'Operating Agreements for LLCs (member- or manager-managed)',
        'Co-Founder, Shareholder, and Bylaws drafting',
        'Service, vendor, and customer contracts aligned with US regulations',
        'Non-Disclosure Agreements (NDAs) and IP Assignment Agreements',
        'Employee and contractor agreements with compliant clauses',
        'Risk mitigation and governance-focused drafting',
        'Commercially aligned and investor-friendly documentation',
        'Multiple revision rounds based on founder and stakeholder feedback'
      ],
      procedure: [
        {
          step: 1,
          title: 'Business & Structure Assessment',
          description:
            'Understand the entity structure, cap table, commercial relationships, and risk areas to be covered in the agreements.',
          documents: [
            'Entity formation documents',
            'Cap table or ownership summary',
            'Existing informal understandings between founders'
          ],
          timeline: '1–2 days'
        },
        {
          step: 2,
          title: 'First Draft Preparation',
          description:
            'Prepare first drafts of operating/co-founder/shareholder and other commercial agreements reflecting US legal requirements and commercial intent.',
          documents: [
            'Key commercial terms and founder expectations',
            'Investor or accelerator requirements, if applicable'
          ],
          timeline: '3–7 days'
        },
        {
          step: 3,
          title: 'Review & Negotiation Support',
          description:
            'Iterative revisions based on founder, investor, and counterparty feedback with negotiation support where required.',
          documents: [
            'Consolidated comments from all stakeholders',
            'Proposed changes from investors or counterparties'
          ],
          timeline: '3–10 days (depending on negotiations)'
        },
        {
          step: 4,
          title: 'Finalization & Execution Pack',
          description:
            'Finalize the agreements and provide execution-ready versions, including signing instructions and key action points.',
          documents: [
            'Execution copies of all finalized agreements',
            'List of post-signing obligations and timelines'
          ],
          timeline: '2–3 days'
        }
      ],
      benefits: [
        'Clarity on roles, rights, and responsibilities among founders and stakeholders',
        'Reduced risk of disputes and misunderstandings over equity and control',
        'Investor‑friendly governance and documentation to support fundraising',
        'Better protection of intellectual property and confidential information',
        'Legally enforceable contracts aligned with US federal and state laws',
        'Improved operational discipline through well‑defined policies and processes',
        'Stronger negotiating position with vendors, customers, and employees',
        'Professional documentation that reflects global best practices'
      ],
      requiredDocuments: [
        'US entity formation documents (Articles, Operating Agreement/Bylaws)',
        'List of officers, members, and shareholders with roles',
        'Commercial terms and business goals for each agreement',
        'Any prior term sheets, offer letters, or existing contracts'
      ],
      faqs: [
        {
          question: 'Do I really need a formal Operating Agreement for my US LLC?',
          answer:
            'Yes, a robust Operating Agreement is critical to define ownership, management rights, profit sharing, exit rights, and dispute resolution to avoid founder conflicts.'
        },
        {
          question: 'Can the same agreement work for both US and India operations?',
          answer:
            'Laws differ by jurisdiction, so separate agreements or tailored cross‑border structures are usually advisable to ensure enforceability in each country.'
        },
        {
          question: 'How often should founder and shareholder agreements be updated?',
          answer:
            'They should be revisited whenever there are new funding rounds, major changes in ownership, or material shifts in business strategy or governance.'
        }
      ],
      rating: 4.8
    },

    // 12.3 Compliance
    {
      id: 'us-compliance-advisory',
      name: 'Event-Based & Ongoing Compliance Advisory',
      slug: 'us-compliance-advisory',
      description:
        'Ongoing advisory to keep your US entity compliant with state filings, BOI reporting, franchise taxes, and corporate record-keeping.',
      icon: 'ClipboardCheck',
      features: [
        'Annual report and franchise tax filing support across US states',
        'Beneficial Ownership Information (BOI) filings under FinCEN',
        'Documentation for appointment or resignation of directors/officers/members',
        'Support for share issuance, transfers, and capitalization changes',
        'Maintenance of minutes, resolutions, and statutory registers',
        'Change of registered office or registered agent filings',
        'Dissolution, withdrawal, and multi‑state exit assistance',
        'Support in responding to compliance notices and penalties'
      ],
      procedure: [
        {
          step: 1,
          title: 'Compliance Health Check',
          description:
            'Review existing US entity filings, notices, and corporate records to identify compliance gaps and due filings.',
          documents: [
            'Articles of Incorporation/Organization and amendments',
            'Past annual reports and franchise tax filings',
            'Existing corporate records and registers'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Compliance Calendar Setup',
          description:
            'Create a state and federal compliance calendar covering annual filings, BOI reporting, and key deadlines.',
          documents: [
            'List of states where the entity is registered or operating',
            'Details of officers, directors, and key shareholders'
          ],
          timeline: '2–3 days'
        },
        {
          step: 3,
          title: 'Event-Based Filing Support',
          description:
            'Prepare and file change documents for equity events, management changes, and office/agent changes as and when they occur.',
          documents: [
            'Board and shareholder resolutions authorizing changes',
            'Updated member/shareholder registers',
            'New address or agent details, where applicable'
          ],
          timeline: '3–10 days (event-dependent)'
        },
        {
          step: 4,
          title: 'Ongoing Monitoring & Notice Handling',
          description:
            'Monitor compliance status, track filings, and support in responding to state or federal notices and penalty communications.',
          documents: [
            'Copies of notices or penalty communications',
            'Proof of previous filings and payment receipts'
          ],
          timeline: 'Ongoing'
        }
      ],
      benefits: [
        'Reduced risk of penalties, late fees, and adverse compliance actions',
        'Preservation of good standing status across US states of registration',
        'Improved readiness for investor due diligence and audits',
        'Clear visibility on upcoming deadlines and compliance obligations',
        'Proper documentation trail through minutes, resolutions, and registers',
        'Smooth handling of equity, management, and structural changes over time',
        'Lower internal effort and confusion around multi‑state requirements',
        'Greater peace of mind with expert monitoring and advisory support'
      ],
      requiredDocuments: [
        'Articles of Incorporation/Organization and any amendments',
        'Meeting minutes and resolutions authorizing past changes',
        'Updated member/shareholder registers and cap table',
        'Address proofs and authorized signatory details'
      ],
      faqs: [
        {
          question: 'What happens if I miss a US annual report or franchise tax filing?',
          answer:
            'Missing filings can lead to penalties, interest, loss of good standing, and in some cases administrative dissolution, so issues should be rectified promptly.'
        },
        {
          question: 'Is BOI filing mandatory for my US company?',
          answer:
            'Most small and closely held US entities fall within BOI reporting under FinCEN rules, subject to specific exemptions which must be assessed case by case.'
        },
        {
          question: 'Do I need separate compliance for each state where I operate?',
          answer:
            'Yes, foreign qualification and ongoing filings are typically required in every state where the company has nexus or significant operations.'
        }
      ],
      rating: 4.8
    },

    // 12.4 Tax & Cross-Border
    {
      id: 'us-tax-crossborder',
      name: 'Tax Advisory, IRS Filings & Cross-Border Compliance',
      slug: 'us-tax-crossborder',
      description:
        'Tailored US federal and state tax registrations, filings, and cross-border structuring advisory in collaboration with US CPAs.',
      icon: 'Scale',
      features: [
        'US federal and state tax registration support (EIN, ITIN, state tax IDs)',
        'Tax classification guidance including Form SS‑4 and S‑Election (Form 2553)',
        'Coordination for annual tax returns (Forms 1120, 1120S, 1065, 1040‑NR, etc.)',
        'Advisory on double taxation avoidance and tax treaty benefits for NRIs',
        'Guidance on tax withholding for cross‑border service and royalty payments',
        'Transfer pricing and inter‑company transaction structuring inputs',
        'FATCA and international information reporting compliance',
        'Seamless collaboration with US CPAs for representations before tax authorities'
      ],
      procedure: [
        {
          step: 1,
          title: 'Tax Position & Residency Analysis',
          description:
            'Assess business model, ownership, and cross‑border flows to determine US tax residency, filing obligations, and entity classification.',
          documents: [
            'Shareholder and management details',
            'Business activity overview and jurisdiction footprint',
            'Existing tax registrations and filings, if any'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Registrations & Elections',
          description:
            'Obtain necessary tax IDs and file relevant elections such as S‑Election or classification elections where beneficial.',
          documents: [
            'Approved incorporation documents',
            'KYC of responsible officers',
            'Ownership and capital structure details'
          ],
          timeline: '5–10 days (IRS-dependent)'
        },
        {
          step: 3,
          title: 'Return Preparation & Filing Support',
          description:
            'Coordinate with US CPAs for preparation and filing of federal and state tax returns and related forms.',
          documents: [
            'Transactional data and financial statements',
            'Invoices, contracts, and bank statements',
            'Prior year tax returns, if available'
          ],
          timeline: 'As per filing season and complexity'
        },
        {
          step: 4,
          title: 'Cross-Border & Withholding Advisory',
          description:
            'Advise on treaty benefits, withholding obligations, transfer pricing, and profit repatriation between India and the US.',
          documents: [
            'Inter‑company agreements and pricing policies',
            'Details of cross‑border payments and recipients'
          ],
          timeline: 'Ongoing'
        }
      ],
      benefits: [
        'Optimized overall tax outgo through thoughtful entity and tax structuring',
        'Reduced risk of double taxation between India and the US',
        'Improved cash flow planning with clear visibility on tax liabilities',
        'Lower chances of IRS or state tax notices due to compliant filings',
        'Better pricing and documentation for cross‑border inter‑company transactions',
        'Increased confidence while repatriating profits and making cross‑border payments',
        'Professional representation support through coordinated US CPA networks',
        'Future‑ready structure that can scale with global expansion plans'
      ],

      requiredDocuments: [
        'Federal and state registration certificates',
        'Shareholder/member details including tax IDs or W‑8BEN forms',
        'Prior year US or home‑country tax returns, if any',
        'Transactional records, bank statements, and key invoices'
      ],
      faqs: [
        {
          question: 'Do all US companies need to file a tax return even with no income?',
          answer:
            'Most US entities are required to file returns or informational forms even with minimal or no income to avoid penalties and preserve compliance history.'
        },
        {
          question: 'How does the India–US tax treaty help avoid double taxation?',
          answer:
            'The treaty allows credit of taxes paid in one country against liability in the other and defines taxing rights for different income types, reducing double taxation risk.'
        },
        {
          question: 'Will my Indian personal tax be affected by owning a US company?',
          answer:
            'Ownership of a US entity can impact your Indian tax and disclosure obligations, so combined India–US tax analysis is important before structuring.'
        }
      ],
      rating: 4.9
    }
  ]
},
//13. Foreign Investment, FCRA & Regulatory Compliance
{
  id: 'foreign-investment-fcra',
  name: 'Foreign Investment, FCRA & Regulatory Compliance',
  slug: 'foreign-investment-fcra',
  description:
    'Comprehensive advisory on FDI, FEMA, ECB, FCRA, ODI, LRS, and liaison/branch office approvals for smooth cross-border investments and NGO compliance.',
  icon: 'Globe',
  subServices: [
    // 11.1 FDI & FEMA Compliance
    {
      id: 'fdi-fema-compliance',
      name: 'Foreign Direct Investment (FDI) & FEMA Compliance',
      slug: 'fdi-fema-compliance',
      description:
        'End-to-end support for structuring, receiving, and reporting foreign direct investments under FEMA and RBI regulations for Indian businesses and NGOs.',
      icon: 'TrendingUp',
      features: [
        'Assessment of sectoral caps and eligibility for foreign investment',
        'Advisory on automatic versus government approval routes',
        'Support for capital account transactions and downstream investments',
        'Drafting and review of investment and share subscription documents',
        'Assistance with pricing and valuation as per RBI guidelines',
        'End-to-end FC-GPR and FC-TRS filing support on FIRMS portal',
        'Preparation and filing of FLA annual returns',
        'Regularization of delayed or missed filings and ongoing FEMA advisory'
      ],
      benefits: [
        'Reduced risk of penalties, compounding, and adverse remarks from RBI',
        'Structurally compliant FDI aligned with sectoral caps and pricing norms',
        'Higher comfort and confidence for foreign investors and stakeholders',
        'Streamlined documentation and reporting across multiple investment rounds',
        'Better readiness for investor due diligence and future fundraising',
        'Clear visibility into ongoing FEMA obligations for promoters and finance teams',
        'Improved governance and transparency around foreign capital inflows',
        'Time and effort savings through expert-managed regulatory processes'
      ],
      procedure: [
        {
          step: 1,
          title: 'Eligibility & Route Assessment',
          description:
            'Assess the business sector, investor profile, and investment structure to determine eligibility, sectoral caps, and whether the transaction falls under the automatic or approval route.',
          documents: [
            'Business profile and sector classification',
            'Existing and proposed shareholding pattern',
            'Details of proposed foreign investor and investment amount'
          ],
          timeline: '2–3 days'
        },
        {
          step: 2,
          title: 'Documentation & Valuation Support',
          description:
            'Draft and review shareholder/investment agreements and support valuation in line with RBI and FEMA pricing norms.',
          documents: [
            'Draft shareholder or subscription agreements',
            'Valuation report from a registered valuer',
            'Board and shareholder approvals for issuing/transfer of shares'
          ],
          timeline: '3–7 days'
        },
        {
          step: 3,
          title: 'Receipt of Funds & Initial Reporting',
          description:
            'Coordinate receipt of foreign remittance, obtain FIRC and KYC, and initiate FC-GPR or FC-TRS filings on the FIRMS portal.',
          documents: [
            'FIRC/remittance certificates from banks',
            'KYC of foreign investor and Indian investee',
            'Final share allotment or transfer details'
          ],
          timeline: '3–10 days (post funds receipt)'
        },
        {
          step: 4,
          title: 'Post-Investment & FLA Compliance',
          description:
            'File FLA annual returns and provide ongoing FEMA advisory for subsequent investments, transfers, or restructurings.',
          documents: [
            'Latest audited financial statements',
            'Updated shareholding pattern and investment details',
            'Past FEMA/RBI filings and acknowledgements'
          ],
          timeline: 'Annual & event-based'
        }
      ],
      requiredDocuments: [
        'Shareholder agreements and Board/shareholder approvals',
        'FIRC/remittance certificates issued by banks',
        'Valuation certificates from registered valuers',
        'KYC of foreign investor and Indian investee',
        'MOA/AOA reflecting capital changes, where applicable'
      ],
      faqs: [
        {
          question: 'What is the difference between the automatic and approval route for FDI?',
          answer:
            'Under the automatic route, foreign investment does not require prior government approval, while under the approval route, clearance from the government/authorities is needed before receiving funds.'
        },
        {
          question: 'When is FC-GPR required and who files it?',
          answer:
            'FC-GPR is required when a company issues new shares to a foreign investor and must be filed by the Indian investee company on the RBI FIRMS portal within prescribed timelines.'
        },
        {
          question: 'What is the purpose of the FLA annual return?',
          answer:
            'The FLA return provides RBI with information on foreign assets and liabilities of Indian entities and is mandatory for companies that have received FDI or made ODI.'
        },
        {
          question: 'Can delays in FDI reporting be regularized?',
          answer:
            'Delayed or missed FDI filings can often be regularized through compounding or regularization procedures, subject to RBI guidelines and payment of applicable penalties.'
        }
      ],
      rating: 4.8
    },

    // 11.2 External Commercial Borrowings (ECB)
    {
      id: 'ecb-compliance',
      name: 'External Commercial Borrowings (ECB)',
      slug: 'ecb-compliance',
      description:
        'Comprehensive support for structuring, raising, and complying with External Commercial Borrowings from foreign lenders under RBI’s ECB framework.',
      icon: 'IndianRupee',
      features: [
        'Eligibility assessment and end-use evaluation as per ECB Master Directions',
        'Structuring of ECB terms including tenure, pricing, and security',
        'Assistance with negotiations and documentation with foreign lenders',
        'LRN (Loan Registration Number) application support with RBI',
        'Drafting and review of ECB loan agreements and related documents',
        'Preparation and filing of ECB-2 returns and periodic reports',
        'Monitoring of end-use norms, interest payments, and repayments',
        'Assistance in responding to RBI queries and clarifications'
      ],
      benefits: [
        'Access to diversified global funding sources beyond domestic lenders',
        'Optimized borrowing costs through appropriate structuring and hedging',
        'Reduced compliance risk with timely and accurate RBI reporting',
        'Greater comfort for foreign lenders through professionally prepared documentation',
        'Better tracking of repayments, interest outflows, and covenant compliance',
        'Improved cash flow planning based on structured repayment schedules',
        'Enhanced ability to finance capex and growth while staying compliant',
        'Lower internal administrative burden through outsourced compliance support'
      ],
      procedure: [
        {
          step: 1,
          title: 'Eligibility & Requirement Analysis',
          description:
            'Evaluate business eligibility, permitted end-use, and overall borrowing needs under current ECB policy.',
          documents: [
            'Business plan and funding requirement details',
            'Existing borrowing profile and financial statements'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'ECB Structuring & Term Sheet',
          description:
            'Design suitable ECB structure and assist in negotiating key commercial terms with foreign lenders.',
          documents: [
            'Proposed term sheet or draft loan offer',
            'Internal approvals for borrowing limits'
          ],
          timeline: '5–10 days'
        },
        {
          step: 3,
          title: 'LRN Application & Documentation',
          description:
            'File ECB application for obtaining LRN and ensure compliance with RBI conditions.',
          documents: [
            'Signed loan agreement or draft',
            'KYC and financials of lender and borrower',
            'Board and shareholder resolutions approving ECB'
          ],
          timeline: 'As per RBI processing times'
        },
        {
          step: 4,
          title: 'Ongoing ECB-2 & Compliance Monitoring',
          description:
            'File ECB-2 returns, monitor end-use and repayment schedules, and support in handling RBI queries.',
          documents: [
            'Utilization details and bank statements',
            'Repayment and interest payment records'
          ],
          timeline: 'Monthly/quarterly as applicable'
        }
      ],
      requiredDocuments: [
        'Board and shareholder resolutions for availing ECB',
        'Draft or executed loan agreement and term sheet',
        'KYC and financials of foreign lender',
        'FIRC for ECB funds received',
        'Evidence of past ECB filings and compliance trackers, if any'
      ],
      faqs: [
        {
          question: 'What types of entities are eligible to raise ECB?',
          answer:
            'Eligible borrowers include certain companies, NBFCs, and other specified entities as per RBI’s ECB Master Directions, subject to sectoral and end-use conditions.'
        },
        {
          question: 'What is an LRN and why is it important?',
          answer:
            'The Loan Registration Number (LRN) is allotted by RBI for each ECB and is mandatory for reporting and tracking all transactions related to that borrowing.'
        },
        {
          question: 'Are there restrictions on how ECB proceeds can be used?',
          answer:
            'Yes, ECB proceeds can be used only for permitted end-uses such as capital expenditure, with restrictions on uses like real estate, working capital, or equity investments in many cases.'
        }
      ],
      rating: 4.7
    },

    // 11.3 FCRA Registration & Compliance
    {
      id: 'fcra-compliance',
      name: 'FCRA Registration, Renewal & Annual Compliance',
      slug: 'fcra-compliance',
      description:
        'Specialized FCRA services for NGOs, societies, and Section 8 companies receiving foreign contributions, from registration to annual compliance.',
      icon: 'HeartHandshake',
      features: [
        'Eligibility assessment for FCRA registration or prior permission',
        'Review and alignment of bye-laws and trust deeds with FCRA norms',
        'Preparation and filing of FCRA registration and renewal applications',
        'Support for obtaining and managing FCRA-designated bank accounts',
        'Advisory on permissible utilization and reporting of foreign contributions',
        'Maintenance of FCRA-compliant books and records',
        'Annual return filing in Form FC-4 and event-based intimations in FC-6',
        'Guidance during inspections, audits, and regulator queries'
      ],
      benefits: [
        'Improved credibility with overseas donors and funding agencies',
        'Reduced risk of FCRA registration suspension or cancellation',
        'Clear control over permissible and non-permissible utilization of funds',
        'Better governance and transparency within the NGO’s finance function',
        'Timely and accurate reporting that satisfies donor and regulator expectations',
        'Simplified process for securing renewals and additional approvals',
        'Lower likelihood of audit qualifications or adverse findings',
        'Confidence to scale foreign fund-raising activities compliantly'
      ],
      procedure: [
        {
          step: 1,
          title: 'Eligibility & Documentation Review',
          description:
            'Analyze organizational structure and objects to confirm eligibility for FCRA registration or prior permission.',
          documents: [
            'Registration certificate and governing documents',
            'Details of activities and funding sources'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Governing Document Alignment',
          description:
            'Recommend and assist with amendments in bye-laws or trust deeds to align with FCRA provisions.',
          documents: [
            'Existing bye-laws or trust deeds',
            'Draft amendments and board approvals'
          ],
          timeline: 'Depends on internal approvals and RoC/registrar timelines'
        },
        {
          step: 3,
          title: 'Application Filing & Liaison',
          description:
            'Prepare and file FCRA registration/renewal forms online and liaise with authorities for clarifications.',
          documents: [
            'PAN and ID proofs of key functionaries',
            'Board or governing body resolutions for FCRA registration'
          ],
          timeline: 'As per MHA processing timelines'
        },
        {
          step: 4,
          title: 'Books, Returns & Ongoing Compliance',
          description:
            'Set up FCRA-compliant accounting, track foreign contributions, and file FC-4 and FC-6 forms on time.',
          documents: [
            'Bank statements of FCRA account',
            'Annual financial statements and donation details'
          ],
          timeline: 'Annual & event-based'
        }
      ],
      requiredDocuments: [
        'Certificate of incorporation/registration and governing documents',
        'PAN, Aadhaar, and ID proofs of all office bearers/directors',
        'FCRA-designated bank account details with supporting documents',
        'Past years’ activity and financial reports, if available',
        'Board or governing body resolutions for FCRA registration/renewal',
        'List of key functionaries with declarations and KYC'
      ],
      faqs: [
        {
          question: 'Who needs FCRA registration?',
          answer:
            'Any NGO, trust, society, or Section 8 company intending to receive foreign contributions on a regular basis must obtain FCRA registration or prior permission.'
        },
        {
          question: 'Can foreign contributions be received in any bank account?',
          answer:
            'No, foreign contributions must be received only in a designated FCRA bank account opened with authorized branches as notified by the authorities.'
        },
        {
          question: 'What happens if FCRA renewals or filings are missed?',
          answer:
            'Delays or non-compliance can lead to penalties, freezing of funds, suspension, or cancellation of FCRA registration, so timely filings are critical.'
        }
      ],
      rating: 4.8
    },

    // 11.4 ODI, LRS & Cross-Border Compliance
    {
      id: 'odi-lrs-compliance',
      name: 'ODI, LRS & Cross-Border Transaction Compliance',
      slug: 'odi-lrs-compliance',
      description:
        'Advisory and compliance support for overseas investments and remittances by Indian entities and individuals under ODI and LRS frameworks.',
      icon: 'Globe2',
      features: [
        'Eligibility and limit assessment under ODI and LRS regulations',
        'Structuring of overseas subsidiaries, JVs, and special purpose vehicles',
        'Preparation and filing of Form ODI and related declarations with RBI/AD bank',
        'Support with LRS documentation for individual investments and remittances',
        'Advisory on tax impact, FEMA implications, and anti-money laundering norms',
        'Post-investment reporting and annual compliance support',
        'Guidance on profit repatriation, divestment, and restructuring',
        'Documentation support during audits, inspections, and reviews'
      ],
      benefits: [
        'Confident expansion into global markets with compliant overseas structures',
        'Reduced risk of FEMA breaches, penalties, and investigation queries',
        'Optimized use of individual LRS limits for investment and wealth planning',
        'Better coordination between tax, regulatory, and banking requirements',
        'Clear visibility into ongoing reporting and repatriation obligations',
        'Smooth handling of exits, buy-backs, or restructuring of overseas investments',
        'Improved documentation trail for scrutiny by regulators and tax authorities',
        'Time savings for promoters and finance teams through expert guidance'
      ],
      procedure: [
        {
          step: 1,
          title: 'Eligibility & Transaction Assessment',
          description:
            'Evaluate eligibility under ODI or LRS, applicable limits, and overall transaction structure.',
          documents: [
            'Investment rationale and business plan',
            'Net worth and financial details of Indian entity/individual'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Structuring & Documentation',
          description:
            'Design the overseas investment or remittance structure and prepare board/authorization documents.',
          documents: [
            'Draft board/shareholder resolutions',
            'Details of overseas entity or investment vehicle'
          ],
          timeline: '3–7 days'
        },
        {
          step: 3,
          title: 'Form ODI/LRS Filing & Bank Coordination',
          description:
            'File Form ODI or LRS declarations with RBI/AD bank and coordinate for approvals and remittances.',
          documents: [
            'KYC of Indian and overseas entities/individuals',
            'Valuation reports where required by regulations'
          ],
          timeline: 'As per RBI/AD bank processing'
        },
        {
          step: 4,
          title: 'Post-Investment Reporting & Repatriation',
          description:
            'Assist with post-investment filings, annual reporting, and planning for repatriation or exit.',
          documents: [
            'Financials and shareholding details of overseas entity',
            'Details of dividends, interest, or sale proceeds'
          ],
          timeline: 'Annual & event-based'
        }
      ],
      requiredDocuments: [
        'Investment rationale and details of proposed overseas structure',
        'KYC of Indian entity/individual and overseas entity',
        'Valuation reports for overseas investments, where applicable',
        'Board/authorization documents approving the transaction',
        'Copies of any sectoral or regulatory approvals, if required'
      ],
      faqs: [
        {
          question: 'What is the difference between ODI and LRS?',
          answer:
            'ODI governs overseas investments by Indian entities, while LRS allows resident individuals to remit funds abroad within specified limits for investments and other permissible purposes.'
        },
        {
          question: 'Are there limits on how much can be invested abroad?',
          answer:
            'Yes, both ODI and LRS have quantitative limits and conditions that depend on net worth, regulatory guidelines, and the nature of the investment.'
        },
        {
          question: 'Do overseas investments need to be reported annually?',
          answer:
            'Yes, ongoing reporting of financials, shareholding, and status of overseas investments is generally required through prescribed forms and returns.'
        }
      ],
      rating: 4.7
    },

    // 11.5 Liaison, Branch & Project Office Approvals/Compliance
    {
      id: 'liaison-branch-project-office',
      name: 'Liaison, Branch & Project Office Approvals/Compliance',
      slug: 'liaison-branch-project-office',
      description:
        'Support for foreign companies establishing liaison, branch, or project offices in India and managing their ongoing regulatory and tax compliances.',
      icon: 'Building',
      features: [
        'Assessment of appropriate structure between liaison, branch, and project offices',
        'Assistance with application preparation to RBI through AD Category-I banks',
        'Drafting of required undertakings, declarations, and business plans',
        'Support for PAN, GST, and other registrations post-approval',
        'Guidance on setting up office premises and banking arrangements',
        'Assistance with bi-annual and annual activity certificates',
        'Advisory on permissible activities, income, and repatriation of funds',
        'Exit and closure support for winding up offices in India'
      ],
      benefits: [
        'Smooth entry into the Indian market with the right office structure',
        'Reduced risk of doing impermissible activities under liaison/branch rules',
        'Clarity on tax and regulatory treatment of income and expenses in India',
        'Better coordination between parent company, banks, and regulators',
        'Timely filing of activity certificates and compliance reports',
        'Streamlined operational setup including premises and local registrations',
        'Predictable process for repatriation and closure when required',
        'Enhanced comfort for global management on India compliance status'
      ],
      procedure: [
        {
          step: 1,
          title: 'Structure Assessment & Business Plan',
          description:
            'Evaluate the proposed India activities to determine whether a liaison, branch, or project office is suitable and prepare a detailed business plan.',
          documents: [
            'Parent company profile and audited financials',
            'Summary of proposed activities and Indian counterparties'
          ],
          timeline: '3–7 days'
        },
        {
          step: 2,
          title: 'Application & Documentation with RBI/AD Bank',
          description:
            'Draft and file applications with RBI through AD Category-I banks along with required undertakings and supporting documents.',
          documents: [
            'Board resolution/POA appointing Indian representative',
            'Detailed business plan and activity summary',
            'KYC documents of parent company and authorized signatories'
          ],
          timeline: 'As per RBI/AD bank timelines'
        },
        {
          step: 3,
          title: 'Post-Approval Registrations & Setup',
          description:
            'Obtain tax registrations, open bank accounts, and assist with office lease or rental documentation.',
          documents: [
            'Approval letters from RBI/AD bank',
            'Rental agreement or lease deed for Indian office',
            'Local registration and utility documents'
          ],
          timeline: '2–4 weeks depending on registrations'
        },
        {
          step: 4,
          title: 'Ongoing Compliance & Exit Support',
          description:
            'Support in filing activity certificates, monitoring permissible activities, and managing repatriation or closure.',
          documents: [
            'Annual financial statements and activity details',
            'Bank statements and repatriation documentation'
          ],
          timeline: 'Annual & event-based'
        }
      ],
      requiredDocuments: [
        'Parent company incorporation documents and audited financials',
        'Board resolution or Power of Attorney for Indian representative',
        'Detailed business plan and proposed activity summary in India',
        'Rental agreement or lease deed for office premises in India',
        'KYC and identification documents of authorized signatories'
      ],
      faqs: [
        {
          question: 'What is the difference between a liaison office and a branch office?',
          answer:
            'A liaison office is generally restricted to representational and liaison activities without earning income, while a branch office can undertake permitted commercial activities and earn revenue in India.'
        },
        {
          question: 'Can a liaison office generate revenue in India?',
          answer:
            'No, liaison offices are typically not permitted to conduct commercial activities or earn income in India and are limited to specified liaison functions.'
        },
        {
          question: 'Are activity certificates mandatory for foreign offices in India?',
          answer:
            'Yes, liaison and branch offices must file periodic activity certificates certified by auditors to demonstrate compliance with permitted activities and regulatory conditions.'
        }
      ],
      rating: 4.8
    }
  ]
},
//14. IPO, Listing & Compliance Advisory
{
  id: 'ipo-listing-compliance',
  name: 'IPO, Listing & Compliance Advisory',
  slug: 'ipo-listing-compliance',
  description:
    'End-to-end support for IPOs, SME/Main Board listings, ongoing listing compliance, corporate governance, and SEBI-mandated certifications and reporting.',
  icon: 'LineChart',
  subServices: [
    // 10.1 IPO Advisory (Main Board & SME)
    {
      id: 'ipo-advisory',
      name: 'IPO Advisory (Main Board & SME)',
      slug: 'ipo-advisory',
      description:
        'Comprehensive IPO advisory for Main Board and SME listings, from readiness assessment to listing and post-IPO reporting.',
      icon: 'TrendingUp',
      features: [
        'Pre-IPO feasibility and eligibility assessment for Main Board and SME platforms',
        'Advisory on restructuring, capital structuring, and corporate clean-up',
        'End-to-end coordination with merchant bankers, lead managers, RTAs, and legal counsel',
        'Drafting and vetting support for DRHP, RHP, and prospectus documentation',
        'Comprehensive financial, legal, and business due diligence coordination',
        'Support for marketing, roadshows, and investor engagement activities',
        'Advisory on pricing, allocation, and anchor/retail investor strategies',
        'Post-IPO reporting and stabilization support for newly listed companies'
      ],
      benefits: [
        'Higher probability of successful listing with robust preparation and documentation',
        'Optimized IPO structure balancing promoter control and investor expectations',
        'Stronger confidence for regulators, investors, and intermediaries',
        'Reduced delays and observations through well-managed SEBI and exchange interactions',
        'Improved market perception through clear communication and governance practices',
        'Streamlined internal preparedness for life as a listed entity',
        'Lower risk of post-issue non-compliances or disclosure gaps',
        'Time savings for promoters by centralizing coordination with all intermediaries'
      ],
      procedure: [
        {
          step: 1,
          title: 'IPO Feasibility & Readiness Assessment',
          description:
            'Evaluate eligibility based on turnover, profitability, capital structure, and compliance history to determine IPO readiness and suitable platform (Main Board or SME).',
          documents: [
            'Audited financial statements for the last three years',
            'Details of shareholding pattern and capital structure',
            'Summary of major litigations and regulatory matters'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'Intermediary Appointment & Structuring',
          description:
            'Assist in appointing merchant bankers, lead managers, RTAs, legal advisors, and auditors, and finalize IPO structure and timeline.',
          documents: [
            'Board and shareholder resolutions approving IPO process',
            'Proposed issue size and preliminary business plan',
            'Shortlisted intermediary profiles and proposals'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Documentation, DRHP/RHP & Filings',
          description:
            'Coordinate preparation and vetting of DRHP/RHP, support due diligence, and manage SEBI and exchange filings and clarifications.',
          documents: [
            'Draft DRHP/RHP and offer documents',
            'Contracts, licenses, and key business agreements',
            'Group entity, promoter, and related party details'
          ],
          timeline: '8–16 weeks (regulator-dependent)'
        },
        {
          step: 4,
          title: 'Marketing, Listing & Post-IPO Reporting',
          description:
            'Support roadshows, manage listing approvals, share allotment, and initial post-listing compliance and disclosures.',
          documents: [
            'Final prospectus and offer documents',
            'Allotment details and listing approvals',
            'Post-issue compliance and reporting templates'
          ],
          timeline: 'As per issue schedule'
        }
      ],
      requiredDocuments: [
        'Audited financial statements for at least the last three years',
        'Board and shareholder resolutions approving IPO and related actions',
        'Details of directors, promoters, group entities, and related party transactions',
        'Business plans, financial forecasts, and industry analysis',
        'Tax compliance records, PAN, TAN, and statutory licenses',
        'Draft DRHP/RHP/offer documents and key business contracts'
      ],
      faqs: [
        {
          question: 'How do we know if our company is ready for an IPO?',
          answer:
            'IPO readiness depends on financial track record, governance standards, regulatory compliance history, and the company’s ability to meet exchange-specific eligibility criteria.'
        },
        {
          question: 'What is the difference between Main Board and SME IPO?',
          answer:
            'Main Board IPOs are for larger, more established companies, while SME IPOs cater to smaller enterprises with relaxed thresholds but separate listing and compliance norms.'
        },
        {
          question: 'How long does the IPO process usually take?',
          answer:
            'Depending on preparedness and regulator timelines, an IPO can typically take 6–12 months from readiness assessment to listing.'
        }
      ],
      rating: 4.8
    },

    // 10.2 Listing Compliances & Advisory
    {
      id: 'listing-compliances-advisory',
      name: 'Listing Compliances & Advisory',
      slug: 'listing-compliances-advisory',
      description:
        'Ongoing compliance and advisory support for listed companies on BSE, NSE, and SME exchanges.',
      icon: 'ClipboardList',
      features: [
        'Preparation of exchange-specific compliance calendars and checklists',
        'Quarterly, half-yearly, and annual disclosure support to BSE/NSE/SME exchanges',
        'Event-based filings for material events, corporate actions, and price-sensitive information',
        'Assistance with insider trading and disclosure compliances under SEBI regulations',
        'Support for board meeting and shareholder meeting compliances and filings',
        'Maintenance of statutory registers and governance documentation',
        'Monitoring of timely submissions to avoid fines and suspensions',
        'Advisory on best practices for investor communication and transparency'
      ],
      benefits: [
        'Consistent compliance with stock exchange and SEBI obligations',
        'Reduced risk of penalties, fines, and adverse observations',
        'Improved transparency and trust with public shareholders',
        'Streamlined internal processes for capturing and reporting events',
        'Better preparedness for inspections, inquiries, and investor scrutiny',
        'Enhanced corporate reputation through strong disclosure practices',
        'Lower operational burden on in-house secretarial and finance teams',
        'Predictable and organized compliance environment across the year'
      ],
      procedure: [
        {
          step: 1,
          title: 'Compliance Gap & Calendar Setup',
          description:
            'Review existing listing compliances, identify gaps, and create an exchange-specific compliance calendar.',
          documents: [
            'Past filings and acknowledgment receipts',
            'Current shareholding pattern and corporate structure'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'Data Collection & Documentation Framework',
          description:
            'Set up internal processes to collect financial, shareholding, and event data required for periodic and event-based disclosures.',
          documents: [
            'Board and committee minutes',
            'Financial reports and shareholding data'
          ],
          timeline: 'Ongoing'
        },
        {
          step: 3,
          title: 'Drafting & Filing Disclosures',
          description:
            'Draft and file periodic and event-based disclosures on exchange portals and maintain organized records.',
          documents: [
            'Draft announcements and disclosure notes',
            'Supporting contracts, minutes, and resolutions'
          ],
          timeline: 'Quarterly/annual & event-based'
        }
      ],
      requiredDocuments: [
        'Quarterly and annual financial statements with auditor reports',
        'Details of directors, KMP, and shareholding pattern',
        'Documents supporting disclosures such as contracts, minutes, and resolutions',
        'Registers of investments, borrowings, and related party transactions'
      ],
      faqs: [
        {
          question: 'What are event-based disclosures for listed companies?',
          answer:
            'Event-based disclosures cover price-sensitive or material events such as major contracts, acquisitions, board changes, fundraising, or litigations that must be promptly disclosed to exchanges.'
        },
        {
          question: 'What happens if listing compliances are delayed?',
          answer:
            'Delays can lead to fines, additional disclosures, and in serious cases, trading restrictions or suspension by the exchanges.'
        }
      ],
      rating: 4.7
    },

    // 10.3 Corporate Governance Compliances & Advisory
    {
      id: 'corporate-governance-advisory',
      name: 'Corporate Governance Compliances & Advisory',
      slug: 'corporate-governance-advisory',
      description:
        'Advisory to ensure listed entities comply with SEBI (LODR) corporate governance norms and best practices.',
      icon: 'Users',
      features: [
        'Review of board composition, independence, and diversity as per regulations',
        'Constitution and functioning of Audit, NRC, Stakeholders, and CSR committees',
        'Drafting and updating committee charters, policies, and codes',
        'Advisory on frequency, agenda, and documentation of board and committee meetings',
        'Support for director onboarding, declarations, and annual disclosures',
        'Guidance on related party transactions and approval processes',
        'Advisory on ESG and sustainability-related disclosures',
        'Training and sensitization sessions for directors and senior management'
      ],
      benefits: [
        'Stronger governance framework aligned with SEBI and exchange expectations',
        'Reduced risk of governance lapses and associated penalties',
        'Improved investor confidence through transparent decision-making structures',
        'Clear role definitions for board, committees, and management',
        'Better handling of related party transactions and conflict-of-interest situations',
        'Enhanced readiness for ratings, investor due diligence, and ESG assessments',
        'Positive impact on brand and long-term valuation through good governance',
        'Better boardroom effectiveness and strategic oversight'
      ],
      procedure: [
        {
          step: 1,
          title: 'Governance Diagnostic Review',
          description:
            'Evaluate existing governance structures, committee frameworks, and policies against SEBI and LODR norms.',
          documents: [
            'Board and committee compositions',
            'Existing policies, charters, and codes'
          ],
          timeline: '3–4 weeks'
        },
        {
          step: 2,
          title: 'Policy & Committee Framework Enhancement',
          description:
            'Draft or refine charters, policies, and governance documents and align committee structures.',
          documents: [
            'Draft revised policies and charters',
            'Board approvals for governance changes'
          ],
          timeline: '4–8 weeks'
        },
        {
          step: 3,
          title: 'Implementation, Training & Ongoing Advisory',
          description:
            'Support implementation, conduct trainings, and provide ongoing governance advisory and regulatory updates.',
          documents: [
            'Training materials and session records',
            'Annual evaluation and disclosure formats'
          ],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'Board composition and profiles of directors',
        'Existing committee constitutions and charters',
        'Codes and policies (code of conduct, ethics, whistleblower, RPT, etc.)',
        'Director independence declarations and annual disclosures'
      ],
      faqs: [
        {
          question: 'Why is corporate governance so critical for listed companies?',
          answer:
            'Strong governance reduces regulatory risk, improves investor confidence, and supports sustainable long-term performance.'
        },
        {
          question: 'Do all listed companies need the same committees?',
          answer:
            'Specific committees such as Audit, NRC, Stakeholders, and CSR are mandated based on SEBI LODR thresholds and company profile.'
        }
      ],
      rating: 4.8
    },

    // 10.4 SEBI Certification & Reporting
    {
      id: 'sebi-certification-reporting',
      name: 'SEBI Certification & Reporting',
      slug: 'sebi-certification-reporting',
      description:
        'Support for all SEBI and exchange-mandated certifications, audit reports, and regulatory filings for listed entities.',
      icon: 'FileCheck',
      features: [
        'Mapping of periodic and event-based SEBI certification and reporting requirements',
        'Coordination for secretarial compliance reports and corporate governance reports',
        'Support for share transfer, capital reconciliation, and insider trading-related certifications',
        'Liaison with practicing professionals (CS, CA, cost accountants) for independent certifications',
        'Compilation and review of data required for certifications and audits',
        'Filing of certified documents on stock exchange and SEBI portals',
        'Maintenance of organized compliance and certification records',
        'Advisory on strengthening controls to improve future certification outcomes'
      ],
      benefits: [
        'Assured coverage of all SEBI and exchange certification requirements',
        'Reduced risk of qualification or adverse remarks in compliance reports',
        'Better coordination between internal teams and external professionals',
        'Improved audit readiness and transparency of capital and shareholding records',
        'Lower chances of penalties or enforcement actions for certification lapses',
        'Centralized repository of certifications and filings for quick reference',
        'Enhanced comfort for boards and investors on overall compliance posture',
        'Time-efficient handling of recurring certification cycles'
      ],
      procedure: [
        {
          step: 1,
          title: 'Certification Requirement Mapping',
          description:
            'Identify all periodic and event-driven SEBI and exchange certifications applicable to the company.',
          documents: [
            'List of current listings, instruments, and corporate structure',
            'Previous certifications and compliance reports'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Data Collection & Professional Coordination',
          description:
            'Gather necessary records and coordinate with practicing professionals for audits and certifications.',
          documents: [
            'Transaction records and share capital registers',
            'Board/shareholder resolutions and minutes'
          ],
          timeline: 'Ongoing as per report cycle'
        },
        {
          step: 3,
          title: 'Reporting, Filing & Record Management',
          description:
            'Finalize certified reports, file them on exchange/SEBI portals, and maintain organized records for future reference.',
          documents: [
            'Final signed certificates and reports',
            'Filing acknowledgements and communication records'
          ],
          timeline: 'Quarterly/annual & event-based'
        }
      ],
      requiredDocuments: [
        'Transaction records and share capital registers',
        'Previous audit and compliance reports',
        'Board and shareholder resolutions related to capital and governance',
        'Appointment letters and details of certifying professionals'
      ],
      faqs: [
        {
          question: 'Which SEBI certifications are commonly required for listed companies?',
          answer:
            'Typical certifications cover share transfer, capital reconciliation, secretarial compliance, corporate governance, insider trading controls, and other event-specific requirements.'
        },
        {
          question: 'Who can issue SEBI-mandated certifications?',
          answer:
            'Certifications are usually issued by practicing professionals such as company secretaries, chartered accountants, or cost accountants, depending on the specific requirement.'
        }
      ],
      rating: 4.7
    }
  ]
},
//15. Corporate Restructuring Services
{
  id: 'corporate-restructuring',
  name: 'Corporate Restructuring Services',
  slug: 'corporate-restructuring',
  description:
    'Expert advisory on valuation, financial due diligence, mergers and acquisitions, takeovers, private funding, and transaction structuring with full regulatory compliance support.',
  icon: 'Shuffle',
  subServices: [
    // 9.1 Valuation Services
    {
      id: 'valuation-services',
      name: 'Valuation Services',
      slug: 'valuation-services',
      description:
        'Accurate business and asset valuation services for investments, taxation, ESOPs, M&A, and fundraising aligned with regulatory standards.',
      icon: 'Scale',
      features: [
        'Business valuation for fundraising, M&A, and strategic transactions',
        'Regulatory-compliant valuation reports under Companies Act, SEBI, and RBI norms',
        'ESOP and sweat equity valuation support',
        'Valuation for buy-back, preferential allotment, and rights issues',
        'Fairness opinions and independent valuation for related party transactions',
        'Tax and transfer pricing-related valuation support',
        'Scenario and sensitivity analysis for deal negotiations',
        'Coordination with auditors, investors, and transaction advisors'
      ],
      benefits: [
        'Defensible valuations that withstand investor, auditor, and regulator scrutiny',
        'Improved negotiation power in fundraising and M&A deals',
        'Full compliance with applicable valuation and disclosure requirements',
        'Clarity on business value drivers and risk factors',
        'Reduced risk of disputes around pricing, fairness, and minority protection',
        'Better decision-making for divestments, acquisitions, and capital restructuring',
        'Enhanced comfort for lenders, investors, and stakeholders',
        'Efficient valuation process with minimal disruption to operations'
      ],
      procedure: [
        {
          step: 1,
          title: 'Scope & Purpose Discussion',
          description:
            'Understand the purpose of valuation, transaction context, and applicable regulatory framework.',
          documents: [
            'Background note on proposed transaction or requirement',
            'Corporate structure and shareholding details'
          ],
          timeline: '2–3 days'
        },
        {
          step: 2,
          title: 'Data Collection & Analysis',
          description:
            'Collect financial, operational, and industry data and select appropriate valuation methodologies.',
          documents: [
            'Historical financial statements and projections',
            'Business plan, key contracts, and customer data'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 3,
          title: 'Valuation Modelling & Draft Report',
          description:
            'Prepare valuation model, perform sensitivity analysis, and issue a draft report for management review.',
          documents: [
            'Valuation working files and assumptions',
            'Draft valuation report'
          ],
          timeline: '1 week'
        },
        {
          step: 4,
          title: 'Final Report & Support',
          description:
            'Issue final signed valuation report and support discussions with investors, auditors, or regulators.',
          documents: [
            'Final valuation report',
            'Supporting schedules and disclosures'
          ],
          timeline: '3–5 days'
        }
      ],
      requiredDocuments: [
        'Audited financial statements and management projections',
        'Cap table and shareholding pattern',
        'Details of past funding rounds and transaction terms',
        'Key business contracts and customer/vendor concentration details'
      ],
      faqs: [
        {
          question: 'When is a formal valuation report required?',
          answer:
            'Formal valuations are typically needed for fundraising, ESOPs, buy-back, preferential issues, M&A, and regulatory or tax purposes.'
        },
        {
          question: 'Who relies on the valuation report?',
          answer:
            'Investors, boards, auditors, regulators, and sometimes lenders may rely on valuation reports to assess fairness and compliance.'
        }
      ],
      rating: 4.8
    },

    // 9.2 Financial Due Diligence
    {
      id: 'financial-due-diligence',
      name: 'Financial Due Diligence',
      slug: 'financial-due-diligence',
      description:
        'Thorough financial due diligence before investments or acquisitions to validate valuations, identify risks, and uncover hidden liabilities.',
      icon: 'Search',
      features: [
        'Comprehensive review of historical financial performance and quality of earnings',
        'Analysis of revenue streams, margins, and key cost drivers',
        'Working capital, cash flow, and debt analysis',
        'Review of contingent liabilities, litigations, and off-balance sheet items',
        'Assessment of internal controls and compliance history',
        'Validation of projections and key business assumptions',
        'Red flag reporting and risk quantification for investors and acquirers',
        'Vendor due diligence support for companies preparing for sale'
      ],
      benefits: [
        'Better-informed investment and acquisition decisions',
        'Early identification of red flags, hidden liabilities, and integration issues',
        'Stronger basis for price adjustments, indemnities, and deal protections',
        'Reduced risk of post-transaction surprises and disputes',
        'Enhanced comfort for lenders and co-investors',
        'Stronger negotiation position based on independent findings',
        'Improved readiness of target companies for future transactions',
        'Clear view of sustainable earnings and cash flows'
      ],
      procedure: [
        {
          step: 1,
          title: 'Scope Definition & Data Room Setup',
          description:
            'Define due diligence scope and set up document data room in coordination with target company.',
          documents: [
            'List of requested financial and legal documents',
            'Access to virtual data room or document repository'
          ],
          timeline: '3–5 days'
        },
        {
          step: 2,
          title: 'Detailed Financial Review',
          description:
            'Analyze financial statements, ledgers, key contracts, and management information.',
          documents: [
            'Trial balance, GL, and management reports',
            'Tax filings and statutory returns'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Findings & Discussion with Management',
          description:
            'Discuss preliminary findings with management and refine understanding of issues.',
          documents: [
            'Preliminary red flag report',
            'Management responses and clarifications'
          ],
          timeline: '1 week'
        },
        {
          step: 4,
          title: 'Final Due Diligence Report',
          description:
            'Deliver a detailed due diligence report with key risks, adjustments, and recommendations.',
          documents: [
            'Final due diligence report',
            'Schedules of adjustments and risk matrix'
          ],
          timeline: '3–7 days'
        }
      ],
      requiredDocuments: [
        'Historical audited and management financial statements',
        'Detailed trial balances and ledgers',
        'Tax filings, assessments, and litigation details',
        'Key customer, supplier, and financing agreements'
      ],
      faqs: [
        {
          question: 'Is due diligence required for all deals?',
          answer:
            'While not mandatory, due diligence is strongly recommended for most investments, acquisitions, or significant strategic partnerships.'
        },
        {
          question: 'How long does financial due diligence usually take?',
          answer:
            'Depending on company size and data quality, it typically takes 3–6 weeks from data access to final report.'
        }
      ],
      rating: 4.8
    },

    // 9.3 Mergers & Acquisitions (M&A)
    {
      id: 'mergers-acquisitions',
      name: 'Mergers & Acquisitions (M&A)',
      slug: 'mergers-acquisitions',
      description:
        'End-to-end advisory on mergers, acquisitions, takeovers, and corporate restructuring including structuring, documentation, and regulatory filings.',
      icon: 'GitMerge',
      features: [
        'Strategic evaluation of merger, acquisition, or hive-off options',
        'Deal structuring from legal, tax, and regulatory perspectives',
        'Target identification, evaluation, and approach strategy',
        'Support in negotiations, term sheets, and definitive agreements',
        'Coordination of financial, tax, and legal due diligence',
        'Drafting and review of scheme documents and transaction agreements',
        'Regulatory filings with NCLT, MCA, SEBI, RBI, and other authorities as required',
        'Post-merger integration and compliance handholding'
      ],
      benefits: [
        'Well-structured deals that balance commercial, tax, and regulatory considerations',
        'Reduced transaction risk through coordinated diligence and documentation',
        'Improved speed and efficiency in closing complex transactions',
        'Stronger negotiation position and clearer allocation of risks',
        'Smooth regulatory interface for approvals and filings',
        'Better cultural and operational integration post-merger',
        'Alignment of transaction with long-term strategic objectives',
        'Enhanced value realization for promoters and investors'
      ],
      procedure: [
        {
          step: 1,
          title: 'Strategy & Deal Conceptualization',
          description:
            'Define transaction objectives, structure options, and high-level roadmap for the merger or acquisition.',
          documents: [
            'Business rationale and strategic note',
            'Preliminary financial and ownership details'
          ],
          timeline: '2–3 weeks'
        },
        {
          step: 2,
          title: 'Evaluation, Diligence & Term Sheet',
          description:
            'Conduct due diligence, analyze synergies, and finalize commercial terms in a term sheet or MoU.',
          documents: [
            'Due diligence reports',
            'Draft term sheet or MoU'
          ],
          timeline: '4–8 weeks'
        },
        {
          step: 3,
          title: 'Definitive Agreements & Approvals',
          description:
            'Draft and negotiate definitive agreements and obtain necessary corporate and regulatory approvals.',
          documents: [
            'Share purchase/merger agreements or schemes',
            'Board and shareholder resolutions',
            'Regulatory filings and acknowledgements'
          ],
          timeline: '8–16 weeks (regulator-dependent)'
        },
        {
          step: 4,
          title: 'Closing & Post-Merger Integration',
          description:
            'Manage closing mechanics, consideration flow, and post-merger integration and compliance.',
          documents: [
            'Closing checklists and documents',
            'Integration plans and updated statutory records'
          ],
          timeline: 'Ongoing post-closing'
        }
      ],
      requiredDocuments: [
        'Company constitutional documents and corporate structure',
        'Financial statements and key business information',
        'Details of existing borrowings, contracts, and litigations',
        'Board and shareholder approvals for transaction'
      ],
      faqs: [
        {
          question: 'What is the difference between a merger and an acquisition?',
          answer:
            'In a merger, entities combine into a single entity, whereas in an acquisition, one entity acquires control of another while both may continue to exist legally.'
        },
        {
          question: 'Do all M&A deals require NCLT approval?',
          answer:
            'Only certain schemes of arrangement and court-approved mergers require NCLT approval; many share or asset deals proceed contractually without NCLT.'
        }
      ],
      rating: 4.9
    },

    // 9.4 Private Funding Advisory & Agreements
    {
      id: 'private-funding-advisory',
      name: 'Private Funding Advisory & Agreements',
      slug: 'private-funding-advisory',
      description:
        'Advisory for startups and companies on private equity and venture capital fundraising, including deal structuring and investment agreements.',
      icon: 'DollarSign',
      features: [
        'Evaluation of funding options: equity, CCDs, CCPS, SAFE, convertible notes',
        'Design of investment structures aligned with regulatory and tax norms',
        'Drafting and review of term sheets and investment agreements',
        'SAFE and convertible note structuring and documentation',
        'Equity subscription and shareholders’ agreement drafting',
        'Negotiation support on valuation, rights, and protections',
        'Cap table modeling and dilution analysis',
        'Regulatory filing support with MCA, RBI, and SEBI where applicable'
      ],
      benefits: [
        'Stronger, founder-friendly yet investor-compliant deal structures',
        'Clear documentation of rights, obligations, and exit mechanisms',
        'Better understanding of dilution and long-term ownership implications',
        'Reduced risk of future disputes on control, governance, or exits',
        'Improved investor confidence through professional documentation and compliance',
        'Efficient closure of funding rounds with fewer back-and-forths',
        'Alignment of legal structure with commercial intent of the parties',
        'Support across multiple rounds for consistent documentation standards'
      ],
      procedure: [
        {
          step: 1,
          title: 'Funding Needs & Strategy Discussion',
          description:
            'Assess capital requirement, stage, and preferred instruments and identify target investor segments.',
          documents: [
            'Business plan and financial projections',
            'Current cap table and existing investor rights'
          ],
          timeline: '1–2 weeks'
        },
        {
          step: 2,
          title: 'Structure & Term Sheet Design',
          description:
            'Recommend investment structure and assist in drafting and negotiating term sheets.',
          documents: [
            'Draft term sheet',
            'Valuation inputs and investor proposals'
          ],
          timeline: '2–4 weeks'
        },
        {
          step: 3,
          title: 'Agreements & Compliance Filings',
          description:
            'Draft and finalize investment agreements and handle required regulatory filings.',
          documents: [
            'Share subscription and shareholders’ agreements',
            'Board/shareholder resolutions',
            'MCA/RBI/SEBI filing forms as applicable'
          ],
          timeline: '4–8 weeks'
        },
        {
          step: 4,
          title: 'Post-Closure Support',
          description:
            'Assist with post-funding updates, reporting, and cap table management.',
          documents: [
            'Updated statutory registers and share certificates',
            'Post-investment compliance documents'
          ],
          timeline: 'Ongoing'
        }
      ],
      requiredDocuments: [
        'Company constitutional documents and cap table',
        'Business plan, projections, and pitch materials',
        'Details of existing investors and prior investment documents',
        'Regulatory filings and approvals relating to past funding rounds'
      ],
      faqs: [
        {
          question: 'What agreements are typically signed in a private funding round?',
          answer:
            'Common documents include a term sheet, share subscription agreement, shareholders’ agreement, and sometimes convertible note or SAFE documentation.'
        },
        {
          question: 'How can founders protect themselves while raising capital?',
          answer:
            'By negotiating governance rights, vesting, anti-dilution, and exit terms carefully and ensuring all terms are clearly documented and compliant.'
        }
      ],
      rating: 4.8
    }
  ]
}





];


export const moreServices: MoreService[] = [
  {
    id: 'startup-services',
    name: 'Startup Ecosystem',
    slug: 'startup-services',
    description: 'Complete startup ecosystem support from ideation to scaling with expert guidance.',
    icon: 'Rocket',
    subServices: [
      {
        id: 'business-plan-development',
        name: 'Business Plan Development',
        slug: 'business-plan-development',
        description: 'Professional business plan creation for funding and strategic growth with comprehensive market analysis.',
        icon: 'FileText',
        features: [
          'Comprehensive market research and competitive analysis',
          'Detailed financial projections and revenue modeling',
          'Investor-ready presentation and pitch deck',
          'Go-to-market strategy development',
          'Risk assessment and mitigation planning',
          'Funding strategy development and recommendations',
          'Business model validation and optimization',
          'Executive summary and detailed documentation'
        ],
      
        popular: true,
        rating: 4.8,
      },
      {
        id: 'pitch-deck-creation',
        name: 'Investor Pitch Deck Creation',
        slug: 'pitch-deck-creation',
        description: 'Compelling pitch decks that attract investors and secure funding with professional design.',
        icon: 'Presentation',
        features: [
          'Professional design and compelling content creation',
          'Compelling storytelling and narrative development',
          'Detailed financial projections and modeling',
          'Market opportunity analysis and sizing',
          'Competitive landscape analysis and positioning',
          'Funding requirements and use of funds breakdown',
          'Team presentation and capability showcase',
          'Multiple format delivery (PPT, PDF, interactive)'
        ],
     
        rating: 4.7,
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
        description: 'Strategic financial planning, budgeting, and performance analysis with expert insights.',
        icon: 'BarChart3',
        features: [
          'Financial modeling and forecasting development',
          'Budget planning and variance analysis',
          'Cash flow management and optimization',
          'Investment analysis and decision support',
          'KPI development and performance monitoring',
          'Board reporting and executive presentations',
          'Financial risk assessment and management',
          'Strategic financial advisory and consultation'
        ],
     
        trending: true,
        rating: 4.9,
      },
      {
        id: 'fundraising-support',
        name: 'Fundraising & Investment Support',
        slug: 'fundraising-support',
        description: 'End-to-end support for raising capital and managing investor relations with expert guidance.',
        icon: 'DollarSign',
        features: [
          'Comprehensive fundraising strategy development',
          'Investor identification and targeted outreach',
          'Due diligence preparation and documentation',
          'Valuation support and financial modeling',
          'Term sheet negotiation support and guidance',
          'Legal documentation coordination and review',
          'Investor presentation and pitch preparation',
          'Post-funding investor relations management'
        ],
     
        rating: 4.8,
      }
    ]
  },
  {
    id: 'business-protection',
    name: 'Business Protection & Risk Management',
    slug: 'business-protection',
    description: 'Comprehensive business protection and risk management solutions with expert advisory.',
    icon: 'Shield',
    subServices: [
      {
        id: 'legal-compliance-audit',
        name: 'Legal Compliance Audit',
        slug: 'legal-compliance-audit',
        description: 'Comprehensive audit of legal compliance across all business areas with detailed reporting.',
        icon: 'Search',
        features: [
          'Comprehensive compliance gap analysis',
          'Risk assessment and rating methodology',
          'Legal documentation review and verification',
          'Regulatory requirement mapping and analysis',
          'Detailed remediation action plan development',
          'Ongoing monitoring system implementation',
          'Compliance training and awareness programs',
          'Regular compliance health check services'
        ],
      
        rating: 4.7,
      },
      {
        id: 'business-insurance-advisory',
        name: 'Business Insurance Advisory',
        slug: 'business-insurance-advisory',
        description: 'Expert guidance on business insurance needs and comprehensive risk coverage solutions.',
        icon: 'Umbrella',
        features: [
          'Comprehensive insurance needs assessment',
          'Policy comparison and optimal selection',
          'Claims management support and assistance',
          'Risk management strategies development',
          'Premium optimization and cost reduction',
          'Annual policy review and recommendations',
          'Insurance portfolio management',
          'Regulatory compliance and advisory services'
        ],
      
        rating: 4.6,
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
    { ...mainServiceCategories[0].subServices[0], category: mainServiceCategories[0].name }, // Private Limited
    { ...mainServiceCategories[0].subServices[1], category: mainServiceCategories[0].name }, // OPC
    { ...mainServiceCategories[2].subServices[0], category: mainServiceCategories[2].name }, // GST
    { ...mainServiceCategories[3].subServices[0], category: mainServiceCategories[3].name }  // Trademark
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

// Business incorporation specific utilities
export const getBusinessIncorporationServices = (): (SubService & { category: string })[] => {
  const incorporationCategory = mainServiceCategories.find(cat => cat.id === 'company-formation');
  if (!incorporationCategory) return [];
  
  return incorporationCategory.subServices.map(service => ({
    ...service,
    category: incorporationCategory.name
  }));
};

export const getServicesByCategory = (categoryId: string): (SubService & { category: string })[] => {
  const category = [...mainServiceCategories, ...moreServices].find(cat => cat.id === categoryId);
  if (!category) return [];
  
  return category.subServices.map(service => ({
    ...service,
    category: category.name
  }));
};
