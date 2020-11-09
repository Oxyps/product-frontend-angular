import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
})
export class TextAreaInputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() requiredValid: boolean;
  @Input() requiredError: string;
  @Input() maxlengthValid: boolean;
  @Input() maxlengthError: string;
  @Input() rows: string;
  @Input() placeholder: string;
  @Input() CSS: object;

  constructor() { }

  ngOnInit() { }

}
