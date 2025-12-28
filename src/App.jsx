import React from 'react';
import { Github, Linkedin, Smartphone, Code, TrendingUp, MapPin, Calendar, Mail } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-teal-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-teal-700 text-teal-100 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Application for MoneyLion Intern - Mobile/Frontend
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Not just a student.<br />
            <span className="text-teal-200">A FinTech Developer.</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mb-8">
            I'm Abdulla Mashayev. I'm already building scalable financial apps in Kuala Lumpur. 
            Here is why I am ready to join the Pride in Jan 2026.
          </p>
          <div className="flex gap-4">
            <a href="mailto:abdullamshv@gmail.com" className="bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-bold flex items-center transition">
              <Mail className="w-5 h-5 mr-2" /> Contact Me
            </a>
            <a href="www.linkedin.com/in/abdulla-mashayev" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-bold flex items-center transition">
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 grid gap-12">
        
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-teal-600 mr-3" />
            The FinTech Fit
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-teal-500">
            <h3 className="text-2xl font-bold mb-2">Flutter Developer @ FinFin</h3>
            <p className="text-slate-500 mb-4 font-medium">Dec 2024 - Present | Kuala Lumpur (Startup Environment)</p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I don't just study code; I ship products. At FinFin, I spearheaded the mobile app development, handling real-time financial data and state management.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <span className="block text-3xl font-bold text-teal-600 mb-1">-30%</span>
                <span className="text-slate-600 font-medium">Load Time Reduction</span>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <span className="block text-3xl font-bold text-teal-600 mb-1">100%</span>
                <span className="text-slate-600 font-medium">Crash-Free Launch</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <Code className="w-8 h-8 text-teal-600 mr-3" />
            The Technical Bridge
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Mobile Native</h3>
              </div>
              <p className="text-slate-600">
                Experienced in <strong>Flutter & Dart</strong>. I understand mobile lifecycles, state management (Provider/Bloc), and deploying to stores.
                <span className="block mt-2 text-sm text-blue-600 font-bold bg-blue-50 p-2 rounded">
                  Status: Ready to adapt to React Native.
                </span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
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

        <section className="bg-slate-800 text-slate-300 p-8 rounded-2xl">
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
                <a href="https://github.com/Abdullamshv" className="underline hover:text-teal-400 transition">View my GitHub</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <p>© 2025 Abdulla Mashayev. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;