import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {CompanyComponent} from './company/company.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {VehicleAddComponent} from './vehicle-add/vehicle-add.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InvoiceAddComponent} from './invoice-add/invoice-add.component';

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
    DashboardComponent,
    VehicleComponent,
    VehicleAddComponent,
    InvoiceAddComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
