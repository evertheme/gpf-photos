import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';

@Component({
    selector: 'app-delete-row',
    templateUrl: './delete-row.component.html'
})
export class DeleteRowComponent implements ICellRendererAngularComp, AfterViewInit {
    public params: any;
    public _rowIndex: number;
    public isDeleted: boolean;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    agInit(params: any): void {
        this.params    = params;
        this._rowIndex = this.params.node.rowIndex;
    }

    onDeleteRowClick(): void {
      // do delete
      console.log('delete row');
      this.isDeleted = true;
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    refresh(): boolean {
        return true;
    }

}
