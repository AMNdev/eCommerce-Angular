import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string = 'https://fakestoreapi.com';

  private categories: string[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/products/categories`).pipe(
      catchError((error) => {
        console.warn(error.message);

        return of([]);
      })
    );
  }
}
