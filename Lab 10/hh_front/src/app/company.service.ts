import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "./models/company.model";
import {Vacancy} from "./models/vacanct.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }


  getCompany(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }

  getCompanyById(id: number): Observable<Company>{
    return this.client.get<Company>(`${this.BASE_URL}/api/companies/${id}/`)
  }

  getVacanciesByCompanyId(id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }




}
