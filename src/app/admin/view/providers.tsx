'use client'

import { ViewsProvider } from '@/contexts/ViewsContext'
import { BaseAJProvider } from '@/contexts/BaseAJContext'
import { BaseDigitalFormProvider } from '@/contexts/BaseDigitalFormContext'
import { BaseOIProvider } from '@/contexts/BaseOIContext'
import { BaseVMAProvider } from '@/contexts/BaseVMAContext'

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return (
    <ViewsProvider>
      <BaseAJProvider>
        <BaseVMAProvider>
          <BaseOIProvider>
            <BaseDigitalFormProvider>{children}</BaseDigitalFormProvider>
          </BaseOIProvider>
        </BaseVMAProvider>
      </BaseAJProvider>
    </ViewsProvider>
  )
}
