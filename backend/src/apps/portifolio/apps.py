from email.policy import default
from django.apps import AppConfig


class PortifolioConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'portifolio'
    default = False
