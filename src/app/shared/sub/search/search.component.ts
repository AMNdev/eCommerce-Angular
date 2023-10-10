import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  search() {
    const term = this.searchInput.nativeElement.value;
    console.log(`Searching...${term}`);
    this.changeInputVisibility();

    this.router.navigateByUrl(`/home/search/${term}`);
  }

  focusOnSearch() {
    if (this.biggerInput && this.searchInput.nativeElement.value) return this.search();

    this.searchInput.nativeElement.value = '';
    if (this.biggerInput) this.searchInput.nativeElement.focus();
    else this.searchInput.nativeElement.blur()

    this.changeInputVisibility();
  }

  changeInputVisibility() {
    this.isSearchActive.emit(!this.biggerInput);
    this.biggerInput = !this.biggerInput;
  }
}
