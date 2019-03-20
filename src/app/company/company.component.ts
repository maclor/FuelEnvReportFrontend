import {Component, OnInit} from '@angular/core';
import {Company} from "../company";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.companyService.addCompany({name} as Company).subscribe(company => {this.companies.push(company)});
  }

  delete(company: Company): void {
    this.companies = this.companies.filter(c => c !== company);
    this.companyService.delete(company);
  }
}
