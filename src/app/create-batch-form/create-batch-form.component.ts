import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { nullValueSelectValidator } from '../validators/null-value-select.directive';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-batch-form.component.html',
  styleUrls: ['./create-batch-form.component.css'],
  providers: [Location]
})
export class CreateBatchFormComponent implements OnInit {
  sizes = [
    { name: 'Escolha um tamanho', value: null, disabled: true },
    { name: 'Pequeno', value: 'P' },
    { name: 'Médio', value: 'M' },
    { name: 'Grande', value: 'G' },
  ];

  batchForm = null;

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.batchForm = new FormGroup({
      code: new FormControl(
        '',
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ),
      producer: new FormControl(
        '',
        [
          Validators.required,
          Validators.maxLength(20)
        ]
      ),
      size: new FormControl(
        this.sizes[0],
        [
          Validators.required,
          // validar se escolheu mesmo a opção
          nullValueSelectValidator
        ]
      ),
      produce_date: new FormControl(
        null,
        [
          Validators.required,
          // data nao pode ser maior que a validade
        ]
      ),
      shelf_life: new FormControl(
        null,
        [
          Validators.required
          // data precisa ser maior que a de produção
        ]
      )
    });
  }

  onSubmit() {
    if (this.batchForm.valid) {
      console.log(this.batchForm.value);
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
}
