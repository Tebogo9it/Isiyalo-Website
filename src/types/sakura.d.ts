declare module 'sakura-js' {
  export interface SakuraColor {
    gradientColorStart?: string;
    gradientColorEnd?: string;
    gradientColorDegree?: number;
  }

  export interface SakuraOptions {
    className?: string;
    fallSpeed?: number;
    maxSize?: number;
    minSize?: number;
    delay?: number;
    colors?: SakuraColor[];
  }

  class Sakura {
    constructor(selector: string, options?: SakuraOptions);
    start(): void;
    stop(graceful?: boolean): void;
  }

  export default Sakura;
}
