import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up-button',
  templateUrl: './up-button.component.html',
  styleUrls: ['./up-button.component.css'],
})
export class UpButtonComponent {
  public shows = false;

  constructor() {}

  @HostListener('window:scroll')
  onsScroll() {
    if (document.documentElement.scrollTop > 600) this.shows = true;
    else this.shows = false;
  }

  goUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
