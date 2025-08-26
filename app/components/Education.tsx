"use client"

import { useState, useEffect, useRef } from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
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

  const educationData = [
    {
      degree: "Master of Science in Software Engineering",
      institution: "Carnegie Mellon University",
      location: "Mountain View, CA",
      period: "August 2024 - December 2025",
      gpa: "3.95/4.0",
      status: "Current",
      description: "Advanced coursework in software engineering, architecture, distributed systems, and machine learning. Focus on scalable software design and modern development practices.",
      coursework: [
        "Software Engineering",
        "Software Architecture & Design",
        "Distributed Systems",
        "Data Science for Software Engineers",
        "Machine Learning",
        "Functional Programming"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology",
      location: "Vellore, India",
      period: "July 2017 - June 2021",
      gpa: "3.85/4.0",
      status: "Completed",
      description: "Comprehensive foundation in computer science fundamentals, programming, and software development. Strong emphasis on mathematical foundations and practical applications.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Artificial Intelligence",
        "Machine Learning",
        "Internet of Things"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    return status === 'Current' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  }

  return (
    <section 
      id="education" 
      ref={ref}
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in computer science and software engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                
                {/* Main Content */}
                <div className="p-8 lg:p-10">
                  
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(edu.status)}`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-xl text-slate-600 dark:text-slate-300 font-medium mb-3">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* GPA Badge */}
                    <div className="mt-4 lg:mt-0">
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-600">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Award className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">GPA</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      Key Coursework
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300"
                        >
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Academic Excellence
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Consistent academic performance with a strong foundation in computer science principles 
                and practical software engineering skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Strong Academic Performance
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Maintaining a 3.95/4.0 GPA in graduate studies at Carnegie Mellon University
                </p>
              </div>

              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Distinguished Graduate
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Graduated with 3.85/4.0 GPA from VIT, demonstrating consistent academic excellence
                </p>
              </div>

              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Research Focus
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Published research in data extraction and sentiment analysis using machine learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}