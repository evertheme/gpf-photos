import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

import { ModalDirective } from 'ng-mdb-pro/free/modals/modal.directive';
import { InventoryService } from '../inventory/inventory.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  public page: string;
  public pageTitle: string;
  public images: any[];
  public currentImage: any;

  @ViewChild('imageModal') public imageModal: ModalDirective;

  private pageSub: Subscription;
  private imageSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    this.pageSub = this.route.params.subscribe(params => {
      this.page = params['page'];
      this.imageSub = this.inventoryService
        .getData()
        .subscribe(imagesData => {
          this.images = imagesData;
          this.currentImage = this.images[0];
          this.setName();
        });
    });
  }

  setName() {
    switch (this.page) {
      case 'weddings': {
        this.pageTitle = 'Weddings Gallery';
        this.filterImages('weddings', null);
        break;
      }
      case 'bouquets': {
        this.pageTitle = 'Wedding Bouquets Gallery';
        this.filterImages('weddings', 'bouquets');
        break;
      }
      case 'reception': {
        this.pageTitle = 'Wedding Reception Gallery';
        this.filterImages('weddings', 'reception');
        break;
      }
      case 'ceremony': {
        this.pageTitle = 'Wedding Ceremony Gallery';
        this.filterImages('weddings', 'ceremony');
        break;
      }
      case 'sympathy': {
        this.pageTitle = 'Sympathy Gallery';
        this.filterImages('sympathy', null);
        break;
      }
      case 'occasions': {
        this.pageTitle = 'Occasions Gallery';
        this.filterImages('occasions', null);
        break;
      }
      default: {
        this.pageTitle = 'Garden Party Florist Gallery';
        break;
      }
    }
    console.log('setName: this.images', this.images);
  }

  filterImages(category: string, tag: string) {
    _.remove(this.images, function(img) {
      return img.category !== category;
    });
    if (tag) {
      _.remove(this.images, function(img) {
        return !_.includes(img, tag);
      });
    }
  }

  ngOnDestroy() {
    this.pageSub.unsubscribe();
    this.imageSub.unsubscribe();
  }

}
