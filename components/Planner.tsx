import React, { useState, useEffect } from 'react';
import { PUJA_TIMES } from '../constants';
import { PlannerData } from '../types';
import { Button } from './ui/Button';
import { Save, CheckCircle, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Planner: React.FC = () => {
  const [data, setData] = useState<PlannerData>({
    selectedTime: 'morning',
    planText: ''
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem('mansiPujaPlan');
    if (savedPlan) {
      setData(JSON.parse(savedPlan));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('mansiPujaPlan', JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
           <h1 className="text-4xl font-heading font-black text-gray-800">My Mansi Puja Plan</h1>
           <p className="text-lg text-gray-600 mt-2">Select a time and write your routine!</p>
        </div>

        <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-xl border-4 border-gray-100 relative overflow-hidden">
          <div className="space-y-8 relative z-10">
            
            {/* Time Selection */}
            <div>
              <label className="block text-gray-700 font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Choose a time:
              </label>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {PUJA_TIMES.map((time) => {
                    const Icon = time.icon;
                    const isSelected = data.selectedTime === time.id;
                    return (
                      <motion.button
                        key={time.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setData({ ...data, selectedTime: time.id })}
                        className={`px-5 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 border-2 ${
                          isSelected
                            ? 'bg-primary border-primary text-white shadow-lg'
                            : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={18} />
                        {time.title}
                      </motion.button>
                    )
                })}
              </div>
            </div>

            {/* Writing Area */}
            <div>
              <label className="block text-gray-700 font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                How will you do your puja?
              </label>
              <div className="relative">
                <textarea
                  value={data.planText}
                  onChange={(e) => setData({ ...data, planText: e.target.value })}
                  placeholder={`Write here... \n\nFor example: "I will wake up Maharaj gently, brush his teeth, and offer him warm milk."`}
                  className="w-full h-60 p-6 rounded-3xl border-4 border-dashed border-secondary/30 focus:border-secondary focus:ring-0 text-xl text-gray-700 resize-none bg-blue-50/30 focus:bg-white transition-colors outline-none"
                />
                <PenTool className="absolute bottom-6 right-6 text-secondary opacity-20" size={40} />
              </div>
            </div>

            {/* Save Action */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t-2 border-gray-100 gap-4">
               <p className="text-gray-400 text-sm italic">Don't forget to save your plan!</p>
               <div className="flex items-center gap-4">
                 <AnimatePresence>
                   {saved && (
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-green-500 font-bold bg-green-50 px-4 py-2 rounded-full"
                     >
                       <CheckCircle size={20} />
                       <span>Saved!</span>
                     </motion.div>
                   )}
                 </AnimatePresence>
                 <Button onClick={handleSave} variant="secondary" size="lg" className="flex items-center gap-2 min-w-[180px] justify-center">
                   <Save size={20} />
                   Save Plan
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};