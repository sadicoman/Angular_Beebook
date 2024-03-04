import { Component } from '@angular/core';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavLeftComponent } from './nav-left/nav-left.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NavTopComponent, NavLeftComponent],
})
export class HeaderComponent {}
