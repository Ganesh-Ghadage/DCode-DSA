import { useEffect, useRef, useState } from 'react';
import { SparklesText } from '../magicui/sparkles-text';
import { TextAnimate } from '../magicui/text-animate';
import { useForm } from '@formspree/react';
import Notification from '../comps/Notification';

const Hero: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [lastFocusedElement, setLastFocusedElement] = useState<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [state, submitForm, _ ] = useForm("xanoegoy");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      modalRef.current.addEventListener('keydown', trapFocus);
      return () => modalRef.current?.removeEventListener('keydown', trapFocus);
    }
  }, [isModalOpen]);

  const openModal = () => {
    setLastFocusedElement(document.activeElement as HTMLElement);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      modalContentRef.current?.classList.remove('scale-95', 'opacity-0');
      modalContentRef.current?.classList.add('scale-100', 'opacity-100');
      modalRef.current?.querySelector('input')?.focus();
    }, 10);
  };

  const closeModal = () => {
    modalContentRef.current?.classList.remove('scale-100', 'opacity-100');
    modalContentRef.current?.classList.add('scale-95', 'opacity-0');
    document.body.style.overflow = '';
    setTimeout(() => setModalOpen(false), 300);
    lastFocusedElement?.focus();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm(e)
    if (state.succeeded) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5500);
    }
    closeModal();
  };

  return (
    <section className="bg-neutral-900 text-white relative overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-6 p-5 relative bg-[url('/dcodedsa_bg.webp')] bg-center bg-no-repeat bg-cover h-[600px] w-full">
        <div className="bg-black opacity-40 absolute inset-0 h-[600px] w-full -z-10"></div>

        <SparklesText className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          Decode DSA
        </SparklesText>

        <TextAnimate className="text-3xl sm:text-4xl md:text-5xl font-semibold text-wrap" animation="blurInUp" by="word" once>
          Decode your DSA Skills
        </TextAnimate>

        <div className="absolute top-70 sm:top-60 md:top-52 lg:top-50 right-10 sm:right-12 md:right-16 lg:right-35 xl:right-100 bg-blue-600 text-white py-2 px-4 rounded-lg transform rotate-6">
          <span className="text-xs sm:text-sm font-medium">Launching Soon</span>
        </div>
      </div>

      
      <div className="container mx-auto py-10 px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Master DSA. Smarter. Faster. With Dcode.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              Personalized DSA sheets, goal-based learning paths, and a clean code environment to help you excel in technical interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Join Waitlist
              </button>
              <button className="bg-transparent border border-gray-500 hover:border-white text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                <a href="#faq">
                  Learn More
                </a>
              </button>
            </div>
          </div>
          <div className="md:w-[500px] relative">
            <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <img
                src="/code_circle.jpg"
                alt="Algorithm visualization"
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          aria-hidden={!isModalOpen}
        >
          <div
            className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div
            ref={modalContentRef}
            className="bg-neutral-800 rounded-lg p-8 max-w-md w-full mx-4 relative z-10 transform transition-all duration-300 scale-95 opacity-0"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
            <p className="text-gray-300 mb-6">
              Be the first to know when Dcode DSA launches. Get early access and exclusive benefits.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">Experience Level</label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                disabled={state.submitting}
              >
                {state.submitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </div>
      )}

      {showNotification && (
        <Notification message="You've been added to our waitlist!" />
      )}
    </section>
  );
};

export default Hero;
