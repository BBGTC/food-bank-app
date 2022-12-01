from .models import Event

def select_event(pk):
  try:
    event = Event.objects.get(id=pk)
  except Event.DoesNotExist:
    event = None

  return event