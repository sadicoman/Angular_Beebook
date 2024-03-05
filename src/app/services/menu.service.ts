// menu.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private isActive = new BehaviorSubject<boolean>(false);

  isActive$ = this.isActive.asObservable();

  toggleMenu() {
    this.isActive.next(!this.isActive.value);
  }

  //
  // Initialiser avec l'état stocké ou false par défaut
  private menuPositionActive = new BehaviorSubject<boolean>(
    this.getStoredMenuPositionState()
  );

  toggleMenuPosition() {
    const newState = !this.menuPositionActive.value;
    this.menuPositionActive.next(newState);
    // Stocker le nouvel état pour la persistance
    localStorage.setItem('menuPositionActive', JSON.stringify(newState));
  }

  getMenuPositionActive() {
    return this.menuPositionActive.asObservable();
  }

  private getStoredMenuPositionState(): boolean {
    // Récupérer l'état stocké ou retourner false par défaut
    const storedState = localStorage.getItem('menuPositionActive');
    return storedState ? JSON.parse(storedState) : false;
  }

  //
  private menuCurrentColor = new BehaviorSubject<boolean>(
    this.getStoredState('menuCurrentColor')
  );
  toggleMenuCurrentColor() {
    const newState = !this.menuCurrentColor.value;
    this.menuCurrentColor.next(newState);
    // Stocker le nouvel état pour la persistance
    localStorage.setItem('menuCurrentColor', JSON.stringify(newState));
  }

  getMenuCurrentColor() {
    return this.menuCurrentColor.asObservable();
  }

  private getStoredState(key: string): boolean {
    const storedState = localStorage.getItem(key);
    return storedState ? JSON.parse(storedState) : false;
  }
}
