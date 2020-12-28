import { Component, OnInit } from '@angular/core';
import { SignInFacadeService } from '../../../services/facade/sign-in/sign-in-facade.service';

@Component({
  selector: 'auth-facebook-button',
  templateUrl: './facebook-button.component.html',
  styleUrls: ['./facebook-button.component.scss']
})
export class FacebookButtonComponent implements OnInit {

  constructor(
    private signInFacadeService: SignInFacadeService
  ) { }

  ngOnInit(): void { }

  signIn(): void {
    this.signInFacadeService.facebook();
  }

}
