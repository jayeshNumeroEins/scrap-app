import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'scrap-side-bar-root',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {
  constructor (private router:Router ) {};

  routeToPage(link) {
    this.router.navigate([link]);
  }
}
