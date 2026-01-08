import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Shield,
  Users,
  Smartphone,
  Cloud,
  Database,
  Globe,
  Settings,
  BarChart,
  Lock,
  Headphones,
  Award,
  Lightbulb,
  Search,
  DollarSign,
  FileText,
  Scale,
  Building,
  TrendingUp,
  LineChart,
  FileSearch,
  HardHat,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/Breadcrumbs';

interface AdvancedService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
  startingPrice: string;
  duration: string;
  complexity: 'Basic' | 'Intermediate' | 'Advanced' | 'Enterprise';
  category: string;
  popular?: boolean;
}

const advancedServices: AdvancedService[] = [
  // Business Protection & Risk Management Services
  {
    id: 'business-protection',
    title: 'Business Protection & Risk Management',
    description: 'Comprehensive risk management and business protection services to safeguard your interests and ensure legal compliance.',
    icon: <Shield className="h-12 w-12" />,
    features: [
      'Corporate Litigation Support',
      'Secretarial Compliance Management',
      'Labour Law & HR Compliance',
      'Risk Assessment & Mitigation',
      'Dispute Resolution Services',
      'Corporate Governance Advisory',
      'Employment Law Compliance',
      'Contract Management & Review'
    ],
    technologies: ['Legal Framework', 'Compliance Systems', 'Risk Management', 'Corporate Law', 'Labour Law'],
    startingPrice: '₹25,999',
    duration: '1-6 months',
    complexity: 'Advanced',
    category: 'Legal & Compliance',
    popular: true
  },

  // Audit & Financial Assurance Services
  {
    id: 'audit-services',
    title: 'Audit & Financial Assurance',
    description: 'Professional audit and assurance services to ensure financial transparency, regulatory compliance, and business integrity.',
    icon: <Search className="h-12 w-12" />,
    features: [
      'Statutory Audit Services',
      'Internal Audit & Controls',
      'Due Diligence Services',
      'Tax Audit Support',
      'Management Letter Preparation',
      'Compliance Audit Services',
      'Risk-based Audit Approach',
      'Audit Report Finalization'
    ],
    technologies: ['Audit Software', 'Risk Assessment Tools', 'Compliance Systems', 'Financial Analytics', 'Reporting Tools'],
    startingPrice: '₹15,999',
    duration: '2-4 weeks',
    complexity: 'Advanced',
    category: 'Audit & Assurance'
  },

  // Funding & Investment Advisory
  {
    id: 'funding-advisory',
    title: 'Funding & Investment Advisory',
    description: 'Strategic funding and investment advisory services for startups and growing businesses seeking capital and growth opportunities.',
    icon: <DollarSign className="h-12 w-12" />,
    features: [
      'Startup Funding Advisory',
      'IPO Readiness & Valuation',
      'Business Plan Development',
      'Financial Modeling & Projections',
      'Investor Pitch Deck Creation',
      'Due Diligence Support',
      'Valuation Services',
      'Transaction Advisory'
    ],
    technologies: ['Financial Modeling', 'Valuation Tools', 'Market Analysis', 'Investment Platforms', 'Due Diligence Systems'],
    startingPrice: '₹45,999',
    duration: '4-12 weeks',
    complexity: 'Enterprise',
    category: 'Investment & Funding',
    popular: true
  },

  // Mobile App Development
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with cutting-edge features and seamless user experience.',
    icon: <Smartphone className="h-12 w-12" />,
    features: [
      'Native iOS & Android Development',
      'Cross-platform with React Native/Flutter',
      'UI/UX Design & Prototyping',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Third-party Integrations',
      'Analytics & Performance Monitoring'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    startingPrice: '₹1,50,000',
    duration: '3-6 months',
    complexity: 'Advanced',
    category: 'Mobile Development'
  },

  // Cloud Infrastructure & DevOps
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud solutions with automated deployment, monitoring, and infrastructure management for modern businesses.',
    icon: <Cloud className="h-12 w-12" />,
    features: [
      'AWS/Azure/GCP Setup',
      'Docker Containerization',
      'Kubernetes Orchestration',
      'CI/CD Pipeline Setup',
      'Auto-scaling Configuration',
      '24/7 Monitoring & Alerting',
      'Backup & Disaster Recovery',
      'Security Hardening & Compliance'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    startingPrice: '₹2,00,000',
    duration: '2-4 months',
    complexity: 'Enterprise',
    category: 'Cloud & DevOps'
  },

  // AI & Machine Learning Solutions
  {
    id: 'ai-ml-solutions',
    title: 'AI & Machine Learning Solutions',
    description: 'Custom AI/ML models and intelligent automation to transform your business processes and decision-making capabilities.',
    icon: <Lightbulb className="h-12 w-12" />,
    features: [
      'Custom ML Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Chatbot Development',
      'Predictive Analytics',
      'Data Pipeline Creation',
      'Model Deployment & Monitoring',
      'AI Integration Services'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
    startingPrice: '₹3,00,000',
    duration: '4-8 months',
    complexity: 'Enterprise',
    category: 'AI & Machine Learning'
  },

  // Blockchain & Web3 Development
  {
    id: 'blockchain-development',
    title: 'Blockchain & Web3 Development',
    description: 'Decentralized applications, smart contracts, and blockchain solutions for the future of web and finance.',
    icon: <Lock className="h-12 w-12" />,
    features: [
      'Smart Contract Development',
      'DApp Creation & Deployment',
      'NFT Marketplace Development',
      'DeFi Protocol Development',
      'Wallet Integration',
      'Blockchain Consulting',
      'Security Auditing',
      'Multi-chain Support'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS'],
    startingPrice: '₹2,50,000',
    duration: '3-6 months',
    complexity: 'Advanced',
    category: 'Blockchain & Web3'
  },

  // Enterprise Software Development
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Development',
    description: 'Large-scale enterprise applications with advanced features, integrations, and scalability for complex business needs.',
    icon: <Database className="h-12 w-12" />,
    features: [
      'Custom ERP Solutions',
      'CRM Development',
      'Workflow Automation',
      'Advanced Reporting & Analytics',
      'Multi-tenant Architecture',
      'Enterprise Integrations',
      'Role-based Access Control',
      'Audit Trail & Compliance'
    ],
    technologies: ['Node.js', 'Java', '.NET', 'PostgreSQL', 'Redis'],
    startingPrice: '₹5,00,000',
    duration: '6-12 months',
    complexity: 'Enterprise',
    category: 'Enterprise Solutions'
  },

  // IoT & Smart Device Solutions
  {
    id: 'iot-solutions',
    title: 'IoT & Smart Device Solutions',
    description: 'Internet of Things applications connecting physical devices with intelligent software systems for automation and monitoring.',
    icon: <Settings className="h-12 w-12" />,
    features: [
      'IoT Device Integration',
      'Real-time Data Processing',
      'Dashboard & Analytics',
      'Remote Device Management',
      'Edge Computing Solutions',
      'Sensor Data Collection',
      'Automated Alerts & Notifications',
      'Predictive Maintenance'
    ],
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'InfluxDB', 'Grafana'],
    startingPrice: '₹1,75,000',
    duration: '3-5 months',
    complexity: 'Advanced',
    category: 'IoT & Hardware'
  },

  // Cybersecurity & Penetration Testing
  {
    id: 'cybersecurity-solutions',
    title: 'Cybersecurity & Penetration Testing',
    description: 'Comprehensive security auditing, vulnerability assessment, and protection implementation for digital assets.',
    icon: <Shield className="h-12 w-12" />,
    features: [
      'Security Vulnerability Assessment',
      'Penetration Testing',
      'Security Code Review',
      'Compliance Auditing',
      'Security Architecture Design',
      'Incident Response Planning',
      'Employee Security Training',
      'Continuous Monitoring Setup'
    ],
    technologies: ['Kali Linux', 'Metasploit', 'Burp Suite', 'OWASP', 'Nessus'],
    startingPrice: '₹1,25,000',
    duration: '1-3 months',
    complexity: 'Advanced',
    category: 'Security & Compliance'
  },

  // Big Data & Analytics Platform
  {
    id: 'data-analytics',
    title: 'Big Data & Analytics Platform',
    description: 'Advanced data processing, analytics, and business intelligence solutions for data-driven decision making.',
    icon: <BarChart className="h-12 w-12" />,
    features: [
      'Data Warehouse Setup',
      'ETL Pipeline Development',
      'Real-time Analytics',
      'Business Intelligence Dashboards',
      'Machine Learning Integration',
      'Data Visualization',
      'Performance Optimization',
      'Automated Reporting'
    ],
    technologies: ['Apache Spark', 'Elasticsearch', 'Tableau', 'Power BI', 'Kafka'],
    startingPrice: '₹2,25,000',
    duration: '4-6 months',
    complexity: 'Enterprise',
    category: 'Data & Analytics'
  }
];

