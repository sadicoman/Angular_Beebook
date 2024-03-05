import { Component, OnDestroy } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss',
})
export class NavLeftComponent {
  isActive: boolean = false;
  menuIsActive: boolean = false;
  private subscription: Subscription;
  menuCurrentColor: boolean = false;
  private subscription2: Subscription;

  constructor(private menuService: MenuService) {
    this.menuService.isActive$.subscribe((isActive) => {
      this.isActive = isActive;
    });
    this.subscription = this.menuService
      .getMenuPositionActive()
      .subscribe((isActive) => {
        this.menuIsActive = isActive;
      });
    this.subscription2 = this.menuService
      .getMenuCurrentColor()
      .subscribe((isColorActive) => {
        this.menuCurrentColor = isColorActive;
      });
  }

  toggleMenuPosition() {
    this.menuService.toggleMenuPosition();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
