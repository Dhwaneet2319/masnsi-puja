import React, { useState } from 'react';
import { PUJA_TIMES } from '../constants';
import { Card } from './ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-widest uppercase">Daily Routine</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mt-2">5 Times of Mansi Puja</h2>
          <p className="text-xl text-gray-500 mt-4">We remember Maharaj 5 times a day!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PUJA_TIMES.map((time) => {
            const Icon = time.icon;
            const isExpanded = expandedId === time.id;

            return (
              <Card 
                key={time.id} 
                className={`${time.color} border-none relative transition-all duration-300 ${isExpanded ? 'md:col-span-2 row-span-2 z-10' : ''}`}
                onClick={() => toggleExpand(time.id)}
              >
                <div className="p-6 flex flex-col h-full min-h-[280px] justify-between">
                  <div>
                    <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm backdrop-blur-sm">
                      <Icon size={32} className="opacity-80" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{time.title}</h3>
                    <p className="font-semibold opacity-90 text-lg">{time.description}</p>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="bg-white/60 p-3 rounded-xl text-sm md:text-base leading-relaxed">
                      {time.details}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center opacity-50">
                     {isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
