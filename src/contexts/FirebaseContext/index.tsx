import React, { createContext, useContext, useState } from 'react'

import { FirebaseContextData, FirebaseProviderProps } from './types'

export const FirebaseContext = createContext<FirebaseContextData>(
  {} as FirebaseContextData
)

const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [data, setData] = useState([])

  return (
    <FirebaseContext.Provider
      value={{
        data
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

function useFirebase(): FirebaseContextData {
  const context = useContext(FirebaseContext)

  if (!context)
    throw new Error('useFirebase must be used within a UserProvider')

  return context
}

export { FirebaseProvider, useFirebase }
