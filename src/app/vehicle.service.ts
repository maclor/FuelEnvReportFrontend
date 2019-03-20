import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehiclesUrl = 'api/vehicle';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl).pipe(
      catchError(this.handleError('getVehicles', []))
    );
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    console.log(vehicle);
    return this.http.post<Vehicle>(this.vehiclesUrl, vehicle, httpOptions).pipe(
      catchError(this.handleError<any>('addCompany'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
