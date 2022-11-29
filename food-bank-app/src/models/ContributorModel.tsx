import Address from './AddressModel'

interface Contributor {
  [key: string]: string | Address
  address: Address
  name: string
  middleName: string
  surname: string
  secondSurname: string
  phone: string
  rfc: string
}

export default Contributor
