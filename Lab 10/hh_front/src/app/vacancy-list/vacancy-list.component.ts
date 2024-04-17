import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models/vacanct.model";
import {VacancyService} from "../vacancy.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit{
  vacancies!: Vacancy[]
  topTenVacancies!: Vacancy[]

  constructor(private vacancyService: VacancyService) {
  }
  ngOnInit(){
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies
    })
  }

  loadTopten(){
    this.vacancyService.getTopTenVacancies().subscribe(topTenVacancies => {
      this.topTenVacancies = topTenVacancies
    })
  }
}
