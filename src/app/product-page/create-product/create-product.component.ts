import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { nullValueSelectValidator } from '../../validators/null-value-select.directive';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [Location]
})
export class CreateProductComponent implements OnInit {
  batches = [
    { name: 'Escolha um lote', value: null, disabled: true },
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
  ];

  productForm = null;

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(30)] ),
      descricao: new FormControl('', [Validators.required, Validators.maxLength(254)] ),
      preco: new FormControl(null, [
        Validators.required,
        Validators.min(0.01),
        Validators.max(9999999999999.99)]
      ),
      batch: new FormControl(this.batches[0], [nullValueSelectValidator] ),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      this.validateAllFormFields(this.productForm);
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
    const control = this.productForm.get(field);
    return control.valid && (control.dirty || control.touched);
  }

  displayFieldCss(field: string) {
    return {
      'is-valid': this.isFieldValid(field),
      'is-invalid': !this.isFieldValid(field)
    };
  }
}
