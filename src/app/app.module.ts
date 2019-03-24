import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {CompanyComponent} from './company/company.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {VehicleComponent} from './vehicle/vehicle.component';
import {VehicleAddComponent} from './vehicle-add/vehicle-add.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InvoiceAddComponent} from './invoice-add/invoice-add.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {DateFormatterComponent} from './date-formatter/date-formatter.component';
import { ReportComponent } from './report/report.component';
import { ReportVehicleComponent } from './report-vehicle/report-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    NgbModule
  ],
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyDetailComponent,
    VehicleComponent,
    VehicleAddComponent,
    InvoiceAddComponent,
    InvoicesComponent,
    DateFormatterComponent,
    ReportComponent,
    ReportVehicleComponent,
    VehicleDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
