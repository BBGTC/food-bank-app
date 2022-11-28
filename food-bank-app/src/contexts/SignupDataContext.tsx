import { createContext, useState } from 'react'
import { Contributor } from '../models'

interface SignupDataContextType {
  contributor: Contributor
}

const SignupDataContext = createContext<SignupDataContextType | null>(null)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const SignupDataProvider = ({ children }: Props): JSX.Element => {
  const [contributor, setContributor] = useState<Contributor>({
    name: '',
    middleName: '',
    surname: '',
    secondSurname: '',
    phone: '',
    rfc: '',
    address: {
      street: '',
      neighborhood: '',
      municipality: '',
      state: '',
      zipCode: '',
      interiorNumber: '',
      exteriorNumber: ''
    }
  })

  const contextValue = {
    contributor
  }

  return (
    <SignupDataContext.Provider value={contextValue}>
      {children}
    </SignupDataContext.Provider>
  )
}
