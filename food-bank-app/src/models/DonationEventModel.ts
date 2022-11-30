import Address from './AddressModel'

interface DonationEvent {
  address: Address
  place: string
  startDate: Date
  endDate: Date
  startTime: string
  endTime: string
  imageUrl: string
}

export default DonationEvent
