import { Component, OnDestroy } from '@angular/core';
import { ChatBotComponent } from '../chat-bot/chat-bot.component';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [ChatBotComponent],
})
export class ContactComponent implements OnDestroy {
  isActiveSidebar: boolean = false;
  private subscription: Subscription;

  constructor(private chatService: ChatService) {
    this.subscription = this.chatService
      .getActiveSidebar()
      .subscribe((isActive) => {
        this.isActiveSidebar = isActive;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
