# models.py

from django.db import models


class Company(models.Model):
    city = models.CharField(max_length=255)
    description = models.TextField()
    name = models.CharField(max_length=255)
    address = models.TextField()

    class Meta:
        verbose_name_plural = "Companies"

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Vacancies"

    def __str__(self):
        return self.name
