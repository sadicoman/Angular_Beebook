import { Component, OnDestroy } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-top',
  standalone: true,
  imports: [],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss',
})
export class NavTopComponent implements OnDestroy {
  isActive: boolean = false;
  private subscription: Subscription;

  constructor(private menuService: MenuService) {
    this.subscription = this.menuService.isActive$.subscribe((isActive) => {
      this.isActive = isActive;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
