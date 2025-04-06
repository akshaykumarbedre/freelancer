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
    "tagline": "Turn your website into an intelligent AI support assistant.",
    "description": "Automatically extracts and structures knowledge from your website (or text) to power a smart chatbot, providing instant, accurate customer support.",
    "category": "AI / Customer Support Automation", // Kept category specific to this project
    "mainImage": "webai-main-placeholder.webp", // Placeholder image
    "imageUrl": "/webai-main-placeholder.webp", // Placeholder image
    "videoUrl": "/webai-demo.mp4", // Placeholder video URL
    "demoUrl": null, // No demo URL provided
    "githubUrl": null, // No GitHub URL provided

    // --- Metrics (Optional - Omitted as none were specified) ---
    // "metrics": {
    //   "keyMetric": "Value"
    // },

    // --- Benefits (Simplified keys like other projects) ---
    "benefits": {
      "kbAutomation": "Effortlessly build and update support knowledge from website content or text.",
      "aiSupport": "Provide 24/7, context-aware customer assistance using verified information.",
      "efficiency": "Dramatically reduce manual effort in data entry and query handling.",
      "managementUI": "Manage extracted products and information via a user-friendly interface.",
      "flexibility": "Build knowledge base from URLs or direct text input."
    },

    // --- Technologies Used (Using placeholder icons consistent with other examples) ---
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
      { "name": "Selenium", "icon": <Laptop className="w-6 h-6" /> }, // Changed from Browser to Laptop
      { "name": "Pydantic", "icon": <CheckSquare className="w-6 h-6" /> },
      { "name": "Tailwind CSS", "icon": <Code className="w-6 h-6" /> },
      { "name": "React DnD", "icon": <Move className="w-6 h-6" /> }
    ],

    // --- Problem/Challenge Context (Matching structure) ---
    "challenge": {
      "description": `Maintaining accurate, up-to-date knowledge bases requires significant manual effort. Key challenges include:

      • Extracting structured data (e.g., product details) from unstructured web content.
      • Keeping the knowledge base synced with website changes.
      • Providing fast, accurate, context-aware answers to user queries.
      • Handling diverse content types effectively.`, // Simplified description
      "industryContext": "Customer Support, E-commerce, Content Management, Internal Knowledge Systems",
      "clientProfile": "Businesses needing automated support, efficient KB creation, or RAG applications." // Simplified profile
    },

    // --- Solution Details (Matching structure) ---
    "solution": {
      "approach": `Developed a multi-stage pipeline:

      1. **Discovery & Classification:** Scrape URLs (Selenium), classify content type (AI).
      2. **Extraction & Chunking:** Load content (URLs/text), split into chunks (LangChain).
      3. **Structuring:** Format product data using AI with structured output (Pydantic).
      4. **Vectorization:** Embed chunks/data (Google Embeddings), store in vector DB (FAISS).
      5. **Management UI:** Next.js dashboard to manage stored data (view, add, remove, reclassify).
      6. **RAG Chatbot:** Retrieve relevant info from vector stores based on query context (LLM determines ratio), generate response using LLM.`, // Simplified approach steps
      "timeline": "Not Specified", // Added timeline field
      "keyFeatures": [ // Kept key features, maybe slightly reworded for consistency
        "Intelligent Web Scraping & Classification",
        "AI-Powered Content Structuring",
        "Context-Aware RAG Chatbot",
        "Dual Input Flexibility (URL/Text)",
        "Intuitive Management Dashboard"
      ]
    },

    // --- Results & Outcomes (Matching structure) ---
    "expectedOutcomes": {
      "potentialImprovements": [ // Kept original structure/content here
        { "label": "Support Response Time", "impact": "Significantly reduced (instant AI answers)." },
        { "label": "KB Maintenance Effort", "impact": "Minimized via automation." },
        { "label": "Information Consistency", "impact": "Improved (direct sourcing)." },
        { "label": "Support Availability", "impact": "Extended to 24/7." }
      ],
      "valueProposition": { // Kept original structure/content
        "text": "Empower your business with an automated, intelligent support system derived directly from your web content, improving efficiency and customer satisfaction."
      },
      "potentialROI": { // Kept original structure/content
        "description": "Cost savings via reduced manual effort (KB management, support workload) and improved customer satisfaction (faster responses)."
      }
    },

    // --- Technical Implementation Details (Matching structure) ---
    "technical": {
      "stack": [ // Kept original structure/content
        { "name": "Flask (Python)", "purpose": "Backend REST API" },
        { "name": "Next.js (React)", "purpose": "Frontend UI/Dashboard" },
        { "name": "LangChain", "purpose": "LLM Orchestration, RAG" },
        { "name": "Google Generative AI", "purpose": "Core LLM (Classification, Structuring, Response)" },
        { "name": "Google Text Embeddings", "purpose": "Vector Embedding Generation" },
        { "name": "FAISS", "purpose": "Vector Store (Similarity Search)" },
        { "name": "Selenium", "purpose": "Web Scraping Automation" },
        { "name": "Pydantic", "purpose": "Data Validation, Structured Output" },
        { "name": "React DnD", "purpose": "Frontend Drag-and-Drop" }
      ],
      // --- Security (Optional - Kept as it was present, but not in all other examples) ---
      "security": [
        "API Key management (.env)",
        "CORS enabled (Flask backend)",
        "Input validation (Pydantic)",
        "Headless browser sandbox considerations"
      ]
    }

    // --- Future Plans (Omitted to match other examples) ---
  }
  ,
  
  "slack-rag-chatbot-zepto": {
    "id": "slack-rag-chatbot-zepto",
    "title": "Slack RAG Chatbot for Zepto Document",
    "tagline": "Answer questions about your documents directly in Slack.",
    "description": "AI-powered Slack chatbot using RAG to answer user queries based on the content of a specific PDF document ('zepto.pdf').",
    "category": "AI / Chatbot / Productivity", // Slightly shortened category
    "mainImage": "/slack-rag-placeholder.webp", // Placeholder image path
    "imageUrl": "/slack-rag-placeholder.webp", // Placeholder image path
    "videoUrl": "/slack-demo.mp4",
    "demoUrl": null,
    "githubUrl": "https://github.com/akshaykumarbedre/slack_chatbot",

    // --- Metrics (Optional - Omitted as none were specified) ---
    // "metrics": {
    //   "keyMetric": "Value"
    // },

    // --- Benefits (Using simple, benefit-oriented keys) ---
    "benefits": {
      "instantAnswers": "Get immediate, AI-generated answers about the 'zepto.pdf' content.",
      "slackIntegration": "Access document knowledge conveniently within Slack.",
      "timeSaving": "Eliminate manual searching through the PDF document.",
      "accuracy": "Provides reliable answers based specifically on the ingested document."
    },

    // --- Technologies Used (Using placeholder icons consistent with other examples) ---
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

    // --- Problem/Challenge Context (Matching structure) ---
    "challenge": {
      "description": `Accessing specific information within documents like 'zepto.pdf' often requires tedious manual searching. Key challenges include:

      • Time spent manually locating relevant sections.
      • Difficulty quickly synthesizing answers from document content.
      • Ensuring information shared in Slack is accurate and consistent with the document.`, // Slightly more concise
      "industryContext": "Internal Knowledge Management, Team Collaboration", // Simplified context
      "clientProfile": "Teams using Slack needing quick reference to specific PDF documents." // Simplified profile
    },

    // --- Solution Details (Matching structure) ---
    "solution": {
      "approach": `Implemented a RAG pipeline integrated with Slack:

      1.  **Processing:** Load 'zepto.pdf' (PyMuPDF), split into text chunks.
      2.  **Vectorization:** Create embeddings for chunks (Google Embeddings).
      3.  **Storage:** Store embeddings locally (FAISS).
      4.  **RAG Chain:** Set up LangChain QA chain (FAISS retriever + Google Gemini LLM).
      5.  **Slack Listener:** Flask server listens for messages via Slack Events API.
      6.  **Query:** User message triggers RAG chain query.
      7.  **Response:** RAG chain retrieves context, LLM generates answer.
      8.  **Reply:** Post answer back to Slack channel.`, // Simplified approach steps
      "timeline": "Not Specified",
      "keyFeatures": [ // Matched style
        "PDF Document Ingestion & Processing",
        "RAG Q&A Pipeline for Accurate Answers",
        "Seamless Slack Integration",
        "Powered by Google AI (Embeddings & LLM)",
        "Efficient Local Vector Search (FAISS)"
      ]
    },

    // --- Results & Outcomes (Matching structure) ---
    "expectedOutcomes": {
      "potentialImprovements": [ // Kept structure
        { "label": "Info Retrieval Time", "impact": "Significantly reduced vs. manual search." },
        { "label": "Answer Accuracy", "impact": "Increased (grounded in document)." },
        { "label": "Knowledge Access", "impact": "Improved via Slack query interface." }
      ],
      "valueProposition": { // Kept structure
        "text": "Instantly query and receive accurate answers from your 'zepto.pdf' document directly within Slack, boosting productivity."
      },
      "potentialROI": { // Kept structure
        "description": "Significant time savings for team members referencing the document, leading to faster decision-making."
      }
    },

    // --- Technical Implementation Details (Matching structure) ---
    "technical": {
      "stack": [ // Simplified names slightly
        { "name": "Flask (Python)", "purpose": "Backend for Slack events & RAG" },
        { "name": "LangChain", "purpose": "RAG pipeline framework" },
        { "name": "Google Generative AI", "purpose": "LLM for Q&A" },
        { "name": "Google Embeddings", "purpose": "Text vectorization" },
        { "name": "FAISS", "purpose": "Vector storage & retrieval" },
        { "name": "PyMuPDF", "purpose": "PDF parsing" },
        { "name": "Slack SDK/APIs", "purpose": "Slack integration" }
      ],
      // --- Security (Optional - Omitted for consistency with other minimal examples) ---
      "security": [
        "API Key management (.env)",
        "Slack Signing Secret verification"
      ]
    }
    // --- Future Plans (Omitted to match other examples) ---
  },
  "crewai-langgraph-blog-generator": {
    "id": "crewai-langgraph-blog-generator",
    "title": "AI Agent Crew for Small Business Blog Generation",
    "tagline": "Automate targeted, SEO-optimized blog content creation using AI agents.",
    "description": "A multi-agent system (using CrewAI) that researches AI solutions for small businesses, writes engaging blog posts based on Jupyter notebook insights or other data, optimizes the content for SEO, and prepares it for website display.", // Added website display aspect
    "category": "AI / Content Generation / Marketing", // Simplified category
    "mainImage": "/images/crewai-blog-placeholder.svg", // Placeholder path
    "imageUrl": "/images/crewai-blog-placeholder.svg", // Placeholder path
    //  "videoUrl": "/videos/blog-demo.mp4", // Placeholder video URL
    "demoUrl": null, // LangGraph demo exists but isn't a live URL for the *whole* system
    "githubUrl": "https://github.com/akshaykumarbedre/Blog_genarater", // Set to null unless a specific repo URL is confirmed

    // --- Metrics (Optional - Omitted) ---

    // --- Benefits ---
    "benefits": {
      "contentAutomation": "Automates research, writing, and SEO for blog posts.",
      "targetedContent": "Generates content focused on 'Affordable AI Solutions for Small Businesses'.",
      "expertAgents": "Uses specialized AI agents (Researcher, Writer, SEO) for quality.", // Renamed for simplicity
      "dataIntegration": "Extracts insights from Jupyter notebooks or other sources.", // Renamed for simplicity
      "seoOptimization": "Ensures blog posts are optimized for search visibility.",
      "websiteReady": "Produces content ready for integration into your website." // Added benefit
    },

    // --- Technologies Used ---
    "technologies": [
      { "name": "Python", "icon": <Code className='w-6 h-6' /> },
      { "name": "CrewAI", "icon": <Users className='w-6 h-6' /> }, // Icon for multiple agents
      { "name": "LangGraph", "icon": <GitBranch className='w-6 h-6' /> }, // Icon for graph/workflow
      { "name": "Google Generative AI", "icon": <Bot className='w-6 h-6' /> }, // Simplified name
      { "name": "SerperDevTool", "icon": <Search className='w-6 h-6' /> }, // Icon for search tool
      { "name": "nbformat", "icon": <FileCode className='w-6 h-6' /> }, // Changed from Notebook to FileCode
      { "name": "Pydantic", "icon": <CheckSquare className='w-6 h-6' /> } // Icon for validation
      // LangChain removed as requested
    ],

    // --- Problem/Challenge Context ---
    "challenge": {
      "description": `Creating high-quality, targeted, SEO-optimized blog content consistently is challenging. Key issues include:

      • Translating technical insights into engaging blog posts.
      • Conducting thorough research on market trends.
      • Optimizing content for search engines effectively.
      • Maintaining a consistent brand voice.`, // Simplified description
      "industryContext": "Content Marketing, AI Consulting, Small Business Services",
      "clientProfile": "Consultants, developers, or marketers needing efficient expert content generation for small business audiences." // Simplified profile
    },

    // --- Solution Details ---
    "solution": {
      "approach": `Uses CrewAI to orchestrate specialized AI agents:

      1.  **Data Input:** Optionally extracts data from Jupyter notebooks or other sources.
      2.  **Research Agent:** Analyzes input/uses search tools for relevant AI trends & use cases for small businesses.
      3.  **Writing Agent:** Crafts an engaging blog post tailored to a non-technical audience using research findings.
      4.  **SEO Agent:** Optimizes the draft for keywords, readability, and search ranking factors.
      5.  **Output:** Generates the final, optimized blog post (e.g., Markdown) ready for website integration.
      *A LangGraph demo illustrates a similar stateful workflow with feedback loops.*`, // Simplified approach
      "timeline": "Not Specified",
      "keyFeatures": [ // Matched style and added new feature
        "Multi-Agent Collaboration (CrewAI)",
        "Specialized Agent Roles (Research, Writing, SEO)",
        "Jupyter Notebook Data Integration",
        "Automated Content & SEO Optimization",
        "Website Integration for Blog Display", // Added feature
        "Configurable Business Details & Keywords"
      ]
    },

    // --- Results & Outcomes ---
    "expectedOutcomes": {
      "potentialImprovements": [ // Kept structure
        { "label": "Content Creation Time", "impact": "Dramatically reduced." },
        { "label": "Content Quality", "impact": "Improved via specialization & research." },
        { "label": "SEO Performance", "impact": "Enhanced by dedicated optimization." },
        { "label": "Consistency", "impact": "Maintained tone & business details." }
      ],
      "valueProposition": { // Updated text
        "text": "Automate high-quality, SEO-optimized blog content tailored for small businesses, leveraging AI agents and technical insights, ready for display on your website."
      },
      "potentialROI": { // Kept structure
        "description": "Significant time savings, improved lead generation via SEO/content, and established thought leadership."
      }
    },

    // --- Technical Implementation Details ---
    "technical": {
      "stack": [ // Removed LangChain, kept LangGraph for demo context
        { "name": "CrewAI", "purpose": "Multi-agent collaboration framework" },
        { "name": "LangGraph", "purpose": "Demo: Building stateful agent workflows" },
        { "name": "Google Gemini", "purpose": "Core LLM for agents" },
        { "name": "SerperDevTool", "purpose": "Agent web search tool" },
        { "name": "nbformat", "purpose": "Reading Jupyter notebook files" },
        { "name": "Python", "purpose": "Primary language" }
      ],
      // --- Security (Optional - Kept for API key info) ---
      "security": [
        "API Keys (Gemini, Serper) managed via environment variables (.env)"
      ]
    }
    // --- Future Plans (Omitted) ---
  }
    // ,
  // 'small-biz-chatbot': {
  //   id: 'small-biz-chatbot',
  //   title: "Small Business AI Chatbot",
  //   tagline: "24/7 customer support solution that increases response rates and reduces support costs",
  //   description: "24/7 customer support chatbot that increased response rates by 85% and reduced support costs by 40% for a local retail chain",
  //   category: "Customer Service",
  //   mainImage: "/chatbot.svg",
  //   imageUrl: "/chatbot.svg",
  //   demoUrl: "https://small-biz-chatbot-demo.vercel.app",
  //   githubUrl: "https://github.com/akshaykumarbedre/small-biz-chatbot",
  //   benefits: {
  //     responseTime: "Instant responses to customer queries",
  //     costEfficiency: "Lower support team costs",
  //     availability: "24/7 customer assistance",
  //     consistency: "Consistent service quality",
  //   },
  //   technologies: [
  //     { name: "OpenAI API", icon: <Bot className="w-6 h-6" /> },
  //     { name: "React", icon: <Code className="w-6 h-6" /> },
  //     { name: "Node.js", icon: <Server className="w-6 h-6" /> },
  //     { name: "MongoDB", icon: <Database className="w-6 h-6" /> }
  //   ],
  //   challenge: {
  //     description: `Local retail chains face significant challenges in providing consistent, round-the-clock customer support. 
  //     Traditional methods of hiring more staff or outsourcing support are often costly and can lead to inconsistent service quality. 
  //     Key challenges include:
      
  //     • Long response times during peak hours and after business hours
  //     • High costs of maintaining a support team
  //     • Inconsistent quality of support across different staff members
  //     • Limited ability to handle multiple inquiries simultaneously`,
  //     industryContext: "Retail / E-commerce",
  //     clientProfile: "Ideal for multi-location retail businesses with online presence"
  //   },
  //   solution: {
  //     approach: `My solution is a customized AI chatbot that can:
      
  //     1. Handle common customer inquiries 24/7
  //     2. Integrate with existing inventory and order systems
  //     3. Provide consistent, accurate responses
  //     4. Escalate complex issues to human staff when necessary`,
  //     timeline: "Typically 2-3 weeks from concept to deployment",
  //     keyFeatures: [
  //       "Natural language processing for human-like interactions",
  //       "Real-time inventory checking",
  //       "Order status tracking integration",
  //       "Smart escalation protocols",
  //       "Multi-language support"
  //     ]
  //   },
  //   expectedOutcomes: {
  //     potentialImprovements: [
  //       { label: "Response Time", impact: "From minutes/hours to instant responses" },
  //       { label: "Support Costs", impact: "Potential 30-40% reduction in support costs" },
  //       { label: "Customer Satisfaction", impact: "Higher satisfaction through quick resolution" },
  //       { label: "Inquiry Handling Capacity", impact: "5x increase in simultaneous inquiries handled" }
  //     ],
  //     valueProposition: {
  //       text: "Businesses implementing AI chatbots typically see rapid returns through reduced support costs while improving customer experience and retention.",
  //     },
  //     potentialROI: {
  //       description: "Businesses can expect to recover implementation costs within 3-6 months through reduced operational expenses and increased customer satisfaction."
  //     }
  //   },
  //   technical: {
  //     stack: [
  //       {
  //         name: "OpenAI GPT-4",
  //         purpose: "Natural language processing and response generation"
  //       },
  //       {
  //         name: "React",
  //         purpose: "Frontend interface and admin dashboard"
  //       },
  //       {
  //         name: "Node.js",
  //         purpose: "Backend API and system integration"
  //       },
  //       {
  //         name: "MongoDB",
  //         purpose: "Conversation history and analytics storage"
  //       }
  //     ]
  //   }
  // },
  // 'email-automation': {
  //   id: 'email-automation',
  //   title: "Email & Task Automation System",
  //   tagline: "AI-powered workflow automation that saves 15+ hours weekly for small businesses",
  //   description: "AI workflow automation that saved 15+ hours weekly for a small accounting firm by automating email responses and document processing",
  //   category: "Business Automation",
  //   mainImage: "/automation.svg",
  //   imageUrl: "/automation.svg",
  //   demoUrl: "https://task-automation-demo.vercel.app",
  //   githubUrl: "https://github.com/akshaykumarbedre/email-automation",
  //   metrics: {
  //     timeSaved: "15+ hours/week",
  //     costReduction: "35% reduction",
  //     accuracy: "99.8% accuracy",
  //     timeframe: "3 weeks"
  //   },
  //   benefits: {
  //     responseTime: "Automated email responses",
  //     costEfficiency: "35% reduction in operational costs",
  //     efficiency: "15+ hours saved weekly",
  //     accuracy: "99.8% processing accuracy"
  //   },
  //   technologies: [
  //     { name: "Python", icon: <Code className="w-6 h-6" /> },
  //     { name: "GPT-4", icon: <Bot className="w-6 h-6" /> },
  //     { name: "Azure Functions", icon: <Server className="w-6 h-6" /> },
  //     { name: "Power Automate", icon: <Workflow className="w-6 h-6" /> }
  //   ],
  //   challenge: {
  //     description: `Small accounting firms face overwhelming email volumes and repetitive document processing tasks.
  //     Manual handling leads to:
      
  //     • Staff spending 40% of their time on email management
  //     • Delayed response times to client inquiries
  //     • Increased risk of human error in document processing
  //     • Limited capacity to take on new clients`,
  //     industryContext: "Professional Services / Accounting",
  //     clientProfile: "Accounting firm with 8 staff members serving 120+ small business clients"
  //   },
  //   solution: {
  //     approach: `We developed an intelligent automation system that:
      
  //     1. Automatically categorizes and prioritizes incoming emails
  //     2. Generates contextually accurate responses for common queries
  //     3. Extracts and processes data from financial documents
  //     4. Routes complex matters to appropriate team members`,
  //     timeline: "3 weeks from planning to full implementation",
  //     keyFeatures: [
  //       "AI-powered email classification",
  //       "Smart response generation",
  //       "Document data extraction",
  //       "Automated workflow routing",
  //       "Integration with accounting software"
  //     ]
  //   },
  //   expectedOutcomes: {
  //     potentialImprovements: [
  //       { label: "Time on Email Management", impact: "Reduction from 16 hours/week to 4 hours/week" },
  //       { label: "Response Time", impact: "Improved from 8 hours to just 30 minutes" },
  //       { label: "Document Processing", impact: "Reduced from 20 mins/doc to 2 mins/doc" },
  //       { label: "Staff Capacity", impact: "Increased from 15 clients/staff to 25 clients/staff" }
  //     ],
  //     valueProposition: {
  //       text: "This automation system transforms businesses, making teams more responsive to clients while focusing on high-value advisory work."
  //     },
  //     potentialROI: {
  //       description: "Businesses can expect to save ₹45,000 monthly with a payback period of 2.5 months and first year ROI of 320%."
  //     }
  //   },
  //   technical: {
  //     stack: [
  //       {
  //         name: "Python & GPT-4",
  //         purpose: "Email analysis and response generation"
  //       },
  //       {
  //         name: "Azure Functions",
  //         purpose: "Serverless automation workflows"
  //       },
  //       {
  //         name: "Power Automate",
  //         purpose: "Business process automation"
  //       },
  //       {
  //         name: "Azure SQL",
  //         purpose: "Secure data storage and analytics"
  //       }
  //     ]
  //   }
  // },
  
  // 'analytics-dashboard': {
  //   id: 'analytics-dashboard',
  //   title: "Small Business Analytics Dashboard",
  //   tagline: "Data-driven insights that helped increase profits by 22% for a family restaurant",
  //   description: "Data-driven insights that helped increase profits by 22% for a family restaurant",
  //   category: "Business Intelligence",
  //   mainImage: "/analytics.svg",
  //   imageUrl: "/analytics.svg",
  //   demoUrl: "https://small-biz-analytics.vercel.app",
  //   githubUrl: "https://github.com/akshaykumarbedre/small-biz-analytics",
  //   metrics: {
  //     profitIncrease: "22% growth",
  //     customerRetention: "35% improvement",
  //     inventoryWaste: "40% reduction",
  //     timeframe: "4 weeks"
  //   },
  //   benefits: {
  //     profitIncrease: "22% profit growth",
  //     customerRetention: "35% improvement in retention",
  //     inventoryWaste: "40% reduction in waste",
  //     efficiency: "Optimized staff scheduling"
  //   },
  //   technologies: [
  //     { name: "TensorFlow", icon: <Braces className="w-6 h-6" /> },
  //     { name: "Next.js", icon: <Code className="w-6 h-6" /> },
  //     { name: "D3.js", icon: <BarChart className="w-6 h-6" /> },
  //     { name: "Firebase", icon: <Server className="w-6 h-6" /> }
  //   ],
  //   challenge: {
  //     description: `Family restaurants struggle to compete without access to the sophisticated analytics tools used by large chains.
  //     Key challenges included:
      
  //     • No visibility into peak hours and staffing needs
  //     • High inventory waste due to unpredictable demand
  //     • Limited understanding of customer preferences
  //     • Difficulty in pricing menu items optimally`,
  //     industryContext: "Food Service / Restaurant",
  //     clientProfile: "Family-owned restaurant with 2 locations and 25 staff members"
  //   },
  //   solution: {
  //     approach: `We built a comprehensive analytics dashboard that:
      
  //     1. Analyzes sales patterns and customer behavior
  //     2. Predicts demand for inventory management
  //     3. Optimizes menu pricing and staff scheduling
  //     4. Tracks customer satisfaction and loyalty`,
  //     timeline: "4 weeks from concept to deployment",
  //     keyFeatures: [
  //       "Real-time sales tracking",
  //       "Predictive analytics",
  //       "Customer behavior insights",
  //       "Inventory optimization",
  //       "Staff scheduling assistant"
  //     ]
  //   },
  //   expectedOutcomes: {
  //     potentialImprovements: [
  //       { label: "Monthly Profit", impact: "Increase from ₹3,50,000 to ₹4,27,000" },
  //       { label: "Food Waste", impact: "Reduction from 15% of inventory to 9%" },
  //       { label: "Staff Efficiency", impact: "Improved from 72% utilization to 89%" },
  //       { label: "Customer Return Rate", impact: "Increased from 45% to 61%" }
  //     ],
  //     valueProposition: {
  //       text: "The insights from this analytics system help businesses make better decisions about everything - from inventory management to staff scheduling, resulting in higher profits and lower waste."
  //     },
  //     potentialROI: {
  //       description: "Businesses can expect monthly savings of ₹77,000 with a payback period of just 2 months and first year ROI of 450%."
  //     }
  //   },
  //   technical: {
  //     stack: [
  //       {
  //         name: "TensorFlow",
  //         purpose: "Predictive analytics and demand forecasting"
  //       },
  //       {
  //         name: "Next.js & D3.js",
  //         purpose: "Interactive dashboard interface"
  //       },
  //       {
  //         name: "Firebase",
  //         purpose: "Real-time data storage and analytics"
  //       },
  //       {
  //         name: "Python",
  //         purpose: "Data processing and analysis"
  //       }
  //     ]
  //   }
  // }
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
