from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from src.apps.portifolio.api.v1.views import ContactViewSet, ProfileViewSet, ProjectViewSet
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'portifolio', ProfileViewSet, basename='Portfolio')
router.register(r'contato', ContactViewSet, basename='Contato')
router.register(r'projetos', ProjectViewSet, basename='Projetos')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]