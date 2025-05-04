import React, { useState, useEffect, useRef } from 'react';

const DashboardPreview: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  
  const openModal = () => {
    lastFocusedElement.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    setModalVisible(true);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setModalVisible(false);
    
    // Return focus to the element that opened the modal
    if (lastFocusedElement.current) {
      lastFocusedElement.current.focus();
    }
  };

  const trapFocus = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key !== 'Tab') return;

    const focusableElements = modalContentRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as NodeListOf<HTMLElement>;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  const handleJoinWaitlist = () => {
    closeModal();
    // Check if waitlist modal exists from hero section
    const waitlistModal = document.getElementById('waitlist-modal');
    const waitlistButton = document.getElementById('waitlist-button');

    if (waitlistModal && waitlistButton) {
      setTimeout(() => {
        waitlistButton.click();
      }, 400);
    }
  };

  useEffect(() => {
    const modal = document.getElementById('dashboard-modal');
    if (modal) {
      modal.addEventListener('keydown', trapFocus as EventListener);
    }

    return () => {
      if (modal) {
        modal.removeEventListener('keydown', trapFocus as EventListener);
      }
    };
  }, []);

  return (
    <div>
      <section id="dashboard-preview" className="py-16 md:py-24 bg-neutral-700 text-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Dashboard</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Track your progress and visualize your improvement with our intuitive dashboard.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 relative">
              <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y29kaW5nJTIwcHJvZ3Jlc3MlMjBkYXNoYm9hcmQlMjBVSXxlbnwwfHx8fDE3NDYzNTQ5NjF8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Dcode DSA Dashboard Interface"
                  className="w-full h-auto rounded-md"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-full h-full bg-blue-600 rounded-lg -z-10"></div>
            </div>

            <div className="lg:w-2/5">
              <h3 className="text-2xl font-bold mb-6 text-white">Visualize Your Progress</h3>
              <div className="space-y-6 mb-8">
                <div className="bg-white text-neutral-900 p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">Problems Solved</h4>
                    <span className="text-blue-600 font-bold">78/150</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '52%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">52% of your custom sheet completed</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold">Topic Mastery</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Arrays</span>
                        <span className="text-blue-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Linked Lists</span>
                        <span className="text-blue-600">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Trees</span>
                        <span className="text-blue-600">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Dynamic Programming</span>
                        <span className="text-blue-600">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">Weekly Consistency</h4>
                    <span className="text-blue-600 font-bold">5/7 days</span>
                  </div>
                  <div className="flex justify-between mt-4">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                      <div className="flex flex-col items-center" key={index}>
                        <div
                          className={`w-8 h-8 rounded-full ${index === 3 || index === 6 ? 'bg-gray-200' : 'bg-blue-600'} mb-1`}
                        ></div>
                        <span className="text-xs">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                id="dashboard-preview-button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full"
                onClick={openModal}
              >
                See Full Dashboard Demo
              </button>
            </div>
          </div>

          {modalVisible && (
            <div
              id="dashboard-modal"
              className="fixed inset-0 z-50 flex items-center justify-center"
              aria-modal="true"
              aria-hidden="false"
            >
              <div
                className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"
                onClick={closeModal}
              />
              <div
                ref={modalContentRef}
                className="bg-white rounded-lg p-4 md:p-6 max-w-5xl w-full mx-4 relative z-10 transform transition-all duration-300 scale-100 opacity-100"
              >
                <button
                  id="close-dashboard-modal"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  aria-label="Close modal"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                
                <h2 className="text-2xl font-bold mb-4">Dashboard Demo</h2>

                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y29kaW5nJTIwcHJvZ3Jlc3MlMjBkYXNoYm9hcmQlMjBVSXxlbnwwfHx8fDE3NDYzNTQ5NjF8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Dcode DSA Full Dashboard Demo"
                    className="w-full h-[20rem] object-cover"
                  />
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Progress Tracking</h3>
                    <p className="text-sm text-gray-600">
                      Visualize your journey with detailed progress metrics and completion rates.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Skill Analysis</h3>
                    <p className="text-sm text-gray-600">
                      Identify your strengths and areas for improvement with our detailed skill breakdown.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Learning Recommendations</h3>
                    <p className="text-sm text-gray-600">
                      Get personalized problem recommendations based on your performance patterns.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    id="join-waitlist-from-modal"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    onClick={handleJoinWaitlist}
                  >
                    Join Waitlist for Early Access
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardPreview;
