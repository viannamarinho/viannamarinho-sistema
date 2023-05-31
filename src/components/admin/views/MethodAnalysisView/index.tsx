'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import {
  HiOutlineChatAlt2,
  HiOutlineClipboardList,
  HiOutlineDocumentDuplicate
} from 'react-icons/hi'

import { useTransition, animated } from 'react-spring'

import { Button } from '@/components/inputs/Button'
import { Input } from '@/components/inputs/Input'
import { Select } from '@/components/inputs/Select'
import { TextArea } from '@/components/inputs/TextArea'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { useMethodAnalysis } from '@/contexts/MethodAnalysisContext'

import { accessLevel } from '@/data/usersData'

export default function MethodAnalysisView() {
  return (
    <div className={styles.admin_view__method_analysis}>
      <div className={styles.admin_view__method_analysis__chat_container}>
        <MethodAnalysisChatbot />
      </div>
      <div className={styles.admin_view__method_analysis__form_container}>
        <MethodAnalysisForm />
      </div>
    </div>
  )
}

// ========================================================== CHATBOT

function MethodAnalysisChatbot() {
  const {
    messages,
    handleSendMessage,
    restartChat,
    chatEnded,
    isFirstMessage,
    isMessageMenuActive
  } = useMethodAnalysis()

  const transitions = useTransition(messages, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    trail: 50
  })

  useEffect(() => {
    // console.log('asdasdasd', isMessageMenuActive)
  }, [isMessageMenuActive])

  return (
    <div className={styles.method_analysis__chat}>
      <div className={styles.method_analysis__chat__header}>
        <div className={styles.chat__header__icon}>
          <HiOutlineChatAlt2 />
        </div>
        <div className={styles.chat__header__wrapper}>
          ChatBot de Auxílio a Ferramenta de Análise de Mérito
        </div>
      </div>
      <div className={styles.method_analysis__chat__container}>
        <div className={styles.chat__messages_container}>
          <div className={styles.chat__messages_wrapper}>
            {transitions((style, message) => {
              // console.log(message)
              return (
                <animated.div
                  className={`${styles.message} ${
                    message.isFinalQuestion && styles.final_question
                  } ${
                    message.isUser ? styles.user_message : styles.bot_message
                  }`}
                  style={style}
                >
                  {message.content}
                  {message.select && (
                    <div className={styles.chat__message__menu}>
                      {message?.select?.map((menu: any) => (
                        <button
                          key={menu.value}
                          onClick={() => handleSendMessage(menu.value)}
                        >
                          {menu.value}
                        </button>
                      ))}
                    </div>
                  )}
                </animated.div>
              )
            })}
          </div>
        </div>
        <div className={styles.method_analysis__chat__controls}>
          <span>
            {!chatEnded && (
              <Button
                label="Reiniciar Chat"
                variant="outlined"
                onClick={restartChat}
              />
            )}
          </span>
          <span>
            {isFirstMessage ? (
              <Button
                label="Iniciar Chat"
                onClick={() => handleSendMessage('Iniciar')}
              />
            ) : chatEnded ? (
              <Button
                label="Reiniciar Chat"
                variant="outlined"
                onClick={restartChat}
              />
            ) : (
              <>
                <Button
                  label="Não"
                  disabled={isMessageMenuActive}
                  onClick={() => handleSendMessage('Não')}
                />
                <Button
                  label="Sim"
                  disabled={isMessageMenuActive}
                  onClick={() => handleSendMessage('Sim')}
                />
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

// ========================================================== FORM

function MethodAnalysisForm() {
  const { getBaseAJDataToForm } = useMethodAnalysis()

  const [folderNameValue, setFolderNameValue] = useState('')

  const [analysisOfMeritValue, setAnalysisOfMeritValue] = useState({})
  const [incidentNumberValue, setIncidentNumberValue] = useState('')
  const [areaValue, setAreaValue] = useState({})
  const [questionIdValue, setQuestionIdValue] = useState('')
  const [classValue, setClassValue] = useState({})
  const [amountValue, setAmountValue] = useState('')
  const [divHabValue, setDivHabValue] = useState({})

  const handleChangeFolderName = (value: string) => {
    setFolderNameValue(value)
  }

  const handleChangeAnalysisOfMerit = (value: any) => {
    setAnalysisOfMeritValue(value)
  }

  const handleChangeIncidentNumber = (value: string) => {
    setIncidentNumberValue(value)
  }

  const handleChangeArea = (value: any) => {
    setAreaValue(value)
  }

  const handleChangeQuestionId = (value: string) => {
    setQuestionIdValue(value)
  }

  const handleChangeClass = (value: any) => {
    setClassValue(value)
  }

  const handleChangeAmount = (value: string) => {
    setAmountValue(value)
  }

  const handleChangeDivHab = (value: any) => {
    setDivHabValue(value)
  }

  const formattedAnalysisOfMerit = useMemo(() => {
    return accessLevel.map((accessLevel: any) => ({
      valueId: accessLevel.accessLevelId,
      valueLabel: accessLevel.accessLevelIdentifier
    }))
  }, [])

  const formattedArea = useMemo(() => {
    return accessLevel.map((accessLevel: any) => ({
      valueId: accessLevel.accessLevelId,
      valueLabel: accessLevel.accessLevelIdentifier
    }))
  }, [])

  const formattedClass = useMemo(() => {
    return accessLevel.map((accessLevel: any) => ({
      valueId: accessLevel.accessLevelId,
      valueLabel: accessLevel.accessLevelIdentifier
    }))
  }, [])

  const formattedDivHab = useMemo(() => {
    return accessLevel.map((accessLevel: any) => ({
      valueId: accessLevel.accessLevelId,
      valueLabel: accessLevel.accessLevelIdentifier
    }))
  }, [])

  // =================================

  const handleRecordAnalysis = () => {
    //
  }

  const handleClearForm = () => {
    //
  }

  return (
    <div className={styles.method_analysis__form}>
      <div className={styles.method_analysis__form__header}>
        <div className={styles.form__header__icon}>
          <HiOutlineClipboardList />
        </div>
        <div className={styles.form__header__wrapper}>
          Ferramenta de Análise de Mérito
        </div>
      </div>
      <div className={styles.method_analysis__form__container}>
        <div className={styles.method_analysis__form__wrapper}>
          <div className={styles.form__inputs_container}>
            <div className={styles.form__inputs_container__label}>
              Informações Intralinks
            </div>
            <div className={styles.form__inputs_container__wrapper}>
              <div>
                <Input
                  inputId="method_analysis__folder_name"
                  label="Nome da Pasta"
                  placeholder="Digite o nome da pasta"
                  // error={!!errorEmail}
                  // helperText={errorEmail}
                  value={folderNameValue}
                  onChange={handleChangeFolderName}
                />
              </div>
              <div>
                <span>
                  <b>Nome do Credor: </b>
                  <p>{getBaseAJDataToForm.nome_credor}</p>
                </span>
                <span>
                  <b>CPF / CNPJ: </b>
                  <p>{getBaseAJDataToForm.cpf_cnpj_credor}</p>
                </span>
              </div>
              <div>
                <span>
                  <b>Classe: </b>
                  <p>{getBaseAJDataToForm.classe}</p>
                </span>
                <span>
                  <b>Protocolo: </b>
                  <p>{getBaseAJDataToForm.protocolo}</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.form__inputs_container}>
            <div className={styles.form__inputs_container__label}>
              Informações da Base do AJ
            </div>
            <div className={styles.form__inputs_container__wrapper}>
              <div>
                <span>
                  <b>Data: </b>
                  <p>{getBaseAJDataToForm.data}</p>
                </span>
                <span>
                  <b>Processo de Origem: </b>
                  <p>{getBaseAJDataToForm.nr_processo_origem}</p>
                </span>
              </div>
              <div>
                <span>
                  <b>Valor Pleiteado: </b>
                  <p>{getBaseAJDataToForm.valor_pleiteado}</p>
                </span>
                <span>
                  <b>Origem do Crédito: </b>
                  <p>{getBaseAJDataToForm.origem_credito}</p>
                </span>
              </div>
              <div>
                <span>
                  <b>Habilitação / Divergência: </b>
                  <p>{getBaseAJDataToForm.hab_ou_div}</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.form__inputs_container}>
            <div className={styles.form__inputs_container__label}>
              Análise do Caso
            </div>
            <div className={styles.form__inputs_container__wrapper}>
              <div>
                <Select
                  label="Análise de Mérito"
                  placeholder="Análise de Mérito"
                  labelId="method_analysis__analysis_of_merit"
                  options={formattedAnalysisOfMerit}
                  selectedValue={analysisOfMeritValue}
                  onChange={handleChangeAnalysisOfMerit}
                />
              </div>
              <div>
                <span>
                  <Input
                    inputId="method_analysis__incident_number"
                    label="Número de Incidente"
                    placeholder="Digite o número de incidente"
                    // error={!!errorEmail}
                    // helperText={errorEmail}
                    value={incidentNumberValue}
                    onChange={handleChangeIncidentNumber}
                  />
                </span>
                <span>
                  <Select
                    label="Área"
                    placeholder="Área"
                    labelId="method_analysis__area"
                    options={formattedArea}
                    selectedValue={areaValue}
                    onChange={handleChangeArea}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Input
                    inputId="method_analysis__"
                    label="Pergunta ID"
                    placeholder="Digite o ID da pergunta"
                    // error={!!errorEmail}
                    // helperText={errorEmail}
                    value={questionIdValue}
                    onChange={handleChangeQuestionId}
                  />
                </span>
                <span>
                  <Select
                    label="Classe"
                    placeholder="Classe"
                    labelId="method_analysis__class"
                    options={formattedClass}
                    selectedValue={classValue}
                    onChange={handleChangeClass}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Input
                    inputId="method_analysis__question_id"
                    label="Valor"
                    placeholder="Digite o valor"
                    // error={!!errorEmail}
                    // helperText={errorEmail}
                    value={amountValue}
                    onChange={handleChangeAmount}
                  />
                </span>
                <span>
                  <Select
                    label="Div / Hab"
                    placeholder="Div / Hab"
                    labelId="method_analysis__div_or_hab"
                    options={formattedDivHab}
                    selectedValue={divHabValue}
                    onChange={handleChangeDivHab}
                  />
                </span>
              </div>
              <div className={styles.textarea}>
                <TextArea
                  label="Texto"
                  value={getBaseAJDataToForm.tp_credito}
                />
                <ButtonIcon
                  icon={<HiOutlineDocumentDuplicate />}
                  size="medium"
                  ariaLabel="Recarregar Data"
                  onClick={() => console.log('Recarregando...')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.method_analysis__form__controls}>
        <span></span>
        <span>
          <Button
            label="Zerar Formulário"
            variant="outlined"
            onClick={handleClearForm}
          />
          <Button label="Gravar Análise" onClick={handleRecordAnalysis} />
        </span>
      </div>
    </div>
  )
}
