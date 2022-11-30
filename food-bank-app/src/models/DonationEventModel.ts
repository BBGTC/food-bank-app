import Address from './AddressModel'

interface DonationEvent {
  id: string
  address: Address
  title: string
  startDate: Date
  endDate: Date
  startTime: string
  endTime: string
  imageUrl: string
}

export default DonationEvent
