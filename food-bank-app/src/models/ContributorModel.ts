import Address from './AddressModel'

interface Contributor {
  [key: string]: string | Address | null
  address: Address
  name: string
  middleName: string
  surname: string
  secondSurname: string
  phone: string
  rfc: string | null
  email: string
}

export default Contributor