const complexityColors = {
  'Basic': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-orange-100 text-orange-800',
  'Enterprise': 'bg-purple-100 text-purple-800'
};

const MoreServices = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredServices, setFilteredServices] = useState(advancedServices);

  const categories = ['All', ...Array.from(new Set(advancedServices.map(service => service.category)))];

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredServices(advancedServices);
    } else {
      setFilteredServices(advancedServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'Advanced Services' }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Specialized Professional Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Advanced legal, financial, audit, and technology solutions for businesses ready to 
              scale and embrace comprehensive professional support across all domains.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">200+</div>
                <div className="text-blue-200">Expert Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">200+</div>
                <div className="text-blue-200">Complex Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-blue-200">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">99%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3 rounded-full font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        complexityColors[service.complexity]
                      }`}>
                        {service.complexity}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{service.startingPrice}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 6 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 6} more features
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link to="/contact">
                      Get Quote
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Professional Service Methodology</h2>
            <p className="text-xl text-gray-600">
              We follow a rigorous, client-centric approach to ensure your complex projects are delivered 
              with precision, compliance, and exceeding expectations across all service domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Comprehensive Analysis',
                description: 'In-depth requirement analysis, risk assessment, and compliance evaluation.',
                icon: <Search className="h-8 w-8" />
              },
              {
                step: '02',
                title: 'Strategic Planning',
                description: 'Customized strategy development, timeline planning, and resource allocation.',
                icon: <Settings className="h-8 w-8" />
              },
              {
                step: '03',
                title: 'Expert Execution',
                description: 'Professional implementation with regular monitoring and quality assurance.',
                icon: <Zap className="h-8 w-8" />
              },
              {
                step: '04',
                title: 'Delivery & Support',
                description: 'Final delivery, documentation, training, and ongoing support services.',
                icon: <Shield className="h-8 w-8" />
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Professional-Grade Support</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Our specialized services come with comprehensive support, ongoing maintenance, 
                  and expert consultation to ensure your solutions continue to deliver value.
                </p>
                
                <div className="space-y-4">
                  {[
                    '24/7 Expert Technical Support',
                    'Dedicated Professional Account Manager',
                    'Regular Performance & Compliance Monitoring',
                    'Priority Issue Resolution & Updates',
                    'Scaling & Optimization Advisory',
                    'Comprehensive Training & Documentation',
                    'Regulatory Update Notifications',
                    'Strategic Business Consultation'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-lg p-8">
                  <Headphones className="h-16 w-16 text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Need Expert Consultation?</h3>
                  <p className="text-blue-100 mb-6">
                    Our specialists across legal, financial, audit, and technology domains are ready 
                    to discuss your complex requirements and provide tailored solutions.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>info@unfoldfinleg.com</span>
                    </div>
                  </div>
                  <Button asChild variant="secondary">
                    <Link to="/contact">
                      Schedule Expert Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Join the ranks of successful companies that have leveraged our comprehensive professional 
              services to achieve compliance, growth, and competitive advantages across all business domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Users className="h-5 w-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">
                  <Globe className="h-5 w-5 mr-2" />
                  View Success Stories
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MoreServices;