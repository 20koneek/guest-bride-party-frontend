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

type Size = 'small' | 'medium' | 'large'

// type XOR<T, U> = (T | U) extends object
//     ? (Without<T, U> & U) | (Without<U, T> & T)
//     : T | U
// type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
// // Redefine RenderProps via XOR instead of Union operator
// type RenderProps = XOR<
//     { children: (api: API) => ReactNode },
//     { render: (api: API) => ReactNode }
//     >
