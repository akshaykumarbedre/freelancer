import Image from "next/image";
import Link from "next/link";
import { Briefcase, Code, Mail, Github, Linkedin, Bot, BarChart, Braces, Server, MessageSquare, Workflow, Zap, Award, ArrowLeft, Database } from 'lucide-react';

export const metadata = {
  title: 'AI Project Details | Akshay Kumar BM',
  description: 'Detailed case studies of successful AI implementations for small businesses, including chatbots, automation, and analytics solutions',
  keywords: 'AI case studies, small business AI, project details, AI implementation, business automation',
}

const projectsData = {
  'small-biz-chatbot': {
    id: 'small-biz-chatbot',
    title: "Small Business AI Chatbot",
    tagline: "24/7 customer support solution that increases response rates and reduces support costs",
    category: "Customer Service",
    mainImage: "/chatbot.svg",
    metrics: {
      responseRate: "85% increase",
      costReduction: "40% reduction",
      satisfactionScore: "92% positive",
      timeframe: "2 weeks",
    },
    technologies: [
      { name: "OpenAI API", icon: <Bot className="w-6 h-6" /> },
      { name: "React", icon: <Code className="w-6 h-6" /> },
      { name: "Node.js", icon: <Server className="w-6 h-6" /> },
      { name: "MongoDB", icon: <Database className="w-6 h-6" /> }
    ],
    challenge: {
      description: `Local retail chains face significant challenges in providing consistent, round-the-clock customer support. 
      Traditional methods of hiring more staff or outsourcing support are often costly and can lead to inconsistent service quality. 
      Our client was struggling with:
      
      • Long response times during peak hours and after business hours
      • High costs of maintaining a support team
      • Inconsistent quality of support across different staff members
      • Limited ability to handle multiple inquiries simultaneously`,
      industryContext: "Retail / E-commerce",
      clientProfile: "Multi-location retail chain with 5 physical stores and an online presence"
    },
    solution: {
      approach: `Our solution was a customized AI chatbot that could:
      
      1. Handle common customer inquiries 24/7
      2. Integrate with existing inventory and order systems
      3. Provide consistent, accurate responses
      4. Escalate complex issues to human staff when necessary`,
      timeline: "2 weeks from concept to deployment",
      keyFeatures: [
        "Natural language processing for human-like interactions",
        "Real-time inventory checking",
        "Order status tracking integration",
        "Smart escalation protocols",
        "Multi-language support"
      ]
    },
    impact: {
      metrics: [
        { label: "Response Time", before: "15 minutes", after: "Instant" },
        { label: "Support Costs", before: "₹45,000/month", after: "₹27,000/month" },
        { label: "Customer Satisfaction", before: "76%", after: "92%" },
        { label: "Inquiry Handling Capacity", before: "100/day", after: "500+/day" }
      ],
      testimonial: {
        text: "The AI chatbot has transformed how we handle customer support. We're saving money while providing better service.",
        author: "Operations Manager",
        company: "Leading Retail Chain"
      },
      roi: {
        monthly_savings: "₹18,000",
        payback_period: "3 months",
        first_year_roi: "280%"
      }
    },
    technical: {
      stack: [
        {
          name: "OpenAI GPT-4",
          purpose: "Natural language processing and response generation"
        },
        {
          name: "React",
          purpose: "Frontend interface and admin dashboard"
        },
        {
          name: "Node.js",
          purpose: "Backend API and system integration"
        },
        {
          name: "MongoDB",
          purpose: "Conversation history and analytics storage"
        }
      ],
      security: [
        "End-to-end encryption",
        "Role-based access control",
        "Data anonymization",
        "Regular security audits"
      ]
    },
    futurePlans: [
      "Voice interaction capability",
      "Advanced analytics dashboard",
      "Integration with additional CRM platforms",
      "Multi-channel support (WhatsApp, Facebook)"
    ]
  },
  'email-automation': {
    id: 'email-automation',
    title: "Email & Task Automation System",
    tagline: "AI-powered workflow automation that saves 15+ hours weekly for small businesses",
    category: "Business Automation",
    mainImage: "/automation.svg",
    metrics: {
      timeSaved: "15+ hours/week",
      costReduction: "35% reduction",
      accuracy: "99.8% accuracy",
      timeframe: "3 weeks"
    },
    technologies: [
      { name: "Python", icon: <Code className="w-6 h-6" /> },
      { name: "GPT-4", icon: <Bot className="w-6 h-6" /> },
      { name: "Azure Functions", icon: <Server className="w-6 h-6" /> },
      { name: "Power Automate", icon: <Workflow className="w-6 h-6" /> }
    ],
    challenge: {
      description: `Small accounting firms face overwhelming email volumes and repetitive document processing tasks.
      Manual handling leads to:
      
      • Staff spending 40% of their time on email management
      • Delayed response times to client inquiries
      • Increased risk of human error in document processing
      • Limited capacity to take on new clients`,
      industryContext: "Professional Services / Accounting",
      clientProfile: "Accounting firm with 8 staff members serving 120+ small business clients"
    },
    solution: {
      approach: `We developed an intelligent automation system that:
      
      1. Automatically categorizes and prioritizes incoming emails
      2. Generates contextually accurate responses for common queries
      3. Extracts and processes data from financial documents
      4. Routes complex matters to appropriate team members`,
      timeline: "3 weeks from planning to full implementation",
      keyFeatures: [
        "AI-powered email classification",
        "Smart response generation",
        "Document data extraction",
        "Automated workflow routing",
        "Integration with accounting software"
      ]
    },
    impact: {
      metrics: [
        { label: "Time on Email Management", before: "16 hours/week", after: "4 hours/week" },
        { label: "Response Time", before: "8 hours", after: "30 minutes" },
        { label: "Document Processing", before: "20 mins/doc", after: "2 mins/doc" },
        { label: "Staff Capacity", before: "15 clients/staff", after: "25 clients/staff" }
      ],
      testimonial: {
        text: "This automation system has transformed our practice. We're more responsive to clients and can focus on high-value advisory work.",
        author: "Senior Partner",
        company: "Regional Accounting Firm"
      },
      roi: {
        monthly_savings: "₹45,000",
        payback_period: "2.5 months",
        first_year_roi: "320%"
      }
    },
    technical: {
      stack: [
        {
          name: "Python & GPT-4",
          purpose: "Email analysis and response generation"
        },
        {
          name: "Azure Functions",
          purpose: "Serverless automation workflows"
        },
        {
          name: "Power Automate",
          purpose: "Business process automation"
        },
        {
          name: "Azure SQL",
          purpose: "Secure data storage and analytics"
        }
      ],
      security: [
        "256-bit encryption",
        "Multi-factor authentication",
        "Audit logging",
        "Data retention policies"
      ]
    },
    futurePlans: [
      "Advanced document processing capabilities",
      "Custom AI model training",
      "Mobile app for on-the-go approvals",
      "Expanded software integrations"
    ]
  },
  
  'analytics-dashboard': {
    id: 'analytics-dashboard',
    title: "Small Business Analytics Dashboard",
    tagline: "Data-driven insights that helped increase profits by 22% for a family restaurant",
    category: "Business Intelligence",
    mainImage: "/analytics.svg",
    metrics: {
      profitIncrease: "22% growth",
      customerRetention: "35% improvement",
      inventoryWaste: "40% reduction",
      timeframe: "4 weeks"
    },
    technologies: [
      { name: "TensorFlow", icon: <Braces className="w-6 h-6" /> },
      { name: "Next.js", icon: <Code className="w-6 h-6" /> },
      { name: "D3.js", icon: <BarChart className="w-6 h-6" /> },
      { name: "Firebase", icon: <Server className="w-6 h-6" /> }
    ],
    challenge: {
      description: `Family restaurants struggle to compete without access to the sophisticated analytics tools used by large chains.
      Key challenges included:
      
      • No visibility into peak hours and staffing needs
      • High inventory waste due to unpredictable demand
      • Limited understanding of customer preferences
      • Difficulty in pricing menu items optimally`,
      industryContext: "Food Service / Restaurant",
      clientProfile: "Family-owned restaurant with 2 locations and 25 staff members"
    },
    solution: {
      approach: `We built a comprehensive analytics dashboard that:
      
      1. Analyzes sales patterns and customer behavior
      2. Predicts demand for inventory management
      3. Optimizes menu pricing and staff scheduling
      4. Tracks customer satisfaction and loyalty`,
      timeline: "4 weeks from concept to deployment",
      keyFeatures: [
        "Real-time sales tracking",
        "Predictive analytics",
        "Customer behavior insights",
        "Inventory optimization",
        "Staff scheduling assistant"
      ]
    },
    impact: {
      metrics: [
        { label: "Monthly Profit", before: "₹3,50,000", after: "₹4,27,000" },
        { label: "Food Waste", before: "15% of inventory", after: "9% of inventory" },
        { label: "Staff Efficiency", before: "72% utilization", after: "89% utilization" },
        { label: "Customer Return Rate", before: "45%", after: "61%" }
      ],
      testimonial: {
        text: "The insights from this system helped us make better decisions about everything - from what to stock to when to staff extra people. Our profits are up and waste is down.",
        author: "Owner",
        company: "Family Restaurant Chain"
      },
      roi: {
        monthly_savings: "₹77,000",
        payback_period: "2 months",
        first_year_roi: "450%"
      }
    },
    technical: {
      stack: [
        {
          name: "TensorFlow",
          purpose: "Predictive analytics and demand forecasting"
        },
        {
          name: "Next.js & D3.js",
          purpose: "Interactive dashboard interface"
        },
        {
          name: "Firebase",
          purpose: "Real-time data storage and analytics"
        },
        {
          name: "Python",
          purpose: "Data processing and analysis"
        }
      ],
      security: [
        "Secure cloud storage",
        "Role-based access",
        "Data encryption",
        "Automated backups"
      ]
    },
    futurePlans: [
      "AI-powered menu optimization",
      "Customer feedback analysis",
      "Competitor price monitoring",
      "Mobile app for managers"
    ]
  }
};

