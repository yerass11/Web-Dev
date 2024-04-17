import {Component, OnInit} from '@angular/core';
import {Company} from "../models/company.model";
import {CompanyService} from "../company.service";
import {NgForOf, NgIf} from "@angular/common";
import {Vacancy} from "../models/vacanct.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies: Company[] = []
  vacancies: Vacancy[] = []
  selectedCompanyId!: number


  constructor(private companyService: CompanyService) {
  }
  ngOnInit(): void {
    this.companyService.getCompany().subscribe((companies)=>{
      this.companies = companies
    })
  }



}
