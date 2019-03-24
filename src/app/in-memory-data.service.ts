import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Company} from "./company";
import {Vehicle} from "./Vehicle";
import {Invoice} from "./invoice";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let company = [
      {id: 1, name: "Maciej Lorenc SoftTest"},
      {id: 2, name: "BRK"},
      {id: 3, name: "Ekopiek"},
      {id: 4, name: "CeDo"},
      {id: 5, name: "Schneider"},
      {id: 6, name: "Mechanika Pojazdowa"},
      {id: 7, name: "Piekarnia Bąkowski"},
      {id: 8, name: "Kama"},
      {id: 9, name: "Schavmaker"},
      {id: 10, name: "Torf Company"},
      {id: 11, name: "Jeronimo Mantis"},
    ];
    let vehicle = [
      {id: 1, owner_id: 1, name: "Renault Megane", plate: "DW577A", allowed_fuel_types: ["ON"], allowed_overall_weight: 1700, type: "car", registration_date: {day: 11, month: 11, year: 2018}},
      {id: 2, owner_id: 1, name: "Renault Koleos", plate: "DW5A564", allowed_fuel_types: ["Pb"], allowed_overall_weight : 1450, type: "car", registration_date: {day: 11, month: 11, year: 2018}},
      {id: 3, owner_id: 2, name: "VW Golf", plate: "DW3457", allowed_fuel_types: ["LPG", "Pb"], allowed_overall_weight: 2050, type: "car", registration_date: {day: 11, month: 11, year: 2018}},
      {id: 4, owner_id: 3, name: "MAN", plate: "WA432532", allowed_fuel_types: ["ON"], allowed_overall_weight: 1560, type: "car", registration_date: {day: 11, month: 11, year: 2018}},
    ];
    let invoice = [
      {id: 1, company_id: 1, date: {day: 30, month: 12, year: 2018}, number: "FV 12/12/2018", positions: [
          {date: {day: 21, month: 1, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 35},
          {date: {day: 14, month: 2, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 36},
          {date: {day: 11, month: 3, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 37},
          {date: {day: 16, month: 4, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 38},
          {date: {day: 30, month: 4, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 39},
          {date: {day: 23, month: 5, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 40},
          {date: {day: 4, month: 6, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 44},
          {date: {day: 5, month: 7, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 43},
          {date: {day: 1, month: 8, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 36},
          {date: {day: 13, month: 9, year: 2018}, vehicle_id: 1, fuel_type: "ON", quantity: 31}
      ]},
      {id: 2, company_id: 1, date: {day: 11, month: 11, year: 2018}, number: "FV 12/13/2018", positions: [
          {date: {day: 23, month: 1, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 35},
          {date: {day: 24, month: 2, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 36},
          {date: {day: 19, month: 3, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 37},
          {date: {day: 16, month: 4, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 38},
          {date: {day: 13, month: 4, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 39},
          {date: {day: 15, month: 5, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 40},
          {date: {day: 23, month: 6, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 44},
          {date: {day: 16, month: 7, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 43},
          {date: {day: 14, month: 8, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 36},
          {date: {day: 30, month: 9, year: 2018}, vehicle_id: 2, fuel_type: "Pb", quantity: 31}
        ]}
    ];
    return {'company': company, 'vehicle': vehicle, 'invoice': invoice};
  }

  genId<T extends Company | Vehicle | Invoice>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
