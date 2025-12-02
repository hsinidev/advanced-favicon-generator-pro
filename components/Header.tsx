import React, { useState } from 'react';
import Modal from './Modal';

const Header: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

  const getModalContent = (modalName: string) => {
    switch (modalName) {
      case 'About':
        return {
          title: 'About Advanced Favicon Generator',
          content: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Welcome to <strong>doodax.com</strong>, your premier destination for professional, client-side web tools.</p>
              <p>The Advanced Favicon Generator is engineered to solve a critical need for developers and designers: creating the perfect favicon suite without compromising data privacy. Unlike server-side converters that require uploading assets, our tool utilizes the HTML5 Canvas API to process everything directly in your browser memory.</p>
              <p><strong>Mission:</strong> To provide powerful, free, and secure utilities that enhance the web development workflow.</p>
            </div>
          )
        };
      case 'Contact':
        return {
            title: 'Contact Us',
            content: (
                <div className="space-y-6">
                    <p className="text-gray-300">We value your feedback and are here to assist with any inquiries regarding our tools or policies.</p>
                    <div className="bg-gray-700/50 p-5 rounded-xl border border-gray-600">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Official Support Email</p>
                        <a href="mailto:hsini.web@gmail.com" className="text-xl font-mono text-blue-400 hover:text-blue-300 transition-colors">hsini.web@gmail.com</a>
                    </div>
                    <div className="bg-gray-700/50 p-5 rounded-xl border border-gray-600">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Website</p>
                        <a href="https://doodax.com" className="text-xl font-mono text-purple-400 hover:text-purple-300 transition-colors">doodax.com</a>
                    </div>
                    <p className="text-sm text-gray-500">Response time: Typically within 24-48 business hours.</p>
                </div>
            )
        };
      case 'Guide':
        return {
            title: 'How to Use',
            content: (
                <div className="space-y-4 text-gray-300">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="font-bold text-white">Select Mode</h4>
                            <p className="text-sm">Choose Image, Text, or Emoji based on your brand assets.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="font-bold text-white">Customize</h4>
                            <p className="text-sm">Adjust colors, fonts, and backgrounds. Preview results instantly in real-time.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 className="font-bold text-white">Download</h4>
                            <p className="text-sm">Download individual sizes or the complete package for Web, iOS, and Android.</p>
                        </div>
                    </div>
                </div>
            )
        };
       case 'Privacy Policy':
        return {
            title: 'Privacy Policy',
            content: (
                <div className="space-y-4 text-sm text-gray-300">
                    <p><strong>Last Updated: October 2023</strong></p>
                    <p>At doodax.com, we prioritize your privacy. This Privacy Policy outlines how we handle your data.</p>
                    <h4 className="font-bold text-white mt-4">1. Data Processing</h4>
                    <p>Our Favicon Generator operates entirely on the client-side. When you select an image, it is processed locally within your browser's memory using JavaScript. <strong>We do not upload, store, or view your images on our servers.</strong></p>
                    <h4 className="font-bold text-white mt-4">2. Information Collection</h4>
                    <p>We do not collect personal identification information (PII) unless you voluntarily provide it via email. We may use standard web analytics tools (e.g., Google Analytics) to monitor aggregate traffic patterns, which anonymize IP addresses.</p>
                    <h4 className="font-bold text-white mt-4">3. Cookies</h4>
                    <p>We use local storage to remember your UI preferences (like Dark Mode). We do not use cookies for tracking cross-site behavior.</p>
                    <p className="mt-4 pt-4 border-t border-gray-700">For privacy concerns, contact: hsini.web@gmail.com</p>
                </div>
            )
        };
      case 'Terms of Service':
          return {
              title: 'Terms of Service',
              content: (
                  <div className="space-y-4 text-sm text-gray-300">
                      <p><strong>Agreement to Terms</strong></p>
                      <p>By accessing doodax.com, you agree to these Terms of Service.</p>
                      <h4 className="font-bold text-white mt-4">1. License</h4>
                      <p>You are granted a limited, non-exclusive license to use this tool for personal and commercial purposes. You retain full ownership and copyright of any favicons you generate.</p>
                      <h4 className="font-bold text-white mt-4">2. Disclaimer of Warranties</h4>
                      <p>The service is provided "AS IS". doodax.com disclaims all warranties, express or implied. We do not guarantee that the generated files will work on every legacy browser version.</p>
                      <h4 className="font-bold text-white mt-4">3. Limitation of Liability</h4>
                      <p>In no event shall doodax.com or HSINI MOHAMED be liable for any indirect, incidental, or consequential damages arising from the use of this service.</p>
                  </div>
              )
          };
      case 'DMCA':
        return {
            title: 'DMCA Notice',
            content: (
                <div className="space-y-4 text-gray-300">
                    <p>doodax.com respects intellectual property rights. Because our tool processes data locally, we generally do not host user content.</p>
                    <p>However, if you believe content on our site infringes your copyright, please submit a notice including:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Identification of the copyrighted work.</li>
                        <li>Identification of the infringing material.</li>
                        <li>Your contact information.</li>
                        <li>A statement of good faith belief that use is unauthorized.</li>
                    </ul>
                    <div className="bg-gray-700/50 p-4 rounded-lg mt-4">
                        <p className="font-bold text-white">Designated Agent:</p>
                        <p>HSINI MOHAMED</p>
                        <p>Email: <a href="mailto:hsini.web@gmail.com" className="text-blue-400">hsini.web@gmail.com</a></p>
                    </div>
                </div>
            )
        };
      default:
        return { title: '', content: '' };
    }
  };
  
  const currentModal = getModalContent(activeModal || '');

  return (
    <>
      <header className="bg-gray-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3 group">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/10">F</div>
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">doodax.com</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <button 
                key={link} 
                onClick={() => setActiveModal(link)} 
                className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest hover:underline underline-offset-8 decoration-blue-500/50"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
             <button 
                onClick={() => setActiveModal('Guide')} 
                className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
             >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
          </div>
        </nav>
      </header>
      {activeModal && (
        <Modal title={currentModal.title} onClose={() => setActiveModal(null)}>
          {currentModal.content}
        </Modal>
      )}
    </>
  );
};

export default Header;