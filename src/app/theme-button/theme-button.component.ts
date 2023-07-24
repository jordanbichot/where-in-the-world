import { Component } from '@angular/core';
import { Theme } from './models/theme';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  public themeStatus: Theme = 'Dark Mode';
}
