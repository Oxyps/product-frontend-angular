import { Component, OnInit } from '@angular/core';

import { BatchService } from '../../services/batch.service';
import { Batch } from '../../models/batch';
import { ApiResponseBatches } from '../../models/api-response-batches';

@Component({
  selector: 'app-batches-list',
  templateUrl: './list-batches.component.html',
  styleUrls: ['./list-batches.component.css']
})
export class ListBatchesComponent implements OnInit {

  batches: Batch[];

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.getBatches();
  }

  getBatches() {
    this.batchService.getBatches().subscribe(
      (response: ApiResponseBatches) => {
        this.batches = response.results;
      }
    );
  }

}
