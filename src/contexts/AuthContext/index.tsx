import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import { AuthLoginContextData, AuthRegisterContextData } from './types'

export const AuthLoginContext = createContext<AuthLoginContextData>(
  {} as AuthLoginContextData
)

export const AuthRegisterContext = createContext<AuthRegisterContextData>(
  {} as AuthRegisterContextData
)

const AuthLoginProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const [loginIsLoading, setLoginIsLoading] = useState(false)

  const [inputValueEmail, setInputValueEmail] = useState('')
  const [inputValuePassword, setInputValuePassword] = useState('')

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const handleChangeEmail = (value: string) => {
    setInputValueEmail(value)
    setErrorEmail('')
  }

  const handleChangePassword = (value: string) => {
    setInputValuePassword(value)
    setErrorPassword('')
  }

  const validateForm = () => {
    let isValid = true

    if (!inputValueEmail) {
      setErrorEmail('Por favor, digite um e-mail válido')
      isValid = false
    }

    if (!inputValuePassword) {
      setErrorPassword('Por favor, digite uma senha')
      isValid = false
    }
    return isValid
  }

  const handleLogin = () => {
    const formIsValidated = validateForm()
    console.log(formIsValidated)

    if (formIsValidated) {
      // Enviar o formulário se for válido
      setLoginIsLoading(true)
      // ...
      console.log('pepino')
      router.push('/admin/view/resume')
    }
  }

  return (
    <AuthLoginContext.Provider
      value={{
        loginIsLoading,
        inputValueEmail,
        inputValuePassword,
        errorEmail,
        errorPassword,
        handleChangeEmail,
        handleChangePassword,
        handleLogin
      }}
    >
      {children}
    </AuthLoginContext.Provider>
  )
}

const AuthRegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const [loginIsLoading, setLoginIsLoading] = useState(false)

  const [inputValueName, setInputValueName] = useState('')
  const [inputValuePhone, setInputValuePhone] = useState('')
  const [inputValueEmail, setInputValueEmail] = useState('')
  const [inputValuePassword, setInputValuePassword] = useState('')
  const [inputValueConfirmPassword, setInputValueConfirmPassword] = useState('')

  const [errorName, setErrorName] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

  const handleChangeName = (value: string) => {
    setInputValueName(value)
    setErrorName('')
  }

  const handleChangePhone = (value: string) => {
    setInputValuePhone(value)
    setErrorPhone('')
  }

  const handleChangeEmail = (value: string) => {
    setInputValueEmail(value)
    setErrorEmail('')
  }

  const handleChangePassword = (value: string) => {
    setInputValuePassword(value)
    setErrorPassword('')
  }

  const handleChangeConfirmPassword = (value: string) => {
    setInputValueConfirmPassword(value)
    setErrorConfirmPassword('')
  }

  const validateForm = () => {
    let isValid = true

    if (!inputValueName) {
      setErrorName('Por favor, digite um nome válido')
      isValid = false
    }

    if (!inputValuePhone) {
      setErrorPhone('Por favor, digite um telefone válido')
      isValid = false
    }

    if (!inputValueEmail) {
      setErrorEmail('Por favor, digite um e-mail válido')
      isValid = false
    }

    if (!inputValuePassword) {
      setErrorPassword('Por favor, digite uma senha')
      isValid = false
    }

    if (!inputValueConfirmPassword) {
      setErrorConfirmPassword('Por favor, digite uma senha')
      isValid = false
    }

    return isValid
  }

  const handleRegister = () => {
    if (validateForm()) {
      // Enviar o formulário se for válido
      setLoginIsLoading(true)
      // ...
      router.push('/admin/view/resume')
    }
  }

  return (
    <AuthRegisterContext.Provider
      value={{
        loginIsLoading,
        inputValueName,
        inputValuePhone,
        inputValueEmail,
        inputValuePassword,
        inputValueConfirmPassword,
        errorName,
        errorPhone,
        errorEmail,
        errorPassword,
        errorConfirmPassword,
        handleChangeName,
        handleChangePhone,
        handleChangeEmail,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleRegister
      }}
    >
      {children}
    </AuthRegisterContext.Provider>
  )
}

function useAuthRegister(): AuthRegisterContextData {
  const context = useContext(AuthRegisterContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

function useAuthLogin(): AuthLoginContextData {
  const context = useContext(AuthLoginContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export {
  AuthLoginProvider,
  AuthRegisterProvider,
  useAuthRegister,
  useAuthLogin
}
