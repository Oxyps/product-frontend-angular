import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { ApiResponseBatches } from '../../../models/api-response-batches';
import { BatchService } from '../../../services/batch.service';
import { nullValueSelectValidator } from '../../../validators/null-value-select.directive';

@Component({
  selector: 'app-create-product',
  templateUrl: './create.component.html',
  providers: [Location]
})
export class CreateProductComponent implements OnInit {

  location: Location;
  productForm: FormGroup;

  batchOptions = [
    { name: 'Escolha um lote', value: null },
  ];

  constructor(
    location: Location,
    private batchService: BatchService,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.loadProductForm();
    this.loadBatchOptions();
  }

  loadBatchOptions() {
    this.batchService.getBatches().subscribe(
      (response: ApiResponseBatches) => {
        response.results.map(result => {
          this.batchOptions.push({
            name: result.code,
            value: result.code
          });
        });
      }
    );
  }

  loadProductForm() {
    this.productForm = new FormGroup({
      nome: new FormControl(
        '',
        [Validators.required, Validators.maxLength(30)]
      ),
      descricao: new FormControl(
        '',
        [Validators.required, Validators.maxLength(254)]
      ),
      preco: new FormControl(
        null,
        [
          Validators.required,
          Validators.min(0.01),
          Validators.max(9999999999999.99)
        ]
      ),
      batch: new FormControl(
        this.batchOptions[0],
        [nullValueSelectValidator] ),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.saveProduct(this.productForm.value);
    } else {
      this.validateAllFormFields();
    }
  }

  validateAllFormFields() {
    Object.keys(this.productForm.controls).forEach(field => {
      const control = this.productForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields();
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

  saveProduct(formValue) {
    console.log(formValue);
  }

}
