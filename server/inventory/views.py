from datetime import datetime
from operator import attrgetter
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .selectors import select_inventories_by_date
from .serializers import InventorySerializer

class InventoryViewSet(ViewSet):
    permission_classes = IsAuthenticated,

    def _add_urgency(self, category_inventory):
        demand = category_inventory["demand"]
        supply = category_inventory["supply"]

        if supply >= demand:
            category_inventory["urgency"] = 1.0
        else:
            category_inventory["urgency"] = round(supply/demand, 2)

        return category_inventory

    def retrieve(self, request):
        inventories = select_inventories_by_date(datetime.now())

        serializer = InventorySerializer(inventories, many=True)

        inventories_with_urgency = list(map(self._add_urgency, serializer.data))
        sorted_inventories_with_urgency = sorted(inventories_with_urgency, key=lambda i: i['urgency'])

        return Response(sorted_inventories_with_urgency)

