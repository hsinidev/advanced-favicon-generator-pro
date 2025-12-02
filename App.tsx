import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGenerator from './components/ImageGenerator';
import TextGenerator from './components/TextGenerator';
import EmojiGenerator from './components/EmojiGenerator';
import SeoArticle from './components/SeoArticle';

type GeneratorMode = 'image' | 'text' | 'emoji' | null;

const GeneratorCard: React.FC<{ title: string; description: string; content: React.ReactNode; onClick: () => void; className: string }> = ({ title, description, content, onClick, className }) => (
  <div onClick={onClick} className={`rounded-2xl p-8 text-white cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10 backdrop-blur-md ${className} group`}>
    <div className="text-6xl md:text-7xl font-bold mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{content}</div>
    <h3 className="text-3xl font-extrabold mb-3 tracking-wide drop-shadow-md">{title}</h3>
    <p className="text-gray-100 font-medium leading-relaxed drop-shadow">{description}</p>
  </div>
);

const App: React.FC = () => {
  const [activeGenerator, setActiveGenerator] = useState<GeneratorMode>(null);

  const renderGenerator = () => {
    switch (activeGenerator) {
      case 'image':
        return <ImageGenerator onBack={() => setActiveGenerator(null)} />;
      case 'text':
        return <TextGenerator onBack={() => setActiveGenerator(null)} />;
      case 'emoji':
        return <EmojiGenerator onBack={() => setActiveGenerator(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col relative text-gray-100">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center relative z-10">
        {activeGenerator ? (
          renderGenerator()
        ) : (
          <div className="w-full flex flex-col items-center animate-fade-in-up">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 border border-blue-500/30 backdrop-blur-sm shadow-glow">
                ✨ 100% Client-Side & Secure
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200 drop-shadow-xl leading-tight">
                The Ultimate<br />Favicon Generator
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Create stunning brand icons in seconds. Convert images, design text, or pick emojis. Powerful, free, and privacy-friendly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
              <GeneratorCard
                title="Image to ICO"
                description="Convert your logo or any image into a multi-size favicon package."
                content={<>🖼️</>}
                onClick={() => setActiveGenerator('image')}
                className="bg-gradient-to-br from-teal-600/80 to-teal-900/80 hover:from-teal-500 hover:to-teal-800"
              />
              <GeneratorCard
                title="Text to ICO"
                description="Design a clean, typographic favicon using your brand initials."
                content={<>Aa</>}
                onClick={() => setActiveGenerator('text')}
                className="bg-gradient-to-br from-purple-600/80 to-purple-900/80 hover:from-purple-500 hover:to-purple-800"
              />
              <GeneratorCard
                title="Emoji to ICO"
                description="Stand out instantly by turning any emoji into your website icon."
                content={<>😎</>}
                onClick={() => setActiveGenerator('emoji')}
                className="bg-gradient-to-br from-blue-600/80 to-blue-900/80 hover:from-blue-500 hover:to-blue-800"
              />
            </div>
          </div>
        )}

        <div className="w-full max-w-6xl mt-24">
            <SeoArticle />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;