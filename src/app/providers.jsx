'use client'

import { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'

function usePrevious(value) {
  let [state, setState] = useState({ value, previous: undefined })

  if (state.value !== value) {
    setState({ value, previous: state.value })
  }

  return state.previous
}

function ThemePreferenceMigration() {
  let { theme, setTheme } = useTheme()

  useEffect(() => {
    if (theme === 'system') {
      setTheme('light')
    }
  }, [theme, setTheme])

  return null
}

export const AppContext = createContext({})

export function Providers({ children }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        themes={['light', 'dark']}
        disableTransitionOnChange
      >
        <ThemePreferenceMigration />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
