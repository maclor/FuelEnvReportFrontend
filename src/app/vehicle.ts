import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export class Vehicle {
  id: number;
  owner_id: number;
  name: string;
  plate: string;
  allowed_fuel_types: string[];
  registration_date: NgbDateStruct;
  allowed_overall_weight: number;
  type: string;
}
