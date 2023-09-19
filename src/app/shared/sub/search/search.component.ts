import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { NgModel } from '@angular/forms';

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

  constructor() {}

  search() {
    const term = this.searchInput.nativeElement.value;
    console.log(`Searching...${term}`)
    this.changeInputVisibility();
    // TODO: Crear searchService y enlazar aquí
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
