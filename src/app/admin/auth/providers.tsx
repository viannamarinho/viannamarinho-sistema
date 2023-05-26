'use client'

import { AuthLoginProvider } from '@/contexts/AuthContext'

export function AuthProviders({ children }: { children: React.ReactNode }) {
  return <AuthLoginProvider>{children}</AuthLoginProvider>
}
