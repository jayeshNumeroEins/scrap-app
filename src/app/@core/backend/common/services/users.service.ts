import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersApi } from '../api/users.api';

@Injectable()
export class UsersService {
  userModel: any;
  constructor(private api: UsersApi, private http: HttpClient) {}

  AdminLogin(data): Observable<any[]> {
    return this.api.AdminLogin(data);
  }
}
