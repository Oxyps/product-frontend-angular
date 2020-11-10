import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Batch } from '../../../models/batch';
import { BatchService } from '../../../services/batch.service';
import { nullValueSelectValidator } from '../../../validators/null-value-select.directive';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit.component.html',
  providers: [Location]
})
export class EditBatchComponent implements OnInit {

  location: Location;
  batchForm: FormGroup;

  sizeOptions = [
    { name: 'Escolha um tamanho', value: '', disabled: true},
    { name: 'Pequeno', value: 'P', disabled: true},
    { name: 'Médio', value: 'M', disabled: true},
    { name: 'Grande', value: 'G', disabled: true},
  ];

  constructor(
    location: Location,
    private route: ActivatedRoute,
    private batchService: BatchService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.createBatchForm();
    this.setBatchFields();
  }

  setBatchFields() {
    this.route.params.subscribe(params => {
      this.batchService.getBatchById(params.batch_id).subscribe(
        (batch: Batch) => {
          // update all fields except select one
          this.batchForm.patchValue(batch);
          // update select field -> must find match value in sizeOptions
          this.batchForm.controls.size.patchValue(
            this.sizeOptions[
              this.sizeOptions.findIndex(
                option => option.name === batch.size
              )
            ]
          );
          this.validateAllFormFields();
        }
      );
    });
  }

  createBatchForm() {
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
        this.sizeOptions[0],
        [nullValueSelectValidator]
      ),
      produce_date: new FormControl(
        '',
        [Validators.required]
      ),
      shelf_life: new FormControl(
        '',
        [Validators.required]
      )
    });
  }

  onSubmit() {
    if (this.batchForm.valid) {
      this.saveBatch(this.batchForm.value);
    } else {
      this.validateAllFormFields();
    }
  }

  validateAllFormFields() {
    Object.keys(this.batchForm.controls).forEach(field => {
      const control = this.batchForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields();
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
    console.log('submit: ', formValue);
  }

}
