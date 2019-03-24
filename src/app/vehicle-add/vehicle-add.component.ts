import {Component, Input} from '@angular/core';
import {Vehicle} from "../vehicle";
import {VehicleService} from "../vehicle.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../company.service";
import {Company} from "../company";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent {
  public companies: Company[];
  companyId: number;

  vehicleForm = new FormGroup({
    name: new FormControl('', Validators.required),
    plate: new FormControl('', Validators.required),
    owner_id: new FormControl('', Validators.required),
    allowed_fuel_types: new FormControl('', Validators.required),
    allowed_overall_weight: new FormControl('', Validators.required),
    registration_date: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  constructor(private vehicleService: VehicleService,
              private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.companyId = +this.route.snapshot.queryParamMap.get('companyId');
    if (!this.companyId) {
      this.getCompanies();
    } else {
      this.companyService.getCompany(this.companyId)
        .subscribe(company => {
          this.companies = [];
          this.companies.push(company)
        });
      this.vehicleForm.controls['owner_id'].setValue(this.companyId);
      this.vehicleForm.controls['owner_id'].disable();
    }
  }

  onSubmit(): void {
    let vehicle = new Vehicle();
    vehicle = this.vehicleForm.value;
    // dirty hack
    if (this.companyId) {
      vehicle.owner_id = this.companyId;
    }
    // end of dirty hack
    this.vehicleService.addVehicle(vehicle)
      .subscribe(() => this.router.navigateByUrl('company/'+ this.companyId));
  }

  private getCompanies(): void {
    this.companyService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }
}
