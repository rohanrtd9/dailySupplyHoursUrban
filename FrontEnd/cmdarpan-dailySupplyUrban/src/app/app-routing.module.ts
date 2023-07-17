import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FillEnergyComponent } from './fill-energy/fill-energy.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'fill', component: FillEnergyComponent },
  {path: 'admin',component:AdminComponent},

   // Add a wildcard route for all other requests
   { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
