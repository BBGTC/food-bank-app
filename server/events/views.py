from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .models import Event
from .selectors import select_event
from .serializers import EventSerializer
from .exceptions import EventNotFound
from .services import create_event

class EventViewSet(ViewSet):
   
    def retrieve(self, request, pk):
        event = select_event(pk=pk)
      
        if event is None:  
            raise EventNotFound()
      
        serializer = EventSerializer(event)
        
        return Response(serializer.data)
    
    def retrieve_list(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)

        return Response(serializer.data)

    def create(self, request):

        serializer = EventSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        create_event(serializer.data)

        return Response(serializer.data)
    