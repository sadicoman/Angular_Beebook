import { Component } from '@angular/core';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NavTopComponent, NavLeftComponent, ContactComponent],
})
export class HeaderComponent {}
