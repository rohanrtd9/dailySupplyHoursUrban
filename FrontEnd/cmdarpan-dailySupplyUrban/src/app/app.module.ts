import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FillEnergyComponent } from './fill-energy/fill-energy.component';
import { AdminComponent } from './admin/admin.component';
import { EditScheduledSupplyComponent } from './edit-scheduled-supply/edit-scheduled-supply.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FillEnergyComponent,
    AdminComponent,
    EditScheduledSupplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
