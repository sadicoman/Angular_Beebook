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
}
