import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapMainRoutingModule } from './scrap-routing.module';
import  { NavBarComponent } from '../layout/navbar/navbar.component';
import { SideBarComponent } from '../layout/sidebar/sidebar.component';
import {ScrapComponent }  from './scrap.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { YardsComponent } from './yards/yards.component';

const Components = [
  ScrapComponent,
  NavBarComponent,
  SideBarComponent,
  DashboardComponent,
  UsersComponent,
  YardsComponent
];

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    ScrapMainRoutingModule
  ],
  providers: [],
  bootstrap: Components
})
export class ScrapAppModule { }
