
import React from 'react';
import type { PieChartSegment } from '../types';

interface PieChartProps {
  data: PieChartSegment[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const totalValue = data.reduce((acc, segment) => acc + segment.value, 0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercentage = 0;

  if (totalValue === 0) {
    return <div className="text-center p-4">No data to display.</div>;
  }
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value);
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
      <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 flex-shrink-0 mx-auto md:mx-0">
        <svg viewBox="0 0 100 100" className="-rotate-90">
          {data.map((segment) => {
            const percentage = segment.value / totalValue;
            const strokeDashoffset = accumulatedPercentage * circumference;
            accumulatedPercentage += percentage;
            
            return (
              <circle
                key={segment.label}
                r={radius}
                cx="50"
                cy="50"
                fill="transparent"
                stroke={segment.color}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={-strokeDashoffset}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-xs text-slate-500 dark:text-slate-400">Total</span>
            <span className="font-bold text-base sm:text-lg text-slate-800 dark:text-slate-200">{formatCurrency(totalValue)}</span>
        </div>
      </div>
      <div className="w-full space-y-1.5 sm:space-y-2 mt-2 md:mt-0">
        {data.map((segment) => (
          <div key={segment.label} className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-slate-600 dark:text-slate-400 truncate">{segment.label}</span>
            </div>
            <div className="font-semibold text-slate-700 dark:text-slate-300 flex-shrink-0 ml-2">
                {formatCurrency(segment.value)}
                <span className="ml-1 sm:ml-2 text-xs text-slate-500 dark:text-slate-500">
                    ({((segment.value / totalValue) * 100).toFixed(0)}%)
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};