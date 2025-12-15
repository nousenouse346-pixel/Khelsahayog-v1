import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FormType } from '../types';

export const Contact: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(FormType.ATHLETE);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Get in Touch</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Whether you are a donor, a corporate partner, or an athlete looking for support, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">contact@khelsahayog.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">+91 93530 32224</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">HQ</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">No. 12, 4th Cross, Sports Complex Road, Bangalore, India</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-gray-200 dark:bg-slate-800 rounded-xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Map" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white dark:bg-slate-900 px-3 py-1 rounded text-xs font-bold shadow">View on Google Maps</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl shadow-inner border border-gray-100 dark:border-slate-800">
            
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveForm(FormType.ATHLETE)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeForm === FormType.ATHLETE ? 'bg-brand-orange text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border dark:border-slate-700'}`}
              >
                Athlete Application
              </button>
              <button 
                onClick={() => setActiveForm(FormType.CSR)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeForm === FormType.CSR ? 'bg-brand-blue text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border dark:border-slate-700'}`}
              >
                CSR / Partnership
              </button>
              <button 
                onClick={() => setActiveForm(FormType.VOLUNTEER)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeForm === FormType.VOLUNTEER ? 'bg-teal-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border dark:border-slate-700'}`}
              >
                Volunteer
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                </div>
              </div>

              {activeForm === FormType.ATHLETE && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sport</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-orange outline-none transition-all">
                      <option>Hockey</option>
                      <option>Kabaddi</option>
                      <option>Football</option>
                      <option>Athletics</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age</label>
                    <input type="number" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                  </div>
                </div>
              )}

              {activeForm === FormType.CSR && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company / Organization</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message / Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-orange outline-none transition-all"></textarea>
              </div>

              <button type="submit" className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${activeForm === FormType.CSR ? 'bg-brand-blue hover:bg-blue-800' : 'bg-brand-orange hover:bg-orange-600'}`}>
                Submit Application <Send size={18} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};