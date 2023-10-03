import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string = 'https://fakestoreapi.com';

  private categories: string[] = [];

  constructor(private http: HttpClient) {}

  getCategories() {
    if (this.categories.length == 0) {
      // console.log('http categorias');
      this.http
        .get<string[]>(`${this.url}/products/categories`)
        .subscribe((d) => {
          this.categories = d;
        });
    }

    return this.categories;
  }
}
