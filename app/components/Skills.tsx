"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Code, Database, Cloud, Wrench, Users, Brain, Award, LucideIcon } from 'lucide-react'

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
}

interface SkillBarProps {
  skill: Skill;
  index: number;
  isActive: boolean;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
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

  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Go", level: 70 },
        { name: "Shell Scripting", level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: "Web Development",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "Node.js", level: 88 },
        { name: "SpringBoot", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "Flask", level: 78 },
        { name: "HTML/CSS", level: 90 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      icon: Database,
      title: "Database & Analytics",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 88 },
        { name: "AWS Redshift", level: 85 },
        { name: "Data Analysis", level: 92 },
        { name: "Hadoop", level: 80 },
        { name: "Spark", level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (EC2, S3, Lambda, Fargate)", level: 85 },
        { name: "Google Cloud Platform", level: 75 },
        { name: "Microsoft Azure", level: 70 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD Pipelines", level: 82 },
        { name: "Linux Administration", level: 82 }
      ]
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 82 },
        { name: "JIRA", level: 85 },
        { name: "Jest Testing", level: 85 },
        { name: "Agile/Scrum", level: 88 }
      ]
    },
    {
      icon: Brain,
      title: "ML & Data Science",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "LLMs", level: 88 },
        { name: "LoRA Fine-Tuning", level: 85 },
        { name: "AWS Bedrock", level: 80 },
        { name: "SageMaker", level: 78 },
        { name: "Hyperparameter Optimization", level: 82 }
      ]
    },
    {
      icon: Users,
      title: "Leadership & Soft Skills",
      skills: [
        { name: "Team Leadership", level: 88 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Mentoring", level: 85 },
        { name: "Teaching", level: 82 }
      ]
    }
  ]

  const SkillBar = ({ skill, index, isActive }: SkillBarProps) => {
    const [animatedLevel, setAnimatedLevel] = useState(0)

    useEffect(() => {
      if (isActive && isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level)
        }, index * 100)
        return () => clearTimeout(timer)
      }
    }, [isActive, isVisible, skill.level, index])

    return (
      <div className="mb-4 last:mb-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {skill.name}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {animatedLevel}%
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-slate-600 dark:bg-slate-400 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Technical Skills
            </h2>
          </div>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities 
            developed through years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Skills Navigation */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Skills Category */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-700">
              
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  {React.createElement(skillCategories[activeCategory].icon, {
                    className: "w-8 h-8 text-slate-600 dark:text-slate-400"
                  })}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill} 
                    index={index}
                    isActive={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Development */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  Continuous Learning
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Current Focus
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Advanced ML systems, LLM optimization, and scalable cloud-native architectures
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Research Areas
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  LoRA fine-tuning, GPU optimization, and automated ML pipeline development
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Leadership
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Teaching assistance, team mentoring, and technical project leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}