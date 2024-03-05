import { Component, OnDestroy } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { ThemeService } from '../../../services/theme.service';
import { Subscription } from 'rxjs';

// Importez FormsModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-top',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss',
})
export class NavTopComponent implements OnDestroy {
  isActive: boolean = false;
  settingsIsActive = false;
  isDarkMode = false;
  menuColorActive = false;
  menuPositionActive = false;

  private subscription: Subscription;

  constructor(
    public menuService: MenuService,
    private themeService: ThemeService
  ) {
    this.subscription = new Subscription();

    const menuPositionSub = this.menuService
      .getMenuPositionActive()
      .subscribe((isActive) => {
        this.menuPositionActive = isActive;
      });

    const menuColorSub = this.menuService
      .getMenuCurrentColor()
      .subscribe((isActive) => {
        this.menuColorActive = isActive;
      });

    this.subscription.add(menuPositionSub);
    this.subscription.add(menuColorSub);

    this.isDarkMode = this.themeService.isDarkMode(); // Assurez-vous que themeService gère aussi son état initialement
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleDropdown() {
    this.settingsIsActive = !this.settingsIsActive;
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkMode(); // Mise à jour de la propriété après basculement
  }

  toggleMenuColor() {
    this.menuColorActive = !this.menuColorActive;
  }

  toggleColor() {
    this.menuService.toggleMenuCurrentColor();
  }
}
