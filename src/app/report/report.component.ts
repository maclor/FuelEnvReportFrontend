import {Component, OnInit} from '@angular/core';
import {Company} from "../company";
import {Vehicle} from "../vehicle";
import {Invoice} from "../invoice";
import {InvoicePosition} from "../invoice-position";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {InvoiceService} from "../invoice.service";
import {VehicleService} from "../vehicle.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  company: Company;
  vehicles: Vehicle[];
  invoices: Invoice[];
  isDataGenerated: boolean = false;
  invoicePositions: InvoicePosition[] = [];

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private invoiceService: InvoiceService,
              private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    const companyId = +this.route.snapshot.paramMap.get('companyId');
    this.companyService.getCompany(companyId)
      .subscribe(company => {
        this.company = company;
        this.getInvoices();
        this.getVehicles();
      });
  }

  private getInvoices(): void {
    this.invoiceService.getInvoicesForCompany(this.company.id)
      .subscribe(invoices => this.invoices = invoices);
  }

  private getVehicles(): void {
    this.vehicleService.getVehiclesByCompanyId(this.company.id)
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  generateReport() {
    this.invoices.forEach(invoice => this.invoicePositions = this.invoicePositions.concat(invoice.positions));
    this.isDataGenerated = true;
  }
}
