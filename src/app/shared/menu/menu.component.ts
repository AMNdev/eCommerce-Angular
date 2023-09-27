import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  @Output()
  currentCategory = new EventEmitter<string>();

  categories: string[] = [];
  isSearchActive: boolean = false;
  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
    // this.isSearchActive = true;
  }

  // onNewCategory(category: string) {
  //   this.currentCategory.emit(category)
  //   console.log('emitiendo', category)

  // }


  changeClass(event: boolean): void {
    // console.log(event);
    this.isSearchActive = event;
  }
}
