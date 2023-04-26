import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)], []),
    price: new FormControl(0, [Validators.required, Validators.min(0)], []),
    inStorage: new FormControl(0, [Validators.required, Validators.min(0)], [])
  });

  onSave(){

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)
    this.myForm.reset()
  }


  hasErrors(field: string) : boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null{
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for( const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        
        case 'minlength':
          return `Este campo debe tener mínimo ${errors['minlength'].requiredLength}`
      }
    }

    return null;
  }
}
