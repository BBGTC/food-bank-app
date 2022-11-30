import { Donation } from '../models'

export interface DonationPayload {
  id?: string
  event: string
  date: string
  basic_basket: number
  fruits_and_vegies: number
  dairy: number
  inedibles: number
  groceries: number
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class DonationAdapter {
  public static outwards (data: Donation): DonationPayload {
    return {
      id: data.id,
      event: data.event,
      date: data.date.toISOString(),
      basic_basket: data.basicBasket.trim() === '' ? 0 : parseInt(data.basicBasket),
      fruits_and_vegies: data.fruitsAndVegies.trim() === '' ? 0 : parseInt(data.basicBasket),
      dairy: data.dairy.trim() === '' ? 0 : parseInt(data.dairy),
      inedibles: data.inedibles.trim() === '' ? 0 : parseInt(data.inedibles),
      groceries: data.groceries.trim() === '' ? 0 : parseInt(data.groceries)
    }
  }

  public static inwards (data: DonationPayload): Donation {
    return {
      id: data.id,
      event: data.event,
      date: new Date(data.date),
      basicBasket: data.basic_basket.toString(),
      fruitsAndVegies: data.fruits_and_vegies.toString(),
      dairy: data.dairy.toString(),
      inedibles: data.inedibles.toString(),
      groceries: data.groceries.toString()
    }
  }
}

export default DonationAdapter
