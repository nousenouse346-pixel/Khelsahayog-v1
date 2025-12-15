import React, { useState } from 'react';
import { DONATION_TIERS } from '../constants';
import { Check, Heart, Shield, Zap } from 'lucide-react';

export const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Story & Trust */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Invest in a <span className="text-brand-orange">Champion's Future</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Your contribution goes directly towards equipment, nutrition, and coaching. We ensure 100% transparency with regular impact reports sent to your inbox.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Tax Deductible</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">All donations are eligible for 80G tax exemption in India.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Immediate Impact</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Funds are deployed within 30 days to the selected vertical.</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg">
              <img src="https://picsum.photos/800/600?random=20" alt="Happy athletes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white italic font-medium">"Because of Khel Sahayog, I now play for the state team." - Rahul, 16</p>
              </div>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700 animate-slide-up">
            <div className="flex bg-gray-100 dark:bg-slate-700 p-1 rounded-lg mb-8">
              <button 
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${!isMonthly ? 'bg-white dark:bg-slate-600 shadow text-brand-orange' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Give Once
              </button>
              <button 
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${isMonthly ? 'bg-white dark:bg-slate-600 shadow text-brand-orange' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Monthly
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {DONATION_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative ${
                    selectedAmount === tier.amount 
                      ? 'border-brand-orange bg-orange-50 dark:bg-orange-900/20' 
                      : 'border-gray-200 dark:border-slate-600 hover:border-brand-orange/50'
                  }`}
                >
                  {selectedAmount === tier.amount && (
                    <div className="absolute top-2 right-2 text-brand-orange"><Check size={16} /></div>
                  )}
                  <div className="text-xl font-bold text-gray-900 dark:text-white">₹{tier.amount.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tier.title}</div>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Or enter custom amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                <input 
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  placeholder="Other Amount"
                />
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-brand-orange hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Donate {selectedAmount || customAmount ? `₹${(selectedAmount || Number(customAmount)).toLocaleString()}` : ''} <Heart size={20} fill="currentColor" />
              </button>
              
              <p className="text-center text-xs text-gray-400">
                Secure payment via Razorpay. Powered by Stripe. <br />
                By donating, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};