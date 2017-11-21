import { Component, OnInit } from '@angular/core';

import { GRID } from '../inventory.constant';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-upload-inventory',
  templateUrl: './upload-inventory.component.html',
  styleUrls: ['./upload-inventory.component.scss']
})
export class UploadInventoryComponent implements OnInit {

  public upload: any[];

  constructor(private inventoryService: InventoryService) {
    // this.upload = GRID.UPLOAD_DATA;
    this.upload = [];
    console.log('this.upload: ', this.upload);
  }


  ngOnInit() {
    console.log('InventoryComponent: ngOnInit');
    for (let i = 0; i < this.upload.length; i++) {
      const img = this.upload[i];
      const num = 1000 + i + 1;
      img.newId = img.category.substring(0,1).toUpperCase() + '-' + num;
      img.tags = [img.category];
      img.archive = false;
      console.log('uploading: ', img.newId);
      this.inventoryService.create(img);
    }
  }

}
