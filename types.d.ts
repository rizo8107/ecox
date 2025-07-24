// Type definitions for the EcoX Brand Strategy Presentation app

// Slide data structure
export interface Slide {
  id: string;
  title: string;
  content: React.ReactNode;
}

// Table data structure
export interface TableData {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
}

// Pie chart data structure
export interface PieChartData {
  segments: PieChartSegment[];
  total?: number;
  showPercentages?: boolean;
  showValues?: boolean;
  showLegend?: boolean;
  currency?: string;
}

export interface PieChartSegment {
  label: string;
  value: number;
  color: string;
}

// Declare modules for any missing type declarations
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}
