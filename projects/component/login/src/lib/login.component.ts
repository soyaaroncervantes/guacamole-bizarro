import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  loginGoogle(): void {
    console.log('%c It works, Google', 'color: #4285F4');
  }

  loginTwitter(): void {
    console.log('%c It works, Twitter', 'color: #1DA1F2');
  }

}
