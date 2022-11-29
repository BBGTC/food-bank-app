import { Contributor as ContributorModel } from '../models'

export interface ContributorPayload {
  first_name: string
  middle_name: string
  surname: string
  second_surname: string
  phone: string
  rfc: string | null
  address: {
    street: string
    exterior_number: string
    zip_code: string
    state: string
    municipality: string
    neighborhood: string
    interior_number: string
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
      neighborhood: contributor.address.neighborhood,
      interior_number: contributor.address.interiorNumber
    }
  }
}

export const inwardsContributorAdapter = (contributor: ContributorPayload): ContributorModel => {
  return {
    name: contributor.first_name,
    middleName: contributor.middle_name,
    surname: contributor.surname,
    secondSurname: contributor.second_surname,
    phone: contributor.phone,
    rfc: contributor.rfc,
    address: {
      street: contributor.address.street,
      exteriorNumber: contributor.address.exterior_number,
      interiorNumber: contributor.address.interior_number,
      zipCode: contributor.address.zip_code,
      state: contributor.address.state,
      municipality: contributor.address.municipality,
      neighborhood: contributor.address.neighborhood
    }
  }
}
