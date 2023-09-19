import { DarkModeService } from '../../../services/dark-mode.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],
})
export class DarkModeComponent {
  isDarkMode: boolean;
  constructor(private darkModeService: DarkModeService) {
    this.isDarkMode = this.darkModeService.darkMode;
  }
  toggleDarkMode() {
    // console.log('component toggle')
    this.darkModeService.toggleDarkMode();
    this.isDarkMode = this.darkModeService.darkMode;
  }
}
