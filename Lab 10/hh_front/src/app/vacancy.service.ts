import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models/vacanct.model";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) {

  }

  getVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`)
  }

  getVacancyById(id: number): Observable<Vacancy>{
    return this.client.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`)
  }

  getTopTenVacancies(){
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten/`)
  }

}
