import { Component, OnInit } from '@angular/core';

import { Batch } from '../../../models/batch';
import { ApiResponseBatches } from '../../../models/api-response-batches';
import { BatchService } from '../../../services/batch.service';

@Component({
  selector: 'app-batches-list',
  templateUrl: './list.component.html',
})
export class ListBatchesComponent implements OnInit {

  batches: Batch[];
  batchesNumber: number;

  // this order induces in the table column order
  batchTableHeaders = [
    {name: 'code', width: '15%', title: 'Código'},
    {name: 'producer', width: '15%', title: 'Fabricante'},
    {name: 'produce_date', width: '15%', title: 'Data de fabricação'},
    {name: 'shelf_life', width: '15%', title: 'Data de validade'},
    {name: 'size', width: '10%', title: 'Tamanhos'},
  ];

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.getBatches();
  }

  getBatches() {
    this.batchService.getBatches().subscribe(
      (response: ApiResponseBatches) => {
        this.batches = response.results;
        this.batchesNumber = response.count_results;
      }
    );
  }

  handleDeleteBatch(batchId: number) {
    console.log('delete batch: ', batchId);
  }

}
