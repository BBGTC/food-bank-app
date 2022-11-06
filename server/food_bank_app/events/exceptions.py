from rest_framework.exceptions import APIException

class EventNotFound(APIException):
  status_code = 404
  default_code = 'event_not_found'
  default_detail = 'Event not found.'
