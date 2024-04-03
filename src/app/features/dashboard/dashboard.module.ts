import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../../material-module';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
