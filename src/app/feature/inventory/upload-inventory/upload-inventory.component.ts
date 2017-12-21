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
    this.upload = [
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN1589.jpg',
        'name': '',
        'newId': '',
        'oldId': '30045',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN1599.jpg',
        'name': '',
        'newId': '',
        'oldId': '30046',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN1601.jpg',
        'name': '',
        'newId': '',
        'oldId': '30047',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN1609.jpg',
        'name': '',
        'newId': '',
        'oldId': '30048',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN1635.jpg',
        'name': '',
        'newId': '',
        'oldId': '30049',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN3313.jpg',
        'name': '',
        'newId': '',
        'oldId': '30050',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'DSCN3319.jpg',
        'name': '',
        'newId': '',
        'oldId': '30051',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_2333.jpg',
        'name': '',
        'newId': '',
        'oldId': '30052',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_2335.jpg',
        'name': '',
        'newId': '',
        'oldId': '30053',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_2356.jpg',
        'name': '',
        'newId': '',
        'oldId': '30054',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_2379.jpg',
        'name': '',
        'newId': '',
        'oldId': '30055',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_2420.jpg',
        'name': '',
        'newId': '',
        'oldId': '30056',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5647.jpg',
        'name': '',
        'newId': '',
        'oldId': '30057',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5652.jpg',
        'name': '',
        'newId': '',
        'oldId': '30058',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5655.jpg',
        'name': '',
        'newId': '',
        'oldId': '30059',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5657.jpg',
        'name': '',
        'newId': '',
        'oldId': '30060',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5659.jpg',
        'name': '',
        'newId': '',
        'oldId': '30061',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5662.jpg',
        'name': '',
        'newId': '',
        'oldId': '30062',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'IMG_5663.jpg',
        'name': '',
        'newId': '',
        'oldId': '30063',
        'price': null,
        'tags': ['occasions']
      },
      {
        'archive': false,
        'caption': '',
        'category': 'occasions',
        'credit': '',
        'fileName': 'P1110624.jpg',
        'name': '',
        'newId': '',
        'oldId': '30064',
        'price': null,
        'tags': ['occasions']
      }
    ];
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
