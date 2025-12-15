import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { Program } from '../types';
import { ArrowRight, Download } from 'lucide-react';

export const Programs: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Sport' | 'Social' | 'Management'>('All');

  const filteredPrograms = filter === 'All' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue dark:text-white mb-6">Our Programs</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            From rural playgrounds to national stadiums, our initiatives cover the entire spectrum of athlete development and community welfare.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {['All', 'Sport', 'Social', 'Management'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-brand-blue text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Athlete Application Teaser */}
        <div className="mt-24 bg-brand-orange/10 dark:bg-brand-orange/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-orange/20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Are you a talented athlete?</h3>
            <p className="text-gray-600 dark:text-gray-400">Apply for our elite support program. We are looking for the next generation of champions.</p>
          </div>
          <a href="/contact" className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors whitespace-nowrap">
            Apply for Support
          </a>
        </div>
      </div>
    </div>
  );
};

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-800">
      <div className="h-64 overflow-hidden relative group">
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded uppercase tracking-wider text-brand-orange shadow-sm">
          {program.category}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">{program.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 italic mb-4 text-sm">{program.shortDescription}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">{program.longDescription}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-200 dark:border-slate-700">
          {program.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</div>
              <div className="font-bold text-brand-blue dark:text-blue-400">{stat.value}</div>
            </div>
          ))}
        </div>

        <button className="w-full py-3 rounded-lg border border-brand-blue text-brand-blue dark:text-blue-400 dark:border-blue-400 hover:bg-brand-blue hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold transition-all flex items-center justify-center gap-2 group">
          Sponsor this Program <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};