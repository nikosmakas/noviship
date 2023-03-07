import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorDirective,
      multi: true
    }
  ]
})
export class ValidatorDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.searchQueryValidator()(control);
  }
  constructor() { }

  searchQueryValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const query = control.value;
      const isValid = /^[a-zA-Z0-9]+$/.test(query) && query.length >= 3;

      if (isValid) {
        return null; // Return null if the input is valid
      } else {
        return { 'invalidSearchQuery': true }; // Return an error object if the input is invalid
      }
    };
  }
  
}