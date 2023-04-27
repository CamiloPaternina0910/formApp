import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { canBeStrider } from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', Validators.required, this.validatorService.canBeStrider],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },
  {
    validators:this.validatorService.areEquals('password', 'password2')
  }
  )

  constructor(
    private fb : FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator : EmailValidatorService
    ){

  }

  isValidField(field: string){
    return this.validatorService.isValidField(field, this.myForm);
  }


  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
