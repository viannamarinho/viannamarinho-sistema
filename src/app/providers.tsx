'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import GlobalStyle from '@/styles/globals'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <GlobalStyle />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
