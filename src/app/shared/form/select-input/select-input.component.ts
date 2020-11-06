import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Option {
  name: string;
  value: string;
  disabled: boolean;
}

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
})
export class SelectInputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() wasntSelected: boolean;
  @Input() wasntSelectedError: string;
  @Input() options: Array<Option>;
  @Input() CSS: object;

  constructor() { }

  ngOnInit() { }

}
