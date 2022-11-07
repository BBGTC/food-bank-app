from .models import Address, Contributor

def create_contributor(associated_user, data):
    address_data = data.pop('address')
    address = Address.objects.create(**address_data)

    contributor = Contributor.objects.create(
        **data,
        address=address,
        user=associated_user
    )
    contributor.save()

    return contributor