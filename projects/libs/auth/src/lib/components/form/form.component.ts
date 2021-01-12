import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SignInFacadeService } from '../../services/facade/sign-in/sign-in-facade.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  hidePassword = true;
  showPasswordInput = false;

  userForm = new FormGroup({
    email: new FormControl(null, [ Validators.required, Validators.email ]),
    password: new FormControl(null, [ Validators.minLength(8 ) ])
  });

  constructor(
    private signInFacadeService: SignInFacadeService
  ) { }

  ngOnInit(): void {}

  get email(): AbstractControl {
    return this.userForm.get( 'email' );
  }

  get password(): AbstractControl {
    return this.userForm.get( 'password' );
  }

  submit(): void {
    const user: UserInterface = this.userForm.value;
    this.signInFacadeService.form( user );
  }

}
