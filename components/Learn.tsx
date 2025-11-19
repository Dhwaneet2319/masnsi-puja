import React from 'react';
import { WhatIs } from './WhatIs';
import { Timeline } from './Timeline';
import { Footer } from './Footer';

export const Learn: React.FC = () => {
  return (
    <div className="pt-8">
       <div className="text-center mb-4">
         <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-sm tracking-wider uppercase mb-2">Step 1</span>
         <h1 className="text-3xl md:text-4xl font-heading font-black text-gray-800">Learn About Mansi Puja</h1>
       </div>
       <WhatIs />
       <div className="my-12 border-t-4 border-dashed border-orange-100 mx-8"></div>
       <div className="text-center mb-4">
         <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-sm tracking-wider uppercase mb-2">Step 2</span>
         <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-800">The 5 Daily Pujas</h2>
       </div>
       <Timeline />
       <Footer />
    </div>
  );
};