import { Component , ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../@core/backend/common/services/users.service';
import * as _ from 'underscore';

@Component({
  selector: 'scrap-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  UsersList:any;
  constructor(private router:Router,private usersService:UsersService , private ref: ChangeDetectorRef) {
    this.UsersList = [];
    this.GetAllUsersList();
  };

  routeToPage(link) {
    this.router.navigate([link]);
  }

  GetAllUsersList(){
    this.usersService.GetAllUsersList().subscribe(result=>{
      if(result.status &&  result.status ==  'success') {
        this.UsersList =  _.where(result.data,{type:'user'});
        this.ref.markForCheck();
      }
    });
  };
}
