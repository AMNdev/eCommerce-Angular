import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories :string[] =[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]

  constructor() { }

  getCategories():string[] {
    return this.categories;
   }
}
