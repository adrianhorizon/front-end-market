import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpErrorHandler, HandleError } from './others/http-error-handler.service';
import { Categories } from '../models/categories.model';

@Injectable() 
export class CategoriesService {  
  private handleError: HandleError;
  apiUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CategoriesService');
    this.apiUrl = environment.apiUrl + 'categories';
  }

  getCategories (): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }

  getCategoriesId (id: string): Observable<any[] | Categories> {
    return this.http.get<Categories>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError('getCategoriesId', []))
      );
  }
}
