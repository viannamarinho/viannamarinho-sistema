'use client'

import { ViewsProvider } from '@/contexts/ViewsContext'

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return <ViewsProvider>{children}</ViewsProvider>
}
