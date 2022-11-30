interface Donation {
  id?: string
  contributor?: string
  event: string
  date: Date
  basicBasket: string
  fruitsAndVegies: string
  dairy: string
  inedibles: string
  groceries: string
}

export default Donation
