import { Component } from '@angular/core';
import { SignInFacadeService } from '../../../services/facade/sign-in/sign-in-facade.service';

@Component({
  selector: 'auth-twitter-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss'],
})
export class TwitterButtonComponent {
  constructor(private signInFacadeService: SignInFacadeService) {}

  signIn(): void {
    this.signInFacadeService.twitter();
  }
}
