import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('txtSearchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  @Output()
  isSearchActive = new EventEmitter<boolean>();
  biggerInput: boolean = false;

  constructor(private productService: ProductsService) {}

  search() {
    const term = this.searchInput.nativeElement.value;
    console.log(`Searching...${term}`)
    this.changeInputVisibility();

    const results = this.productService.searchProduct(term);


    console.log({results})



    // TODO: enviar resultados de busqueda al componente para mostrar
  }

  focusOnSearch() {
    if (this.biggerInput) return this.search()


    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();

    this.changeInputVisibility();
  }

  changeInputVisibility() {
    this.isSearchActive.emit(!this.biggerInput);
    this.biggerInput = !this.biggerInput;
  }
}
