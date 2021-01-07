import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';


@Injectable()
export class LoginServiceService {
  private loginFormUrl="http://localhost:8080/auth/login";


  constructor(private http:HttpClient) { }

  getLoginForm(json): Observable<any>{
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json; charset=utf-8')
      let options = {
        headers: httpHeaders
      }
    
  return this.http.post<any>(this.loginFormUrl, JSON.stringify(json), options).pipe(
    map((response) => {
      return response;
    }),
    catchError(this.handleError)
    )
  }

  handleError(error){
    return throwError(error.message || "Server error")

  }
}
