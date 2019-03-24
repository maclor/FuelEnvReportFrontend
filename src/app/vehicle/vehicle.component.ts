import {Component, Input} from '@angular/core';
import {Vehicle} from '../Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  @Input() vehicles: Vehicle[];
}
