from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='home'),
    path('login/', index, name='login'),
    path('user/', index, name='user')
]