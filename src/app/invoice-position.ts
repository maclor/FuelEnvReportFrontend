import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export class InvoicePosition {
  date: NgbDateStruct;
  vehicle_id: number;
  fuel_type: string;
  quantity: number;

  constructor(date: NgbDateStruct, vehicle_id: number, fuel_type: string, quantity: number) {
    this.date = date;
    this.vehicle_id = vehicle_id;
    this.fuel_type = fuel_type;
    this.quantity = quantity;
  }
}
