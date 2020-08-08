import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'platform'
})
export class NotificationsService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  login(): void {
    this.matSnackBar.open('Welcome back!' );
  }

  logout(): void {
    this.matSnackBar.open('Come back soon!' );
  }

  signIn(): void {
    this.matSnackBar.open('Hello!, Welcome Roller' );
  }

}
