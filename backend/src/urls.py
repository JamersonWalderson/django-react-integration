from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from src.apps.portifolio.api.v1.views import ContactViewSet, ProfileViewSet, ProjectViewSet

router = routers.DefaultRouter()
router.register(r'portifolio', ProfileViewSet, basename='Portfolio')
router.register(r'contato', ContactViewSet, basename='Contato')
router.register(r'projetos', ProjectViewSet, basename='Projetos')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]