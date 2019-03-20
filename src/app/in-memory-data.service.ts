import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Company} from "./company";
import {Vehicle} from "./Vehicle";

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
      {id: 1, owner_id: 1, name: "Renault Megane", plate: "DW577A", allowed_fuel_types: [ "ON" ]},
      {id: 2, owner_id: 1, name: "Renault Koleos", plate: "DW5A564", allowed_fuel_types: [ "Pb" ]},
      {id: 3, owner_id: 2, name: "VW Golf", plate: "DW3457", allowed_fuel_types: [ "LPG",  "Pb"]},
      {id: 4, owner_id: 3, name: "MAN", plate: "WA432532", allowed_fuel_types: [ "ON" ]},
    ];
    return {'company': company, 'vehicle': vehicle};
  }

  genId<T extends Company | Vehicle>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
