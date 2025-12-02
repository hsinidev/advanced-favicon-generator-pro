import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/5 mt-auto relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} doodax.com. All rights reserved.</p>
                <p className="mt-2 text-gray-400">
                    Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-400 hover:text-blue-300 transition-colors">HSINI MOHAMED</a>
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                 <a href="https://doodax.com" className="hover:text-white transition-colors">Home</a>
                 <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">Support</a>
                 <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;