import React from 'react';
import { Github, Linkedin, Smartphone, Code, TrendingUp, MapPin, Calendar, Mail } from 'lucide-react';
import { useTypewriter, RevealOnScroll } from './Animations'; // Импортируем нашу логику

const Portfolio = () => {
  const typedText = useTypewriter('A FinTech Developer.', 100, 500);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      <header className="bg-teal-600 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 animate-blob"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="inline-block bg-teal-700 text-teal-100 px-3 py-1 rounded-full text-sm font-semibold mb-4 animate-fade-in cursor-default">
              Application for MoneyLion Intern - Mobile/Frontend
            </div>
          </RevealOnScroll>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 h-32 md:h-auto cursor-default">
            <RevealOnScroll delay={200}>
              Not just a student.<br />
            </RevealOnScroll>
            <span className="text-teal-200">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <RevealOnScroll delay={400}>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mb-8 cursor-default">
              I'm Abdulla Mashayev. I'm already building scalable financial apps in Kuala Lumpur. 
              Here is why I am ready to join the Pride in Jan 2026.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={600}>
            <div className="flex gap-4">
              <a href="mailto:abdullamshv@gmail.com" className="bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-bold flex items-center transition hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                <Mail className="w-5 h-5 mr-2" /> Contact Me
              </a>
              <a href="https://www.linkedin.com/in/abdulla-mashayev" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-bold flex items-center transition hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 grid gap-12">
        
        <RevealOnScroll>
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center cursor-default">
              <TrendingUp className="w-8 h-8 text-teal-600 mr-3" />
              The FinTech Fit
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-teal-500 hover:shadow-2xl transition-shadow duration-300 cursor-default">
              <h3 className="text-2xl font-bold mb-2">Flutter Developer @ FinFin</h3>
              <p className="text-slate-500 mb-4 font-medium">Dec 2024 - Present | Kuala Lumpur (Startup Environment)</p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                I don't just study code; I ship products. At FinFin, I spearheaded the mobile app development, handling real-time financial data and state management.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-100 p-4 rounded-lg transform transition hover:-translate-y-1 duration-300">
                  <span className="block text-3xl font-bold text-teal-600 mb-1">-30%</span>
                  <span className="text-slate-600 font-medium">Load Time Reduction</span>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg transform transition hover:-translate-y-1 duration-300">
                  <span className="block text-3xl font-bold text-teal-600 mb-1">100%</span>
                  <span className="text-slate-600 font-medium">Crash-Free Launch</span>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center cursor-default">
              <Code className="w-8 h-8 text-teal-600 mr-3" />
              The Technical Bridge
            </h2>
            <div className="grid md:grid-cols-2 gap-6 cursor-default">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Mobile Native</h3>
                </div>
                <p className="text-slate-600">
                  Experienced in <strong>Flutter & Dart</strong>. I understand mobile lifecycles, state management (Provider/Bloc), and deploying to stores.
                  <span className="block mt-2 text-sm text-blue-600 font-bold bg-blue-50 p-2 rounded animate-pulse">
                    Status: Ready to adapt to React Native.
                  </span>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-indigo-100">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold">Modern Web</h3>
                </div>
                <p className="text-slate-600">
                  Proficient in <strong>React.js, Tailwind CSS, and JavaScript</strong>. I built this site to demonstrate my frontend capabilities.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="bg-slate-800 text-slate-300 p-8 rounded-2xl hover:bg-slate-700 transition-colors duration-500 cursor-default">
            <h2 className="text-2xl font-bold text-white mb-6">Logistics & Availability</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-teal-400 mr-3 mt-1" />
                <div>
                  <strong className="block text-white">Location</strong>
                  Kuala Lumpur, Malaysia
                  <span className="block text-sm opacity-70">(APU Student)</span>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-teal-400 mr-3 mt-1" />
                <div>
                  <strong className="block text-white">Start Date</strong>
                  Available January 12th, 2026
                  <span className="block text-sm opacity-70">(6 Month Internship)</span>
                </div>
              </div>
               <div className="flex items-start">
                <Github className="w-6 h-6 text-teal-400 mr-3 mt-1" />
                <div>
                  <strong className="block text-white">Code Quality</strong>
                  <a href="https://github.com/Abdullamshv" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-400 transition cursor-pointer">View my GitHub</a>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

      </main>

      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm cursor-default">
        <p>© 2025 Abdulla Mashayev. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;