
import React from 'react';

interface PreviewProps {
  previews: { size: number; dataUrl: string | null }[];
  packageName: string;
}

const Preview: React.FC<PreviewProps> = ({ previews, packageName }) => {
  const hasContent = previews.some(p => p.dataUrl);

  if (!hasContent) {
    return null;
  }
  
  const handleDownloadAll = () => {
    // This is a simulation. In a real app, you'd use a library like JSZip.
    alert("In a full application, this would download a ZIP file containing all favicon sizes. For now, please download them individually.");
    previews.forEach(p => {
        if(p.dataUrl) {
            const link = document.createElement('a');
            link.href = p.dataUrl;
            link.download = `favicon-${p.size}x${p.size}.png`;
            link.click();
        }
    });
  };

  return (
    <div className="mt-8 p-6 bg-gray-800/50 rounded-lg w-full">
      <h3 className="text-2xl font-bold mb-4 text-center">Preview & Download</h3>
      <div className="flex flex-wrap justify-center items-end gap-6 mb-8">
        {previews.map(({ size, dataUrl }) => (
          dataUrl && (
            <div key={size} className="text-center">
              <div className="bg-gray-700 p-2 rounded-md mb-2 inline-block">
                <img src={dataUrl} alt={`Preview ${size}x${size}`} width={size * 2} height={size * 2} className="image-pixelated" style={{width: `${size*2}px`, height:`${size*2}px`}}/>
              </div>
              <p className="text-sm text-gray-400 mb-1">{size}x{size}</p>
              <a 
                href={dataUrl} 
                download={`favicon-${size}x${size}.png`}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Download
              </a>
            </div>
          )
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleDownloadAll}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto"
        >
          Download Full Favicon Package (Simulated)
        </button>
      </div>
    </div>
  );
};

export default Preview;
