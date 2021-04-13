import { Component } from '@angular/core';
import  { UsersService } from '../@core/backend/common/services/users.service';
@Component({
  selector: 'scrap-login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userObj = {
    email:'',
    password:''
  };
  constructor(private usersService: UsersService ) {};

  AdminLogin() {
    console.log(this.userObj, ' - - - - - 16');
    this.usersService.AdminLogin(this.userObj).subscribe(result=> {
      console.log(result, ' - - - - - result');
    });
  };
}
