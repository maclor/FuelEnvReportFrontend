import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Invoice} from "./invoice";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceUrl = 'api/invoice';

  constructor(private http: HttpClient) {
  }

  addInvoice(invoice: Invoice): Observable<Invoice> {
    console.log(invoice);
    return this.http.post<Invoice>(this.invoiceUrl, invoice, httpOptions).pipe(
      catchError(this.handleError<any>('addInvoice'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
