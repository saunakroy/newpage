import React, { useState, useEffect, useRef } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Refs for each section
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const bgColor = isDarkMode ? '#050d1a' : '#f0f4f8';
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, [isDarkMode]);

  useEffect(() => {
    const sectionRefs = [
      { id: 'hero', ref: heroRef },
      { id: 'projects', ref: projectsRef },
      { id: 'resume', ref: resumeRef },
    ];
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 4;
      let current = 'hero';
      for (let i = 0; i < sectionRefs.length; i++) {
        const section = sectionRefs[i].ref.current;
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top + window.scrollY - 80 <= scrollPos) {
            current = sectionRefs[i].id;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "Brain Tumor Classification",
      description: "Developed a custom CNN architecture and utilized transfer learning models like ResNet to classify MRI scans of brain tumors. Achieved an F1 score of 0.96 through data augmentation and regularization techniques. This project served as an introduction to computer vision and image classification fundamentals.",
      technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning", "OpenCV"],
      link: "https://github.com/saunakroy/Brain-Tumor-Classification/blob/main/brainML.ipynb"
    },
    {
      title: "SIGCSE 2025 Research Paper",
      description: "Published research examining undergraduate AI literacy at UMD during the OUR Summer Research internship. Utilized R and NVivo for data analysis and visualization, uncovering correlations between students' technical AI knowledge and their perception of AI risks. Paper accepted and presented at ACM SIGCSE 2025 conference.",
      technologies: ["R", "NVivo", "Data Analysis", "Research", "Data Visualization"],
      link: "https://drive.google.com/file/d/1PZYVS4tUz96Lc9AKLdC-QrCUDICeRBNJ/view"
    },
    {
      title: "TSP Algorithms Implementation",
      description: "Implemented and analyzed seven different algorithms for solving the Traveling Salesman Problem using Python. Created detailed visualizations comparing efficiency, runtime, and cost metrics. This comprehensive project enhanced algorithmic thinking skills through practical implementation.",
      technologies: ["Python", "Algorithms", "Data Structures", "Optimization", "Data Visualization"],
      link: "https://github.com/saunakroy/Solving-TSP-HW/blob/main/Saunak_Roy_TSP.ipynb"
    },
    {
      title: "US Wage Analysis",
      description: "Developed a comprehensive tutorial analyzing 49 years of US wage data using data science and machine learning techniques. Implemented regression, ANOVA, and t-tests to assess wage impacts and predict trends, achieving R-squared values up to 0.95. Project completed as part of Introduction to Data Science coursework.",
      technologies: ["Python", "Machine Learning", "Statistical Analysis", "Data Science", "Regression"],
      link: "https://github.com/saunakroy/320-Final-Project/blob/main/320wagesfinalproject.ipynb"
    }
  ];

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:saunakr@umd.edu',
      icon: <EnvelopeIcon className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saunak-roy/',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/saunakroy',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#050d1a] text-white' : 'bg-[#f0f4f8] text-gray-900'} p-4 pb-16 transition-colors duration-200`}>
      <header className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-200 ${isDarkMode ? 'bg-[#050d1a]/80 backdrop-blur-sm' : 'bg-[#f0f4f8]/80 backdrop-blur-sm'}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-500/30 border border-gray-300/30 rounded-xl shadow-md px-6 py-2 backdrop-blur-md mt-2">
              <nav className="relative flex justify-center space-x-8">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative font-medium px-2 py-1 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    style={{ zIndex: 1 }}
                  >
                    {link.name}
                    {activeSection === link.href.replace('#', '') && (
                      <motion.div
                        layoutId="nav-slider"
                        className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-white"
                        style={{ zIndex: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-lg z-20 ${
          isDarkMode 
            ? 'bg-white/10 hover:bg-white/20' 
            : 'bg-gray-300 hover:bg-gray-400'
        } transition-colors duration-200`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <SunIcon className="h-7 w-7" />
        ) : (
          <MoonIcon className="h-7 w-7" />
        )}
      </motion.button>
      
      <div id="hero" ref={heroRef} className="max-w-5xl mx-auto space-y-24 pt-56">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8"
        >
          <div className="flex-1 w-full md:w-1/2 flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-4"
          >
            {"Saunak Roy".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
            <motion.div 
              className="space-y-6 mb-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.p 
                className="text-lg leading-relaxed"
                variants={fadeInUp}
              >
                Hi! My name is Saunak Roy, and I'm a junior computer science and mathematics student at the University of Maryland, College Park. I'm broadly interested in the fields of Data Science, Machine Learning, and Computer Vision, as well as their intersection with healthcare/medicine. Click on the {' '}
                <a href="#projects" className="text-blue-400 hover:text-blue-300 underline focus:outline-none">
                  Projects
                </a>
                {' '}section to view several artifacts showcasing my diverse technical skill set.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-row space-x-4 mt-2"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`$${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white bg-white/10 hover:bg-white/20' 
                      : 'text-gray-700 hover:text-gray-900 bg-gray-200 hover:bg-gray-300'
                  } transition-colors duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg text-base`}
                  variants={fadeInUp}
                >
                  <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{item.icon}</span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border-4 border-white p-1 shadow-xl w-64 h-64 flex-shrink-0"
          >
            <img
              src="/newpage/images/profile.jpg"
              alt="Saunak Roy"
              className="w-full h-full rounded-full object-cover object-[50%_35%]"
            />
          </motion.div>
        </motion.div>
        
        <main className="space-y-24">
          <section id="projects" ref={projectsRef} className="pt-32 -mt-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
            <div className={`rounded-xl ${ isDarkMode ? 'bg-white/[0.05]' : 'bg-white shadow-lg' } p-6`}>
              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`border ${ isDarkMode ? 'border-white/20 hover:bg-white/[0.05]' : 'border-gray-200 hover:bg-blue-50' } rounded-lg p-6 transition-colors`}
                    variants={fadeInUp}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-1.5 rounded transition-colors font-medium ${ isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-700 text-white hover:bg-blue-800' } text-base`}
                      >
                        Link
                      </a>
                    </div>
                    <p className={isDarkMode ? 'text-gray-300 mb-4' : 'text-gray-700 mb-4'}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm ${ isDarkMode ? 'bg-blue-900/40' : 'bg-blue-100 text-blue-800' }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          
          <section id="resume" ref={resumeRef} className="pt-16 -mt-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Resume</h2>
            <div className={`rounded-xl ${ isDarkMode ? 'bg-white/[0.05]' : 'bg-white shadow-lg' } p-6`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="relative w-full" style={{ height: "1300px" }}>
                  <iframe
                    src="/newpage/SR_Resume.pdf#view=FitH"
                    className="absolute top-0 left-0 w-full h-full rounded-lg bg-white"
                    style={{ border: "none" }}
                    title="Resume"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-center py-8 mt-16 border-t ${ isDarkMode ? 'border-white/10' : 'border-gray-200' }`}
        >
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>© Copyright 2025 Saunak Roy.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;
