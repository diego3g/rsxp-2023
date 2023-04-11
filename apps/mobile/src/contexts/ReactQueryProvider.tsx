import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

import { queryClient } from '../../src/lib/react-query'

type ReactQueryProviderProps = {
  children: ReactNode
}

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
