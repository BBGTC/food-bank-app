import Donation from "../models/donationModel"

export interface DonationPayload {
  id?: string
  event: string
  date: string
  basic_basket: number
  fruits_and_vegies: number
  dairy: number
  inedibles: number,
  groceries: number,
  contributor: string
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
const donationInwardsAdapter = (data: DonationPayload): Donation => {
    return {
      id: data.id,
      contributor: data.contributor,
      event: data.event,
      date: new Date(data.date),
      basicBasket: data.basic_basket.toString(),
      fruitsAndVegies: data.fruits_and_vegies.toString(),
      dairy: data.dairy.toString(),
      groceries: data.groceries.toString(),
      inedibles: data.inedibles.toString()
    }
}

export default donationInwardsAdapter