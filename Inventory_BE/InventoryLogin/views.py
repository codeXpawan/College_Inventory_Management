from django.http import JsonResponse
from .models import User
from rest_framework import viewsets
from .serializer import UserSerializer
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from rest_framework.response import Response

def login_view(request):
    users = User.objects.values()  # Converts queryset to list of dicts
    return JsonResponse(list(users), safe=False)

class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ['post']
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
@api_view(['POST'])
def custom_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    print(f"Username: {email}, Password: {password}")

    user = authenticate(request, email=email, password=password)

    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful', 'user_id': user.id})
    else:
        return Response({'error': 'Invalid credentials'}, status=400)