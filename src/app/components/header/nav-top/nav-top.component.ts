import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { ThemeService } from '../../../services/theme.service';
import { Subscription } from 'rxjs';
import { ChatService } from '../../../services/chat.service';

// Importez FormsModule
import { FormsModule } from '@angular/forms';
import { NotificationServiceService } from '../../../services/notification-service.service';

@Component({
  selector: 'app-nav-top',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss',
})
export class NavTopComponent implements OnInit, OnDestroy {
  isActive: boolean = false;
  settingsIsActive = false;
  isDarkMode = false;
  menuColorActive = false;
  menuPositionActive = false;
  show = false;

  private subscription: Subscription = new Subscription();

  constructor(
    public menuService: MenuService,
    private themeService: ThemeService,
    private chatService: ChatService,
    private notificationService: NotificationServiceService
  ) {
    this.isDarkMode = this.themeService.isDarkMode(); // Initial state
  }

  ngOnInit() {
    // Combine subscriptions for better management
    this.subscription.add(
      this.menuService.getMenuPositionActive().subscribe((isActive) => {
        this.menuPositionActive = isActive;
      })
    );
    this.subscription.add(
      this.menuService.getMenuCurrentColor().subscribe((isActive) => {
        this.menuColorActive = isActive;
      })
    );
    this.subscription.add(
      this.notificationService.showNotification$.subscribe((show) => {
        this.show = show;
      })
    );
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  toggleDropdown() {
    this.settingsIsActive = !this.settingsIsActive;
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleMenuColor() {
    this.menuService.toggleMenuCurrentColor();
    this.menuColorActive = !this.menuColorActive; // Suppose to reflect the change
  }

  toggleColor() {
    this.menuService.toggleMenuCurrentColor();
  }

  toggleSidebar() {
    this.chatService.toggleActiveSidebar();
  }

  showPopup() {
    this.notificationService.toggleNotification(!this.show);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Une seule désinscription nécessaire
  }
}
