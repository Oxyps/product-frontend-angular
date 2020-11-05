import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-batch-form.component.html',
  styleUrls: ['./create-batch-form.component.css'],
  providers: [Location]
})
export class CreateBatchFormComponent implements OnInit {
  sizes = [
    { name: 'Escolha um tamanho', value: '', disabled: true },
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
          // validar se escolheu mesmo a opção
        ]
      ),
      produce_date: new FormControl(
        // new Date('01/01/2018'),
        null,
        [
          Validators.required,
          // validar formato dessa data
          // data nao pode ser maior que a validade
        ]
      ),
      shelf_life: new FormControl(
        // new Date(),
        null,
        [
          Validators.required
          // validar formato dessa data
          // data precisa ser maior que a de produção
        ]
      )
    });
  }

  onSubmit() {
    if (this.batchForm.invalid) {
      // const forms = document.getElementsByClassName('needs-validation');

      // const validation = Array.prototype.filter.call(forms, form => {
      //   form.addEventListener('submit', event => {
      //     if (form.checkValidity() === false) {
      //       event.preventDefault();
      //       event.stopPropagation();
      //     }
      //     form.classList.add('was-validated');
      //   }, false);
      // });
    } else {
      console.log(this.batchForm.value);
    }

    // console.log(this.batchForm.controls.code);

    // console.log('erros ' + this.batchForm.errors);
    // console.log('tocado ' + this.batchForm.touched);
    // console.log('sujo ' + this.batchForm.dirty);
    // console.log('status ' + this.batchForm.status);
    // console.log('invalido ' + this.batchForm.invalid);

  }
}
