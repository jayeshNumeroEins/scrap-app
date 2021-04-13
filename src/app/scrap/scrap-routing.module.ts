import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScrapComponent } from './scrap.component';
import { DashboardComponent  } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { YardsComponent } from './yards/yards.component';
const routes: Routes = [
    {
      path: '',
      component: ScrapComponent,
      children: [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch:'full'
        },
        {
          path: 'dashboard',
          component:DashboardComponent
        },
        {
          path: 'users',
          component:UsersComponent
        },
        {
          path: 'yards',
          component:YardsComponent
        },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ScrapMainRoutingModule {}
