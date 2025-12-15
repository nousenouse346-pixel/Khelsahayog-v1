import React from 'react';
import { TEAM } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">About Khel Sahayog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We are a sports-driven social impact organisation committed to empowering children, youth, and vulnerable communities across India.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border-l-4 border-brand-orange">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To create inclusive, accessible, and high-impact programs around sports training, talent identification, and mental well-being so that children from all backgrounds can use sport as a tool for life-long growth.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border-l-4 border-brand-blue">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To build an India where every child—regardless of background—can access quality sports training, safe play spaces, and holistic support to achieve physical fitness and emotional resilience.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Inclusivity", desc: "Every child deserves a chance." },
              { title: "Access", desc: "Bridging gaps in infrastructure." },
              { title: "Empowerment", desc: "Building agency and self-belief." },
              { title: "Integrity", desc: "Transparent and athlete-first." }
            ].map((val, idx) => (
              <div key={idx} className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-brand-orange mb-2">{val.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 dark:text-white mb-12">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {TEAM.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-slate-700 shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-brand-orange font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};