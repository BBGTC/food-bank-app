from .models import Inventory

def update_category_supply(inventory: Inventory, new_supply: float):
    inventory.supply += new_supply
    inventory.save()
