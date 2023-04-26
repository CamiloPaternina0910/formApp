import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  newFavorite: FormControl = new FormControl('', [Validators.required])

  myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['God of War', Validators.required]
    ])
  })

  constructor(private fb : FormBuilder){

  }

  get favoriteGamesControl(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onDeleteFavorite(i: number){
    this.favoriteGamesControl.removeAt(i);
  }

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
    this.myForm.reset()
  }

  addNewFavorite(){
    if(this.newFavorite.invalid){
      this.newFavorite.markAllAsTouched();
      return;
    }
    const newGame = this.newFavorite.value;
    this.favoriteGamesControl.push(
      this.fb.control(newGame, Validators.required)
    );
    this.newFavorite.reset()
  }
}
