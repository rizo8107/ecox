import React, { forwardRef } from 'react';

interface SlideWrapperProps {
  title: string;
  slideNumber: number;
  children: React.ReactNode;
}

export const SlideWrapper = forwardRef<HTMLDivElement, SlideWrapperProps>(
  ({ title, slideNumber, children }, ref) => {
    return (
      <section ref={ref} className="bg-white dark:bg-slate-900 shadow-lg rounded-xl ring-1 ring-slate-900/5 h-full max-h-[80vh] md:max-h-[90vh] flex flex-col mt-[72px] md:mt-0">
        <div className="p-4 sm:p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white truncate">
                <span className="text-green-500">{slideNumber}.</span> {title}
            </h3>
        </div>
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 -mx-1 px-1">
            <div className="prose prose-sm sm:prose-base md:prose-lg prose-slate dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-ul:text-slate-600 dark:prose-ul:text-slate-400 prose-img:mx-auto">
                {children}
            </div>
        </div>
      </section>
    );
  }
);
