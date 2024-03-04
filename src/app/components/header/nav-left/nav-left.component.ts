import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss',
})
export class NavLeftComponent {
  isActive: boolean = false;

  constructor(private menuService: MenuService) {
    this.menuService.isActive$.subscribe((isActive) => {
      this.isActive = isActive;
    });
  }
}
