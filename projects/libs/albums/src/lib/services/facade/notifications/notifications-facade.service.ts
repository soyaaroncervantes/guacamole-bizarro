import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material/snack-bar/snack-bar-ref';
import { TextOnlySnackBar } from '@angular/material/snack-bar/simple-snack-bar';

@Injectable({
  providedIn: 'platform'
})
export class NotificationsFacadeService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  get addAlbum(): MatSnackBarRef< TextOnlySnackBar > {
    return this.matSnackBar.open('Added a new Album!');
  }

  get editAlbum(): MatSnackBarRef< TextOnlySnackBar > {
    return this.matSnackBar.open('Edited an Album!');
  }

  get deleteAlbum(): MatSnackBarRef< TextOnlySnackBar > {
    return this.matSnackBar.open('Deleted an Album!');
  }
}
