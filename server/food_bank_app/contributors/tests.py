from django.test import TestCase

from .models import Contributor, User

class GetFullNameTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create(email="me@email.com", username="me@email.com")

    def test_contributor_with_all_names(self):
        contributor = Contributor.objects.create(
                user = self.user,
                first_name="Benito",
                middle_name="Antonio",
                surname="Martinez",
                second_surname="Ocasio"
        )

        self.assertEqual(contributor.get_full_name(), "Benito Antonio Martinez Ocasio")

    def test_contributor_with_no_middle_name(self):
        contributor = Contributor.objects.create(
                user = self.user,
                first_name="Francisco",
                surname="Gabilondo",
                second_surname="Soler"
        )

        self.assertEqual(contributor.get_full_name(), "Francisco Gabilondo Soler")

    def test_contributor_with_no_second_surname(self):
        contributor = Contributor.objects.create(
                user = self.user,
                first_name="Jose",
                middle_name="Maria",
                surname="Napoleon"
        )

        self.assertEqual(contributor.get_full_name(), "Jose Maria Napoleon")

    def test_contributor_with_no_middle_name_and_no_second_surname(self):
        contributor = Contributor.objects.create(
                user = self.user,
                first_name="John",
                surname="Doe",
        )

        self.assertEqual(contributor.get_full_name(), "John Doe")

