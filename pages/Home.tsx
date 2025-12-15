import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Heart, Target } from 'lucide-react';
import { PROGRAMS, IMPACT_STATS, DONATION_TIERS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Children playing sports" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-transparent dark:from-slate-900/95 dark:via-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Empowering India's <span className="text-brand-orange">Next Champions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
              From grassroots fields to professional arenas. We build complete sports ecosystems to turn potential into performance, and performance into livelihood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/donate" 
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all text-center flex items-center justify-center gap-2"
              >
                Donate Now <Heart size={20} fill="currentColor" />
              </Link>
              <Link 
                to="/programs" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section className="bg-brand-orange text-white py-12 -mt-2 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold font-serif">{stat.value}{stat.suffix}</div>
                <div className="text-sm md:text-base font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue dark:text-white mb-4">Our Approach</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don't just teach sports; we build ecosystems. Our integrated model supports athletes at every stage of their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-brand-orange">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Grassroots Development</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Community training centres, coach development, and talent ID camps introducing children to structured sport.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-brand-blue">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Athlete Management</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Holistic career support – coaching, sports science, sponsorships, and legal aid to convert talent into careers.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-teal-500">
              <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Community Impact</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Mental health support, women's empowerment, drug awareness, and job skilling using sport as a vehicle for change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue dark:text-white mb-2">Our Programs</h2>
              <p className="text-gray-600 dark:text-gray-400">Sport-specific pathways and social initiatives.</p>
            </div>
            <Link to="/programs" className="hidden md:flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.slice(0, 3).map((program) => (
              <div key={program.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <div className="absolute inset-0">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="relative p-6 h-96 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">{program.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-200 line-clamp-2 mb-4">{program.shortDescription}</p>
                  <Link to="/programs" className="inline-flex items-center text-sm font-semibold hover:text-brand-orange transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/programs" className="inline-flex items-center gap-2 text-brand-orange font-semibold">
              View All Programs <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Donate Tiers */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue dark:text-white mb-4">Make an Immediate Impact</h2>
            <p className="text-gray-600 dark:text-gray-400">Choose a tier to support an athlete today.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DONATION_TIERS.map((tier) => (
              <div key={tier.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col">
                <div className="text-brand-orange font-bold text-2xl mb-2">₹{tier.amount.toLocaleString()}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tier.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">{tier.description}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                  <div className="text-xs font-semibold text-brand-blue dark:text-blue-300 mb-3 bg-blue-50 dark:bg-blue-900/30 py-1 px-2 rounded inline-block">
                    Impact: {tier.impact}
                  </div>
                  <Link to="/donate" className="block w-full text-center bg-gray-900 dark:bg-white hover:bg-brand-orange dark:hover:bg-brand-orange text-white dark:text-gray-900 dark:hover:text-white py-2 rounded-lg font-semibold transition-colors">
                    Donate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Partner with us for CSR
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Maximize your corporate social impact. We offer customized proposals, tax benefits, and transparent reporting for CSR partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/csr" className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
              Explore CSR
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Foundation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};