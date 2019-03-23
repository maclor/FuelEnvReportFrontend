import {Component} from '@angular/core';
import {Vehicle} from "../vehicle";
import {VehicleService} from "../vehicle.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent {

  public isCollapsed = true;

  vehicleForm = new FormGroup({
    name: new FormControl(''),
    plate: new FormControl(''),
    owner_id: new FormControl(''),
    allowed_fuel_types: new FormControl(''),
    allowed_overall_weight: new FormControl(''),
    registration_date: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private vehicleService: VehicleService) {
  }

  onSubmit() {
    let vehicle = new Vehicle();
    vehicle = this.vehicleForm.value;
    this.vehicleService.addVehicle(vehicle).subscribe();
  }
}
