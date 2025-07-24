import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { SlideWrapper } from './components/SlideWrapper';
import { SLIDES_DATA } from './constants';
import type { Slide } from './types';

const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentContainerRef = useRef<HTMLDivElement | null>(null);
  
  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES_DATA.length) {
      slideRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setActiveSlideIndex(index);
    }
  };

  const handleNext = () => {
    goToSlide(activeSlideIndex + 1);
  };

  const handlePrev = () => {
    goToSlide(activeSlideIndex - 1);
  };

  const handleScroll = useCallback(() => {
    const container = contentContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    
    let closestSlideIndex = 0;
    let minDistance = Infinity;

    slideRefs.current.forEach((ref, index) => {
      if(ref) {
        const slideLeft = ref.offsetLeft;
        const distance = Math.abs(scrollLeft - slideLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestSlideIndex = index;
        }
      }
    });

    if (closestSlideIndex !== activeSlideIndex) {
      setActiveSlideIndex(closestSlideIndex);
    }
  }, [activeSlideIndex]);

  useEffect(() => {
    const container = contentContainerRef.current;
    // Debounce scroll handler to prevent performance issues
    let timeoutId: number | null = null;
    const debouncedScrollHandler = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(handleScroll, 150);
    };

    if (container) {
      container.addEventListener('scroll', debouncedScrollHandler);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', debouncedScrollHandler);
      }
    };
  }, [handleScroll]);

  return (
    <div className="flex h-screen font-sans text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      <Sidebar 
        slides={SLIDES_DATA} 
        activeSlideId={SLIDES_DATA[activeSlideIndex].id} 
        onNavigate={(id) => goToSlide(SLIDES_DATA.findIndex(s => s.id === id))}
        isVisible={isSidebarVisible}
        onToggleVisibility={toggleSidebar}
      />
      <div className={`flex-1 flex flex-col overflow-hidden relative ${!isSidebarVisible ? 'md:pl-0' : ''}`}>
        <main 
          ref={contentContainerRef} 
          className="flex-1 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth overscroll-x-contain touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex flex-nowrap items-center px-2 sm:px-4 md:px-12">
            {SLIDES_DATA.map((slide: Slide, index) => (
              <div key={slide.id} className="w-screen max-w-5xl flex-shrink-0 snap-center px-1 sm:px-2 md:px-4">
                <SlideWrapper
                  ref={(el) => { slideRefs.current[index] = el; }}
                  title={slide.title}
                  slideNumber={index + 1}
                >
                  {slide.content}
                </SlideWrapper>
              </div>
            ))}
          </div>
        </main>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-1 sm:left-2 md:left-4 flex items-center">
            <button
              onClick={handlePrev}
              disabled={activeSlideIndex === 0}
              className="p-1 sm:p-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md"
              aria-label="Previous Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
        </div>
        <div className="absolute inset-y-0 right-1 sm:right-2 md:right-4 flex items-center">
            <button
              onClick={handleNext}
              disabled={activeSlideIndex === SLIDES_DATA.length - 1}
              className="p-1 sm:p-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md"
              aria-label="Next Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>

         {/* Slide Dots for Mobile */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex md:hidden items-center justify-center space-x-3 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm py-2 px-3 rounded-full">
            {SLIDES_DATA.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === activeSlideIndex ? 'bg-green-500 scale-125' : 'bg-slate-400 dark:bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

        {/* Mobile slide counter */}
        <div className="md:hidden absolute top-[72px] right-3 mt-3 text-xs bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full px-2 py-1 text-slate-600 dark:text-slate-300">
            <p>{activeSlideIndex + 1}/{SLIDES_DATA.length}</p>
        </div>

        <footer className="hidden md:block absolute bottom-4 right-8 text-xs text-slate-500 dark:text-slate-400">
            <p>Slide {activeSlideIndex + 1} of {SLIDES_DATA.length} | &copy; 2025 EcoX</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
