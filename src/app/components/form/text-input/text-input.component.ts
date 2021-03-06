import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent implements OnInit {

  @Input() specialChar: string;
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() requiredValid: boolean;
  @Input() requiredError: string;
  @Input() maxlengthValid: boolean;
  @Input() maxlengthError: string;
  @Input() placeholder: string;
  @Input() CSS: object;

  constructor() { }

  ngOnInit() { }

}
