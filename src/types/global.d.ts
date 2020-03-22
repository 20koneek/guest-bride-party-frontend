/** Global definitions for development */
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react'

  export const ReactComponent: FC<SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}

interface UseStyle {
  className?: string
  style?: object
}

type Without<T, U> = Omit<T, keyof U>
