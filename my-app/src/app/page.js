import Image from "next/image";
import { Briefcase, Code, Mail, Github, Linkedin, Bot, BarChart, Braces, Server, MessageSquare, Workflow, Zap, Award } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Akshay Kumar BM | AI Solutions for Small Businesses',
  description: 'Affordable AI solutions for small businesses - chatbots, automation, data analytics, and custom integrations that boost efficiency and growth',
  keywords: 'AI for small business, affordable chatbot, AI automation, small business AI, AI consultant, chatbot developer',
}

export default function Home() {
  const projects = [
    {
      id: 'small-biz-chatbot',
      title: "Small Business AI Chatbot",
      description: "24/7 customer support chatbot that increased response rates by 85% and reduced support costs by 40% for a local retail chain",
      technologies: ["OpenAI API", "React", "Node.js", "MongoDB"],
      imageUrl: "/chatbot.svg",  // Using available icon as placeholder
      demoUrl: "https://small-biz-chatbot-demo.vercel.app",
      githubUrl: "https://github.com/akshaykumarbedre/small-biz-chatbot"
    },
    {
      id: 'email-automation',
      title: "Email & Task Automation System",
      description: "AI workflow automation that saved 15+ hours weekly for a small accounting firm by automating email responses and document processing",
      technologies: ["Python", "GPT-4", "Azure Functions", "Power Automate"],
      imageUrl: "/automation.svg",  // Using available icon as placeholder
      demoUrl: "https://task-automation-demo.vercel.app",
      githubUrl: "https://github.com/akshaykumarbedre/email-automation"
    },
    {
      id: 'analytics-dashboard',
      title: "Small Business Analytics Dashboard",
      description: "Affordable data analytics solution that helped a family restaurant increase profits by 22% through customer behavior insights",
      technologies: ["TensorFlow", "Next.js", "D3.js", "Firebase"],
      imageUrl: "/analytics.svg",  // Using available icon as placeholder
      demoUrl: "https://small-biz-analytics.vercel.app",
      githubUrl: "https://github.com/akshaykumarbedre/small-biz-analytics"
    }
  ];

  const services = [
    {
      title: "AI Customer Service Chatbots",
      description: "Affordable 24/7 customer support chatbots that handle inquiries, bookings, and FAQs so you can focus on running your business",
      icon: <MessageSquare className="w-10 h-10 text-indigo-500" />,
      priceRange: "Starting at ₹25,000"
    },
    {
      title: "Business Process Automation",
      description: "Streamline repetitive tasks like email sorting, appointment scheduling, and document processing with custom AI solutions",
      icon: <Workflow className="w-10 h-10 text-indigo-500" />,
      priceRange: "Starting at ₹30,000"
    },
    {
      title: "Small Business Analytics",
      description: "Turn your business data into actionable insights with easy-to-understand dashboards and customer behavior analysis",
      icon: <BarChart className="w-10 h-10 text-indigo-500" />,
      priceRange: "Starting at ₹20,000"
    },
    {
      title: "Custom AI Integrations",
      description: "Integrate AI tools into your existing systems (website, CRM, inventory) without disrupting your current operations",
      icon: <Zap className="w-10 h-10 text-indigo-500" />,
      priceRange: "Starting at ₹35,000"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Owner, Spice Garden Restaurant",
      content: "Akshay built a reservation chatbot for our restaurant that handles 80% of our bookings automatically. It's like having another full-time employee but at a fraction of the cost. Best investment we've made this year!",
      avatarUrl: "/images/testimonial-1.jpg"
    },
    {
      name: "Rajesh Patel",
      role: "Founder, QuickFix Plumbing",
      content: "As a small plumbing business, we couldn't afford fancy software. Akshay created an affordable AI system that schedules appointments, sends reminders, and even helps with job estimates. Our customers are impressed, and we've grown 30% since implementing it.",
      avatarUrl: "/images/testimonial-2.jpg"
    }
  ];

  const benefits = [
    {
      title: "Affordable Solutions",
      description: "AI technology tailored to small business budgets - pay only for what you need",
      icon: <Award className="w-8 h-8 text-green-500" />
    },
    {
      title: "Quick Implementation",
      description: "Get up and running in weeks, not months, with solutions designed for rapid deployment",
      icon: <Zap className="w-8 h-8 text-green-500" />
    },
    {
      title: "Measurable Results",
      description: "Clear ROI with systems that deliver tangible time and cost savings from day one",
      icon: <BarChart className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Bot className="mr-2 text-indigo-600" /> 
            <span className="hidden sm:inline">Akshay Kumar BM</span>
            <span className="sm:hidden">AK</span>
          </h1>
          <nav className="space-x-4 text-sm sm:text-base">
            <a href="#services" className="hover:text-indigo-600 transition">Services</a>
            <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow-sm">
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            AI Solutions for Small Businesses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Grow Your Small Business with<br />
            <span className="text-indigo-600">Affordable AI Tools</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 mb-6">
            Custom chatbots, automation solutions, and AI integrations that save time, 
            reduce costs, and help your small business compete with the big players.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition shadow-md font-medium"
            >
              Get Free Consultation
            </a>
            <a 
              href="#services" 
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition font-medium"
            >
              View AI Services
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/hero-image.jpg"
              alt="AI Solutions for Small Business" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg border-t-4 border-indigo-500"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-2 inline-block">
          Affordable AI Services
        </span>
        <h2 className="text-3xl font-bold mb-4">
          AI Solutions Designed for Small Businesses
        </h2>
        <p className="text-slate-600 max-w-3xl mb-12">
          Powerful AI tools that fit your budget and solve real problems for your small business
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg border border-slate-200"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <span className="text-indigo-600 font-medium text-sm">
                {service.priceRange}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-sm my-8">
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-2 inline-block">
          Success Stories
        </span>
        <h2 className="text-3xl font-bold mb-4">
          AI Solutions That Delivered Results
        </h2>
        <p className="text-slate-600 max-w-3xl mb-12">
          Real small businesses that saved time, reduced costs, and improved customer satisfaction
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md transform transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-48 bg-indigo-100">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      See Demo
                    </a>
                    <span className="text-slate-300">|</span>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-2 inline-block">
          Simple Process
        </span>
        <h2 className="text-3xl font-bold mb-4">
          How We'll Work Together
        </h2>
        <p className="text-slate-600 max-w-3xl mb-12">
          A straightforward approach designed for busy small business owners
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md relative">
            <span className="absolute -top-4 -left-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</span>
            <h3 className="text-lg font-semibold mb-2 mt-2">Free Consultation</h3>
            <p className="text-slate-600">We'll discuss your business challenges and identify where AI can help</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md relative">
            <span className="absolute -top-4 -left-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</span>
            <h3 className="text-lg font-semibold mb-2 mt-2">Custom Proposal</h3>
            <p className="text-slate-600">You'll receive a tailored solution with clear pricing and deliverables</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md relative">
            <span className="absolute -top-4 -left-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</span>
            <h3 className="text-lg font-semibold mb-2 mt-2">Quick Development</h3>
            <p className="text-slate-600">Your solution is built in 2-4 weeks with regular progress updates</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md relative">
            <span className="absolute -top-4 -left-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</span>
            <h3 className="text-lg font-semibold mb-2 mt-2">Ongoing Support</h3>
            <p className="text-slate-600">Training for your team and continued assistance to ensure success</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center bg-white rounded-xl shadow-sm my-8">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="relative h-80 w-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image 
              src="/profile-photo.jpg" 
              alt="Akshay Kumar BM" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-2 inline-block">
            Your AI Partner
          </span>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-600 mb-6">
            I'm Akshay, an AI specialist who helps small businesses access the same powerful technology 
            that big companies use, but at a fraction of the cost. After 8 years of building enterprise AI 
            solutions, I now focus exclusively on creating affordable AI tools for small businesses.
          </p>
          <p className="text-slate-600 mb-6">
            My mission is simple: make AI accessible to local shops, family restaurants, independent 
            professionals, and growing small businesses. Every solution I build is designed to deliver 
            immediate value while being easy to use and maintain.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Small Business Focus</h4>
              <ul className="text-slate-600 space-y-1">
                <li>• Budget-friendly solutions</li>
                <li>• Quick implementation</li>
                <li>• Simple, user-friendly tools</li>
                <li>• Measurable ROI</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">AI Expertise</h4>
              <ul className="text-slate-600 space-y-1">
                <li>• Conversational AI (Chatbots)</li>
                <li>• Workflow Automation</li>
                <li>• Data Analytics</li>
                <li>• Customer Insights</li>
                <li>• Integration Specialist</li>
              </ul>
            </div>
          </div>
          <a 
            href="#contact" 
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
          >
            Let's discuss your business needs <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Small Business Success Stories</h2>
          <p className="text-indigo-200 text-center max-w-3xl mx-auto mb-12">
            Hear from other small business owners who've transformed their operations with AI
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-indigo-700 rounded-xl p-6 shadow-lg">
                <p className="italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white">
                    <Image 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-indigo-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-2 inline-block">
          Common Questions
        </span>
        <h2 className="text-3xl font-bold mb-4">
          AI for Small Business FAQs
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">How much do AI solutions cost for small businesses?</h3>
            <p className="text-slate-600">My solutions start at ₹20,000 for basic implementations, with most small business projects ranging between ₹25,000-₹45,000. I offer flexible payment options and focus on solutions with clear ROI.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Do I need technical knowledge to use these AI tools?</h3>
            <p className="text-slate-600">No technical knowledge required. I build user-friendly solutions with simple interfaces, and provide training for you and your staff. Ongoing support is included in all packages.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">How quickly can you implement an AI solution?</h3>
            <p className="text-slate-600">Most small business solutions can be implemented in 2-4 weeks. Simple chatbots and automation tools can be ready in as little as 7-10 days. I understand small businesses need quick results.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Will AI tools integrate with my existing systems?</h3>
            <p className="text-slate-600">Yes, I specialize in integrating AI tools with commonly used small business systems like WordPress, Shopify, QuickBooks, and various CRM platforms without disrupting your operations.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-2 inline-block">
            Get Started
          </span>
          <h2 className="text-3xl font-bold mb-4">Free AI Consultation for Your Business</h2>
          <p className="text-slate-600 mb-8">
            Schedule a no-obligation call to discuss how AI can help your small business save time, reduce costs, and grow
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">What You'll Get:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>30-minute video call to discuss your business needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Custom AI solution recommendation for your business</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Cost estimate and expected ROI breakdown</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Implementation timeline and process overview</span>
                </li>
              </ul>
              
              <div className="mt-6 space-y-4">
                <a 
                  href="mailto:akshaykumarbm.aifx@gmail.com" 
                  className="flex items-center hover:text-indigo-600 transition"
                >
                  <Mail className="mr-3 text-indigo-500" />akshaykumarbm.aifx@gmail.com
                </a>
                <a 
                  href="https://github.com/akshaykumarbedre" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-indigo-600 transition"
                >
                  <Github className="mr-3 text-indigo-500" />github.com/akshaykumarbedre
                </a>
                <a 
                  href="https://linkedin.com/in/akshaykumarbm" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-indigo-600 transition"
                >
                  <Linkedin className="mr-3 text-indigo-500" />linkedin.com/in/akshaykumarbm
                </a>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Business Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@yourbusiness.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">I'm interested in:</label>
                <select
                  id="interest"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="chatbot">AI Chatbot</option>
                  <option value="automation">Business Automation</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="integration">Custom AI Integration</option>
                  <option value="other">Other/Not Sure Yet</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium"
              >
                Book Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bot className="mr-2 text-indigo-400" /> 
                Akshay Kumar BM
              </h3>
              <p className="text-slate-300 mb-4">
                Affordable AI solutions for small businesses that deliver real results and quick ROI.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/akshaykumarbedre" className="text-slate-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/akshaykumarbm" className="text-slate-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:akshaykumarbm.aifx@gmail.com" className="text-slate-300 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#services" className="hover:text-indigo-400">AI Chatbots</a></li>
                <li><a href="#services" className="hover:text-indigo-400">Process Automation</a></li>
                <li><a href="#services" className="hover:text-indigo-400">Data Analytics</a></li>
                <li><a href="#services" className="hover:text-indigo-400">Custom Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-indigo-400">About Me</a></li>
                <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
                <li><a href="#testimonials" className="hover:text-indigo-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 text-indigo-400 mt-0.5" />
                  <a href="mailto:akshaykumarbm.aifx@gmail.com" className="hover:text-indigo-400">
                    akshaykumarbm.aifx@gmail.com
                  </a>
                </li>
                <li>Bengaluru, Karnataka, India</li>
                <li>Available for remote projects worldwide</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-6 text-center">
            <p className="mb-2">© {new Date().getFullYear()} Akshay Kumar BM. All rights reserved.</p>
            <p className="text-sm text-slate-400">
              Helping small businesses leverage AI technology affordably since 2022
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}