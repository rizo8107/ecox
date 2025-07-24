import React, { useState } from 'react';
import type { Slide } from '../types';

interface SidebarProps {
  slides: Slide[];
  activeSlideId: string;
  onNavigate: (id: string) => void;
  isVisible: boolean;
  onToggleVisibility: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ slides, activeSlideId, onNavigate, isVisible, onToggleVisibility }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSlide = slides.find(s => s.id === activeSlideId);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`${isVisible ? 'md:flex' : 'md:hidden'} hidden w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex-col transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-500 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">EcoX Strategy</h2>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul>
            {slides.map((slide, index) => (
              <li key={slide.id}>
                <a
                  href={`#${slide.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(slide.id);
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    activeSlideId === slide.id
                      ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold ${
                    activeSlideId === slide.id ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="truncate">{slide.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto text-center text-xs text-slate-400 dark:text-slate-500 pt-4">
          <p>Prepared by Perplexity AI</p>
        </div>
      </aside>

      {/* Mobile Header */}
      {/* Floating toggle button */}
      <button
        onClick={onToggleVisibility}
        className="fixed bottom-4 left-4 z-20 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-95 transition-transform md:flex hidden items-center justify-center"
        aria-label="Toggle sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isVisible ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
        </svg>
      </button>
      
      <header className="w-full absolute top-0 left-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 safe-top">
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 max-w-[70%]">
                <div className="bg-green-500 p-1.5 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h1 className="text-lg font-bold truncate">{activeSlide?.title}</h1>
            </div>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-t border-slate-200 dark:border-slate-800 max-h-[60vh] overflow-y-auto">
            <ul className="p-2">
              {slides.map((slide, index) => (
                <li key={slide.id} className="my-1">
                  <a
                    href={`#${slide.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(slide.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium active:scale-[0.98] transition-all ${
                      activeSlideId === slide.id ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold ${
                      activeSlideId === slide.id ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="truncate">{slide.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
