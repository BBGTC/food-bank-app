from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authentication.urls')),
    path('contributors/', include('contributors.urls')),
    path('events/', include('events.urls')),
    path('inventory/', include('inventory.urls')),
    path('donations/', include('donations.urls')),
]
