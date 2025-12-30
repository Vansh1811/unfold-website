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
  {
    id: 'company-formation',
    name: 'Company Formation & Registration',
    slug: 'company-formation',
    description: 'End-to-end company formation services across all major business types in India with expert guidance and complete regulatory compliance.',
    icon: 'Building2',
    subServices: [
      {
        id: 'private-limited-company',
        name: 'Private Limited Company Incorporation',
        slug: 'private-limited-company',
        description: 'Most popular choice for startups and growing enterprises due to its limited liability protection, ease of fundraising, and trusted status with customers and investors.',
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
            description: 'Consultation to fix company name, minimum directors/shareholders, and compliance requirements',
            documents: ['Business concept discussion', 'Shareholding pattern planning', 'Director eligibility verification'],
            timeline: '1 day'
          },
          {
            step: 2,
            title: 'Digital Requirements Setup',
            description: 'Obtaining Digital Signature Certificates (DSCs) and Director Identification Numbers (DINs) for all directors',
            documents: ['PAN cards of directors', 'Aadhaar cards', 'Passport size photographs', 'Address proof'],
            timeline: '2-3 days'
          },
          {
            step: 3,
            title: 'Documentation & Filing',
            description: 'Drafting and e-filing of Memorandum and Articles of Association (MoA/AoA)',
            documents: ['Consent to act as director (DIR-2)', 'Nominee consent form (INC-3)', 'MoA/AoA drafting'],
            timeline: '2-3 days'
          },
          {
            step: 4,
            title: 'Certificate Issuance',
            description: 'Processing and issuance of Certificate of Incorporation (CoI)',
            documents: ['Incorporation certificate', 'PAN and TAN certificates', 'Company master data'],
            timeline: '1-2 days'
          },
          {
            step: 5,
            title: 'Post-Incorporation Setup',
            description: 'Post-incorporation compliance setup and bank account opening assistance',
            documents: ['Current account opening', 'Compliance calendar setup', 'Statutory registers'],
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
            question: 'What is the minimum capital required for Private Limited Company?',
            answer: 'There is no minimum capital requirement as per the current Companies Act, 2013. You can start with Rs. 1000 as authorized capital and even Rs. 100 as paid-up capital.'
          },
          {
            question: 'How many directors and shareholders are required?',
            answer: 'Minimum 2 directors and 2 shareholders are required. Maximum 15 directors are allowed. A person can be both director and shareholder.'
          },
          {
            question: 'Can foreign nationals be directors or shareholders?',
            answer: 'Yes, foreign nationals can be directors and shareholders in an Indian Private Limited Company, subject to FDI regulations and RBI approvals where applicable.'
          },
          {
            question: 'What are the ongoing compliance requirements?',
            answer: 'Annual ROC filings, board meetings, AGM, maintenance of statutory registers, and various periodic returns as per Companies Act, 2013.'
          }
        ],
        pricing: {
          governmentFees: '₹4,000-5,000',
          professionalFees: '₹10,000+',
          totalEstimate: '₹15,000-25,000'
        },
        price: 'Starting at ₹15,999',
        duration: '7-15 days',
        popular: true,
        rating: 4.9,
        reviews: 1250
      },
      {
        id: 'one-person-company',
        name: 'One Person Company (OPC) Setup',
        slug: 'one-person-company',
        description: 'Perfect for solo entrepreneurs who want limited liability protection while maintaining complete control over their business operations.',
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
            description: 'Verify OPC eligibility and business structure consultation',
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
            answer: 'Only an Indian citizen and resident can incorporate an OPC. The person should be a natural person, not a minor.'
          },
          {
            question: 'Can an OPC be converted to Private Limited Company?',
            answer: 'Yes, an OPC can be converted to a Private Limited Company at any time by following the prescribed procedure under Companies Act, 2013.'
          },
          {
            question: 'What is the role of nominee in OPC?',
            answer: 'The nominee will become the member of OPC in case of death or incapacity of the sole member. The nominee should be disclosed at the time of incorporation.'
          }
        ],
        pricing: {
          governmentFees: '₹4,500-6,000',
          professionalFees: '₹8,000+',
          totalEstimate: '₹12,000-20,000'
        },
        price: 'Starting at ₹12,999',
        duration: '7-12 days',
        popular: true,
        rating: 4.8,
        reviews: 890
      },
      {
        id: 'public-limited-company',
        name: 'Public Limited Company Formation',
        slug: 'public-limited-company',
        description: 'Form a Public Limited Company for large-scale business operations with the ability to raise capital from the public through share offerings.',
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
          'Can raise unlimited capital from public',
          'Shares can be freely transferred',
          'Higher market credibility and trust',
          'Better valuation and exit opportunities',
          'Professional governance structure',
          'Access to debt and equity markets'
        ],
        procedure: [
          {
            step: 1,
            title: 'Pre-Incorporation Planning',
            description: 'Detailed consultation for capital structure and regulatory requirements',
            documents: ['Business plan assessment', 'Capital structure planning'],
            timeline: '3-5 days'
          },
          {
            step: 2,
            title: 'Name Reservation & DSC',
            description: 'Company name approval and digital signature setup for directors',
            documents: ['Name availability check', 'DSC and DIN applications'],
            timeline: '3-5 days'
          },
          {
            step: 3,
            title: 'Documentation Filing',
            description: 'Comprehensive MoA/AoA drafting and regulatory filings',
            documents: ['MoA/AoA with detailed objectives', 'Director consent forms'],
            timeline: '5-10 days'
          },
          {
            step: 4,
            title: 'Incorporation Certificate',
            description: 'Certificate of Incorporation processing and issuance',
            documents: ['Incorporation certificate', 'Commencement of business certificate'],
            timeline: '5-10 days'
          }
        ],
        requiredDocuments: [
          'PAN, Aadhaar, and address proof of all directors & subscribers',
          'Minimum 7 subscribers with their complete details',
          'Registered office proof and NOC',
          'Statutory declarations and affidavits',
          'Passport size photographs',
          'Bank certificate for minimum paid-up capital'
        ],
        faqs: [
          {
            question: 'What is the minimum capital required for Public Limited Company?',
            answer: 'The minimum paid-up capital required is ₹5 lakhs as per the Companies Act, 2013.'
          },
          {
            question: 'How many directors and shareholders are required?',
            answer: 'Minimum 3 directors and 7 shareholders are required. There is no maximum limit for shareholders.'
          },
          {
            question: 'Can a Public Limited Company raise funds from the public immediately?',
            answer: 'No, the company needs to obtain commencement of business certificate and comply with SEBI regulations before making public offerings.'
          }
        ],
        pricing: {
          governmentFees: '₹8,000-12,000',
          professionalFees: '₹30,000+',
          totalEstimate: '₹40,000-80,000'
        },
        price: 'Starting at ₹45,999',
        duration: '15-30 days',
        rating: 4.7,
        reviews: 345
      },
      {
        id: 'section8-company',
        name: 'Section 8 Company (Non-Profit) Registration',
        slug: 'section8-company',
        description: 'Establish a Section 8 company for promoting charitable, educational, scientific, or social welfare objectives without profit distribution to members.',
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
          'Complete tax exemption on income',
          'Donors get tax benefits under 80G',
          'No minimum capital requirement',
          'Limited liability protection for members',
          'Access to government and international grants',
          'Professional credibility for charitable work'
        ],
        procedure: [
          {
            step: 1,
            title: 'Objective Definition',
            description: 'In-depth consultation to capture charitable objectives and mission',
            documents: ['Charitable objectives documentation', 'Mission statement'],
            timeline: '2-3 days'
          },
          {
            step: 2,
            title: 'Name Approval & DSC',
            description: 'Name approval and digital signature certificates for directors',
            documents: ['Name availability with charitable suffix', 'DSC applications'],
            timeline: '5-7 days'
          },
          {
            step: 3,
            title: 'Special Documentation',
            description: 'Drafting charitable-oriented MoA/AoA and special resolutions',
            documents: ['Charitable MoA/AoA', 'Board resolutions', 'Director consents'],
            timeline: '5-10 days'
          },
          {
            step: 4,
            title: 'Regulatory Filing',
            description: 'Filing incorporation application with charitable objectives',
            documents: ['Section 8 application', 'Supporting charitable documents'],
            timeline: '8-15 days'
          }
        ],
        requiredDocuments: [
          'PAN, Aadhaar, and address proof of all directors',
          'Detailed charitable objectives and activities',
          'Affidavit regarding non-profit nature',
          'List of proposed activities and beneficiaries',
          'Registered office proof and NOC',
          'Financial projections for charitable activities'
        ],
        faqs: [
          {
            question: 'What are the tax benefits of Section 8 company?',
            answer: 'Section 8 companies are exempt from income tax under Section 12A. Donors can claim deductions under Section 80G if the company is registered.'
          },
          {
            question: 'Can Section 8 company earn profits?',
            answer: 'Yes, but profits cannot be distributed to members and must be used only for charitable objectives mentioned in the MoA.'
          },
          {
            question: 'Is there any minimum capital requirement?',
            answer: 'No, there is no minimum capital requirement for Section 8 companies.'
          }
        ],
        pricing: {
          governmentFees: '₹2,000-3,000',
          professionalFees: '₹12,000+',
          totalEstimate: '₹15,000-30,000'
        },
        price: 'Starting at ₹18,999',
        duration: '20-35 days',
        rating: 4.5,
        reviews: 178
      },
      {
        id: 'producer-company',
        name: 'Producer Company Formation',
        slug: 'producer-company',
        description: 'Form a Producer Company for agricultural and allied activities, combining the benefits of cooperative societies with corporate governance.',
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
            description: 'Consultation with producer members and activity planning',
            documents: ['Producer member details', 'Activity scope definition'],
            timeline: '3-5 days'
          },
          {
            step: 2,
            title: 'Name & Objectives',
            description: 'Name approval and drafting producer-oriented objectives',
            documents: ['Name approval application', 'Producer-specific objectives'],
            timeline: '5-7 days'
          },
          {
            step: 3,
            title: 'Documentation Filing',
            description: 'MoA/AoA drafting specific to producer activities and filing',
            documents: ['Producer Company MoA/AoA', 'Member consent forms'],
            timeline: '7-10 days'
          },
          {
            step: 4,
            title: 'Incorporation Process',
            description: 'Processing incorporation application and certificate issuance',
            documents: ['Incorporation certificate', 'Post-incorporation setup'],
            timeline: '5-8 days'
          }
        ],
        requiredDocuments: [
          'Details of minimum 10 producer members',
          'PAN, Aadhaar of all directors and members',
          'Agricultural/allied activity proof',
          'Producer consent forms',
          'Registered office address proof',
          'Land ownership/lease documents'
        ],
        faqs: [
          {
            question: 'Who can form a Producer Company?',
            answer: 'Only primary producers engaged in agriculture and allied activities can form a Producer Company. Minimum 10 members are required.'
          },
          {
            question: 'What activities can a Producer Company undertake?',
            answer: 'Production, harvesting, procurement, grading, pooling, handling, marketing, selling, export of primary produce and related activities.'
          },
          {
            question: 'Is there any capital requirement?',
            answer: 'Yes, minimum authorized capital of ₹5 lakhs is required for Producer Company formation.'
          }
        ],
        pricing: {
          governmentFees: '₹5,000-7,000',
          professionalFees: '₹15,000+',
          totalEstimate: '₹25,000-40,000'
        },
        price: 'Starting at ₹28,999',
        duration: '15-25 days',
        rating: 4.4,
        reviews: 156
      },
      {
        id: 'nidhi-company',
        name: 'Nidhi Company Incorporation',
        slug: 'nidhi-company',
        description: 'Establish a Nidhi Company for mutual benefit financial activities, focusing on borrowing and lending among members.',
        icon: 'Coins',
        features: [
          'Mutual benefit society structure',
          'Regulated financial activities among members',
          'Member-focused lending and borrowing',
          'Limited regulatory compliance compared to banks',
          'Community-based financial services',
          'Democratic governance structure',
          'RBI exemptions for specific activities',
          'Member dividend distribution allowed'
        ],
        benefits: [
          'Mutual benefit financial society for members',
          'Lower regulatory compliance than banks',
          'Member-centric lending and borrowing',
          'Community-based financial inclusion',
          'Democratic management by members',
          'Exemptions from certain RBI regulations'
        ],
        procedure: [
          {
            step: 1,
            title: 'Member Planning',
            description: 'Planning member structure and financial activity scope',
            documents: ['Member planning documents', 'Financial activity scope'],
            timeline: '3-5 days'
          },
          {
            step: 2,
            title: 'Capital & Compliance',
            description: 'Capital structure planning and compliance framework setup',
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
            description: 'Processing registration and obtaining necessary approvals',
            documents: ['Registration certificate', 'RBI compliance setup'],
            timeline: '10-15 days'
          }
        ],
        requiredDocuments: [
          'Minimum 7 members and 3 directors details',
          'PAN, Aadhaar, and address proof of all members',
          'Minimum capital of Rs. 5 lakhs proof',
          'Member consent and subscription forms',
          'Registered office proof and NOC',
          'Bank certificate for capital deposit'
        ],
        faqs: [
          {
            question: 'What is the minimum capital required for Nidhi Company?',
            answer: 'Minimum paid-up capital and net worth of ₹5 lakhs each is required for Nidhi Company.'
          },
          {
            question: 'What are the membership requirements?',
            answer: 'Minimum 7 members are required with minimum 3 directors. All members must be individuals, not companies.'
          },
          {
            question: 'Are Nidhi Companies regulated by RBI?',
            answer: 'Nidhi Companies are exempt from core provisions of RBI Act but need to comply with specific Nidhi Rules under Companies Act.'
          }
        ],
        pricing: {
          governmentFees: '₹6,000-8,000',
          professionalFees: '₹20,000+',
          totalEstimate: '₹30,000-50,000'
        },
        price: 'Starting at ₹35,999',
        duration: '20-30 days',
        rating: 4.3,
        reviews: 134
          },
    {
      id: 'llp-formation',
      name: 'Limited Liability Partnership (LLP) Formation',
      slug: 'llp-formation',
      description: 'Form a Limited Liability Partnership combining advantages of partnership and company structure with professional management and limited liability benefits.',
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
          description: 'Determine partner structure, profit sharing, and LLP objectives',
          documents: ['Partner details', 'Profit sharing plan', 'Business objectives'],
          timeline: '1-2 days'
        },
        {
          step: 2,
          title: 'DSC & DIN Acquisition',
          description: 'Obtain Digital Signature Certificates and Designation Identification Numbers',
          documents: ['PAN of all partners', 'Aadhaar cards', 'Passport photographs'],
          timeline: '2-3 days'
        },
        {
          step: 3,
          title: 'LLP Agreement Drafting',
          description: 'Draft comprehensive LLP Agreement and initial filing documents',
          documents: ['LLP Agreement', 'Initial filing forms (Form 1, 2)'],
          timeline: '2-3 days'
        },
        {
          step: 4,
          title: 'Registration & Certificate',
          description: 'File with ROC and obtain LLP Registration Certificate',
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
          answer: 'Minimum 2 partners are required for LLP formation, with at least 1 Indian resident.'
        },
        {
          question: 'Is LLP suitable for professionals?',
          answer: 'Yes, LLP is ideal for professional service firms like law, consulting, and accounting practices.'
        },
        {
          question: 'What are the compliance requirements for LLP?',
          answer: 'Annual returns filing, maintaining statutory registers, LLP Agreement compliance, and periodic ROC submissions.'
        }
      ],
      pricing: {
        governmentFees: '₹5,000-7,000',
        professionalFees: '₹10,000+',
        totalEstimate: '₹15,000-25,000'
      },
      price: 'Starting at ₹14,999',
      duration: '10-15 days',
      rating: 4.7,
      reviews: 567
    }


    ]
  },
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
        price: 'Starting at ₹8,999/month',
        duration: 'Monthly service',
        rating: 4.7,
        reviews: 567
      },
      {
        id: 'secretarial-audit',
        name: 'Secretarial Audit',
        slug: 'secretarial-audit',
        description: 'Mandatory secretarial audit for applicable companies under Companies Act with detailed compliance verification.',
        icon: 'Search',
        features: [
          'Comprehensive compliance verification audit',
          'Statutory audit requirements assessment',
          'Form MR-3 filing and documentation',
          'Non-compliance identification and reporting',
          'Detailed audit report preparation',
          'Regulatory advisory and recommendations',
          'Follow-up on compliance improvements',
          'Annual audit planning and scheduling'
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
        price: 'Starting at ₹5,999',
        duration: '10-15 days',
        rating: 4.5,
        reviews: 432
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
      price: 'Starting at ₹3,999 per transfer',
      duration: '10-15 days',
      rating: 4.6,
      reviews: 234
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
      price: 'Starting at ₹7,999',
      duration: '15-25 days',
      rating: 4.5,
      reviews: 189
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
      price: 'Starting at ₹5,999',
      duration: '12-20 days',
      rating: 4.6,
      reviews: 156
        
       },
    {
      id: 'auditor-appointment',
      name: 'Auditor Appointment (ADT-1 Filing)',
      slug: 'auditor-appointment',
      description: 'Complete auditor appointment compliance with form ADT-1 filing and regulatory requirements.',
      icon: 'CheckCircle',
      features: [
        'Auditor selection and eligibility verification',
        'Form ADT-1 filing with ROC',
        'Remuneration determination and approval',
        'Board resolution preparation',
        'Shareholder communication and consent',
        'Auditor agreement documentation',
        'Compliance with Auditor rotation rules',
        'Annual audit coordination support'
      ],
      benefits: [
        'Ensure proper statutory audit compliance',
        'Expert guidance on auditor selection criteria',
        'Proper remuneration determination and approval',
        'Timely filing with regulatory authorities',
        'Audit rotation compliance',
        'Professional documentation and coordination'
      ],
      procedure: [
        {
          step: 1,
          title: 'Auditor Selection & Eligibility Check',
          description: 'Identify eligible auditors, verify CA registration and qualifications, check independence requirements',
          documents: ['Auditor list', 'CA registration', 'Independence declaration'],
          timeline: '2-3 days'
        },
        {
          step: 2,
          title: 'Remuneration Determination',
          description: 'Determine reasonable audit fees, prepare fee justification, board approval for remuneration',
          documents: ['Fee proposal', 'Justification document', 'Board resolution'],
          timeline: '2-3 days'
        },
        {
          step: 3,
          title: 'Shareholder Approval',
          description: 'Conduct AGM or EGM, pass resolution for auditor appointment, obtain shareholder consent',
          documents: ['AGM/EGM notice', 'Meeting minutes', 'Shareholder resolution'],
          timeline: '3-5 days'
        },
        {
          step: 4,
          title: 'Form ADT-1 Filing',
          description: 'Prepare Form ADT-1, file with ROC, obtain filing acknowledgment, share with appointed auditor',
          documents: ['Form ADT-1', 'ROC filing receipt', 'Auditor acknowledgment'],
          timeline: '3-5 days'
        }
      ],
      requiredDocuments: [
        'Board resolution for auditor proposal',
        'Shareholder meeting minutes (AGM/EGM)',
        'Auditor consent letter',
        'Auditor declaration of independence',
        'CA registration certificate',
        'Form ADT-1 completed and signed',
        'Proof of remuneration approval',
        'Certificate of incorporation',
        'List of current directors and shareholders'
      ],
      faqs: [
        {
          question: 'Can the same auditor be appointed for multiple years?',
          answer: 'Yes, up to 5 consecutive years (or 2 terms), after which rotation is required'
        },
        {
          question: 'What if auditor resigns during tenure?',
          answer: 'Replacement auditor can be appointed through EGM; Form ADT-1 must be refiled'
        },
        {
          question: 'Are there minimum qualifications for auditors?',
          answer: 'Yes, must be a practicing chartered accountant with valid registration'
        },
        {
          question: 'Can we appoint a firm as auditor?',
          answer: 'Yes, both individual CAs and CA firms can be appointed as auditors'
        }
      ],
      price: 'Starting at ₹2,999',
      duration: '7-10 days',
      rating: 4.7,
      reviews: 345
    }
    ]
  },

  
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
        price: 'Starting at ₹1,999',
        duration: '7-15 days',
        popular: true,
        rating: 4.8,
        reviews: 4500
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
        price: 'Starting at ₹2,499/month',
        duration: 'Monthly service',
        rating: 4.7,
        reviews: 1890
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
        price: 'Starting at ₹4,999/month',
        duration: 'Monthly service',
        rating: 4.6,
        reviews: 1200
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
        price: 'Starting at ₹9,999',
        duration: '7-15 days',
        rating: 4.5,
        reviews: 456
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
      price: 'Starting at ₹1,999/month',
      duration: 'Monthly service',
      rating: 4.6,
      reviews: 678
    }

    ]
  },
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
        price: 'Starting at ₹8,999',
        duration: '3-6 months',
        rating: 4.7,
        reviews: 456
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
        price: 'Starting at ₹35,999',
        duration: '18-36 months',
        rating: 4.6,
        reviews: 234
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
      price: 'Starting at ₹4,999',
      duration: '10-15 days',
      rating: 4.5,
      reviews: 289
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
      price: 'Starting at ₹3,999',
      duration: '5-10 days',
      rating: 4.8,
      reviews: 456
    }


    ]
  },
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
    description: 'Various business licenses and registrations for different industries with expert guidance.',
    icon: 'FileCheck2',
    subServices: [
      {
        id: 'fssai-registration',
        name: 'FSSAI Food License Registration',
        slug: 'fssai-registration',
        description: 'Food Safety and Standards Authority license for food businesses with complete compliance.',
        icon: 'Utensils',
        features: [
          'FSSAI license application and processing',
          'Food safety compliance guidance and support',
          'Complete documentation preparation and filing',
          'License renewal services and management',
          'Compliance monitoring and audit support',
          'Amendment and modification services',
          'Food safety training and certification',
          'Regulatory updates and advisory services'
        ],
        price: 'Starting at ₹2,999',
        duration: '7-15 days',
        popular: true,
        rating: 4.8,
        reviews: 1234
      },
      {
        id: 'import-export-code',
        name: 'Import Export Code (IEC)',
        slug: 'import-export-code',
        description: 'IEC registration for businesses engaged in international trade with complete support.',
        icon: 'Globe',
        features: [
          'Complete IEC application and filing process',
          'Documentation preparation and verification',
          'Digital signature assistance and coordination',
          'Certificate delivery and verification',
          'Modification services and updates',
          'Export-import guidance and advisory',
          'Customs clearance support and assistance',
          'International trade compliance advisory'
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
        description: 'DPIIT recognition and Startup India benefits registration with complete support.',
        icon: 'Rocket',
        features: [
          'DPIIT recognition certificate processing',
          'Tax exemption benefits facilitation',
          'IPR fast-track processing support',
          'Government tender benefits access',
          'Funding opportunities access and guidance',
          'Compliance relaxations and benefits',
          'Startup ecosystem networking support',
          'Government scheme access and advisory'
        ],
        price: 'Starting at ₹4,999',
        duration: '15-20 days',
        trending: true,
        popular: true,
        rating: 4.9,
        reviews: 890
      },
      {
        id: 'msme-registration',
        name: 'MSME Registration (Udyam)',
        slug: 'msme-registration',
        description: 'Micro, Small & Medium Enterprise registration for government benefits and support.',
        icon: 'Factory',
        features: [
          'Udyam registration certificate processing',
          'Government scheme benefits facilitation',
          'Subsidy and loan benefits access',
          'Priority sector lending support',
          'Government tender preference benefits',
          'Compliance simplification and support',
          'MSME scheme advisory and guidance',
          'Annual compliance and renewal support'
        ],
        price: 'Starting at ₹1,999',
        duration: '3-7 days',
        rating: 4.6,
        reviews: 2100
      },
      {
        id: 'digital-signature-certificate',
        name: 'Digital Signature Certificate (DSC)',
        slug: 'digital-signature-certificate',
        description: 'Digital Signature Certificate for secure online transactions and government filings.',
        icon: 'Key',
        features: [
          'Class 2 and Class 3 DSC issuance',
          'Individual and organization DSC options',
          'Token-based and USB-based certificates',
          'Installation and setup assistance',
          'Renewal and reissuance services',
          'Technical support and troubleshooting',
          'Multiple validity period options',
          'Secure delivery and documentation'
        ],
        price: 'Starting at ₹899',
        duration: '1-3 days',
        rating: 4.5,
        reviews: 3456
        },
  {
    id: 'day-to-day-advisory',
    name: 'Day-to-Day Financial Advisory',
    slug: 'day-to-day-advisory',
    description: 'Ongoing daily financial advisory and decision support for operational and strategic needs.',
    icon: 'MessageCircle',
    subServices: [
      {
        id: 'financial-advisory-daily',
        name: 'Daily Financial Advisory',
        slug: 'financial-advisory-daily',
        description: 'Daily operational financial guidance and real-time decision support.',
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
            description: 'Review current financial position, analyze cash flow patterns',
            documents: ['Financial statements', 'Cash flow analysis', 'Assessment'],
            timeline: '3-5 days'
          },
          {
            step: 2,
            title: 'Advisory Framework Setup',
            description: 'Define scope, frequency, communication channels',
            documents: ['Scope document', 'Communication plan', 'Timeline'],
            timeline: '2-3 days'
          },
          {
            step: 3,
            title: 'Ongoing Daily Support',
            description: 'Daily guidance, weekly reviews, monthly analysis',
            documents: ['Daily notes', 'Weekly reports', 'Monthly analysis'],
            timeline: 'Continuous'
          },
          {
            step: 4,
            title: 'Optimization & Improvement',
            description: 'Cost-saving measures, payment cycles, working capital',
            documents: ['Recommendations', 'Implementation plan', 'Results'],
            timeline: 'Ongoing'
          }
        ],
        requiredDocuments: [
          'Last 3 months bank statements',
          'Current P&L statement',
          'Balance sheet',
          'Accounts receivable/payable aging',
          'Cash flow forecast',
          'List of regular expenses',
          'Vendor and customer payment terms',
          'Pending financial decisions',
          'Business growth plans'
        ],
        faqs: [
          {
            question: 'What is the scope of day-to-day advisory?',
            answer: 'Daily financial guidance, decision support, cost optimization, query resolution'
          },
          {
            question: 'How quickly are queries responded to?',
            answer: 'Usually within 24 hours; urgent queries within 2-4 hours'
          },
          {
            question: 'Can advisory help in fundraising?',
            answer: 'Yes, we guide financial preparation and presentation for investors'
          },
          {
            question: 'Is advisory suitable for small businesses?',
            answer: 'Yes, especially helpful for startups and SMEs managing cash flow'
          }
        ],
        price: 'Starting at ₹19,999/month',
        duration: 'Monthly service',
        rating: 4.7,
        reviews: 234
      }
    ]
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
        price: 'Starting at ₹35,999',
        duration: '20-30 days',
        rating: 4.7,
        reviews: 123
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
        price: 'Starting at ₹9,999',
        duration: '7-15 days',
        rating: 4.6,
        reviews: 234
      }
    ]
  }
];

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: '1',
    clientName: 'Rajesh Kumar',
    company: 'TechStart Solutions Pvt Ltd',
    industry: 'Technology',
    location: 'Bangalore',
    serviceUsed: 'Private Limited Company Incorporation',
    testimonial: 'Unfold helped us navigate complex compliance requirements seamlessly. Their expertise in company incorporation saved us months of work and ensured we started on the right legal foundation. The entire process was transparent and professional.',
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
    testimonial: 'The FSSAI registration process was handled professionally with excellent attention to detail. Their team made the entire food licensing process smooth and efficient. Highly recommend their regulatory expertise.',
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
    testimonial: 'Their trademark registration services protected our brand effectively with comprehensive legal support. The team handled objections professionally and secured our trademark successfully. Excellent service quality.',
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
    testimonial: 'Virtual CFO services transformed our financial management completely. The strategic insights and professional guidance have been invaluable for our business growth and decision-making process.',
    rating: 5,
    initials: 'SR'
  },
  {
    id: '5',
    clientName: 'Vikram Singh',
    company: 'Agri Fresh Producer Company',
    industry: 'Agriculture',
    location: 'Punjab',
    serviceUsed: 'Producer Company Formation',
    testimonial: 'As farmers, we needed expert guidance for forming our Producer Company. Unfold made the complex process simple and helped us access government benefits effectively. Great support throughout.',
    rating: 5,
    initials: 'VS'
  },
  {
    id: '6',
    clientName: 'Meera Krishnan',
    company: 'Social Impact Foundation',
    industry: 'Non-Profit',
    location: 'Chennai',
    serviceUsed: 'Section 8 Company Registration',
    testimonial: 'Their expertise in non-profit registration helped us establish our charitable organization with all tax benefits. The team understood our social mission and provided excellent guidance for compliance.',
    rating: 5,
    initials: 'MK'
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
