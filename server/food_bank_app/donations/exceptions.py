from rest_framework.exceptions import APIException

class MustBeContributorException(APIException):
    status_code = 400
    default_code = 'user_must_be_contributor'
    default_detail = 'The user must be a contributor'

class Unauthorized(APIException):
    status_code = 400
    default_code = 'unauthorized_contributor'
    default_detail = 'Contributor not authorized'

class DonationNotFound(APIException):
  status_code = 404
  default_code = 'donation_not_found'
  default_detail = 'Donation not found.'

class DonationAlreadyVerified(APIException):
    status_code = 403
    default_code = "donation_already_verified"
    default_detail = "Donation already verified"