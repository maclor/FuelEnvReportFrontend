import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Vehicle';
import { Observable } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.vehicleService.getVehicles();
  }
}
