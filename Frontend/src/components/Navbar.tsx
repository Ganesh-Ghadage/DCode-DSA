import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import Logo from "./Logo";
import UserDropdown from "./UserDropdown";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggleButton";
import { useAuthStore } from "../store/useAuthStore";
import { useMobileView } from "@/customHooks/useMobileView";

const navItems = [
  { name: "Home", url: "/" },
  { name: "Problems", url: "/problem" },
  { name: "Sheets", url: "/sheets" },
  { name: "Code War", url: "/code-war" },
  { name: "Code Room", url: "/code-room" },
];

function Navbar() {
  const { authUser } = useAuthStore();
  const isMobile = useMobileView();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-xl border-b border-base-300/20",
          isScrolled 
            ? "bg-base-100/90 shadow-lg" 
            : "bg-base-100/70"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <Logo />
                <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                  DCode DSA
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center justify-center flex-1 mx-8">
                <motion.div 
                  className="flex items-center gap-2 bg-base-200/50 backdrop-blur-sm rounded-full p-3 border border-base-300/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.url;
                    return (
                      <motion.div
                        key={item.name}
                        className="relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          to={item.url}
                          className={cn(
                            "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            "hover:text-primary hover:scale-105",
                            isActive 
                              ? "text-primary-content bg-primary shadow-lg hover:text-primary-content hover:bg-primary/50" 
                              : "text-base-content/80 hover:bg-base-300/50"
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            )}

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Desktop User Section */}
              {!isMobile && (
                <>
                  {authUser ? (
                    <UserDropdown user={authUser} />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/login"
                        className="btn btn-primary btn-sm lg:btn-md rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Login
                      </Link>
                    </motion.div>
                  )}
                </>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <motion.button
                  className="btn btn-ghost btn-sm lg:btn-md btn-circle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <MobileMenu
            navItems={navItems}
            authUser={authUser}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

export default Navbar;
