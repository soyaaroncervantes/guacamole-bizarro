import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInFacadeService } from '../../services/facade/sign-in/sign-in-facade.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  hidePassword = true;

  constructor(
    private signInFacadeService: SignInFacadeService
  ) { }

  ngOnInit(): void {}

  submit( form: NgForm ): void {
    const { value } = form;
    console.log( value );
  }

}
