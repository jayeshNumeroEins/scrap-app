import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'scrap-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private router:Router) {};

  routeToPage(link) {
    this.router.navigate([link]);
  }
}
