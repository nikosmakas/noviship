import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }]
})
export class ValidatorDirective implements Validator {
  
  @Input() forbiddenChars!: RegExp;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = /[^a-zA-Z0-9 ]+/;
    if (!control.value || control.value.length < 3 || forbidden.test(control.value)) {
      return { invalid: true, message: 'The search query should be 3 characters long and only contain letters and numbers' };
    }
    return null;
  }
}
