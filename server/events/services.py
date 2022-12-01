from .models import Address, Event

def create_event(data):
    address_data = data.pop('address')
    address = Address.objects.create(**address_data)

    event = Event.objects.create(
        **data,
        address=address
    )

    event.save()

    return event