import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  categories: string[] = [];
  isSearchActive: boolean = false;
  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
    // this.isSearchActive = true;
  }



  changeClass(event: boolean): void {
    // console.log(event);
    this.isSearchActive = event;
  }
}
