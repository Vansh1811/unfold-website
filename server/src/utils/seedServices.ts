import Service from '../models/Service.model';
import User from '../models/User.model';
import logger from './logger';

const serviceSeeds = [
  {
    title: "Corporate Compliance Consulting",
    shortDescription: "Comprehensive compliance solutions for modern businesses to navigate regulatory landscapes effectively.",
    fullDescription: "Our Corporate Compliance Consulting service provides end-to-end compliance solutions tailored to your business needs. We help organizations understand, implement, and maintain compliance with applicable laws, regulations, and industry standards. Our experienced team works closely with your leadership to develop robust compliance frameworks that protect your business while enabling growth.",
    icon: "Shield",
    category: "compliance",
    features: [
      "Regulatory compliance assessment",
      "Policy development and implementation",
      "Compliance training programs",
      "Regular compliance audits",
      "Risk mitigation strategies"
    ],
    benefits: [
      "Reduced regulatory risk",
      "Enhanced reputation",
      "Operational efficiency",
      "Legal protection",
      "Stakeholder confidence"
    ],
    processSteps: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "Comprehensive evaluation of your current compliance status and identification of gaps"
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Custom compliance strategy aligned with your business objectives and regulatory requirements"
      },
      {
        step: 3,
        title: "Implementation",
        description: "Systematic rollout of compliance policies, procedures, and controls"
      },
      {
        step: 4,
        title: "Monitoring & Review",
        description: "Ongoing monitoring and periodic reviews to ensure continued compliance effectiveness"
      }
    ],
    pricing: {
      type: "project-based",
      startingPrice: 50000,
      currency: "INR",
      description: "Starting from ₹50,000 for small businesses. Custom pricing based on organization size and complexity."
    },
    tags: ["compliance", "regulatory", "risk-management", "corporate-governance"],
    isActive: true,
    isFeatured: true,
    displayOrder: 1,
    estimatedDuration: "2-6 months",
    targetAudience: ["SMEs", "Startups", "Corporate Legal Teams", "Board of Directors"],
    deliverables: [
      "Compliance assessment report",
      "Custom compliance policies",
      "Implementation roadmap",
      "Training materials",
      "Monitoring framework"
    ],
    prerequisites: [
      "Business registration documents",
      "Current organizational structure",
      "Existing policies (if any)"
    ]
  },
  {
    title: "Risk Management Solutions",
    shortDescription: "Identify, assess, and mitigate business risks with our comprehensive risk management framework.",
    fullDescription: "Our Risk Management Solutions help organizations proactively identify, assess, and mitigate various business risks. We provide strategic guidance to build resilient business operations that can withstand market volatility, regulatory changes, and operational challenges. Our approach combines industry best practices with customized solutions tailored to your specific risk profile.",
    icon: "TrendingUp",
    category: "risk-management",
    features: [
      "Risk assessment and analysis",
      "Risk register development",
      "Mitigation strategy design",
      "Crisis management planning",
      "Regular risk monitoring"
    ],
    benefits: [
      "Proactive risk identification",
      "Reduced financial losses",
      "Better decision making",
      "Improved resilience",
      "Stakeholder confidence"
    ],
    processSteps: [
      {
        step: 1,
        title: "Risk Identification",
        description: "Systematic identification of internal and external risks affecting your business"
      },
      {
        step: 2,
        title: "Risk Assessment",
        description: "Quantitative and qualitative analysis of identified risks and their potential impact"
      },
      {
        step: 3,
        title: "Mitigation Planning",
        description: "Development of comprehensive risk mitigation and contingency plans"
      },
      {
        step: 4,
        title: "Implementation & Monitoring",
        description: "Implementation of risk controls and establishment of ongoing monitoring systems"
      }
    ],
    pricing: {
      type: "consultation",
      startingPrice: 25000,
      currency: "INR",
      description: "Initial consultation from ₹25,000. Full project pricing based on scope and duration."
    },
    tags: ["risk-management", "crisis-management", "business-continuity", "strategic-planning"],
    isActive: true,
    isFeatured: true,
    displayOrder: 2,
    estimatedDuration: "1-4 months",
    targetAudience: ["Business Owners", "Risk Managers", "C-Suite Executives", "Board Members"],
    deliverables: [
      "Risk assessment report",
      "Risk register and matrix",
      "Mitigation strategies",
      "Crisis response plan",
      "Monitoring dashboard"
    ]
  },
  {
    title: "Corporate Governance Advisory",
    shortDescription: "Strengthen your governance framework with expert advisory services for boards and management.",
    fullDescription: "Our Corporate Governance Advisory services help organizations establish and maintain effective governance structures that promote transparency, accountability, and long-term value creation. We work with boards, management teams, and stakeholders to implement governance best practices that align with regulatory requirements and industry standards.",
    icon: "Users",
    category: "governance",
    features: [
      "Board effectiveness reviews",
      "Governance framework design",
      "Policy development",
      "Director training programs",
      "ESG integration"
    ],
    benefits: [
      "Enhanced board effectiveness",
      "Improved transparency",
      "Better stakeholder relations",
      "Regulatory compliance",
      "Long-term value creation"
    ],
    processSteps: [
      {
        step: 1,
        title: "Governance Assessment",
        description: "Evaluation of current governance structures, policies, and practices"
      },
      {
        step: 2,
        title: "Framework Design",
        description: "Development of customized governance framework aligned with best practices"
      },
      {
        step: 3,
        title: "Implementation Support",
        description: "Assistance with implementation of governance improvements and policies"
      },
      {
        step: 4,
        title: "Ongoing Advisory",
        description: "Continuous support and advisory services for governance matters"
      }
    ],
    pricing: {
      type: "hourly",
      startingPrice: 5000,
      currency: "INR",
      description: "₹5,000 per hour for advisory services. Retainer packages available for ongoing support."
    },
    tags: ["corporate-governance", "board-advisory", "esg", "transparency", "accountability"],
    isActive: true,
    isFeatured: false,
    displayOrder: 3,
    estimatedDuration: "Ongoing",
    targetAudience: ["Board of Directors", "Senior Management", "Company Secretaries", "Investors"],
    deliverables: [
      "Governance assessment report",
      "Governance framework document",
      "Board charter and policies",
      "Training materials",
      "Implementation guidelines"
    ]
  }
];

export const seedServices = async (): Promise<void> => {
  try {
    // Check if services already exist
    const existingServices = await Service.countDocuments();
    if (existingServices > 0) {
      logger.info('Services already exist, skipping seed');
      return;
    }

    // Find an admin user to assign as creator
    const adminUser = await User.findOne({ role: 'admin' });
    if (!adminUser) {
      logger.error('No admin user found, cannot seed services');
      return;
    }

    // Add creator information to each service
    const servicesWithCreator = serviceSeeds.map(service => ({
      ...service,
      createdBy: adminUser._id,
      updatedBy: adminUser._id
    }));

    // Create services
    await Service.insertMany(servicesWithCreator);
    
    logger.info(`✅ Successfully seeded ${serviceSeeds.length} services`);
  } catch (error) {
    logger.error('Error seeding services:', error);
  }
};
