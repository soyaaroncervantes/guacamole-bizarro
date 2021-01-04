import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  hidePassword = true;

  constructor() { }

  ngOnInit(): void {}

  submit( form: NgForm ): void {
    console.log( form.value );
  }

}
