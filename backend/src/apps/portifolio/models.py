from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Nome")
    specialization = models.CharField(max_length=255, blank=True, null=True, verbose_name="Especialização")
    history = models.TextField(blank=True, null=True, verbose_name="Quem sou eu")

    def __str__(self):
        return str(self.name)

class Contact(models.Model):
    github = models.CharField(max_length=255, blank=True, null=True, verbose_name="Github")
    linkedin = models.CharField(max_length=255, blank=True, null=True, verbose_name="Linkedin")
    whatsapp = models.CharField(max_length=255, blank=True, null=True, verbose_name="Whatsapp")
    email = models.CharField(max_length=255, blank=True, null=True, verbose_name="E-mail")

    def __str__(self):
        return str(self.email)


class Project(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Nome")
    description = models.CharField(max_length=255, blank=True, null=True, verbose_name="Descrição")
    url_repository = models.CharField(max_length=255, blank=True, null=True, verbose_name="URL do repositório")
    url_image = models.CharField(max_length=255, blank=True, null=True, verbose_name="URL da imagem")

    def __str__(self):
        return str(self.name)
