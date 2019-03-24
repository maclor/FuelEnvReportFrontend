import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Company} from "../company";
import {CompanyService} from "../company.service";
import {InvoiceService} from "../invoice.service";
import {Invoice} from "../invoice";
import {VehicleService} from "../vehicle.service";
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() company: Company;
  editable: boolean = false;
  invoices: Invoice[];
  vehicles: Vehicle[];

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private location: Location,
              private invoiceService: InvoiceService,
              private vehicleService: VehicleService) {
  }

  ngOnInit() {
    this.getCompanyData();
  }

  getCompanyData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => {
        this.company = company;
        this.getInvoices();
        this.getVehicles();
      })
  }

  private goBack(): void {
    this.location.back();
  }

  save(): void {
    this.editable = false;
    this.companyService.updateCompany(this.company)
      .subscribe(() => this.goBack());
  }

  startEdition(): void {
    this.editable = true;
  }

  cancelEdition(): void {
    this.editable = false;
  }

  private getInvoices(): void {
    this.invoiceService.getInvoicesForCompany(this.company.id)
      .subscribe(invoices => this.invoices = invoices);
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe(vehicles => this.vehicles = vehicles);
  }
}
