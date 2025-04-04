'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import projectsData from '../../../data/projects';
import { useState, useRef } from 'react';

export default function ProjectDetail({ params }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  
  // Properly handle params
  const projectId = params.id;
  const project = projectsData[projectId];
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <Link href="/#projects" className="inline-flex items-center text-indigo-600 mb-4 sm:mb-6 hover:text-indigo-800">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <span className="bg-indigo-100 text-indigo-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">{project.title}</h1>
          <p className="text-lg sm:text-xl text-slate-600">{project.tagline}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ minHeight: "250px", height: "auto", maxHeight: "500px" }}>
            {project.videoUrl ? (
              <div className="relative w-full h-full">
                <video 
                  ref={videoRef}
                  src={project.videoUrl} 
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-contain"
                  poster={project.mainImage}
                />
                <button 
                  onClick={toggleMute} 
                  className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? 
                    <VolumeX className="w-5 h-5 text-white" /> : 
                    <Volume2 className="w-5 h-5 text-white" />
                  }
                </button>
              </div>
            ) : (
              <Image 
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Potential Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(project.benefits).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="font-medium text-slate-600 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-indigo-600">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8">
              <h3 className="font-medium text-slate-600 mb-3 sm:mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm text-sm">
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
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="prose max-w-none">
                {project.challenge.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-slate-600">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Industry</h3>
                <p className="text-slate-600">{project.challenge.industryContext}</p>
              </div>
              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Target Businesses</h3>
                <p className="text-slate-600">{project.challenge.clientProfile}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
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


      {/* Expected Outcomes Section */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            {project.expectedOutcomes ? 'Expected Outcomes' : 'Impact & Results'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="space-y-6">
                {project.expectedOutcomes?.potentialImprovements && 
                  project.expectedOutcomes.potentialImprovements.map((metric, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl">
                      <h3 className="font-semibold mb-4">{metric.label}</h3>
                      <div>
                        <p className="text-lg font-medium text-indigo-600">{metric.impact}</p>
                      </div>
                    </div>
                  ))
                }
                
                {project.impact?.metrics && 
                  project.impact.metrics.map((metric, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl">
                      <h3 className="font-semibold mb-4">{metric.label}</h3>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Before:</span>
                        <span className="text-red-600 font-medium">{metric.before}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-slate-500">After:</span>
                        <span className="text-green-600 font-medium">{metric.after}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div>
              {project.expectedOutcomes && (
                <>
                  <div className="bg-indigo-50 p-8 rounded-xl mb-8">
                    <h3 className="font-semibold mb-4">Potential Return on Investment</h3>
                    <p className="text-slate-700 mb-4">{project.expectedOutcomes.potentialROI.description}</p>
                  </div>
                  <blockquote className="border-l-4 border-indigo-500 pl-4">
                    <p className="text-slate-600 mb-4">{project.expectedOutcomes.valueProposition.text}</p>
                  </blockquote>
                </>
              )}
              
              {project.impact?.testimonial && (
                <div className="bg-indigo-50 p-8 rounded-xl mb-8">
                  <h3 className="font-semibold mb-4">Client Testimonial</h3>
                  <blockquote className="italic text-slate-700 mb-4">"{project.impact.testimonial.text}"</blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-medium">{project.impact.testimonial.author}</p>
                      <p className="text-sm text-slate-600">{project.impact.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {project.impact?.roi && (
                <div className="bg-green-50 p-8 rounded-xl">
                  <h3 className="font-semibold mb-4">Return on Investment</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Monthly Savings</p>
                      <p className="text-lg font-medium text-green-600">{project.impact.roi.monthly_savings}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Payback Period</p>
                      <p className="text-lg font-medium">{project.impact.roi.payback_period}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">First Year ROI</p>
                      <p className="text-lg font-medium text-green-600">{project.impact.roi.first_year_roi}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Technical Details</h2>
        <div className="grid md:grid-cols-1 gap-8 sm:gap-12">
          <div>
            <h3 className="font-semibold mb-4 sm:mb-6">Technology Stack</h3>
            <div className="space-y-3 sm:space-y-4">
              {project.technical.stack.map((tech, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                  <h4 className="font-medium mb-2">{tech.name}</h4>
                  <p className="text-slate-600">{tech.purpose}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Remove the Security Features section */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="bg-indigo-600 text-white rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Let's discuss how this solution can help your business grow</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/#contact" 
              className="bg-white text-indigo-600 px-6 sm:px-8 py-3 rounded-full hover:bg-indigo-50 transition shadow-md font-medium"
            >
              Book Free Consultation
            </a>
            <a 
              href={`https://github.com/akshaykumarbedre/${projectId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 sm:px-8 py-3 rounded-full hover:bg-indigo-700 transition font-medium"
            >
              View Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}