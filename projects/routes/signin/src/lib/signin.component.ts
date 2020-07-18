import { Component, OnInit } from '@angular/core';
import { FacadeCreateUserService } from '@services/facade-create-user';
import { User } from '@interfaces/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { websiteRoutes } from '@const/website';

@Component({
  selector: 'lib-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup: FormGroup;
  routes = websiteRoutes;

  constructor(
    private formBuilder: FormBuilder,
    private facadeCreateUserService: FacadeCreateUserService
  ) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl( '', [ Validators.email, Validators.required ] ),
      password: new FormControl( '', [ Validators.required ] )
    });
  }

  ngOnInit(): void { }

  submit( user: User ): void {
    this.facadeCreateUserService.create( user );
  }

}
