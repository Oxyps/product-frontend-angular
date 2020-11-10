import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApiResponseBatches } from '../../../models/api-response-batches';
import { Product } from '../../../models/product';
import { BatchService } from '../../../services/batch.service';
import { ProductService } from '../../../services/product.service';
import { nullValueSelectValidator } from '../../../validators/null-value-select.directive';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit.component.html',
  providers: [Location]
})
export class EditProductComponent implements OnInit {

  location: Location;
  productForm: FormGroup;

  batchOptions = [];

  constructor(
    location: Location,
    private route: ActivatedRoute,
    private batchService: BatchService,
    private productService: ProductService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.loadBatchOptions();
    this.loadProductForm();
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

    this.loadProductFields();
  }

  loadProductFields() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params.product_id).subscribe(
        (product: Product) => {
          // update all fields except select one
          this.productForm.patchValue(product);
          // update select field -> must find match value in batchOptions
          this.productForm.controls.batch.patchValue(
            this.batchOptions[
              this.batchOptions.findIndex(
                option => option.name === product.batch
              )
            ]
          );
          this.validateAllFormFields();
        }
      );
    });
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
        null, [
          Validators.required,
          Validators.min(0.01),
          Validators.max(9999999999999.99)
        ]
      ),
      batch: new FormControl(
        null,
        [nullValueSelectValidator]
      ),
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
    console.log('submit: ', formValue);
  }

}
