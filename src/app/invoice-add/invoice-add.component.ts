import {Component, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../company";
import {VehicleService} from "../vehicle.service";
import {Vehicle} from "../vehicle";
import {merge, Observable, Subject} from "rxjs";
import {NgbDateStruct, NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {InvoicePosition} from "../invoice-position";
import {Invoice} from "../invoice";

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  companies: Company[];
  vehicles: Vehicle[];

  invoice: Invoice = new Invoice();

  positionVehicle: Vehicle;
  positionDate: NgbDateStruct;
  positionFuelType: string;
  positionQuantity: number;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  constructor(private companyService: CompanyService, private vehicleService: VehicleService) {
  }

  ngOnInit() {
    this.getCompanies();
    this.getVehicles()
  }

  private getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  searchVehicle = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => term === '' ? this.vehicles
        : this.vehicles.filter(v => v.plate.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  };

  formatter = (x: { plate: string }) => x.plate;

  addPosition(): void {
    if (this.isPositionValid()) {
      return;
    }
    let invoicePosition: InvoicePosition = new InvoicePosition(this.positionDate, this.positionVehicle.id, this.positionFuelType, this.positionQuantity);
    if (!this.invoice.positions) {
      this.invoice.positions = [];
    }
    this.invoice.positions.push(invoicePosition);
    this.positionQuantity = null;
  }

  getVehicle(id: number): Vehicle {
    return this.vehicles.find(v => v.id === id);
  }

  isPositionValid(): boolean {
    return !this.positionDate || !this.positionQuantity || !this.positionVehicle || !this.positionFuelType;
  }

  isInvoiceValid(): boolean {
    return this.shouldHidePositions() || !this.invoice.positions || this.invoice.positions.length < 1;
  }

  shouldHidePositions(): boolean {
    return !this.invoice.company_id || !this.invoice.date || !this.invoice.number;
  }
}
