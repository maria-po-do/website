// Define types for GSAP
declare namespace gsap {
  function quickTo(
    target: string, 
    property: string, 
    vars?: {
      duration?: number;
      ease?: string;
    }
  ): (value: number) => void;
  
  function set(
    target: string, 
    vars: {
      xPercent?: number;
      yPercent?: number;
      [key: string]: any;
    }
  ): void;
} 