export default async function ProjectDetail({ params }) {
  // Properly handle params asynchronously
  const projectId = await params.id;
  const project = projectsData[projectId];
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <Link href="/#projects" className="inline-flex items-center text-indigo-600 mb-6 hover:text-indigo-800">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-slate-600">{project.tagline}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Results</h2>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="font-medium text-slate-600 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h3>
                  <p className="text-2xl font-bold text-indigo-600">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-slate-600 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    {tech.icon}
                    <span className="ml-2">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="prose max-w-none">
                {project.challenge.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-slate-600">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Industry</h3>
                <p className="text-slate-600">{project.challenge.industryContext}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Client Profile</h3>
                <p className="text-slate-600">{project.challenge.clientProfile}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="prose max-w-none">
              {project.solution.approach.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-slate-600">{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Implementation Timeline</h3>
              <p className="text-slate-600">{project.solution.timeline}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Key Features</h3>
            <ul className="space-y-4">
              {project.solution.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Business Impact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {project.impact.metrics.map((metric, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-semibold mb-4">{metric.label}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500">Before</p>
                        <p className="text-lg font-medium">{metric.before}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">After</p>
                        <p className="text-lg font-medium text-green-600">{metric.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-indigo-50 p-8 rounded-xl mb-8">
                <h3 className="font-semibold mb-4">ROI Analysis</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-slate-600">Monthly Savings</dt>
                    <dd className="text-2xl font-bold text-indigo-600">{project.impact.roi.monthly_savings}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-600">Payback Period</dt>
                    <dd className="text-2xl font-bold text-indigo-600">{project.impact.roi.payback_period}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-600">First Year ROI</dt>
                    <dd className="text-2xl font-bold text-indigo-600">{project.impact.roi.first_year_roi}</dd>
                  </div>
                </dl>
              </div>
              <blockquote className="border-l-4 border-indigo-500 pl-4 italic">
                <p className="text-slate-600 mb-4">{project.impact.testimonial.text}</p>
                <footer>
                  <p className="font-medium">{project.impact.testimonial.author}</p>
                  <p className="text-slate-500">{project.impact.testimonial.company}</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Details</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-6">Technology Stack</h3>
            <div className="space-y-4">
              {project.technical.stack.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-medium mb-2">{tech.name}</h4>
                  <p className="text-slate-600">{tech.purpose}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Security Features</h3>
            <ul className="space-y-4">
              {project.technical.security.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Future Plans
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Future Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.futurePlans.map((plan, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-medium mb-2">Phase {index + 1}</h3>
                <p className="text-slate-600">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how a similar solution can help your business grow</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/#contact" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition shadow-md font-medium"
            >
              Book Free Consultation
            </a>
            <a 
              href={`https://github.com/akshaykumarbedre/${projectId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition font-medium"
            >
              View Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}