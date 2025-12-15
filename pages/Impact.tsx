import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';
import { IMPACT_STATS } from '../constants';

const DATA_GROWTH = [
  { year: '2021', athletes: 120 },
  { year: '2022', athletes: 350 },
  { year: '2023', athletes: 680 },
  { year: '2024', athletes: 1200 },
  { year: '2025', athletes: 2500 },
];

const DATA_GENDER = [
  { name: 'Boys', value: 60 },
  { name: 'Girls', value: 40 },
];

export const Impact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Measuring Our Impact</h1>
          <p className="text-gray-600 dark:text-gray-400">Transparent metrics tracking our journey from 2021 to present.</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">{stat.value}{stat.suffix}</div>
              <div className="font-semibold text-gray-900 dark:text-white">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Growth Chart */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Athlete Outreach Growth</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA_GROWTH}>
                  <defs>
                    <linearGradient id="colorAthletes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                    itemStyle={{ color: '#F3F4F6' }}
                  />
                  <Area type="monotone" dataKey="athletes" stroke="#FF6B35" fillOpacity={1} fill="url(#colorAthletes)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gender Ratio Mockup (Simulated with text/css bars for simplicity if Recharts Pie is complex to style perfectly in one go, but using Bar for distribution here) */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Gender Distribution Goal</h3>
             <div className="h-80 w-full flex flex-col justify-center space-y-8">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span>Boys</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4">
                    <div className="bg-brand-blue h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span>Girls (Target: 40%)</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4">
                    <div className="bg-brand-orange h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-brand-orange/20 mt-4">
                  <p><strong>Insight:</strong> We have increased female participation by 15% in the last 12 months through our "Girls in Hockey" and Self-defense initiatives.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Testimonials or Stories placeholder could go here */}
      </div>
    </div>
  );
};