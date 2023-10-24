import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  categories: string[] = [];
  articlesNumber: number = 0;
  isSearchActive: boolean = false;
  isDropDownVisible: boolean = false;

  private menuSuscription?: Subscription;

  constructor(
    private categoryService: CategoryService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.menuSuscription = this.cartService.cartLengthEmitter.subscribe(
      (num) => (this.articlesNumber = num)
    );
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.cartService.refreshCartLength();
  }

  ngOnDestroy(): void {
    console.log('menu unsbscribed');
    this.menuSuscription?.unsubscribe()
  }

  changeClass(event: boolean): void {
    this.isSearchActive = event;
  }

  showDropdown() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}
