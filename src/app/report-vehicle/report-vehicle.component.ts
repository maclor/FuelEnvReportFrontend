import {Component, Input} from '@angular/core';
import {Vehicle} from "../vehicle";
import {InvoicePosition} from "../invoice-position";

@Component({
  selector: 'app-report-vehicle',
  templateUrl: './report-vehicle.component.html',
  styleUrls: ['./report-vehicle.component.css']
})
export class ReportVehicleComponent {
  @Input() vehicle: Vehicle;
  @Input() invoicePositions: InvoicePosition[];

  getSumOfFuel(): number {
    let sum = 0;
    this.invoicePositions.forEach(position => sum = sum + position.quantity);
    return sum;
  }
}
