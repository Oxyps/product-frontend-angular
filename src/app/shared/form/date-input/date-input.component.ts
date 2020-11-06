import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
})
export class DateInputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() requiredNotValid: boolean;
  @Input() requiredNotValidError: string;
  @Input() CSS: object;

  constructor() { }

  ngOnInit() { }

}
