'use client'

import { useState } from 'react'
import { InputButton } from '@/styles/inputs'

export function Button() {
  const [inputValue, setInputValue] = useState('')

  return <InputButton>InputText</InputButton>
}
