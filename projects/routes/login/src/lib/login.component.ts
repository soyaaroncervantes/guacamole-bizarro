import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@interfaces/user';
import { FacadeLoginService } from '@services/facade-login';
import { websiteRoutes } from '@const/website';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  routes = websiteRoutes;

  constructor(
    private formBuilder: FormBuilder,
    private facadeLoginService: FacadeLoginService
  ) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl( '', [ Validators.email, Validators.required ] ),
      password: new FormControl( '', [ Validators.required ] )
    });
  }

  ngOnInit(): void { }

  submit( user: User ): void {
    this.facadeLoginService.login( user );
  }

}
