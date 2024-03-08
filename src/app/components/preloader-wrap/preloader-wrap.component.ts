import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader-wrap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader-wrap.component.html',
  styleUrl: './preloader-wrap.component.scss',
})
export class PreloaderWrapComponent {
  showPreloader: boolean = true; // Contrôle l'affichage du preloader

  constructor() {
    // Simuler le processus de chargement ou lier cette logique à de réels indicateurs de chargement
    setTimeout(() => {
      this.showPreloader = false;
    }, 700); // 600ms pour l'exemple, ajustez selon les besoins de votre application
  }
}
