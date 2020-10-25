import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '@services/api-login';
import { FacadeLoginService } from '@services/facade-login';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiLoginService: ApiLoginService,
    private facadeLoginService: FacadeLoginService
  ) { }

  ngOnInit(): void { }

  loginGoogle(): void {
    this.facadeLoginService.google();
    // this.apiLoginService.loginGoogle()
    //   .subscribe( value => console.log('%c It works, Google', 'color: #4285F4', value ) );
  }

  loginTwitter(): void {
    console.log('%c It works, Twitter', 'color: #1DA1F2');
  }

}
