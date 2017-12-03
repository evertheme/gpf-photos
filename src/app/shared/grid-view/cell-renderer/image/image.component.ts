import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html'
})
export class ImageComponent implements ICellRendererAngularComp {
    public params: any;

    constructor() {}

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return true;
    }

}
