import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { ModalDirective } from 'ng-mdb-pro/free/modals/modal.directive';
import * as _ from 'lodash';

import { GRID } from './inventory.constant';
// import { Image } from './inventory.interface';
import { InventoryService } from './inventory.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy, AfterViewInit {

  public images: any[];
  public gridOptions: GridOptions;
  public sub: Subscription;
  public currentImage: any;
  public editData: any;
  public gridHeight: number;
  public newTag: string;


  @ViewChild('editImageForm') public editImageModal: ModalDirective;

  private currentFilter: any;

  constructor(private inventoryService: InventoryService) {
    this.editData = {
      oldId: '',
      fileName: '',
      category: '',
      name: '',
      price: '',
      tags: [],
      caption: '',
      credit: ''
    };

  }

  ngOnInit() {
    console.log('InventoryComponent: ngOnInit');
    this.gridHeight = window.innerHeight - 150;
    this.gridOptions = <GridOptions>{
      rowHeight: 90,
      headerHeight: 34,
      enableSorting: true,
      suppressMovableColumns: true,
      suppressRowClickSelection: true,
      onGridSizeChanged: this.onGridSizeChanged.bind(this),
      columnDefs: GRID.COLUMN_DEFINITIONS,
      onRowClicked: this.onRowClicked.bind(this),
      context: this,
      onGridReady: () => {
        this.sub = this.inventoryService
          .getData()
          .subscribe(
            rowData => {
              this.images = rowData;
              if (this.gridOptions.api) {
                console.log('this.gridOptions.api exists');
                this.gridOptions.api.setRowData(this.images);
              }
            }
          );
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
  }

  onSave() {
    this.inventoryService.updateImage(this.editData);
    this.editImageModal.hide();
  }

  onCancel() {
    this.editImageModal.hide();
  }

  addTag() {
    if (this.newTag && this.newTag.length > 0) {
      // console.log('addTag: ', this.newTag);
      this.editData.tags.push(this.newTag);
      this.newTag = '';
    }
  }

  removeTag(tag: string) {
    console.log('removeTag: tag: ', tag);
    console.log('tags before: ', this.editData.tags);
    _.remove(this.editData.tags, function(t: string) {
      return t.toLowerCase() === tag.toLowerCase();
    });
    console.log('tags after: ', this.editData.tags);
  }

  filterImages(filter) {
    console.log('filterImages: filter: ', filter);
    this.gridOptions.api.setQuickFilter(filter);
  }

  onGridSizeChanged(params) {
    // console.log('onGridSizeChanged: params: ', params);
    this.gridOptions.api.sizeColumnsToFit();
  }

  onRowClicked(params) {
    // console.log('onRowClicked: params: ', params);
    console.log('this.editImageModal: ', this.editImageModal);
    this.currentImage = params.data;
    this.editData = this.currentImage;
    console.log('this.editData: ', this.editData);
    this.editImageModal.show();
    console.log('editImageModal: ', this.editImageModal);
  }

  onResize(event) {
    this.gridHeight = event.target.innerHeight - 150;
    // console.log('this.gridHeight: ', this.gridHeight);
  }

  ngAfterViewInit() {
    // console.log('InventoryComponent: ngAfterViewInit');
    this.gridHeight = window.innerHeight - 150;
    this.gridOptions.api.setSortModel([{colId: 'category', sort: 'asc'}]);
    console.log('sort: ', this.gridOptions.api.getSortModel());
  }

  ngOnDestroy() {
    // console.log('InventoryComponent: ngAfterViewInit');
    this.sub.unsubscribe();
  }

}
