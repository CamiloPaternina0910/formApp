import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {

  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  canBeStrider = (control: FormControl) => {
    const value: string = control.value.trimp().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }

    return null;
  };

  isValidField(field: string, form: FormGroup){
    return form.controls[field].errors && form.controls[field].touched;
  }

  areEquals(field1: string, field2: string){
    return ( form: FormGroup): ValidationErrors | null => {
      if(form.get(field1)?.value == form.get(field2)?.value){
        form.get(field2)?.setErrors({
          notEqual: true
        })
        return {
          notEqual: true
        }
      }

      form.get(field2)?.setErrors(null)
      return null
    }
  }

}
