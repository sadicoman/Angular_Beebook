import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  private showNotificationSource = new Subject<boolean>();
  showNotification$ = this.showNotificationSource.asObservable();

  constructor() {}

  toggleNotification(show: boolean) {
    this.showNotificationSource.next(show);
  }
}
