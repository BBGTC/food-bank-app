from .models import Contributor

def select_contributor(user):
  try:
    contributor = Contributor.objects.get(user=user)
  except Contributor.DoesNotExist:
    contributor = None

  return contributor
