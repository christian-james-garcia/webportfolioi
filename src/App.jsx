import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Sections in exact required order
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Capstone from './sections/Capstone';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('cjg_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'info'
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cjg_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cjg_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const showToast = (message, type = 'info') => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  const handleProjectActionClick = (project, actionType) => {
    if (actionType === 'demo') {
      showToast(
        `${project.title} is an operational internal system. Live demo environment is available upon request for authorized academic or recruiter review.`,
        'info'
      );
    } else if (actionType === 'github') {
      showToast(
        `The repository for ${project.title} is currently maintained in a private academic organization. Code walkthroughs available upon request.`,
        'info'
      );
    } else if (actionType === 'docs') {
      showToast(
        `Academic capstone documentation and thesis manuscript for ${project.title} are archived for ICST faculty review.`,
        'info'
      );
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-ink transition-colors duration-300 relative selection:bg-editorial-accent selection:text-white">
      {/* Reading Scroll Progress */}
      <ScrollProgress />

      {/* Sticky Editorial Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Single-Page Content */}
      <main id="main-content">
        {/* 1. Home / Landing */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects onActionClick={handleProjectActionClick} />

        {/* 5. Capstone Project */}
        <Capstone onActionClick={handleProjectActionClick} />

        {/* 6. Experience / OJT */}
        <Experience />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Achievements */}
        <Achievements />

        {/* 9. Education */}
        <Education />

        {/* 10. Resume Section */}
        <ResumeSection
        />

        {/* 11. Contact */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* User Action Feedback Toast */}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
}
