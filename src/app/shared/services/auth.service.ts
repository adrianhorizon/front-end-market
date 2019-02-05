import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserNew } from '../models/user-new.model';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  usersUrl: string;
  currentUser?: User;

  constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) {
    this.usersUrl = environment.apiUrl + 'auth/';
    if (this.isLoggedIn()) {
      const { userId, email, firstName, userName, phone } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, firstName, userName, phone, userId);
    }
  }

  signup(usernew: UserNew): Observable<any> {
    const body = JSON.stringify(usernew);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.usersUrl + 'signup', body, { headers: headers });
  }

  signin(user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.usersUrl + 'signin', body, { headers: headers });
  }

  login = ({ token, userId, firstName, userName, phone, email }) => {
    this.currentUser = new User(email, null, firstName, userName, phone, userId);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ userId, firstName, userName, phone, email }));
    this.router.navigateByUrl('/');
  }
  
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/');
  }
}
