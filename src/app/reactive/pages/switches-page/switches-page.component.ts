import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {

  myForm : FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [ true, Validators.required],
    termsAndConditions: [ true, Validators.requiredTrue]
  })

  constructor(private fb : FormBuilder){

  }

  hasError(field: string): boolean{
    const fieldControl = this.myForm.controls['termsAndConditions'];
    return !!fieldControl.errors && !!fieldControl.touched ;

  }
}
