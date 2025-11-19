import React from 'react';
import { STORY_PANELS } from '../constants';
import { Card } from './ui/Card';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <div className="pt-8">
       <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-gray-800">The Story of Parvatbhai</h1>
          <p className="text-xl text-gray-600 mt-4 font-medium">A true story about the magic of Mansi Puja</p>
       </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 pb-12">
          {STORY_PANELS.map((panel, index) => (
            <motion.div 
              key={panel.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-4 border-white bg-white hover:border-primary transition-colors duration-300 flex flex-col md:flex-row overflow-hidden">
                <div className="bg-orange-50 w-full md:w-40 h-40 md:h-auto flex items-center justify-center text-6xl shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-orange-100">
                  {panel.imagePlaceholder}
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-4 right-4 text-6xl opacity-10 font-black text-primary">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-body text-xl leading-relaxed font-medium">
                    {panel.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-4 text-center pb-20">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-accent/10 text-accent-dark border-4 border-accent px-8 py-6 rounded-3xl shadow-lg inline-block"
          >
            <div className="text-4xl mb-2">💡</div>
            <span className="font-bold text-2xl font-heading">Moral: Maharaj accepts what we offer in our mind!</span>
          </motion.div>
        </div>
        <Footer />
    </div>
  );
};