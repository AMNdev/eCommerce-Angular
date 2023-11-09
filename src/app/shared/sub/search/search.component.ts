import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('txtSearchInput')
  public searchInput!: ElementRef<HTMLInputElement>;
  private debouncer: Subject<string> = new Subject<string>();

  @Output()
  isSearchActive = new EventEmitter<boolean>();
  biggerInput: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(900))
      .subscribe((value) => {
      this.search(value);
    });
    // suscripción al debouncer al crear el componente
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
  search(searchTerm: string) {
    this.router.navigateByUrl(`/home/search/${searchTerm}`);
  }

  changeInputVisibility() {
    // vaciar el input
    this.searchInput.nativeElement.value = '';

    this.biggerInput = !this.biggerInput;
    this.isSearchActive.emit(this.biggerInput);
    if (this.biggerInput) {
      this.searchInput.nativeElement.focus();
    } else {
      this.searchInput.nativeElement.blur();
    }
  }

  // observar el click fuera de la búsqueda
  @HostListener('document:click', ['$event.target'])
  clickedOut(e: HTMLElement) {
    if (
      this.biggerInput == true &&
      e.id != 'searchButton' &&
      e.id != 'searchInput'
    )
      this.changeInputVisibility();
  }
}
