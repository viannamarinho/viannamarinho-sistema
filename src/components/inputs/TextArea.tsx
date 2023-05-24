'use client'

import { useState } from 'react'
import { InputTextArea } from '@/styles/inputs'

export function TextArea() {
  const [inputValue, setInputValue] = useState('')

  return <InputTextArea>InputText</InputTextArea>
}
