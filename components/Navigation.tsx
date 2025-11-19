import React from 'react';
import { Home, BookOpen, Sparkles, Calendar, Trophy } from 'lucide-react';
import { View } from '../types';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const items = [
    { id: 'home' as View, label: 'Home', icon: Home, color: 'text-orange-500' },
    { id: 'learn' as View, label: 'Learn', icon: BookOpen, color: 'text-blue-500' },
    { id: 'story' as View, label: 'Story', icon: Sparkles, color: 'text-purple-500' },
    { id: 'planner' as View, label: 'Plan', icon: Calendar, color: 'text-green-500' },
    { id: 'quiz' as View, label: 'Quiz', icon: Trophy, color: 'text-yellow-500' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-white/90 backdrop-blur-md border-2 border-gray-100 px-4 py-3 rounded-full shadow-xl pointer-events-auto flex items-center gap-2 md:gap-4"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`relative px-3 py-2 md:px-5 md:py-3 rounded-full transition-all duration-300 flex flex-col items-center justify-center outline-none ${isActive ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-yellow-100 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className={`relative ${isActive ? 'transform -translate-y-1' : ''} transition-transform duration-300`}>
                <Icon 
                  size={24} 
                  className={`${isActive ? item.color : 'currentColor'} ${isActive ? 'fill-current' : ''}`} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span className={`text-[10px] font-bold mt-1 ${isActive ? 'opacity-100' : 'opacity-0 hidden md:block'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};