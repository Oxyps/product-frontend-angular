import { AbstractControl } from '@angular/forms';

export function nullValueSelectValidator(control: AbstractControl) {
  if (control.value.value == null) {
    return { wasSelected: false };
  } else {
    return null;
  }
}
