import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
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

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set background color for html and body elements
    const bgColor = isDarkMode ? '#050d1a' : '#f0f4f8';
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
    
    // Clean up when component unmounts
    return () => {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
  }, [isDarkMode]);

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

  const handleProjectsClick = () => {
    setSelectedTab(1);
  };

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
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Theme Toggle Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={toggleTheme}
          className={`fixed top-4 right-4 p-2 rounded-lg ${
            isDarkMode 
              ? 'bg-white/10 hover:bg-white/20' 
              : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors duration-200`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8"
        >
          <div className="mb-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-full border-4 border-white p-1 shadow-xl"
            >
              <img
                src="/newpage/images/profile.jpg"
                alt="Saunak Roy"
                className="w-48 h-48 rounded-full object-cover object-[50%_35%]"
              />
            </motion.div>
          </div>
          <h1 className="text-4xl font-bold mb-8">Saunak Roy</h1>
        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
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
              className={`${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white bg-white/10 hover:bg-white/20' 
                  : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
              } transition-colors duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg`}
              variants={fadeInUp}
            >
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{item.icon}</span>
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tab.List className={`flex space-x-1 rounded-xl ${
              isDarkMode ? 'bg-blue-900/20' : 'bg-blue-100'
            } p-1 mb-8`}>
              {['About', 'Projects', 'Resume'].map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-blue-900 shadow'
                        : isDarkMode
                          ? 'text-white hover:bg-white/[0.12]'
                          : 'text-gray-600 hover:bg-gray-100'
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
          </motion.div>
          
          <Tab.Panels className="mt-2">
            <Tab.Panel className={`rounded-xl ${
              isDarkMode ? 'bg-white/[0.05]' : 'bg-white shadow-lg'
            } p-6`}>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeInUp}
                >
                  Hi! My name is Saunak Roy, and I'm a sophomore computer science and mathematics student at the University of Maryland, College Park. This site showcases several projects, research, and other experiences I've engaged in during my time as a student, where I've primarily explored my interests in the fields of machine learning and computer vision and their intersection with healthcare/medicine. I created this site to keep a record of my evolving skill set in computer science and easily share my work with students, professors, and employers.
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed"
                  variants={fadeInUp}
                >
                  During my undergraduate years, I've been fascinated by the fields of machine learning, computer vision, and data science, and most of my work revolves around these fields. I'm curious to learn about the ways these fields intertwine and are applied in other fields, like healthcare. My goal is to enroll in a graduate program where I hope to further my exploration of these fields in depth by conducting cutting-edge research. I hope to maintain this portfolio throughout my career to highlight all the professional milestones I cross and the impactful academic/societal contributions I make. Click on the {' '}
                  <button 
                    onClick={handleProjectsClick}
                    className="text-blue-400 hover:text-blue-300 underline focus:outline-none"
                  >
                    Projects
                  </button>
                  {' '}tab to view several artifacts showcasing my diverse technical skill set.
                </motion.p>
              </motion.div>
            </Tab.Panel>
            
            <Tab.Panel className={`rounded-xl ${
              isDarkMode ? 'bg-white/[0.05]' : 'bg-white shadow-lg'
            } p-6`}>
              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`border ${
                      isDarkMode 
                        ? 'border-white/20 hover:bg-white/[0.05]' 
                        : 'border-gray-200 hover:bg-blue-50'
                    } rounded-lg p-6 transition-colors`}
                    variants={fadeInUp}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Link
                      </a>
                    </div>
                    <p className={isDarkMode ? 'text-gray-300 mb-4' : 'text-gray-700 mb-4'}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode 
                              ? 'bg-blue-900/40' 
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>
            
            <Tab.Panel className={`rounded-xl ${
              isDarkMode ? 'bg-white/[0.05]' : 'bg-white shadow-lg'
            } p-6`}>
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-center py-8 mt-16 border-t ${
            isDarkMode ? 'border-white/10' : 'border-gray-200'
          }`}
        >
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>© Copyright 2025 Saunak Roy.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;
