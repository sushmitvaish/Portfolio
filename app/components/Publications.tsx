"use client"

import { useState, useEffect, useRef } from 'react'
import { FileText, ExternalLink, Calendar, BookOpen, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Publications() {
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
      id="publications" 
      ref={ref}
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Publications
            </h2>
          </div>
          <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Research contributions in the field of data science and machine learning.
          </p>
        </div>

        {/* Publication */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
            
            {/* Publication Header */}
            <div className="bg-slate-50 dark:bg-slate-750 p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-sm font-medium">
                    Research Paper
                  </span>
                </div>
              </div>
            </div>

            {/* Publication Content */}
            <div className="p-8 lg:p-10">
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Data Extraction and Sentimental Analysis from "Twitter" using Web Scrapping
              </h3>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 mb-6 text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>International Journal of Engineering and Advanced Technology (IJEAT)</span>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Abstract</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  This research focuses on developing a machine learning model to extract data and identify sentiments 
                  with respect to posts and messages on Twitter. The study implements advanced web scraping techniques 
                  combined with natural language processing to analyze social media sentiment patterns, providing 
                  valuable insights into public opinion dynamics.
                </p>
              </div>

              {/* Key Contributions */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Contributions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600 dark:text-slate-300">Developed efficient web scraping algorithms for Twitter data extraction</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600 dark:text-slate-300">Implemented machine learning models for sentiment classification</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600 dark:text-slate-300">Applied natural language processing techniques for text analysis</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600 dark:text-slate-300">Validated results through comprehensive experimental analysis</span>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Technologies & Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Machine Learning',
                    'Web Scraping',
                    'Natural Language Processing',
                    'Sentiment Analysis',
                    'Python',
                    'Data Mining',
                    'Social Media Analytics'
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a 
                    href="https://www.ijeat.org/portfolio-item/a2226109119/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Publication
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Research Impact */}
        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-700">
            
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Research Impact & Future Work
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                This research contributes to the growing field of social media analytics and demonstrates 
                practical applications of machine learning in understanding public sentiment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Methodology Innovation
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Novel approach combining web scraping with advanced ML techniques for social media analysis
                </p>
              </div>

              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Practical Applications
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Real-world applications in market research, brand monitoring, and public opinion analysis
                </p>
              </div>

              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Academic Contribution
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Published in peer-reviewed journal, contributing to the academic discourse on data science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}