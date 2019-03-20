import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Company} from "./company";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesUrl = 'api/company';

  constructor(private http: HttpClient) {
  }

  delete(company: Company): Observable<Company> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this.companiesUrl}/${id}`;

    return this.http.delete<Company>(url, httpOptions).pipe(
      catchError(this.handleError<any>('updateCompany'))
    );
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companiesUrl, company, httpOptions).pipe(
      catchError(this.handleError<any>('addCompany'))
    );
  }

  updateCompany(company: Company): Observable<any> {
    return this.http.put(this.companiesUrl, company, httpOptions).pipe(
      catchError(this.handleError<any>('updateCompany'))
      );
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl).pipe(
      catchError(this.handleError('getCompanies', []))
    );
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get<Company>(url).pipe(
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
