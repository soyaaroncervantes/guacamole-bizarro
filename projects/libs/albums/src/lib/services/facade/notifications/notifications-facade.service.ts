import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'platform'
})
export class NotificationsFacadeService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  addAlbum(): void {
    this.matSnackBar.open('Added a new Album!');
  }

  editAlbum(): void {
    this.matSnackBar.open('Edited an Album!');
  }

  deleteAlbum(): void {
    this.matSnackBar.open('Deleted an Album!');
  }
}
