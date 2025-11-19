import React from 'react';
import { Card } from './ui/Card';

export const WhatIs: React.FC = () => {
  return (
    <section id="learn-section" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">What is Mansi Puja?</h2>
        <div className="h-2 w-24 bg-secondary rounded-full mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Card className="p-8 bg-white border-l-8 border-l-primary">
            <p className="text-2xl font-body text-gray-700 leading-relaxed">
              "Doing Maharaj’s puja lovingly in your <span className="font-bold text-primary">mind</span> is called Mansi Puja."
            </p>
            <p className="mt-4 text-gray-500 italic">It's like a movie in your head where you and Maharaj are the main stars!</p>
          </Card>
        </div>

        <div className="order-1 md:order-2 grid gap-4">
          {[
            { emoji: "🧠", text: "Helps your mind focus", color: "bg-blue-100" },
            { emoji: "💗", text: "Makes your love for Maharaj stronger", color: "bg-red-100" },
            { emoji: "😌", text: "Reduces stress & makes you calm", color: "bg-green-100" }
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center p-4 rounded-2xl ${item.color} transform transition-transform hover:scale-105`}>
              <span className="text-4xl mr-4">{item.emoji}</span>
              <span className="text-xl font-bold text-gray-800">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
