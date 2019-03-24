import {Component, Input} from '@angular/core';
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  @Input() vehicle: Vehicle;
}
