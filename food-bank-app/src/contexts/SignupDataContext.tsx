import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

import { isEmptyString } from '../util'
import { Contributor as ContributorModel } from '../models'

interface SignupDataContextValue {
  isComplete: boolean
  signupData: ContributorModel
  setSignupData: Dispatch<SetStateAction<ContributorModel>>
}

const SignupDataContext = createContext<SignupDataContextValue | null>(null)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const SignupDataProvider = ({ children }: Props): JSX.Element => {
  const [signupData, setSignupData] = useState<ContributorModel>({
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

  const isComplete = useCallback((data: Partial<ContributorModel>): boolean => {
    const {
      name,
      surname,
      phone,
      address
    } = data

    const {
      street,
      neighborhood,
      municipality,
      state,
      zipCode,
      exteriorNumber
    } = address ?? {}

    const requiredFields = [
      name,
      surname,
      phone,
      street,
      neighborhood,
      municipality,
      state,
      zipCode,
      exteriorNumber
    ]

    return requiredFields.every((field = '') => !isEmptyString(field))
  }, [])

  const contextValue = useMemo(() => ({
    isComplete: isComplete(signupData),
    signupData,
    setSignupData
  }), [signupData])

  return (
    <SignupDataContext.Provider value={contextValue}>
      {children}
    </SignupDataContext.Provider>
  )
}

export const useSignupDataContext = (): SignupDataContextValue => {
  const context = useContext(SignupDataContext)

  if (context === null) {
    throw new Error('useSignupDataContext must be used withing an SignupDataProvider')
  }

  return context
}
