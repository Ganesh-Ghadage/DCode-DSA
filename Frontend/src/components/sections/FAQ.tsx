import { useEffect, useRef, useState } from 'react';
import { useForm } from '@formspree/react';
import Notification from '../comps/Notification';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-content-1',
    question: 'Is Dcode DSA beginner friendly?',
    answer:
      "Absolutely! Dcode DSA is designed for all skill levels. We provide personalized learning paths that adapt to your experience level, whether you're just starting with basic data structures or preparing for advanced algorithm challenges.",
  },
  {
    id: 'faq-content-2',
    question: 'When does Dcode DSA launch?',
    answer:
      "We're planning to launch soon. Join our waitlist to be notified when we go live and get exclusive early access benefits. Early waitlist members will receive special discounts and premium features.",
  },
  {
    id: 'faq-content-3',
    question: 'Is Dcode DSA free to use?',
    answer:
      'We\'ll offer both free and premium tiers. The free tier gives you access to basic problems and features, while the premium subscription unlocks advanced problems, detailed solutions, and personalized learning paths. Early waitlist members will receive special pricing.',
  },
  {
    id: 'faq-content-4',
    question: 'What programming languages are supported?',
    answer:
      "At launch, we'll support Python, Java, and JavaScript. We plan to add more languages based on user feedback and demand. Our code editor provides syntax highlighting and auto-completion for all supported languages.",
  },
  {
    id: 'faq-content-5',
    question: 'How is Dcode DSA different from other platforms?',
    answer:
      'Dcode DSA focuses on personalization and goal-based learning. Unlike other platforms, we create custom problem sheets tailored to your skill level and career goals. Our progress tracking and analytics help identify your strengths and weaknesses for targeted improvement.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [state, submitForm, _ ] = useForm(import.meta.env.VITE_FORMSPREE_HASHID);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const openModal = () => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    previouslyFocused.current?.focus();
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
    <section className="py-16 md:py-24 bg-neutral-900" id='faq'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Common questions about Dcode DSA and how it can help you master algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.id} className="bg-white text-black rounded-lg border border-gray-200 overflow-hidden">
                <button
                  className="faq-toggle w-full flex justify-between items-center p-6 focus:outline-none"
                  aria-expanded={openId === item.id}
                  aria-controls={item.id}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span className="text-lg font-semibold text-left">{item.question}</span>
                  <svg
                    className={`faq-icon w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                      openId === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openId === item.id && (
                  <div id={item.id} className="faq-content px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dcode DSA FAQ illustration"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-lg overflow-hidden border border-gray-200 shadow-lg z-10">
              <img
                src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dcode DSA FAQ detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-200 mb-6">Still have questions? We're here to help!</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            ref={modalRef}
          >
            <div
              className="absolute inset-0 bg-black opacity-75 backdrop-blur-sm"
              onClick={closeModal}
            />
            <div
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative z-10 animate-scale-fade-in"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">Have a question or need assistance? Send us a message and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        )}

        {showNotification && (
          <Notification message="Thanks for query, We will get back to you soon!" />
        )}
      </div>
    </section>
  );
}
