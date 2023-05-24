'use client'

import { useState } from 'react'
import { InputButtonIcon } from '@/styles/inputs'
import { FiX } from 'react-icons/fi'

export function ButtonIcon() {
  const [inputValue, setInputValue] = useState('')

  return <InputButtonIcon aria-label="Icon Button" icon={<FiX />} />
}
