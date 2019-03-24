import {Component} from '@angular/core';
import {Vehicle} from "../vehicle";
import {VehicleService} from "../vehicle.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyService} from "../company.service";
import {Company} from "../company";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent {

  public isCollapsed = true;
  public companies: Company[];

  vehicleForm = new FormGroup({
    name: new FormControl(''),
    plate: new FormControl(''),
    owner_id: new FormControl(''),
    allowed_fuel_types: new FormControl(''),
    allowed_overall_weight: new FormControl(''),
    registration_date: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private vehicleService: VehicleService, private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  onSubmit(): void {
    let vehicle = new Vehicle();
    vehicle = this.vehicleForm.value;
    this.isCollapsed = true;
    this.vehicleService.addVehicle(vehicle).subscribe();
  }

  private getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }
}
