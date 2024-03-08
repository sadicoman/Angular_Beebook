import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  isDropdownShown: boolean = false; // Propriété pour contrôler l'affichage de la dropdown

  constructor() {}

  toggleDropdown(event: Event): void {
    event.preventDefault(); // Empêche la navigation par défaut du lien
    this.isDropdownShown = !this.isDropdownShown; // Basculer l'état de visibilité
  }
}
