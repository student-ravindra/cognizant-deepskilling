import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Creates a new NotificationService instance
  // only for this component and its children.
  providers: [NotificationService]
})
export class Notification {

  constructor(private notificationService: NotificationService) {}


  sendNotification(): void {

    this.notificationService.show(
      'Welcome to Student Course Portal'
    );

  }

}