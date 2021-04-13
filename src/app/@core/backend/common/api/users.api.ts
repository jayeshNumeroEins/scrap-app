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
}
