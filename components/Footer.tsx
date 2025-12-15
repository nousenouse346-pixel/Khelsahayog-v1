import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold font-serif">K</div>
              <span className="font-serif font-bold text-xl">Khel Sahayog</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering India's next champions from grassroots fields to professional arenas. Building sustainable livelihoods through sport.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Impact Reports</Link></li>
              <li><Link to="/csr" className="hover:text-white transition-colors">CSR Partners</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Our Sports</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/programs" className="hover:text-white transition-colors">Hockey</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Kabaddi</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Football</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Athletics</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Badminton</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contact Us</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-brand-orange" />
                <span className="text-sm">No. 12, 4th Cross, Sports Complex Road, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-brand-orange" />
                <span className="text-sm">+91 93530 32224</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-brand-orange" />
                <span className="text-sm">contact@khelsahayog.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Khel Sahayog Foundation. All rights reserved. Registered Non-Profit.</p>
        </div>
      </div>
    </footer>
  );
};