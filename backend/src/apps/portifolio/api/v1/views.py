from django.shortcuts import render
from src.apps.portifolio.api.v1.serializers import ContactSerializer, ProfileSerializer, ProjectSerializer
from src.apps.portifolio.models import Profile, Contact, Project
from rest_framework import viewsets

# Create your views here.
class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
