import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../@core/backend/common/services/users.service';
@Component({
  selector: 'scrap-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private router:Router,private usersService:UsersService ) {
    this.GetAllUsersList();
  };

  routeToPage(link) {
    this.router.navigate([link]);
  }

  GetAllUsersList(){
    this.usersService.GetAllUsersList().subscribe(result=>{
      console.log(result, ' - - - -  - -  result 18');
    });
  };
}
