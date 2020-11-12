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

  // must be ordered by batches attributes
  batchTableHeaders = [
    {width: '100', title: 'Código'},
    {width: '100', disabled: true, title: 'ID'},
    {width: '120', title: 'Data de fabricação'},
    {width: '100', title: 'Fabricante'},
    {width: '120', title: 'Data de validade'},
    {width: '100', title: 'Tamanhos'},
    {width: '100', title: 'Ações'}
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
