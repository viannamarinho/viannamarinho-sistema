import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { baseAJData } from '@/data/bases/baseAJ'
import { mockQuestions } from '@/data/chatbot'

type Message = {
  content: string
  isUser: boolean
  isFinalQuestion: boolean
  select?: any
  finalQuestionObject?: any
}

interface MethodAnalysisContextData {
  getBaseAJDataToForm: any
  messages: Message[]
  handleSendMessage: (content: string) => void
  chatEnded: boolean
  restartChat: () => void
  isFirstMessage: boolean
  isMessageMenuActive: boolean
}

interface MethodAnalysisProviderProps {
  children: React.ReactNode
}

export const MethodAnalysisContext = createContext<MethodAnalysisContextData>(
  {} as MethodAnalysisContextData
)

const initialMessages: Message[] = [
  {
    content: 'Olá! Bem-vindo ao chat.',
    isUser: false,
    isFinalQuestion: false
  }
]

const MethodAnalysisProvider = ({ children }: MethodAnalysisProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentQuestionId, setCurrentQuestionId] = useState('')
  const [chatEnded, setChatEnded] = useState(false)

  const [isMessageMenuActive, setIsMessageMenuActive] = useState(false)

  const handleSendMessage = (content: string) => {
    if (chatEnded) return

    const newMessage: Message = {
      content,
      isUser: true,
      isFinalQuestion: false
    }

    const currentQuestion: any = mockQuestions.find(
      (question) => question.id === currentQuestionId
    )

    if (currentQuestion) {
      const { options, select, isFinalQuestion } = currentQuestion

      if (isFinalQuestion) return

      const selectedOption = isMessageMenuActive
        ? select?.find(
            (select: any) =>
              select.value.toLowerCase() === content.toLowerCase()
          )
        : options?.find(
            (option: any) =>
              option.value.toLowerCase() === content.toLowerCase()
          )

      if (selectedOption) {
        const nextQuestionId = selectedOption.nextQuestion

        const nextQuestion = mockQuestions.find(
          (question) => question.id === nextQuestionId
        )

        if (nextQuestion) {
          setMessages((prevMessages) => [
            ...prevMessages,
            newMessage,
            {
              content: nextQuestion.content.toString(),
              isUser: false,
              select: nextQuestion.select,
              finalQuestionObject: nextQuestion.finalMessageObject,
              isFinalQuestion: nextQuestion.isFinalQuestion
            }
          ])

          setCurrentQuestionId(nextQuestion.id)

          if (nextQuestion.select) {
            setIsMessageMenuActive(true)
          } else {
            setIsMessageMenuActive(false)
          }

          if (nextQuestion.isFinalQuestion) {
            setChatEnded(true)
          }
        } else {
          setMessages((prevMessages) => [...prevMessages, newMessage])
        }
      }
    }
  }

  const restartChat = () => {
    setMessages(initialMessages)
    setCurrentQuestionId('0')
    setChatEnded(false)
  }

  const isFirstMessage = useMemo(() => {
    return currentQuestionId === '0'
  }, [currentQuestionId])

  const getBaseAJDataToForm = useMemo(() => {
    return baseAJData[0]
  }, [])

  useEffect(() => {
    restartChat()
  }, [])

  return (
    <MethodAnalysisContext.Provider
      value={{
        getBaseAJDataToForm,
        messages,
        handleSendMessage,
        chatEnded,
        restartChat,
        isFirstMessage,
        isMessageMenuActive
      }}
    >
      {children}
    </MethodAnalysisContext.Provider>
  )
}

function useMethodAnalysis(): MethodAnalysisContextData {
  const context = useContext(MethodAnalysisContext)

  if (!context)
    throw new Error('useMethodAnalysis must be used within a UserProvider')

  return context
}

export { MethodAnalysisProvider, useMethodAnalysis }
