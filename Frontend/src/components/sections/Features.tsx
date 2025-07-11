import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, easeOut, easeIn, easeInOut } from 'framer-motion';

type Feature = {
  id: string;
  title: string;
  description: string;
  img: string;
  details: string[];
};

const features: Feature[] = [
  {
    id: 'custom-sheets',
    title: 'Custom DSA Sheets',
    description: 'Personalized problem collections tailored to your skill level and learning goals.',
    img: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'Personalized problem collections based on your skill assessment',
      'Curated by top competitive programmers and industry experts',
      'Difficulty progression that adapts to your learning pace',
      'Topic-specific sheets to strengthen particular concepts',
      'Company-specific sheets for targeted interview preparation',
    ],
  },
  {
    id: 'roadmaps',
    title: 'Goal-Based Roadmaps',
    description: 'Structured learning paths designed for specific career goals and interview preparation.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'Specialized paths for FAANG, startups, or competitive programming',
      'Time-bound preparation plans (1-month, 3-month, 6-month)',
      'Weekly milestones and checkpoints to keep you on track',
      'Integrated with our problem sheets for a cohesive learning experience',
      'Adaptive difficulty adjustment based on your progress',
    ],
  },
  {
    id: 'editor',
    title: 'Distraction-Free Editor',
    description: 'Clean, intuitive code environment with syntax highlighting and auto-completion.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'Syntax highlighting for multiple programming languages',
      'Real-time code execution and output display',
      'Auto-completion to boost speed',
      'Minimal UI to keep you focused',
      'Dark and light theme toggle',
    ],
  },
  {
    id: 'tracking',
    title: 'Smart Progress Tracking',
    description: 'Detailed analytics and insights to monitor your improvement and identify weak areas.',
    img: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    details: [
      'Track solved problems, time spent, and accuracy',
      'Visualize progress over time with charts',
      'Identify weak topics with auto-suggestions',
      'Export progress reports',
      'Sync across devices',
    ],
  },
];

const Features: React.FC = () => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);

  const selectedFeature: Feature | undefined = features.find(
    (feature) => feature.id === selectedFeatureId
  );

  const handleOpen = (id: string) => setSelectedFeatureId(id);
  const handleClose = () => setSelectedFeatureId(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: easeInOut
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: easeInOut
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "hsl(var(--primary))",
      color: "white",
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: easeIn
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: easeOut
      }
    })
  };

  return (
    <section id="features" className="py-8 md:py-16 bg-gradient-to-bl from-base-200 via-base-100 to-primary/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Features
          </motion.h2>
          <motion.p 
            className="md:text-lg max-w-xl mx-auto text-base-content/70"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Powerful tools designed to accelerate your DSA learning journey and prepare you for technical interviews.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
              className="card bg-base-300/80 h-fit rounded-lg border-2 border-base-300 overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="h-32 md:h-48 overflow-hidden">
                <motion.img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  variants={imageVariants}
                />
              </div>
              <div className="p-6 flex flex-col">
                <motion.h3 
                  className="text-lg md:text-xl text-primary font-bold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-md text-accent-content mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                >
                  {feature.description}
                </motion.p>
                <motion.button
                  onClick={() => handleOpen(feature.id)}
                  className="btn btn-link w-fit align-bottom font-medium flex items-center rounded-xl"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                >
                  Learn more
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedFeature && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center" 
              aria-modal="true"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm"
                onClick={handleClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
              />
              <motion.div 
                className="bg-base-300 max-h-[80%] md:max-h-[90%] overflow-y-auto rounded-lg md:p-8 p-4 max-w-2xl w-full mx-4 relative z-10"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-primary-content cursor-pointer btn btn-circle btn-sm md:btn-md"
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 md:w-6 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <motion.h2 
                  className="text-xl md:text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {selectedFeature.title}
                </motion.h2>
                
                <motion.img
                  src={selectedFeature.img}
                  alt={selectedFeature.title}
                  className="w-full h-40 md:h-64 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                
                <motion.p 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {selectedFeature.description}
                </motion.p>
                
                <motion.ul 
                  className="list-disc pl-5 mb-6 space-y-2"
                  initial="hidden"
                  animate="visible"
                >
                  {selectedFeature.details.map((point, index) => (
                    <motion.li 
                      key={index}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <motion.button 
                    className="btn btn-soft btn-primary"
                    onClick={handleClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={"/problem"}>
                      Start DCode Journey
                    </Link>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;
