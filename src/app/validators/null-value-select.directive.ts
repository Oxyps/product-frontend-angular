import { AbstractControl } from '@angular/forms';

export function nullValueSelectValidator(control: AbstractControl) {
  if (control.value.value == null) {
    return { selectValid: false };
  } else {
    return null;
  }
}
