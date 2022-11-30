from .models import Inventory
from datetime import date

def select_inventories_by_date(date):
    try:
        inventories = Inventory.objects.filter(year=date.year, month=date.month)
    except Inventory.DoesNotExist:
        inventories = []

    return inventories

def select_current_month_category(category: str):
    try:
        inventory = Inventory.objects.get(
            year=date.today().year, 
            month=date.today().month,
            category=category)
    except Inventory.DoesNotExist:
        return None
    print(inventory)
    return inventory