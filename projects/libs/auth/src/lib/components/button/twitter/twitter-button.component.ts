import { Component, OnInit } from '@angular/core';
import { SignInFacadeService } from '../../../services/facade/sign-in/sign-in-facade.service';

@Component({
  selector: 'auth-twitter-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss']
})
export class TwitterButtonComponent implements OnInit {

  constructor(
    private signInFacadeService: SignInFacadeService
  ) { }

  ngOnInit(): void { }

  signIn(): void {
    this.signInFacadeService.twitter();
  }

}
