from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, views
from rest_framework.request import Request
from rest_framework.response import Response

from contributors.selectors import select_contributor
from .exceptions import DonationNotFound
from .serializers import DonationSerializer
from .selectors import select_donation, select_donations_by_contributor
from .models import Donation
from .services import verify_donation
from inventory.selectors import select_current_month_category
from inventory.services import update_category_supply
from .exceptions import MustBeContributorException, Unauthorized, DonationAlreadyVerified

class VerifyDonation(views.APIView):
    permission_classes = IsAuthenticated,
    def post(self, request: Request, donation_id):
        if not request.user.is_superuser:
            raise Unauthorized()
        
        donation: Donation = select_donation(donation_id)
        
        if  donation.is_verified:
            return Response('Donation verified successfully')
        
        basic_basket= select_current_month_category('BB')
        fruits_and_vegies = select_current_month_category('FV')
        dairy = select_current_month_category('DA')
        inedibles = select_current_month_category('IE')
        groceries = select_current_month_category('GR')

        update_category_supply(basic_basket, donation.basic_basket)
        update_category_supply(fruits_and_vegies, donation.fruits_and_vegies)
        update_category_supply(dairy, donation.dairy)
        update_category_supply(inedibles, donation.inedibles)
        update_category_supply(groceries, donation.groceries)

        verify_donation(donation=donation)
        return Response('Donation verified successfully')

class DonationViewSet(viewsets.ModelViewSet):

    permission_classes = IsAuthenticated,
    serializer_class = DonationSerializer

    def create(self, request: Request):
        
        contributor = select_contributor(request.user)
        if contributor is None:
            raise MustBeContributorException()

        request.data['contributor'] = contributor

        serializer = DonationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        serializer.save()
        return Response(serializer.data)

    def update(self, request: Request):

        contributor = select_contributor(request.user)

        if contributor is None:
            raise MustBeContributorException()
        
        donation: Donation = select_donation(request.data['id'])

        if donation.contributor != contributor:
            raise Unauthorized()

        if donation.is_verified:
            raise DonationAlreadyVerified()
            
        serializer = DonationSerializer(instance=donation, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def retrieve(self, request, pk):
        donation = select_donation(pk)
      
        if donation is None:  
            raise(DonationNotFound)
      
        serializer = DonationSerializer(donation)
        
        return Response(serializer.data)
    
    def list(self, request: Request):
        contributor = select_contributor(request.user)
        donations = select_donations_by_contributor(contributor)
        serializer = DonationSerializer(donations, many=True)
        return Response(serializer.data)