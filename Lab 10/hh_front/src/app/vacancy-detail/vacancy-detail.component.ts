import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models/vacanct.model";
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css'
})
export class VacancyDetailComponent implements OnInit{
  vacancy!: Vacancy

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const vacancyId = Number(params.get('id'))

      this.vacancyService.getVacancyById(vacancyId).subscribe(vacancy => {
        this.vacancy = vacancy
      })
    })
  }


}
