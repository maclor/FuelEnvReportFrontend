import {Component, Input} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-date-formatter',
  template: `
    <span>{{getDay()}}-{{getMonth()}}-{{date.year}}</span>
  `
})
export class DateFormatterComponent {
  @Input() date: NgbDateStruct;

  getDay(): string {
    const day = this.date.day;
    if (day < 10) {
      return '0' + day;
    }
    return '' + day;
  }

  getMonth(): string {
    const month = this.date.month;
    if (month < 10) {
      return '0' + month;
    }
    return '' + month;
  }
}
