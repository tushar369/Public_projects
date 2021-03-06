from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import *


# Register API
class RegisterUserAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer


    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        user_data = UserSerializer(user, context=self.get_serializer_context()).data
        token = str(Token.objects.create(user=user))
        return Response({'user': user_data, 'token': token})



# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = Token.objects.get_or_create(user=user)[0]
        token = str(token) 
        return Response({'user': UserSerializer(user, context=self.get_serializer_context()).data,
         'token': token})



# Get-User API
class GetUserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
    

    def get_object(self):
        return self.request.user


