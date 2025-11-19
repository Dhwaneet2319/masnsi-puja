import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-12 text-center text-white">
      <h2 className="text-4xl font-heading font-bold mb-4">Jay Swaminarayan 🙏</h2>
      <p className="opacity-90 text-lg">Made with 🧡 for Kids</p>
      <div className="mt-8 text-sm opacity-70">
        <p>© {new Date().getFullYear()} Mansi Puja Learning</p>
      </div>
    </footer>
  );
};
