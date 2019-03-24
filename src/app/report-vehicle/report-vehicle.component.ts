import {Component, Input} from '@angular/core';
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-report-vehicle',
  templateUrl: './report-vehicle.component.html',
  styleUrls: ['./report-vehicle.component.css']
})
export class ReportVehicleComponent {
  @Input() vehicle: Vehicle;
}
