import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('eCommerceDarkMode', JSON.stringify(this.isDarkMode));
  }

  get darkMode() {
    return this.isDarkMode;
  }

  constructor() {
    if (JSON.parse(localStorage.getItem('eCommerceDarkMode')!)) {
      this.toggleDarkMode();
    }
  }
}
