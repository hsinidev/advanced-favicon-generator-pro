
import React, { useState, useEffect, useCallback } from 'react';
import Preview from './Preview';

const SIZES = [16, 32, 48, 180, 192, 512];

interface TextGeneratorProps {
  onBack: () => void;
}

const TextGenerator: React.FC<TextGeneratorProps> = ({ onBack }) => {
  const [text, setText] = useState('FG');
  const [bgColor, setBgColor] = useState('#ef4444');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(60); // Percentage of canvas height
  const [fontFamily, setFontFamily] = useState('Arial');
  const [previews, setPreviews] = useState(SIZES.map(size => ({ size, dataUrl: null })));

  const generateFavicons = useCallback(() => {
    const generatedPreviews = SIZES.map(size => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, size, size);

        // Text
        const calculatedFontSize = size * (fontSize / 100);
        ctx.font = `bold ${calculatedFontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text.slice(0, 2).toUpperCase(), size / 2, size / 2 + calculatedFontSize * 0.05); // Small offset for better vertical centering

        return { size, dataUrl: canvas.toDataURL('image/png') };
      }
      return { size, dataUrl: null };
    });
    setPreviews(generatedPreviews);
  }, [text, bgColor, textColor, fontSize, fontFamily]);

  useEffect(() => {
    generateFavicons();
  }, [generateFavicons]);

  return (
    <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl flex flex-col items-center">
      <button onClick={onBack} className="self-start text-blue-400 hover:text-blue-300 mb-4">← Back to selection</button>
      <h2 className="text-3xl font-bold mb-6">Generate Favicon from Text</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
        <div className="form-group">
          <label htmlFor="text-input" className="block text-sm font-medium text-gray-300 mb-1">Text (1-2 chars)</label>
          <input id="text-input" type="text" value={text} onChange={(e) => setText(e.target.value)} maxLength={2} className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none"/>
        </div>
        <div className="form-group">
          <label htmlFor="font-family" className="block text-sm font-medium text-gray-300 mb-1">Font Family</label>
          <select id="font-family" value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none">
            <option>Arial</option>
            <option>Verdana</option>
            <option>Helvetica</option>
            <option>Times New Roman</option>
            <option>Courier New</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bg-color" className="block text-sm font-medium text-gray-300 mb-1">Background Color</label>
          <input id="bg-color" type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 p-1 bg-gray-700 rounded-md border border-gray-600 cursor-pointer"/>
        </div>
        <div className="form-group">
          <label htmlFor="text-color" className="block text-sm font-medium text-gray-300 mb-1">Text Color</label>
          <input id="text-color" type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full h-10 p-1 bg-gray-700 rounded-md border border-gray-600 cursor-pointer"/>
        </div>
        <div className="form-group md:col-span-2">
            <label htmlFor="font-size" className="block text-sm font-medium text-gray-300 mb-1">Font Size: {fontSize}%</label>
            <input id="font-size" type="range" min="30" max="100" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value, 10))} className="w-full"/>
        </div>
      </div>
      
      <Preview previews={previews} packageName="text-favicon" />
    </div>
  );
};

export default TextGenerator;
