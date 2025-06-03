import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">Features</h2>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Powerful tools designed to accelerate your DSA learning journey and prepare you for technical interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-20">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-300/80 h-fit rounded-lg border-2 border-base-300 overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl text-primary font-bold mb-2">{feature.title}</h3>
                <p className="text-primary-content mb-4">{feature.description}</p>
                <button
                  onClick={() => handleOpen(feature.id)}
                  className="btn btn-link w-fit align-bottom font-medium flex items-center hover:bg-primary p-2 hover:text-white rounded-xl"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true">
            <div
              className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm"
              onClick={handleClose}
            ></div>
            <div className="bg-base-300 max-h-[80%] md:max-h-[90%] overflow-y-auto rounded-lg p-8 max-w-2xl w-full mx-4 relative z-10">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-primary-content cursor-pointer btn btn-circle"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedFeature.title}</h2>
              <img
                src={selectedFeature.img}
                alt={selectedFeature.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="mb-4">{selectedFeature.description}</p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {selectedFeature.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="flex justify-end">
                <button 
                  className="btn btn-soft btn-primary "
                  onClick={handleClose}
                >
                  <Link to={"/problem"}>
                    Start DCode Journey
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
