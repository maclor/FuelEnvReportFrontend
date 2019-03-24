import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Company} from "../company";
import {CompanyService} from "../company.service";
import {InvoiceService} from "../invoice.service";
import {Invoice} from "../invoice";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() company: Company;
  editable: boolean = false;
  invoices: Invoice[];

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private location: Location,
              private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.getCompanyData();
  }

  getCompanyData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => {this.company = company; this.getInvoices();})
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.editable = false;
    this.companyService.updateCompany(this.company)
      .subscribe(() => this.goBack);
  }

  startEdition(): void {
    this.editable = true;
  }

  cancelEdition(): void {
    this.editable = false;
  }

  getInvoices(): void {
    this.invoiceService.getInvoicesForCompany(this.company.id)
      .subscribe(invoices => this.invoices = invoices);
  }
}
