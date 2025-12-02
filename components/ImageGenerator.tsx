
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Preview from './Preview';

const SIZES = [16, 32, 48, 180, 192, 512];

interface ImageGeneratorProps {
  onBack: () => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ onBack }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previews, setPreviews] = useState(SIZES.map(size => ({ size, dataUrl: null })));
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const generateFavicons = useCallback((imageSrc: string) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const generatedPreviews = SIZES.map(size => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, size, size);
          return { size, dataUrl: canvas.toDataURL('image/png') };
        }
        return { size, dataUrl: null };
      });
      setPreviews(generatedPreviews);
    };
    img.onerror = () => {
      setError("Could not load the image file. It might be corrupted or in an unsupported format.");
    };
  }, []);

  useEffect(() => {
    if (imageFile) {
      setError(null);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          generateFavicons(e.target.result);
        }
      };
      reader.onerror = () => {
          setError("Failed to read the selected file.");
      }
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile, generateFavicons]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError("Please select a valid image file (PNG, JPG, SVG, etc.).");
        return;
      }
      setImageFile(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  }

  return (
    <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl flex flex-col items-center">
      <button onClick={onBack} className="self-start text-blue-400 hover:text-blue-300 mb-4">← Back to selection</button>
      <h2 className="text-3xl font-bold mb-6">Generate Favicon from Image</h2>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      <button onClick={triggerFileSelect} className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-2">
        {imageFile ? "Choose a Different Image" : "Select Image"}
      </button>
      {imageFile && <p className="text-gray-400 text-sm mb-4">Selected: {imageFile.name}</p>}

      {error && <p className="text-red-400 mt-2">{error}</p>}
      
      <Preview previews={previews} packageName="image-favicon" />
    </div>
  );
};

export default ImageGenerator;
