import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _registerUrl = 'http://localhost:3000/api/register';
  // tslint:disable-next-line: variable-name
  private _loginUrl = 'http://localhost:3000/api/login';

  // tslint:disable-next-line: variable-name
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
    // !! - aby zwracalo boolean, true jesli jest, false jesli nie
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }
  getToken() {
    return localStorage.getItem('token');
  }

}


