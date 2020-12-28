import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'platform'
})
export class SignOutFacadeService {

  constructor(
    private readonly store: Store
  ) { }
}
