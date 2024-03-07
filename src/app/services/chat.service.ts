import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private activeSidebar = new BehaviorSubject<boolean>(false);

  // Méthode pour basculer l'état
  toggleActiveSidebar() {
    this.activeSidebar.next(!this.activeSidebar.value);
  }

  // Méthode pour accéder à l'état observable
  getActiveSidebar() {
    return this.activeSidebar.asObservable();
  }
}
