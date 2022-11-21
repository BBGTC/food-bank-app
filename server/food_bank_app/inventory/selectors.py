from .models import Inventory

def select_inventories_by_date(date):
    try:
        inventories = Inventory.objects.filter(year=date.year, month=date.month)
    except Inventory.DoesNotExist:
        inventory = None

    return inventories

