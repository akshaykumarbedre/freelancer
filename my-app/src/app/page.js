
import Image from "next/image";
import { Briefcase, Code, Mail, Github, Linkedin, Users, BarChart, Braces, Server } from 'lucide-react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Akshay Kumar BM | AI Application Developer',
  description: 'Freelance AI application developer specializing in machine learning, data analytics, and custom AI solutions',
  keywords: 'AI developer, machine learning, data science, freelancer, web development',
}

export default function Home() {
  const projects = [
    {
      title: "AI Customer Service Bot",
      description: "Intelligent chatbot system helping businesses automate customer support with natural language processing",
      technologies: ["TensorFlow", "React", "Node.js", "NLP"],
      imageUrl: "/globe.svg",  // Using available globe icon as placeholder
      demoUrl: "https://akshaykumarbedre-freelancer.streamlit.app",
      githubUrl: "https://github.com/akshaykumarbedreimport/ai-chatbot"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Data visualization platform with predictive modeling for business intelligence",
      technologies: ["Python", "PyTorch", "Next.js", "D3.js"],
      imageUrl: "/window.svg",  // Using available window icon as placeholder
      demoUrl: "https://analytics-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/akshaykumarbedreimport/analytics-dashboard"
    },
    {
      title: "AI-Powered Recommendation Engine",
      description: "Machine learning solution for personalized product recommendations in e-commerce",
      technologies: ["Scikit-learn", "FastAPI", "React", "MongoDB"],
      imageUrl: "/file.svg",  // Using available file icon as placeholder
      demoUrl: "https://recommendation-engine-demo.vercel.app",
      githubUrl: "https://github.com/akshaykumarbedreimport/recommendation-engine"
    }
  ];

  const services = [
    {
      title: "Custom AI Solutions",
      description: "Tailor-made artificial intelligence applications to solve your unique business challenges",
      icon: <Braces className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Machine Learning Models",
      description: "Development of predictive models and data-driven algorithms for business intelligence",
      icon: <BarChart className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Full-Stack AI Applications",
      description: "End-to-end development of web and mobile applications with integrated AI capabilities",
      icon: <Code className="w-10 h-10 text-blue-500" />
    },
    {
      title: "AI Infrastructure & Deployment",
      description: "Setting up robust infrastructure for AI model training, deployment and monitoring",
      icon: <Server className="w-10 h-10 text-blue-500" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechInnovate",
      content: "Akshay delivered an exceptional AI solution that transformed our customer service operations. His expertise in machine learning and attention to detail made all the difference.",
      avatarUrl: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Founder, DataDriven",
      content: "Working with Akshay on our predictive analytics platform was a game-changer. He understood our business needs and implemented AI solutions that significantly improved our decision-making process.",
      avatarUrl: "/images/testimonial-2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Briefcase className="mr-2 text-blue-600" /> 
            <span className="hidden sm:inline">Akshay Kumar BM</span>
            <span className="sm:hidden">AK</span>
          </h1>
          <nav className="space-x-4 text-sm sm:text-base">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            AI Solutions<br />
            <span className="text-blue-600">for Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 mb-6">
            Transforming businesses through custom AI applications, machine learning models, and
            data-driven solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Discuss Your Project
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/hero-image.jpg"
              alt="AI Developer" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          AI Development Services
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Specialized expertise in creating intelligent applications that leverage the power of artificial intelligence
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-4">
          Featured AI Projects
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explore some of my recent AI-powered applications and solutions
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-md transform transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
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
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <span className="text-gray-300">|</span>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 mb-8 md:mb-0">
          <div className="relative h-80 w-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image 
              src="/profile-photo.jpg" 
              alt="Akshay Kumar BM" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-3/5 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-6">
            I'm a specialized AI application developer with over 8 years of experience building intelligent 
            software solutions. My expertise spans machine learning, data science, and full-stack development,
            allowing me to create end-to-end AI applications that solve real business problems.
          </p>
          <p className="text-gray-600 mb-6">
            Having worked with startups and established enterprises alike, I understand how to translate 
            complex business requirements into functional AI solutions that drive measurable results.
            My approach combines technical excellence with clear communication and a focus on business outcomes.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Technical Skills</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Machine Learning & Deep Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Data Analysis & Visualization</li>
                <li>• Full-Stack Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Technologies</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Python, TensorFlow, PyTorch</li>
                <li>• JavaScript, React, Next.js</li>
                <li>• Node.js, FastAPI</li>
                <li>• AWS, GCP, Azure ML</li>
                <li>• MongoDB, PostgreSQL</li>
              </ul>
            </div>
          </div>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            View Full Resume <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-700 rounded-xl p-6 shadow-lg">
                <p className="italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Let's Work Together</h2>
          <p className="text-gray-600 text-center mb-8">
            Have an AI project in mind? Contact me to discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:akshay.kumar@example.com" 
                  className="flex items-center hover:text-blue-600 transition"
                >
                  <Mail className="mr-3 text-blue-500" />akshaykumarbm.aifx.gmail.com
                </a>
                <a 
                  href="https://github.com/akshaykumarbedre" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-blue-600 transition"
                >
                  <Github className="mr-3 text-blue-500" /> github.com/akshaykumarbedre
                </a>
                <a 
                  href="https://linkedin.com/in/akshaykumarbm" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-blue-600 transition"
                >
                  <Linkedin className="mr-3 text-blue-500" /> linkedin.com/in/akshaykumarbm
                </a>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Akshay Kumar BM. All rights reserved.</p>
          <p className="text-gray-400 text-sm">AI Application Developer • Machine Learning Expert</p>
        </div>
      </footer>
    </div>
  );
}