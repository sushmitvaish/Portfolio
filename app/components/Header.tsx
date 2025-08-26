"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Eye, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Header() {
  const [typedText, setTypedText] = useState('')
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const jobs = ['Software Engineer', 'ML Engineer', 'Backend Developer']

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Improved typing animation
  useEffect(() => {
    const currentJob = jobs[currentJobIndex]
    let index = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const typeWriter = () => {
      if (!isDeleting && index <= currentJob.length) {
        // Typing phase
        setTypedText(currentJob.substring(0, index))
        index++
        
        if (index <= currentJob.length) {
          timeoutId = setTimeout(typeWriter, 120) // Slower, more readable typing
        } else {
          // Pause at the end before deleting
          timeoutId = setTimeout(() => {
            isDeleting = true
            typeWriter()
          }, 2500) // Longer pause to read the complete text
        }
      } else if (isDeleting && index >= 0) {
        // Deleting phase
        setTypedText(currentJob.substring(0, index))
        index--
        
        if (index >= 0) {
          timeoutId = setTimeout(typeWriter, 80) // Faster deleting
        } else {
          // Move to next job after a pause
          timeoutId = setTimeout(() => {
            setCurrentJobIndex((prev) => (prev + 1) % jobs.length)
          }, 800) // Pause before starting next word
        }
      }
    }

    // Start the animation
    const startTimeout = setTimeout(typeWriter, 500) // Initial delay

    // Cleanup function
    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeoutId)
    }
  }, [currentJobIndex]) // Only depend on currentJobIndex

  const scrollToSection = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50" />
      
      <Card className={`relative z-10 w-full max-w-6xl mx-auto overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-2xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 dark:from-slate-400/10 dark:to-slate-500/10" />
        
        <CardContent className="relative p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Passport_Size_Pic_Sushmit_Vaish-ZFnvm0iI4SaBUpBb3u3IP1KV1AWTAk.png"
                  alt="Sushmit Vaish"
                  width={320}
                  height={320}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              
              {/* Name and Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Sushmit Vaish
                </h1>
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <span className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-light min-h-[1.2em]">
                    {typedText}
                    <span className="animate-pulse text-slate-400 ml-1">|</span>
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  Passionate Software Engineer with expertise in ML infrastructure, backend systems, and full-stack development. 
                  Currently pursuing MS in Software Engineering at Carnegie Mellon University with about 4 years of professional experience.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-4 text-slate-600 dark:text-slate-400 text-sm justify-center lg:justify-start">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>Sunnyvale, CA</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>sushmit.vaish@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>(408) 663-3512</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="group bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <a href="https://linkedin.com/in/sushmit-vaish-371a20144" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <a href="https://github.com/sushmitvaish" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1OJvEGKS65V-jLdFp-ITHZsEAsfPNfboV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scroll indicator */}
      <button
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}