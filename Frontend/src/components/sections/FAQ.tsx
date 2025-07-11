import { useEffect, useRef, useState } from "react";
import { useForm } from "@formspree/react";
import { motion, useInView, AnimatePresence, easeInOut } from "framer-motion";
import { ChevronDown, MessageCircle, X, Send } from "lucide-react";
import { toast } from "react-hot-toast";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-content-1",
    question: "Is Dcode DSA beginner friendly?",
    answer:
      "Absolutely! Dcode DSA is designed for all skill levels. We provide personalized learning paths that adapt to your experience level, whether you're just starting with basic data structures or preparing for advanced algorithm challenges.",
  },
  {
    id: "faq-content-2",
    question: "Do I need an account to start?",
    answer:
      "No account is required to browse. However, creating one unlocks progress tracking and personalized streaks.",
  },
  {
    id: "faq-content-3",
    question: "Is Dcode DSA free to use?",
    answer:
      "We'll offer both free and premium tiers. The free tier gives you access to basic problems and features, while the premium subscription unlocks advanced problems, detailed solutions, and personalized learning paths. Early waitlist members will receive special pricing.",
  },
  {
    id: "faq-content-4",
    question: "What programming languages are supported?",
    answer:
      "At launch, we'll support Python, Java, and JavaScript. We plan to add more languages based on user feedback and demand. Our code editor provides syntax highlighting and auto-completion for all supported languages.",
  },
  {
    id: "faq-content-5",
    question: "How is Dcode DSA different from other platforms?",
    answer:
      "Dcode DSA focuses on personalization and goal-based learning. Unlike other platforms, we create custom problem sheets tailored to your skill level and career goals. Our progress tracking and analytics help identify your strengths and weaknesses for targeted improvement.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [state, submitForm] = useForm(import.meta.env.VITE_FORMSPREE_HASHID);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -10
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { 
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2,
        ease: easeInOut,
      },
    },
    tap: { scale: 0.95 },
  };

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const openModal = () => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    previouslyFocused.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm(e);
    if (state.succeeded) {
      toast.success("Thanks for your query. We will get back to you soon!");
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-8 md:py-16 bg-gradient-to-tr from-background via-base-100 to-primary/20"
      id="faq"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <motion.h2 
            className="text-xl md:text-4xl font-bold mb-6"
            variants={titleVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="md:text-lg text-base-content/70 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            Find answers to common questions about Dcode DSA and discover how our platform can accelerate your algorithm mastery journey.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-4"
          variants={containerVariants}
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={faqItemVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <motion.button
                className="w-full flex justify-between items-center p-6 text-left group"
                aria-expanded={openId === item.id}
                aria-controls={item.id}
                onClick={() => toggleFAQ(item.id)}
                whileHover={{ backgroundColor: "hsl(var(--accent))" }}
                transition={{ duration: 0.2 }}
              >
                <span className="md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {item.question}
                </span>
                <motion.div
                  variants={iconVariants}
                  animate={openId === item.id ? "open" : "closed"}
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence mode="wait">
                {openId === item.id && (
                  <motion.div
                    id={item.id}
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 bg-accent/20">
                      <p className="text-sm md:text-md text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={titleVariants}
        >
          <motion.p 
            className="md:text-lg mb-8 text-muted-foreground"
            variants={titleVariants}
          >
            Still have questions? We're here to help!
          </motion.p>
          <motion.button
            className="inline-flex items-center gap-2 btn btn-primary hover:shadow-xl"
            onClick={openModal}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              aria-modal="true"
              role="dialog"
              ref={modalRef}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                variants={overlayVariants}
                onClick={closeModal}
              />
              <motion.div
                className="bg-card rounded-xl p-8 max-w-md w-full relative z-10 shadow-2xl border border-border"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                  <motion.button
                    className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-accent transition-colors duration-200"
                    onClick={closeModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Have a question or need assistance? Send us a message and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Enter your name..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Enter your email..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    disabled={state.submitting}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {state.submitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
