import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches-list',
  templateUrl: './batches-list.component.html',
  styleUrls: ['./batches-list.component.css']
})
export class BatchesListComponent implements OnInit {

  batches = [
    { id: 1, code: 1, size: 'M', producer: 'TheProducer1', produce_date: '11/2012/11', shelf_life: '11/2012/11' },
    { id: 2, code: 2, size: 'M', producer: 'TheProducer2', produce_date: '11/2012/11', shelf_life: '11/2012/11' },
    { id: 3, code: 3, size: 'M', producer: 'TheProducer3', produce_date: '11/2012/11', shelf_life: '11/2012/11' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
