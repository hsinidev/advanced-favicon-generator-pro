import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string, children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700/50 last:border-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-800/30 transition-colors rounded-lg group"
            >
                <span className="font-bold text-lg text-gray-200 group-hover:text-blue-300 transition-colors" itemProp="name">{question}</span>
                <span className={`transform transition-transform duration-300 text-gray-500 group-hover:text-blue-400 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
            >
                <div className="p-4 text-gray-400 prose prose-invert max-w-none text-sm leading-relaxed" itemProp="text">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function SeoArticle() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="article" className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 shadow-2xl relative" itemScope itemType="https://schema.org/Article">
            <meta itemProp="author" content="HSINI MOHAMED" />
            <meta itemProp="publisher" content="doodax.com" />
            
            {/* 
               The user requested "just 2 lines". 
               line-clamp-2 handles the truncation visually. 
               The max-h container ensures the button is positioned correctly.
            */}
            <div className={`relative px-6 py-6 md:px-12 md:py-10 ${isExpanded ? '' : 'max-h-[160px] overflow-hidden'}`}>
                
                <article className={`prose prose-invert lg:prose-xl max-w-none mx-auto ${isExpanded ? '' : 'line-clamp-2'}`}>
                    <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8 text-center drop-shadow-sm" itemProp="headline">
                        The Definitive Guide to Favicons & Web Identity (2025 Edition)
                    </h2>

                    <div className="bg-gray-800/30 p-6 rounded-xl border-l-4 border-blue-500 mb-10 not-prose">
                        <p className="text-lg text-gray-200 font-medium italic">
                            "A favicon is the visual anchor of your brand in the chaotic sea of open browser tabs. At doodax.com, we empower you to claim that space."
                        </p>
                    </div>

                    <p className="lead text-xl text-gray-300 mb-8 font-light" itemProp="description">
                        Welcome to the most comprehensive resource on the web regarding web iconography. In this extensive guide, we explore the technical intricacies, design philosophies, and SEO implications of favicons. Whether you are a senior full-stack developer, a UI/UX designer, or a business owner managing your digital presence at <strong>doodax.com</strong>, this guide is crafted to elevate your understanding of web identity.
                    </p>

                    <div className="my-12 p-8 bg-gray-800/40 rounded-2xl border border-white/5 shadow-inner not-prose">
                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Table of Contents</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                            <ul className="space-y-3 text-blue-300">
                                <li><a href="#intro" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">1</span> Introduction to Web Icons</a></li>
                                <li><a href="#history" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">2</span> The History: IE5 to PWA</a></li>
                                <li><a href="#formats" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">3</span> Formats: ICO, PNG, SVG</a></li>
                                <li><a href="#design" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">4</span> Design Principles</a></li>
                            </ul>
                            <ul className="space-y-3 text-blue-300">
                                <li><a href="#seo" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">5</span> SEO & UX Impact</a></li>
                                <li><a href="#guide" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">6</span> Implementation Guide</a></li>
                                <li><a href="#accessibility" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">7</span> Accessibility & Dark Mode</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors flex items-center"><span className="w-6 h-6 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center mr-3 text-xs">8</span> Expert FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="intro" className="text-3xl font-bold text-white mt-16 mb-6">1. Introduction to Web Icons</h3>
                    <p itemProp="articleBody">
                        When discussing web identity, focus often lands on hero sections or typography. However, the <strong>favicon</strong> (short for "favorite icon") is the most persistent branding element. It resides in the tab bar, bookmarks, history, and mobile home screens. In an era where users have 20+ tabs open, the favicon is the primary navigation tool. Without it, your site is a generic document icon lost in the noise.
                    </p>

                    <h3 id="history" className="text-3xl font-bold text-white mt-16 mb-6">2. The Technical Evolution</h3>
                    <p itemProp="articleBody">
                        The journey began in 1999 with Internet Explorer 5. Microsoft introduced functionality allowing a `favicon.ico` in the root directory to be automatically detected. Today, the ecosystem is complex, requiring support for high-DPI (Retina) screens, Android adaptive icons, iOS touch icons, and Windows Metro tiles. Modern development demands serving high-quality assets with minimal payloads—principles that <strong>doodax.com</strong> adheres to strictly.
                    </p>

                    <h3 id="formats" className="text-3xl font-bold text-white mt-16 mb-6">3. Formats Explained</h3>
                    <div className="overflow-x-auto my-8 border border-gray-700 rounded-lg">
                        <table className="min-w-full text-left text-gray-300">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="p-4 border-b border-gray-700">Format</th>
                                    <th className="p-4 border-b border-gray-700">Best For</th>
                                    <th className="p-4 border-b border-gray-700">Pros & Cons</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-800/30">
                                    <td className="p-4 border-b border-gray-700 font-bold">ICO</td>
                                    <td className="p-4 border-b border-gray-700">Legacy support</td>
                                    <td className="p-4 border-b border-gray-700">Multi-size container. Large file size.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-gray-700 font-bold">PNG</td>
                                    <td className="p-4 border-b border-gray-700">Modern Web</td>
                                    <td className="p-4 border-b border-gray-700">Lossless, transparent, widely supported.</td>
                                </tr>
                                <tr className="bg-gray-800/30">
                                    <td className="p-4 border-b border-gray-700 font-bold">SVG</td>
                                    <td className="p-4 border-b border-gray-700">Future-proofing</td>
                                    <td className="p-4 border-b border-gray-700">Infinite scaling, CSS styling support.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="design" className="text-3xl font-bold text-white mt-16 mb-6">4. Design Principles for Micro-Canvases</h3>
                    <p itemProp="articleBody">
                        Designing for a 16x16 pixel grid is an art form. Complexity is the enemy. At this scale, intricate logos become indistinguishable blobs. 
                        <br/><br/>
                        <strong>Key Strategies:</strong>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Simplicity:</strong> Reduce your logo to its most essential shape or initial.</li>
                            <li><strong>Contrast:</strong> Ensure high contrast between the icon and browser tab backgrounds (both light and dark modes).</li>
                            <li><strong>Utilize Space:</strong> Use the full canvas. Padding is often unnecessary at small scales.</li>
                        </ul>
                    </p>

                    <h3 id="seo" className="text-3xl font-bold text-white mt-16 mb-6">5. SEO & User Experience</h3>
                    <p itemProp="articleBody">
                        Does a favicon affect SEO? Directly, mostly for Mobile Search results where Google displays the icon next to the URL. Indirectly, the impact is massive. A missing favicon signals a broken or unfinished site, increasing bounce rates. Users trust branded tabs more than generic ones. 
                    </p>

                    <h3 id="guide" className="text-3xl font-bold text-white mt-16 mb-6">6. Implementation Guide</h3>
                    <p itemProp="articleBody">To ensure compatibility across billions of devices, use this standard HTML structure:</p>
                    
                    <div className="bg-black/50 rounded-lg p-6 font-mono text-sm text-blue-300 overflow-x-auto border border-gray-700 shadow-lg my-6">
{`<!-- Standard -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- iOS -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Android / Chrome -->
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#ffffff">`}
                    </div>

                    <h3 id="faq" className="text-3xl font-bold text-white mt-16 mb-8">Frequently Asked Questions</h3>
                    <div className="space-y-4 not-prose" itemScope itemType="https://schema.org/FAQPage">
                        <FaqItem question="Why doesn't my favicon show up in Google search results?">
                            <p>Google crawls favicons separately. Ensure your favicon is crawlable (check robots.txt), is a multiple of 48px square, and is stable at the URL. Indexing can take time.</p>
                        </FaqItem>
                        <FaqItem question="What is the difference between apple-touch-icon and regular icon?">
                            <p>Apple devices use `apple-touch-icon` for Home Screen shortcuts. These should be high-res (180x180) and opaque, as iOS adds a black background to transparent images.</p>
                        </FaqItem>
                        <FaqItem question="Do I really need an ICO file in 2025?">
                            <p>For strictly modern browsers, no. However, `favicon.ico` prevents 404 errors in server logs from legacy tools and provides a fallback for very old browsers.</p>
                        </FaqItem>
                         <FaqItem question="Is doodax.com secure?">
                            <p>Yes. We use a client-side architecture. Your images are processed in your browser's memory via WebAssembly/JS and are never uploaded to our servers.</p>
                        </FaqItem>
                    </div>

                    <div className="mt-16 p-8 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-gray-700 text-center">
                        <p className="font-bold text-white text-xl mb-2">Powered by doodax.com</p>
                        <p className="text-gray-400">
                           Built with passion by <strong>HSINI MOHAMED</strong>. Secure, fast, and free forever.
                        </p>
                    </div>
                </article>

                {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 z-20 flex items-end justify-center pb-4">
                         {/* Button placed here to float over the faded text */}
                    </div>
                )}
            </div>
            
            {/* Control Button Area */}
            <div className={`relative z-30 flex justify-center pb-8 ${!isExpanded ? '-mt-12' : 'mt-8'}`}>
                 <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transform transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-blue-400/50 backdrop-blur-sm"
                >
                    <span>{isExpanded ? 'Collapse Article' : 'Read Full Guide'}</span>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'animate-bounce'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
            </div>
        </section>
    );
}