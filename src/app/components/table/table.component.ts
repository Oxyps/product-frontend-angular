import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @Input() name: string;
  @Input() itemHeaders: {width?: string, title: string}[];
  @Input() items: any[];
  @Input() captionLabel: string;

  @Input() editLink: string;

  @Input() public handleDeleteButtonClick: (arg: any) => void;
  @Input() deleteModalTitle: string;
  @Input() deleteModalBody: string;
  @Input() deleteModalCloseButtonLabel: string;
  @Input() deleteModalContinueButtonLabel: string;

  object = Object;

  constructor() { }

  ngOnInit() { }

}
