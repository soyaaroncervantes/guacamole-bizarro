import { NgModule } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [ MatSnackBarModule ],
  providers: [ NotificationsService ]
})
export class NotificationsModule { }
