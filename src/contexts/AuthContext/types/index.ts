export interface AuthLoginContextData {
  loginIsLoading: boolean
  inputValueEmail: string
  inputValuePassword: string
  errorEmail: string
  errorPassword: string
  handleChangeEmail: (value: string) => void
  handleChangePassword: (value: string) => void
  handleLogin: () => void
}

export interface AuthRegisterContextData {
  loginIsLoading: boolean
  inputValueName: string
  inputValuePhone: string
  inputValueEmail: string
  inputValuePassword: string
  inputValueConfirmPassword: string
  errorName: string
  errorPhone: string
  errorEmail: string
  errorPassword: string
  errorConfirmPassword: string
  handleChangeName: (value: string) => void
  handleChangePhone: (value: string) => void
  handleChangeEmail: (value: string) => void
  handleChangePassword: (value: string) => void
  handleChangeConfirmPassword: (value: string) => void
  handleRegister: () => void
}
