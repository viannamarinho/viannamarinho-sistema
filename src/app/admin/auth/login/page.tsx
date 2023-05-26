'use client'

import styles from '@/styles/pages/auth/login.module.scss'

import { Input } from '@/components/inputs/Input'
import { Button } from '@/components/inputs/Button'

import { useAuthLogin } from '@/contexts/AuthContext'

export default function AuthPageLogin() {
  const {
    loginIsLoading,
    inputValueEmail,
    inputValuePassword,
    errorEmail,
    errorPassword,
    handleChangeEmail,
    handleChangePassword,
    handleLogin
  } = useAuthLogin()

  return (
    <div className={styles.login_form__container}>
      <form className={styles.login_form}>
        <Input
          inputId="auth_login__input_email"
          label="Login"
          placeholder="Digite seu e-mail"
          error={!!errorEmail}
          helperText={errorEmail}
          value={inputValueEmail}
          onChange={handleChangeEmail}
        />
        <Input
          inputId="auth_login__input_password"
          label="Senha"
          placeholder="Digite sua senha"
          isPassword
          error={!!errorPassword}
          helperText={errorPassword}
          value={inputValuePassword}
          onChange={handleChangePassword}
        />
        <div className={styles.login_form__submit_container}>
          <Button
            label="Entrar"
            isLoading={loginIsLoading}
            onClick={handleLogin}
          />
        </div>
      </form>
      {/* <div className={styles.login_form__redirect}>
        Não possui acesso?
        <br />
        Realize seu cadastro aqui.
      </div> */}
    </div>
  )
}
