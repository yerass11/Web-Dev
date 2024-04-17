import {Component, OnInit} from '@angular/core';
import {Company} from "../models/company.model";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit{
  company!: Company

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const companyId = Number(params.get('id'))

      this.companyService.getCompanyById(companyId).subscribe(company => {
        this.company = company
      })
    })
  }

}
