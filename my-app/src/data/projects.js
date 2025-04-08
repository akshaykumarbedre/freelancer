import { 
  Briefcase, Code, Mail, Github, Linkedin, Bot, BarChart, Braces, Server, 
  MessageSquare, Workflow, Zap, Award, ArrowLeft, Database, Link,
  CheckSquare, FileText, Laptop, Users, GitBranch, Search, FileCode,
  Move 
} from 'lucide-react';

const projects = {
  "webai-kb-chatbot": {
    "id": "webai-kb-chatbot",
    "title": "WebAI: Intelligent Website Knowledge Base & Chatbot",
    "tagline": "Transform your website into a powerful AI support assistant.",
    "description": "Automatically extracts and structures knowledge from your website content to power a smart chatbot, delivering instant, accurate customer support 24/7.",
    "category": "AI / Customer Support Automation",
    "mainImage": "webai-main-placeholder.webp",
    "imageUrl": "/webai-main-placeholder.webp",
    "videoUrl": "/webai-demo.mp4",
    "demoUrl": null,
    "githubUrl": null,

    "benefits": {
      "kbAutomation": "Effortlessly build and maintain a comprehensive knowledge base from your existing website content.",
      "aiSupport": "Provide round-the-clock, context-aware customer assistance using verified information.",
      "efficiency": "Dramatically reduce manual effort in knowledge management and query handling.",
      "managementUI": "Easily manage extracted information through an intuitive user interface.",
      "flexibility": "Build knowledge bases from websites, URLs, or direct text input."
    },

    "technologies": [
      { "name": "Python", "icon": <Code className="w-6 h-6" /> },
      { "name": "Flask", "icon": <Server className="w-6 h-6" /> },
      { "name": "JavaScript", "icon": <Code className="w-6 h-6" /> },
      { "name": "React", "icon": <Code className="w-6 h-6" /> },
      { "name": "Next.js", "icon": <Code className="w-6 h-6" /> },
      { "name": "LangChain", "icon": <Link className="w-6 h-6" /> },
      { "name": "Google Generative AI", "icon": <Bot className="w-6 h-6" /> },
      { "name": "Google Embeddings", "icon": <Braces className="w-6 h-6" /> },
      { "name": "FAISS", "icon": <Database className="w-6 h-6" /> },
      { "name": "Selenium", "icon": <Laptop className="w-6 h-6" /> },
      { "name": "Pydantic", "icon": <CheckSquare className="w-6 h-6" /> },
      { "name": "Tailwind CSS", "icon": <Code className="w-6 h-6" /> },
      { "name": "React DnD", "icon": <Move className="w-6 h-6" /> }
    ],

    "challenge": {
      "description": `Creating and maintaining accurate knowledge bases requires substantial manual effort. Businesses face critical challenges:

      • Converting unstructured website content into structured, usable data
      • Keeping knowledge bases synchronized with website updates
      • Delivering fast, accurate responses to customer inquiries
      • Managing diverse content types effectively across multiple pages`,
      "industryContext": "Customer Support, E-commerce, Content Management, Internal Knowledge Systems",
      "clientProfile": "Businesses seeking automated customer support, efficient knowledge management, or retrieval-augmented AI applications."
    },

    "solution": {
      "approach": `Developed a sophisticated multi-stage pipeline:

      1. **Discovery & Classification:** Intelligently scrape websites (Selenium), automatically classify content types (AI).
      2. **Extraction & Chunking:** Process content from URLs or text, divide into optimal chunks (LangChain).
      3. **Structuring:** Transform raw content into structured data using AI with validated output (Pydantic).
      4. **Vectorization:** Create embeddings (Google Embeddings), store efficiently in vector database (FAISS).
      5. **Management UI:** Intuitive Next.js dashboard for complete data management (view, edit, add, remove).
      6. **RAG Chatbot:** Dynamically retrieve relevant context based on query (context-aware), generate natural responses using LLM.`,
      "timeline": "4-6 weeks from consultation to deployment",
      "keyFeatures": [
        "Intelligent Web Scraping & Classification",
        "AI-Powered Content Structuring",
        "Context-Aware RAG Chatbot",
        "Dual Input Flexibility (URL/Text)",
        "Intuitive Knowledge Management Dashboard"
      ]
    },

    "expectedOutcomes": {
      "potentialImprovements": [
        { "label": "Support Response Time", "impact": "Reduced from hours to seconds with instant AI answers." },
        { "label": "KB Maintenance Effort", "impact": "Reduced by 80% through automated extraction." },
        { "label": "Information Consistency", "impact": "Significantly improved through direct source integration." },
        { "label": "Support Availability", "impact": "Extended to 24/7/365 coverage." }
      ],
      "valueProposition": {
        "text": "Empower your business with an automated, intelligent support system derived directly from your web content, improving efficiency, reducing costs, and enhancing customer satisfaction."
      },
      "potentialROI": {
        "description": "Substantial cost savings through reduced manual knowledge management, decreased support staff workload, and improved customer retention through faster, more accurate responses."
      }
    },

    "technical": {
      "stack": [
        { "name": "Flask (Python)", "purpose": "Robust REST API backend" },
        { "name": "Next.js (React)", "purpose": "Responsive Frontend UI/Dashboard" },
        { "name": "LangChain", "purpose": "Advanced LLM orchestration & RAG pipeline" },
        { "name": "Google Generative AI", "purpose": "State-of-the-art LLM for classification, structuring, responses" },
        { "name": "Google Text Embeddings", "purpose": "High-quality vector embedding generation" },
        { "name": "FAISS", "purpose": "High-performance vector similarity search" },
        { "name": "Selenium", "purpose": "Advanced web scraping automation" },
        { "name": "Pydantic", "purpose": "Robust data validation & structured output" },
        { "name": "React DnD", "purpose": "Intuitive drag-and-drop UI components" }
      ],
      "security": [
        "Secure API key management (.env)",
        "Configurable CORS protection (Flask backend)",
        "Comprehensive input validation (Pydantic)",
        "Isolated headless browser environment"
      ]
    }
  },
  
  "slack-rag-chatbot-zepto": {
    "id": "slack-rag-chatbot-zepto",
    "title": "Slack RAG Chatbot for Document Intelligence",
    "tagline": "Instantly access document knowledge directly within Slack.",
    "description": "AI-powered Slack chatbot that uses retrieval-augmented generation (RAG) to answer user queries based on the content of your important documents.",
    "category": "AI / Chatbot / Team Productivity",
    "mainImage": "/slack-rag-placeholder.webp",
    "imageUrl": "/slack-rag-placeholder.webp",
    "videoUrl": "/slack-demo.mp4",
    "demoUrl": null,
    "githubUrl": "https://github.com/akshaykumarbedre/slack_chatbot",

    "benefits": {
      "instantAnswers": "Get immediate, accurate answers about your document content without searching.",
      "slackIntegration": "Access document intelligence conveniently within your existing Slack workspace.",
      "timeSaving": "Eliminate manual document searching and information retrieval.",
      "accuracy": "Receive reliable, fact-based answers grounded in your actual documents."
    },

    "technologies": [
      { "name": "Python", "icon": <Code className='w-6 h-6' /> },
      { "name": "Flask", "icon": <Server className='w-6 h-6' /> },
      { "name": "LangChain", "icon": <Link className='w-6 h-6' /> },
      { "name": "Google Generative AI", "icon": <Bot className='w-6 h-6' /> },
      { "name": "Google Embeddings", "icon": <Braces className='w-6 h-6' /> },
      { "name": "FAISS", "icon": <Database className='w-6 h-6' /> },
      { "name": "PyMuPDF", "icon": <FileText className='w-6 h-6' /> },
      { "name": "Slack SDK", "icon": <MessageSquare className='w-6 h-6' /> }
    ],

    "challenge": {
      "description": `Finding specific information within company documents is frustrating and time-consuming. Teams face significant challenges:

      • Wasted hours searching through lengthy documents for specific information
      • Difficulty quickly synthesizing answers from complex document content
      • Ensuring information shared in Slack discussions is accurate and consistent
      • Making document knowledge accessible to team members across time zones`,
      "industryContext": "Team Collaboration, Knowledge Management, Remote Work",
      "clientProfile": "Teams using Slack that need quick, reliable access to information in important documents."
    },

    "solution": {
      "approach": `Implemented a sophisticated RAG pipeline seamlessly integrated with Slack:

      1. **Document Processing:** Convert PDFs to text (PyMuPDF), intelligently divide into optimal chunks.
      2. **Knowledge Embedding:** Create high-quality vector representations of document chunks (Google Embeddings).
      3. **Efficient Storage:** Index embeddings for lightning-fast retrieval (FAISS).
      4. **RAG Pipeline:** Implement advanced LangChain QA system (FAISS retriever + Google Gemini LLM).
      5. **Slack Integration:** Deploy secure Flask server to process Slack Events API messages.
      6. **Intelligent Query Processing:** User messages trigger context-aware RAG chain queries.
      7. **Response Generation:** Retrieve relevant document context, generate natural language answers.
      8. **Seamless Delivery:** Post helpful, document-grounded answers directly in Slack threads.`,
      "timeline": "2-3 weeks from initial setup to deployment",
      "keyFeatures": [
        "Intelligent Document Processing & Analysis",
        "Advanced RAG Pipeline for Accurate Answers",
        "Seamless Slack Workspace Integration",
        "Powered by Google's Latest AI Models",
        "High-Performance Vector Search (FAISS)"
      ]
    },

    "expectedOutcomes": {
      "potentialImprovements": [
        { "label": "Information Retrieval Speed", "impact": "Reduced from minutes/hours to seconds." },
        { "label": "Answer Accuracy", "impact": "Significantly improved through document-grounded responses." },
        { "label": "Knowledge Accessibility", "impact": "Dramatically enhanced via conversational Slack interface." },
        { "label": "Team Productivity", "impact": "Boosted through instant access to document knowledge." }
      ],
      "valueProposition": {
        "text": "Transform your team's productivity by making document knowledge instantly accessible through natural conversations in Slack, eliminating time wasted searching through files."
      },
      "potentialROI": {
        "description": "Teams save hours weekly per employee previously spent searching documents, leading to faster decision-making, reduced frustration, and improved information flow."
      }
    },

    "technical": {
      "stack": [
        { "name": "Flask (Python)", "purpose": "Secure backend for Slack events & RAG pipeline" },
        { "name": "LangChain", "purpose": "Advanced RAG orchestration framework" },
        { "name": "Google Generative AI", "purpose": "State-of-the-art LLM for natural answers" },
        { "name": "Google Embeddings", "purpose": "High-quality semantic text vectorization" },
        { "name": "FAISS", "purpose": "Efficient vector storage & similarity search" },
        { "name": "PyMuPDF", "purpose": "Comprehensive PDF parsing & extraction" },
        { "name": "Slack SDK/APIs", "purpose": "Seamless Slack workspace integration" }
      ],
      "security": [
        "Secure API key management (.env)",
        "Slack Signing Secret verification for message authenticity",
        "Input validation and sanitization"
      ]
    }
  },
  "crewai-langgraph-blog-generator": {
    "id": "crewai-langgraph-blog-generator",
    "title": "AI Agent Crew for Small Business Blog Generation",
    "tagline": "Generate expert-quality, SEO-optimized blog content with specialized AI agents.",
    "description": "A sophisticated multi-agent system that researches AI solutions for small businesses, transforms technical insights into engaging blog posts, optimizes content for search engines, and prepares polished articles ready for your website.",
    "category": "AI / Content Generation / Digital Marketing",
    "mainImage": "/images/crewai-blog-placeholder.svg",
    "imageUrl": "/images/crewai-blog-placeholder.svg",
    "demoUrl": null,
    "githubUrl": "https://github.com/akshaykumarbedre/Blog_genarater",

    "benefits": {
      "contentAutomation": "Eliminate manual content creation with end-to-end blog post automation.",
      "targetedContent": "Generate expert content focused on 'Affordable AI Solutions for Small Businesses'.",
      "expertAgents": "Leverage specialized AI agents with distinct expertise (Research, Writing, SEO).",
      "dataIntegration": "Transform technical insights from Jupyter notebooks into accessible content.",
      "seoOptimization": "Maximize search visibility with AI-powered SEO optimization.",
      "websiteReady": "Receive publication-ready content formatted for your website."
    },

    "technologies": [
      { "name": "Python", "icon": <Code className='w-6 h-6' /> },
      { "name": "CrewAI", "icon": <Users className='w-6 h-6' /> },
      { "name": "LangGraph", "icon": <GitBranch className='w-6 h-6' /> },
      { "name": "Google Generative AI", "icon": <Bot className='w-6 h-6' /> },
      { "name": "SerperDevTool", "icon": <Search className='w-6 h-6' /> },
      { "name": "nbformat", "icon": <FileCode className='w-6 h-6' /> },
      { "name": "Pydantic", "icon": <CheckSquare className='w-6 h-6' /> }
    ],

    "challenge": {
      "description": `Creating high-quality, SEO-optimized blog content consistently is challenging and time-consuming. Small businesses face multiple obstacles:

      • Difficulty translating technical knowledge into engaging blog content
      • Lack of resources for comprehensive market and industry research
      • Inconsistent SEO optimization and keyword strategy
      • Maintaining regular publishing schedules with limited resources
      • Balancing technical accuracy with accessible, audience-friendly language`,
      "industryContext": "Digital Marketing, Content Strategy, Small Business Services",
      "clientProfile": "Consultants, developers, marketers, and small business owners needing professional content about AI solutions."
    },

    "solution": {
      "approach": `Leverages CrewAI to orchestrate specialized AI agents working collaboratively:

      1. **Knowledge Extraction:** Intelligently processes input from Jupyter notebooks or other technical sources.
      2. **Research Agent:** Conducts comprehensive analysis of current AI trends and solutions for small businesses.
      3. **Writing Agent:** Crafts engaging, accessible blog content tailored specifically for small business audiences.
      4. **SEO Agent:** Optimizes content for search engines, enhancing visibility and traffic potential.
      5. **Output Generation:** Delivers polished, publication-ready blog posts formatted for web integration.
      
      *Supplemented with LangGraph demonstration showing an advanced workflow with feedback loops.*`,
      "timeline": "24-48 hours from request to delivery",
      "keyFeatures": [
        "Multi-Agent Collaborative Content Creation",
        "Specialized Expert Roles (Research, Writing, SEO)",
        "Technical Knowledge Translation & Integration",
        "Advanced Content & SEO Optimization",
        "Website-Ready Output Formatting",
        "Customizable Business Focus & Keywords"
      ]
    },

    "expectedOutcomes": {
      "potentialImprovements": [
        { "label": "Content Creation Time", "impact": "Reduced from days/weeks to hours." },
        { "label": "Content Quality", "impact": "Enhanced through specialized expertise and deep research." },
        { "label": "SEO Performance", "impact": "Improved through strategic optimization and keyword targeting." },
        { "label": "Content Consistency", "impact": "Maintained professional tone and business messaging." },
        { "label": "Publishing Frequency", "impact": "Increased through streamlined content production." }
      ],
      "valueProposition": {
        "text": "Transform your digital presence with expert-quality, SEO-optimized blog content that positions your business as an authority on AI solutions, delivered in hours instead of days."
      },
      "potentialROI": {
        "description": "Significant time and cost savings compared to traditional content creation, plus enhanced lead generation and thought leadership establishment through consistent, high-quality publishing."
      }
    },

    "technical": {
      "stack": [
        { "name": "CrewAI", "purpose": "Advanced multi-agent collaboration framework" },
        { "name": "LangGraph", "purpose": "Demo: Sophisticated stateful agent workflows" },
        { "name": "Google Gemini", "purpose": "State-of-the-art LLM powering all agents" },
        { "name": "SerperDevTool", "purpose": "Real-time web search capabilities" },
        { "name": "nbformat", "purpose": "Technical notebook content extraction" },
        { "name": "Python", "purpose": "Core implementation language" }
      ],
      "security": [
        "Secure API key management through environment variables (.env)",
        "Configurable content restrictions and guidelines",
        "Data validation and output sanitization"
      ]
    }
  }
};

// Helper function to get project list for homepage
export function getProjectsForHomepage() {
  return Object.values(projects).map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies.map(tech => tech.name),
    imageUrl: project.imageUrl,
    demoUrl: project.demoUrl,
    githubUrl: project.githubUrl
  }));
}

// Export full projects data
export default projects;
