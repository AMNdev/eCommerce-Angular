import { Component, DoCheck, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements DoCheck {
  allProducts: Product[] = [];

  // @Input()
  // activeCategory?: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.router.navigateByUrl(`/${cat}`, {skipLocationChange: true}).then(()=> this.router.navigate(['home']));
    // this.allProducts = this.productsService.getAllProducts();
    // this.currentProduct = this.productService.getProductById(this.id)
  }

  ngDoCheck(): void {
    const cat: string = this.route.snapshot.params['cat'] || '';

    this.allProducts = cat
      ? this.productsService.getProductsByCategroy(cat)
      : this.productsService.getAllProducts();
    // console.log('check', {cat}, this.activeCategory);

    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }
}
