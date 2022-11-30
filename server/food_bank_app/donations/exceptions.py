from rest_framework.exceptions import APIException

class MustBeContributorException(APIException):
    status_code = 400
    default_code = 'user_must_be_contributor'
    default_detail = 'The user must be a contributor'

class Unauthorized(APIException):
    status_code = 400
    default_code = 'unauthorized_contributor'
    default_detail = 'Contributor not authorized'