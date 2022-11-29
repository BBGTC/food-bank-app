import { Contributor as ContributorModel } from '../models'

interface ContributorPayload {
  first_name: string
  middle_name: string
  surname: string
  second_surname: string
  phone: string
  rfc: string
  address: {
    street: string
    exterior_number: string
    zip_code: string
    state: string
    municipality: string
    neighborhood: string
  }
}

export const contributorAdapter = (contributor: ContributorModel): ContributorPayload => {
  return {
    first_name: contributor.name,
    middle_name: contributor.middleName,
    surname: contributor.surname,
    second_surname: contributor.secondSurname,
    phone: contributor.phone,
    rfc: contributor.rfc,
    address: {
      street: contributor.address.street,
      exterior_number: contributor.address.exteriorNumber,
      zip_code: contributor.address.zipCode,
      state: contributor.address.state,
      municipality: contributor.address.municipality,
      neighborhood: contributor.address.neighborhood
    }
  }
}
