
import type React from 'react';

export interface Slide {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface TableData {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export interface Competitor {
    name: string;
    logo: React.ReactNode;
    overview: string;
    strengths: string[];
    weaknesses: string[];
    marketPresence: string;
    pricing: string;
    differentiation: string;
}

export interface PieChartSegment {
    label: string;
    value: number;
    color: string;
}