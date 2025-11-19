import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { View } from './types';
import { Navigation } from './components/Navigation';
import { PageTransition } from './components/PageTransition';
import { Hero } from './components/Hero';
import { Learn } from './components/Learn';
import { Story } from './components/Story';
import { Planner } from './components/Planner';
import { Quiz } from './components/Quiz';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Hero onStart={() => setCurrentView('learn')} onQuiz={() => setCurrentView('quiz')} />;
      case 'learn':
        return <Learn />;
      case 'story':
        return <Story />;
      case 'planner':
        return <Planner />;
      case 'quiz':
        return <Quiz />;
      default:
        return <Hero onStart={() => setCurrentView('learn')} onQuiz={() => setCurrentView('quiz')} />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent font-body text-gray-900 overflow-x-hidden relative">
      {/* Moving Background Container */}
      <div className="fixed inset-0 pointer-events-none -z-10 fun-pattern"></div>
      
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <AnimatePresence mode="wait">
        <PageTransition key={currentView}>
          {renderView()}
        </PageTransition>
      </AnimatePresence>
    </div>
  );
};

export default App;