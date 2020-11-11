import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
})
export class DeleteModalComponent implements OnInit {

  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() modalBody: string;
  @Input() closeButtonLabel: string;
  @Input() continueButtonLabel: string;

  @Input() public handleClickContinueButton: (arg: any) => void;

  constructor() { }

  ngOnInit() { }

}
