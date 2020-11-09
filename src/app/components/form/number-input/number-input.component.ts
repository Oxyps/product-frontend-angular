import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
})
export class NumberInputComponent implements OnInit {

  @Input() currencyChar: string;
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() requiredError: string;
  @Input() requiredValid: boolean;
  @Input() minNumberValid: boolean;
  @Input() minNumberError: string;
  @Input() maxNumberValid: boolean;
  @Input() maxNumberError: string;
  @Input() step: string;
  @Input() placeholder: string;
  @Input() CSS: object;

  constructor() { }

  ngOnInit() { }

}
