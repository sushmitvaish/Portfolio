"use client"

import { useState, useEffect, useRef } from 'react'
import { Briefcase, Calendar, ChevronRight, Users, BarChart, Wrench, Target, Building2, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Experience() {
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

  const experiences = [
    {
      title: "Software Developer Intern (ML)",
      company: "Amazon",
      location: "Sunnyvale, CA",
      period: "June 2025 - August 2025",
      type: "Internship",
      logo: "public/amazon-logo.jpg",
      achievements: [
        {
          icon: Target,
          text: "Reduced LoRA inference GPU cost by 4× by pioneering a post-hoc adapter extraction technique preserving performance",
          impact: "high" as const
        },
        {
          icon: BarChart,
          text: "Optimized LoRA training time by 58% by minimizing computations using a novel fine-tuning approach",
          impact: "high" as const
        },
        {
          icon: Wrench,
          text: "Automated LoRA-enabled inference benchmarking using LLMPerf, generating key latency metrics (TTFT, TPOT)",
          impact: "high" as const
        }
      ],
      skills: ['Python', 'PyTorch', 'AWS', 'LLMs', 'LoRA', 'Fine-Tuning', 'Machine Learning', 'Hyperparameter Optimization', 'GPU Optimization', 'NLP']
    },
    {
      title: "Research Assistant",
      company: "Carnegie Mellon University",
      location: "Mountain View, CA",
      period: "January 2025 - May 2025",
      type: "Research",
      logo: "public/cmu-logo.png",
      achievements: [
        {
          icon: Target,
          text: "Created an LLM-based auto-grading system with CodeLlama-7B, achieving 80% alignment with instructor feedback",
          impact: "high" as const
        },
        {
          icon: Wrench,
          text: "Applied vector embeddings, prompt engineering and advanced NLP metrics (ROUGE-L, BERTScore) for grading accuracy",
          impact: "medium" as const
        }
      ],
      skills: ['Python', 'LLMs', 'CodeLlama', 'NLP', 'Vector Embeddings', 'Prompt Engineering', 'ROUGE-L', 'BERTScore', 'Research']
    },
    {
      title: "Teaching Assistant",
      company: "Carnegie Mellon University",
      location: "Mountain View, CA",
      period: "January 2025 - May 2025",
      type: "Academic",
      logo: "public/cmu-logo.png",
      achievements: [
        {
          icon: Users,
          text: "Mentored 20+ students in 'Foundations of Software Engineering' through Code Reviews, Recitations & Agile practices",
          impact: "medium" as const
        },
        {
          icon: Wrench,
          text: "Facilitated backend project design and promoted modern SDLC methodologies in classroom and labs",
          impact: "medium" as const
        }
      ],
      skills: ['Teaching', 'Mentoring', 'Code Reviews', 'Agile', 'SDLC', 'Software Engineering', 'Backend Development', 'Project Management']
    },
    {
      title: "Software Engineer / Senior Data Analyst",
      company: "ZS Associates",
      location: "New Delhi, India",
      period: "February 2021 - July 2024",
      type: "Full-time",
      logo: "public/zs-logo.png",
      achievements: [
        {
          icon: Target,
          text: "Improved data extraction performance by 25% via Java multi-threading and Hadoop optimization",
          impact: "high" as const
        },
        {
          icon: BarChart,
          text: "Architected a data publish platform in AWS that cut internal effort by 70% and increased client refresh rates 5×",
          impact: "high" as const
        },
        {
          icon: Wrench,
          text: "Automated quality checks in data processing pipeline to save daily runtime by 50% using bash scripts",
          impact: "medium" as const
        },
        {
          icon: Target,
          text: "Generated $270K revenue through process optimization initiatives",
          impact: "high" as const
        },
        {
          icon: Users,
          text: "Successfully led cross-functional teams of 2-3 associates, delivering multiple high-impact projects on time and within scope",
          impact: "medium" as const
        }
      ],
      skills: ['Python', 'Java', 'SQL', 'AWS', 'Hadoop', 'Data Analysis', 'VBA', 'Bash Scripting', 'Team Leadership', 'Process Optimization']
    },
    {
      title: "Software Engineer Intern",
      company: "Ebix Software India Pvt. Ltd.",
      location: "New Delhi, India",
      period: "May 2019 - June 2019",
      type: "Internship",
      logo: "public/ebix-logo.png",
      achievements: [
        {
          icon: Target,
          text: "Boosted app reliability by writing automated unit tests and embedding them in CI/CD workflows",
          impact: "medium" as const
        },
        {
          icon: Wrench,
          text: "Resolved critical bugs and collaborated with developers in agile delivery cycles",
          impact: "medium" as const
        },
        {
          icon: Target,
          text: "Quickly learned and adapted to new platforms and software systems",
          impact: "low" as const
        }
      ],
      skills: ['Software Testing', 'Unit Testing', 'CI/CD', 'Bug Fixing', 'Agile Development', 'Team Collaboration', 'Software Debugging']
    }
  ]

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Experience
            </h2>
          </div>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                        {exp.logo.startsWith('public/') || exp.logo.startsWith('/') ? (
                          <Image
                            src={exp.logo.startsWith('public/') ? exp.logo.replace('public', '') : exp.logo}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-3xl">{exp.logo}</span>
                        )}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-700 group/item ${
                        achievement.impact === 'high' 
                          ? 'bg-slate-100 dark:bg-slate-750 border-l-4 border-slate-400 dark:border-slate-500' 
                          : achievement.impact === 'medium'
                          ? 'bg-slate-50 dark:bg-slate-800 border-l-2 border-slate-300 dark:border-slate-600'
                          : 'bg-white dark:bg-slate-800'
                      }`}
                    >
                      <achievement.icon className="w-6 h-6 text-slate-500 dark:text-slate-400 mt-1 flex-shrink-0 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300 transition-colors duration-300" />
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-300">
                        {achievement.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills Used */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Key Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Impact
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Throughout my career, I have consistently delivered measurable results by combining technical expertise 
              with innovative problem-solving. My experience spans from ML optimization at Amazon to scalable data platforms at ZS Associates, 
              always focusing on creating high-impact solutions that drive business value and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}