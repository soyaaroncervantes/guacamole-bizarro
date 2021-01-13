import { Component } from '@angular/core';
import { SignInFacadeService } from '../../../services/facade/sign-in/sign-in-facade.service';

@Component({
  selector: 'auth-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent {
  constructor(private signInFacadeService: SignInFacadeService) {}

  signIn(): void {
    this.signInFacadeService.google();
  }
}
