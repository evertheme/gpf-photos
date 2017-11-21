import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';

@Component({
    selector: 'app-wrap-text',
    templateUrl: './wrap-text.component.html'
})
export class WrapTextComponent implements ICellRendererAngularComp, AfterViewInit {
    public params: any;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    agInit(params: any): void {
        this.params = params;
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    refresh(): boolean {
        return true;
    }

}
