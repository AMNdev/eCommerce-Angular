import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  categories: string[] = [];
  articlesNumber: number = 0;
  isSearchActive: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartLengthEmitter.subscribe(
      (num) => (this.articlesNumber = num)
    );
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
    
    this.cartService.refreshCartLength();
  }

  changeClass(event: boolean): void {
    this.isSearchActive = event;
  }
}
