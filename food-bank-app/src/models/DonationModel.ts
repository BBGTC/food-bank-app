interface Donation {
  id?: string
  contributor?: string
  event: string
  date: string
  basicBasket: string
  fruitsAndVegies: string
  dairy: string
  inedibles: string
}

export interface DonationPayload {
  id?: string
  event?: string
  contributor?: string
  date: string
  basic_basket: string
  fruits_and_vegies: string
  dairy: string
  inedibles: string
}

export default Donation
