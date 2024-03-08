import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'beebook';
  showPreloader: boolean = true; // Ajouté pour contrôler l'affichage du préchargeur

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Simuler le délai de chargement puis masquer le préchargeur et ajouter la classe 'loaded'
    setTimeout(() => {
      this.showPreloader = false; // Masque le préchargeur
      this.renderer.addClass(document.body, 'loaded'); // Ajoute la classe 'loaded'
    }, 600);
  }
}
