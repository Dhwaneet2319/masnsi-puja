import React from 'react';
import { Star, Heart, Cloud, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

interface HeroProps {
  onStart: () => void;
  onQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onQuiz }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Floating Background Elements */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 text-primary-light opacity-50">
        <Cloud size={64} fill="currentColor" />
      </motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-32 right-10 text-secondary-light opacity-50">
        <Cloud size={80} fill="currentColor" />
      </motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-32 right-20 text-yellow-400 opacity-60">
        <Star size={40} fill="currentColor" />
      </motion.div>

      <div className="z-10 max-w-4xl mx-auto space-y-8">
        
        <div className="relative">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-black text-gray-800 leading-tight"
          >
            Mansi Puja
          </motion.h1>
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}
            className="text-primary relative inline-block text-4xl md:text-6xl font-heading font-bold mt-2"
          >
            Time with Maharaj
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -top-8 -right-8 text-danger">
              <Heart size={48} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-2xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed"
        >
          Learn how to spend time with Maharaj in your mind. It's magical, fun, and super easy!
        </motion.p>

        <motion.div 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
        >
          <Button onClick={onStart} size="lg" variant="primary" className="shadow-orange-200 shadow-xl hover:shadow-2xl text-2xl px-10 py-5">
            🚀 Start Learning
          </Button>
          <Button onClick={onQuiz} size="lg" variant="secondary" className="shadow-blue-200 shadow-xl hover:shadow-2xl text-2xl px-10 py-5">
            🎮 Play Quiz
          </Button>
        </motion.div>
      </div>
    </section>
  );
};