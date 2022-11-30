import { Address } from '../models'

export interface AddressPayload {
  street: string
  exterior_number: string
  zip_code: string
  state: string
  municipality: string
  neighborhood: string
  interior_number: string
}

export const addressAdapter = (data: Address): AddressPayload => {
  return {
    street: data.street,
    state: data.state,
    interior_number: data.interiorNumber,
    exterior_number: data.exteriorNumber,
    zip_code: data.zipCode,
    municipality: data.municipality,
    neighborhood: data.neighborhood
  }
}

export const inwardsAddressAdapter = (data: AddressPayload): Address => {
  return {
    street: data.street,
    state: data.state,
    interiorNumber: data.interior_number,
    exteriorNumber: data.exterior_number,
    zipCode: data.zip_code,
    municipality: data.municipality,
    neighborhood: data.neighborhood
  }
}
