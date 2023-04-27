import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({ email });

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (Subscriber) => {
        if (email == 'paterninapcamilo@gmail.com') {
          Subscriber.next({ emailTaken: true });
          Subscriber.complete();
        }

        Subscriber.next(null);
        Subscriber.complete();
      }
    );
    return httpCallObservable;
  }
}
