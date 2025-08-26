"use client"

import { useState, useEffect, useRef } from 'react'
import { Trophy, Award, Star, Calendar, Building2 } from 'lucide-react'

export default function Achievements() {
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

  const achievements = [
    {
      title: "Innovator Award",
      organization: "ZS Associates",
      description: "Developed and led a cloud-based web services application project using AWS",
      date: "July 2024",
      type: "Professional Excellence",
      impact: "high",
      icon: Trophy
    },
    {
      title: "Ingenious Award", 
      organization: "ZS Associates",
      description: "Optimized data processing pipeline & created an interactive tool using VBA",
      date: "August 2023",
      type: "Innovation",
      impact: "high", 
      icon: Award
    },
    {
      title: "Rising Star Award",
      organization: "ZS Associates", 
      description: "For consistent performance during internship & first cycle as a full-time employee",
      date: "March 2022",
      type: "Performance Recognition",
      impact: "medium",
      icon: Star
    },
    {
      title: "Interface Hackathon Winner",
      organization: "Interface 2018",
      description: "Won first prize among 45 teams for innovative solution development",
      date: "August 2018", 
      type: "Competition",
      impact: "medium",
      icon: Trophy
    },
    {
      title: "HackerTech Hackathon Winner",
      organization: "HackerTech 2017",
      description: "Won sponsorship from VITTBI (Technology Business Incubator Govt. of India)",
      date: "December 2017",
      type: "Competition", 
      impact: "high",
      icon: Award
    },
    {
      title: "KickStartup Hackathon Winner",
      organization: "KickStartup 2017",
      description: "Won first place among 20 teams for entrepreneurial innovation",
      date: "September 2017",
      type: "Competition",
      impact: "medium",
      icon: Trophy
    }
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
      case 'medium': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional Excellence': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
      case 'Innovation': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
      case 'Performance Recognition': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'Competition': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400'
    }
  }

  return (
    <section 
      id="achievements" 
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Achievements & Recognition
            </h2>
          </div>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition for excellence in innovation, leadership, and technical contributions 
            throughout my professional and academic journey.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group h-full">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors duration-300">
                      <achievement.icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(achievement.type)}`}>
                        {achievement.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(achievement.impact)}`}>
                        {achievement.impact === 'high' ? 'High Impact' : 'Significant Impact'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{achievement.organization}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-700">
            
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Recognition Summary
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A track record of consistent excellence and innovation across professional and competitive environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">3</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Professional Awards</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">ZS Associates</p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">3</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Hackathon Victories</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Out of 85+ teams</p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">4</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Years of Recognition</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">2017 - 2024</p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">100%</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Impact Rate</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">All achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}