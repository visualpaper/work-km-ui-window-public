'use client'

import { FC, ReactNode, createContext, useState } from "react"

export const Case2Context = createContext(
  {} as {
    isSuccess: boolean
    setIsSuccess: (isSuccess: boolean) => void
  },
)

interface Case2ContextProviderProps {
  children: ReactNode
}

export const Case2ContextProvider: FC<Case2ContextProviderProps> = ({
  children,
}: Case2ContextProviderProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  return (
    <Case2Context.Provider
      value={{
        isSuccess,
        setIsSuccess
      }}
    >
      {children}
    </Case2Context.Provider>
  )
}
