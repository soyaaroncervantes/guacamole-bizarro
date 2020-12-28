import { Component, OnInit } from '@angular/core';
import { SignInFacadeService } from '../../../services/facade/sign-in/sign-in-facade.service';

@Component({
  selector: 'auth-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss']
})
export class GoogleButtonComponent implements OnInit {

  constructor(
    private signInFacadeService: SignInFacadeService
  ) { }

  ngOnInit(): void { }

  signIn(): void {
    this.signInFacadeService.google();
  }

}
