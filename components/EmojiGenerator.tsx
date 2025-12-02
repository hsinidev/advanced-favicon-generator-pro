
import React, { useState, useEffect, useCallback } from 'react';
import Preview from './Preview';

const SIZES = [16, 32, 48, 180, 192, 512];

interface EmojiGeneratorProps {
  onBack: () => void;
}

const EmojiGenerator: React.FC<EmojiGeneratorProps> = ({ onBack }) => {
  const [emoji, setEmoji] = useState('😎');
  const [previews, setPreviews] = useState(SIZES.map(size => ({ size, dataUrl: null })));

  const generateFavicons = useCallback(() => {
    const generatedPreviews = SIZES.map(size => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Background is transparent for emoji
        ctx.clearRect(0, 0, size, size);

        // Emoji
        const fontSize = size * 0.8; // Emojis are often wider than they are tall
        ctx.font = `${fontSize}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(emoji, size / 2, size / 2 + size * 0.05); // Small offset for centering

        return { size, dataUrl: canvas.toDataURL('image/png') };
      }
      return { size, dataUrl: null };
    });
    setPreviews(generatedPreviews);
  }, [emoji]);

  useEffect(() => {
    if (emoji) {
        generateFavicons();
    }
  }, [emoji, generateFavicons]);

  return (
    <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl flex flex-col items-center">
      <button onClick={onBack} className="self-start text-blue-400 hover:text-blue-300 mb-4">← Back to selection</button>
      <h2 className="text-3xl font-bold mb-6">Generate Favicon from Emoji</h2>
      
      <div className="w-full max-w-sm mb-6">
        <label htmlFor="emoji-input" className="block text-sm font-medium text-gray-300 mb-1">Enter an Emoji</label>
        <input 
            id="emoji-input" 
            type="text" 
            value={emoji} 
            onChange={(e) => setEmoji(e.target.value)} 
            placeholder="Paste emoji here"
            className="w-full bg-gray-700 text-white rounded-md p-2 text-4xl text-center border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <p className="text-xs text-gray-500 mt-2 text-center">Tip: Use Windows Key + . or Command + Control + Space to open the emoji keyboard.</p>
      </div>

      <Preview previews={previews} packageName="emoji-favicon" />
    </div>
  );
};

export default EmojiGenerator;
