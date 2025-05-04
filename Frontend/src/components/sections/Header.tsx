import React, { useState } from 'react';

interface NavItem {
  label: string;
  link: string;
}

const Header: React.FC = () => {
  const headerNav:NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'Join Waitlist', link: '#waitlist-cta' },
    { label: 'Features', link: '#features' },
    { label: 'Dashboard', link: '#dashboard-preview' },
    { label: 'FAQ', link: '#faq' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header id="header" className="bg-neutral-900 text-white py-4 fixed z-40 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/dcodedsa_logo.jpg"
              alt="Dcode DSA"
              className="h-10 w-auto rounded-full"
              loading="lazy"
            />
            <a href="#" className="text-xl font-bold">Dcode DSA</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {headerNav.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="text-white hover:text-blue-400 transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={handleMobileMenuToggle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className={`mt-4 md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <nav>
            <ul className="flex flex-col space-y-3">
              {headerNav.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="text-white hover:text-blue-400 transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
