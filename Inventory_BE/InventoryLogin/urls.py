from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, custom_login

urlpatterns = [
    path('login/', custom_login, name='custom_login'),
]

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
urlpatterns += router.urls

# urlpatterns = [
#     path('', views.login_view, name='login_view'),
# ]
