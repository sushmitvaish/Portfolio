"use client"

import { useState, useEffect, useRef } from 'react'
import { Award, Target, Users } from 'lucide-react'

const StatCard = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0
        const end = value
        const duration = 2000
        const increment = end / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div 
      ref={ref}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 text-center group"
    >
      <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </div>
  )
}

export default function About() {
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

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Main Content */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I am a passionate Software Engineer with expertise in ML infrastructure, backend systems, and full-stack development. 
                  Currently pursuing a Master's degree in Software Engineering at Carnegie Mellon University, 
                  I have about 4 years of professional experience spanning Amazon, ZS Associates, and academic research.
                </p>
                
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  At Amazon, I pioneered novel LoRA optimization techniques that reduced GPU costs by 4× and training time by 58%. 
                  At ZS Associates, I architected scalable data platforms that generated $270K+ in revenue while reducing operational effort by 70%.
                </p>
                
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  My goal is to leverage my expertise in ML systems, cloud infrastructure, and scalable software architecture 
                  to create innovative solutions that drive meaningful impact in the technology industry.
                </p>
              </div>

              {/* Skills Highlight */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-3">
                  {[
                    'Machine Learning',
                    'Software Engineering', 
                    'Cloud Infrastructure',
                    'Backend Systems',
                    'Data Analysis',
                    'Team Leadership',
                    'Research & Development'
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium transition-all duration-300 delay-${index * 100} hover:bg-slate-200 dark:hover:bg-slate-600 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <StatCard 
              value={4}
              suffix="" 
              label="Years Industry Experience" 
              delay={400}
            />
            
            <StatCard 
              value={270} 
              suffix="K+" 
              label="Revenue Generated" 
              delay={600}
            />
            
            <StatCard 
              value={95} 
              suffix="%" 
              label="Process Optimization" 
              delay={800}
            />
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 text-center group">
              <Award className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Innovation Awards</h3>
              <p className="text-slate-600 dark:text-slate-400">Multiple recognition awards for innovative solutions and outstanding performance</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 text-center group">
              <Target className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Process Excellence</h3>
              <p className="text-slate-600 dark:text-slate-400">Achieved up to 95% optimization in data processing pipelines</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 text-center group">
              <Users className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Team Leadership</h3>
              <p className="text-slate-600 dark:text-slate-400">Successfully led cross-functional teams across multiple high-impact projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}