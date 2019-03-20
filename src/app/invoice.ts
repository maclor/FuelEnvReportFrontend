import {InvoicePosition} from "./invoice-position";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export class Invoice {
  id: number;
  company_id: number;
  date: NgbDateStruct;
  number: string;
  positions: InvoicePosition[];
}
