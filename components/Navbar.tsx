import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'CSR', path: '/csr' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl font-serif">
              K
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-brand-blue dark:text-white' : 'text-white'}`}>
              Khel Sahayog
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-brand-orange transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-orange' 
                    : isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/20'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/donate"
              className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Heart size={16} fill="currentColor" />
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-brand-orange bg-orange-50 dark:bg-slate-800'
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 bg-brand-orange text-white px-4 py-3 rounded-lg font-semibold shadow-md"
              >
                <Heart size={18} fill="currentColor" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};