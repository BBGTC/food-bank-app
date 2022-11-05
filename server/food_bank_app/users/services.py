from .models import ContributorData

def set_contributor_data(contributor, data):
  object = ContributorData.objects.create(**data, contributor=contributor)
  object.save()
  return object