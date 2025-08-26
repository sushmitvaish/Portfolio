import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <div className="relative">
      {/* Main Content */}
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Publications />
      <Achievements />

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-slate-300">
                <p>sushmitv@andrew.cmu.edu</p>
                <p>(408) 663-3512</p>
                <p>Sunnyvale, CA</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#experience" className="block text-slate-300 hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="block text-slate-300 hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="block text-slate-300 hover:text-white transition-colors">Skills</a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="space-y-2">
                <a 
                  href="https://linkedin.com/in/sushmit-vaish-371a20144" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/sushmitvaish" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://drive.google.com/file/d/1B_f6u1KidMontuO06JyxEz_QPNi7PwYB/view?usp=share_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Sushmit Vaish. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}