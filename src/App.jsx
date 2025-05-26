import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
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

  const projects = [
    {
      title: "Machine Learning Healthcare Project",
      description: "Developed a deep learning model for medical image analysis using PyTorch and TensorFlow.",
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV"]
    },
    {
      title: "Computer Vision Research",
      description: "Conducted research on advanced object detection algorithms for medical applications.",
      technologies: ["Python", "OpenCV", "YOLO", "Keras"]
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
    <div className="min-h-screen bg-navy-900 text-white p-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Saunak Roy
        </motion.h1>
        
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
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
              variants={fadeInUp}
            >
              {item.icon}
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
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
              {['About', 'Projects', 'Resume'].map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-blue-900 shadow'
                        : 'text-white hover:bg-white/[0.12]'
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
          </motion.div>
          
          <Tab.Panels className="mt-2">
            <Tab.Panel className="rounded-xl bg-white/[0.05] p-6">
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
            
            <Tab.Panel className="rounded-xl bg-white/[0.05] p-6">
              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="border border-white/20 rounded-lg p-6 hover:bg-white/[0.05] transition-colors"
                    variants={fadeInUp}
                  >
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900/40 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>
            
            <Tab.Panel className="rounded-xl bg-white/[0.05] p-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl mb-4">Resume coming soon!</p>
                <p className="text-gray-300">
                  This section will be updated with my detailed professional experience and educational background.
                </p>
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default App;
