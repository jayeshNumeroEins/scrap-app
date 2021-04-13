import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import  { ApiService } from '../services/api.service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UsersApi {
  url : any;
  token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGM2YWE3NmEwMWNkMWUwMjNiMDY2NSIsInVzZXJuYW1lIjoidW5kZWZpbmVkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA4OTYyNzEyfQ.B_DSG9J4wBNcw3EgyXIis7-V8KJGXolNYcfQDbGsOeo";
  private readonly apiController: string = 'users';

  constructor(private api: HttpService, private http: HttpClient,private apiService: ApiService) {
    this.url = apiService.url+'users/';
   }

   AdminLogin(data): Observable<any> {
    let url = this.url + 'login/admin';
    return this.http.post(url, data).pipe(map(result => {
      return result;
    }));
  };

  GetAllUsersList(): Observable<any> {
    let url = this.url + 'get-all-users';
    return this.http.get(url,{ headers: new HttpHeaders({'token':this.token})}).pipe(map(result => {
      return result;
    }));
  };
}
