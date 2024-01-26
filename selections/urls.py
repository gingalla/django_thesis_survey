from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('selections/', views.selections, name='selections'),
    path('process-image_selection/', process_image_selection, name='process_image_selection'),
]
