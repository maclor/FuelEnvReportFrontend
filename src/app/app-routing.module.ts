import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {InvoiceAddComponent} from "./invoice-add/invoice-add.component";
import {VehicleAddComponent} from "./vehicle-add/vehicle-add.component";
import {ReportComponent} from "./report/report.component";

const routes: Routes = [
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: 'companies', component: CompanyComponent},
  {path: 'company/:id', component: CompanyDetailComponent},
  {path: 'vehicle/add', component: VehicleAddComponent},
  {path: 'invoice/add', component: InvoiceAddComponent},
  {path: 'report/:companyId', component: ReportComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
