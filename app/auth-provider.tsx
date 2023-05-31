'use client'

import { createContext, ReactNode} from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
