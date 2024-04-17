import { Routes } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: '/company-list', pathMatch: 'full'},
  {path: 'companies', component: CompanyListComponent, title: 'Bereket | Company List'},
  {path: 'vacancies', component: VacancyListComponent, title: 'Bereket | Vacancy List'},
  {path: 'companies/:id', component: CompanyDetailComponent, title: 'Bereket | Company Detail'},
  {path: 'vacancies/:id', component: VacancyDetailComponent, title: 'Bereket | Vacancy Detail'},
];
