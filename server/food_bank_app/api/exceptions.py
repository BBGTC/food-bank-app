from rest_framework.exceptions import APIException

class ContributorDataNotSetException(APIException):
  status_code = 409
  default_code = 'user_data_not_set'
  default_detail = 'Your user data has not been set yet. Create your user profile and try later.'

class ContributorDataExistsException(APIException):
  status_code = 409
  default_code = 'contributor_data_is_set'
  default_detail = 'Your contributor data has been already been created. You can only update or modify it.'