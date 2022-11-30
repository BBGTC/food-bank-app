import { DonationEvent as EventModel } from '../models'
import { addressAdapter, inwardsAddressAdapter, AddressPayload } from './addressAdapter'

export interface EventPayload {
  id: string
  title: string
  start_date: string
  end_date: string
  start_time: string
  end_time: string
  address: AddressPayload
  image_url: string
}
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class EventAdapter {
  public static outwards (data: EventModel): EventPayload {
    return {
      id: data.id,
      title: data.title,
      start_date: data.startDate.toDateString(),
      end_date: data.endDate.toDateString(),
      start_time: data.startTime,
      end_time: data.endTime,
      image_url: data.imageUrl,
      address: addressAdapter(data.address)
    }
  }

  public static inwards (data: EventPayload): EventModel {
    return {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      startDate: new Date(data.start_date),
      endDate: new Date(data.end_date),
      startTime: data.start_time,
      endTime: data.end_time,
      address: inwardsAddressAdapter(data.address)
    }
  }
}

export default EventAdapter
