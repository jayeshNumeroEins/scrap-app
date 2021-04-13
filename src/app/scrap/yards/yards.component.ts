import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'scrap-yards',
  templateUrl: './yards.component.html',
  styleUrls: ['./yards.component.scss']
})
export class YardsComponent {

  constructor( private router:Router) {};

  routeToPage(link) {
    this.router.navigate([link]);
  }

}
