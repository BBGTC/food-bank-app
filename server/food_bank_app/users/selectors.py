from .models import ContributorData

def select_contributor_data(contributor):
  try:
    object = ContributorData.objects.get(contributor=contributor)
  except ContributorData.DoesNotExist:
    object = None
  return object