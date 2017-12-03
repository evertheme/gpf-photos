import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { ModalDirective } from 'ng-mdb-pro/free/modals/modal.directive';
import * as _ from 'lodash';

import { UploadFile, UploadInput, UploadOutput } from 'ng-mdb-pro/pro';
import { humanizeBytes } from 'ng-mdb-pro/pro/file-input';

import { GRID } from './inventory.constant';
import { InventoryService } from './inventory.service';
import { Subscription } from 'rxjs/Subscription';

export class Upload {
  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy, AfterViewInit {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  currentUpload: Upload;
  selectedFiles: FileList;

  public images: any[];
  public gridOptions: GridOptions;
  public sub: Subscription;
  public currentImage: any;
  public editData: any;
  public gridHeight: number;
  public newTag: string;

  @ViewChild('editImageForm') public editImageModal: ModalDirective;
  @ViewChild('addImageForm') public addImageModal: ModalDirective;

  private currentFilter: any;

  constructor(private inventoryService: InventoryService) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
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
              this.images = _.remove(rowData, function(img) {
                return img.category !== 'home';
              });
              if (this.gridOptions.api) {
                // console.log('this.gridOptions.api exists');
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
    // console.log('this.editImageModal: ', this.editImageModal);
    this.currentImage = params.data;
    this.editData = this.currentImage;
    // console.log('this.editData: ', this.editData);
    this.editImageModal.show();
    // console.log('editImageModal: ', this.editImageModal);
  }

  onUploadImage() {
    console.log('files: ', this.files);
    const files = this.selectedFiles;
    if (_.isEmpty(files)) {
      return;
    }

    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
        this.currentUpload = new Upload(files[idx]);
        this.inventoryService.pushUpload(this.currentUpload);
      }
    );
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (_.isEmpty(files)) {
      return;
    }

    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
        this.currentUpload = new Upload(files[idx]);
        this.inventoryService.pushUpload(this.currentUpload);
      }
    );
  }


  onUploadCancel() {
    this.addImageModal.hide();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }


  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i ++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ', ';
      }
    }
    return files;
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: '/upload',
      method: 'POST',
      data: { foo: 'bar' },
      concurrency: 1
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();

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
