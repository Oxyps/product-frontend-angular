import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Batch } from '../../../models/batch';
import { nullValueSelectValidator } from '../../../validators/null-value-select.directive';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create.component.html',
  providers: [Location]
})
export class CreateBatchComponent implements OnInit {

  location: Location;
  batchForm: FormGroup;

  sizes = [
    { name: 'Escolha um tamanho', value: null },
    { name: 'Pequeno', value: 'P' },
    { name: 'Médio', value: 'M' },
    { name: 'Grande', value: 'G' },
  ];

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.batchForm = new FormGroup({
      code: new FormControl(
        '',
        [Validators.required, Validators.maxLength(50)]
      ),
      producer: new FormControl(
        '',
        [Validators.required, Validators.maxLength(20)]
      ),
      size: new FormControl(
        this.sizes[0],
        [nullValueSelectValidator]
      ),
      produce_date: new FormControl( null, [Validators.required] ),
      shelf_life: new FormControl( null, [Validators.required] )
    });
  }

  onSubmit() {
    if (this.batchForm.valid) {
      this.saveBatch(this.batchForm.value);
    } else {
      this.validateAllFormFields(this.batchForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(field: string) {
    const control = this.batchForm.get(field);
    return control.valid && (control.dirty || control.touched);
  }

  displayFieldCss(field: string) {
    return {
      'is-valid': this.isFieldValid(field),
      'is-invalid': !this.isFieldValid(field)
    };
  }

  saveBatch(formValue) {
    console.log(formValue);
  }

}
