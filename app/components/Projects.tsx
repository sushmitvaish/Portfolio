"use client"

import { useState, useEffect, useRef } from 'react'
import { Code, ExternalLink, Github, ArrowUpRight, Folder, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "SportX Platform",
      description: "A comprehensive sports networking app with AI-based event recommendations, interactive chat modules, and venue discovery. Features service-oriented architecture with Redis caching and Google Maps integration for enhanced user experience.",
      tech: ["React", "SpringBoot", "MongoDB", "WebSockets", "Google Maps API", "Redis"],
      link: "https://github.com/sushmitvaish/sportx-team7-common",
      github: "https://github.com/sushmitvaish/sportx-team7-common",
      featured: true,
      status: "Completed"
    },
    {
      title: "Emergency Social Network Application",
      description: "A dynamic real-time chat application ensuring 24x7 availability and high performance in emergency situations. Enables crisis messaging, location sharing, and support access to medical & relief agencies.",
      tech: ["NodeJS", "Express", "Socket.IO", "MongoDB", "Jest", "Real-time Communication"],
      link: "https://emergency-social-network-application.onrender.com",
      github: "https://github.com/sushmitvaish/Emergency_Social_Network_Application",
      featured: true,
      status: "Live"
    },
    {
      title: "High Performance Image Blurring",
      description: "Efficient implementation of various blurring techniques using advanced optimization methods including SIMD instructions and custom kernel designs for maximum performance.",
      tech: ["C", "SIMD", "Assembly", "OpenCV", "Kernel Design", "Performance Optimization"],
      link: "https://github.com/sushmitv-cmu-F24/Fast_Code_Image_Filter_Application",
      github: "https://github.com/sushmitv-cmu-F24/Fast_Code_Image_Filter_Application",
      featured: false,
      status: "Completed"
    },
    {
      title: "Fake News Detection using LSTM",
      description: "LSTM-based deep learning model for sarcasm detection in news headlines, achieving ~83% accuracy. Leverages Keras with TensorFlow and implements tokenization, padding, and early stopping for sequence optimization.",
      tech: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "NLP", "Data Science"],
      link: "https://github.com/sushmitvaish/Fake-News-Detection-using-LSTM",
      github: "https://github.com/sushmitvaish/Fake-News-Detection-using-LSTM",
      featured: false,
      status: "Research"
    },
    {
      title: "BhaiDekh AR Application",
      description: "Augmented Reality application for visualizing 3D models of scientific experiments, enhancing educational experiences through immersive technology.",
      tech: ["Java", "Android", "AR", "Unity", "Blender", "3D Modeling"],
      link: "https://github.com/sushmitvaish/BhaiDekh",
      github: "https://github.com/sushmitvaish/BhaiDekh",
      featured: false,
      status: "Prototype"
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'Completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      case 'Research': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'Prototype': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in full-stack development, 
            data science, and innovative problem-solving.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="group h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Folder className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                      {project.featured && (
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.link}
                        className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                    
                    {project.link !== '#' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.link}
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}