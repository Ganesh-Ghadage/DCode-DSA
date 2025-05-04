import { useEffect, useRef, useState } from 'react';
import { useForm } from '@formspree/react';
import Notification from '../comps/Notification';

const WaitList = () => {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const [showNotification, setShowNotification] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [state, submitForm, _ ] = useForm(import.meta.env.VITE_FORMSPREE_HASHID);

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submitForm(e)
    if (state.succeeded) {
      if (emailRef.current) emailRef.current.value = '';
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5500);
    }
  };

  return (
    <section id="waitlist-cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVjaCUyMGxhdW5jaCUyMGNvdW50ZG93bnxlbnwxfHx8fDE3NDYzNTUwMTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Tech launch background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/90 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
            LAUNCHING SOON
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be First to Experience Dcode DSA</h2>

          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Join our waitlist today and get exclusive early access, special discounts, and personalized onboarding when we launch.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{countdown.days}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{countdown.hours}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{countdown.minutes}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{countdown.seconds}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">Seconds</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                disabled={state.submitting}
              >
                {state.submitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Early Access Benefits</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Special Launch Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {showNotification && (
        <Notification message="You've been added to our waitlist!" />
      )}
    </section>
  );
};

export default WaitList;