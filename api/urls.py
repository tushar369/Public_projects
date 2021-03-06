from django.urls import path
from .api import *

urlpatterns = [
    path('register', RegisterUserAPI.as_view(), name='register'),
    path('login', LoginAPI.as_view(), name='login'),
    path('user', GetUserAPI.as_view(), name='get_user'),
]