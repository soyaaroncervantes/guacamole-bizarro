import { Component } from '@angular/core';
import { SignInFacadeService } from '../../../services/facade/sign-in/sign-in-facade.service';

@Component({
  selector: 'auth-facebook-button',
  templateUrl: './facebook-button.component.html',
  styleUrls: ['./facebook-button.component.scss'],
})
export class FacebookButtonComponent {
  constructor(private signInFacadeService: SignInFacadeService) {}

  signIn(): void {
    this.signInFacadeService.facebook();
  }
}
