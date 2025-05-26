import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const Hero: React.FC = () => {
  const {authUser} = useAuthStore()

  return (
    <section className="text-white relative overflow-hidden mt-10">
      <div className="container mx-auto py-10 px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Master DSA. Smarter. Faster. With DCode.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              Personalized DSA sheets, goal-based learning paths, and a clean code environment to help you excel in technical interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={authUser ? "/problems" : "/login"}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {authUser ? "Start Learning" : "Login"}
              </Link>
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
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Algorithm visualization"
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
