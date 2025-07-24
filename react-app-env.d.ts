/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Add declarations for missing React modules
declare module 'react' {
  export = React;
}

declare module 'react/jsx-runtime' {
  export = JSX;
}

// Ensure JSX namespace is available
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Declare React namespace
declare namespace React {
  interface SVGProps<T> extends React.DOMAttributes<T> {
    [key: string]: any;
  }
  
  interface DOMAttributes<T> {
    [key: string]: any;
  }
  
  interface FunctionComponent<P = {}> {
    (props: P, context?: any): React.ReactElement<any, any> | null;
    displayName?: string;
  }
  
  type FC<P = {}> = FunctionComponent<P>;
  
  interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = string | React.JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: React.Key | null;
  }
  
  type ReactNode = ReactElement | string | number | boolean | null | undefined;
  
  type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null);
  
  type Key = string | number;
  
  interface Attributes {
    key?: Key;
  }
  
  interface RefObject<T> {
    readonly current: T | null;
  }
  
  interface MutableRefObject<T> {
    current: T;
  }
  
  type LegacyRef<T> = string | Ref<T>;
  type Ref<T> = RefCallback<T> | RefObject<T> | null;
  type RefCallback<T> = (instance: T | null) => void;
  
  function useRef<T>(initialValue: T | null): MutableRefObject<T | null>;
  function useState<S>(initialState: S | (() => S)): [S, (newState: S | ((prevState: S) => S)) => void];
  function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
  function createRef<T>(): RefObject<T>;
  
  interface SVGAttributes<T> extends DOMAttributes<T> {
    [key: string]: any;
  }
}
