import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  isFormVisible = false; // Cette variable contrôle l'affichage du formulaire
  annees: number[] = [];
  mois: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  jours: number[] = [];

  constructor() {
    this.genererAnnees();
    this.genererJours();
  }

  genererAnnees() {
    const anneeActuelle = new Date().getFullYear();
    const anneeDebut = 1900; // Modifier selon le besoin
    for (let annee = anneeActuelle; annee >= anneeDebut; annee--) {
      this.annees.push(annee);
    }
  }
  genererJours() {
    for (let jour = 1; jour <= 31; jour++) {
      this.jours.push(jour);
    }
  }
}
