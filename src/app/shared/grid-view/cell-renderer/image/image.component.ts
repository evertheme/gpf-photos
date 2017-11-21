import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html'
})
export class ImageComponent implements ICellRendererAngularComp, AfterViewInit {
    public params: any;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    agInit(params: any): void {
        this.params = params;
    }

    onImageClick(): void {
      console.log('image clicked');
      console.log('params: ', this.params);
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    refresh(): boolean {
        return true;
    }

}
