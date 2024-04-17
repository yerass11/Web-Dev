# urls.py

from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
]
