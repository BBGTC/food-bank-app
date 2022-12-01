from rest_framework.exceptions import APIException

class ContributorNotSetException(APIException):
  status_code = 409
  default_code = 'contributor_not_set'
  default_detail = 'Your profile data has not been set yet. Complete your profile and try later.'

class ContributorExistsException(APIException):
  status_code = 409
  default_code = 'contributor_already_exists'
  default_detail = 'A contributor with this data has already been created. You can only update or modify it'
