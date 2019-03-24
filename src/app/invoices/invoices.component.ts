import {Component, Input} from '@angular/core';
import {Invoice} from "../invoice";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {

  @Input() invoices: Invoice[];

  areInvoices(): boolean {
    return this.invoices && this.invoices.length > 0;
  }
}
