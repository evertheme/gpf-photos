import { Component, AfterViewInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';


@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html'
})
export class CurrencyComponent implements AfterViewInit, ICellRendererAngularComp  {
    public params: any;
    public isNumber: boolean;
    public currencyType: string;
    public showSymbol: boolean;

    constructor() {}

    agInit(params: any): void {
        this.params = params;
        this.isNumber = this.evalNumber(this.params.value);
        this.currencyType = this.params.currencyType || 'USD';
        this.showSymbol = this.params.showSymbol || true;
    }

    ngAfterViewInit() {
        // this.isNumber = this.evalNumber(this.paramValue);
        // console.log('price: ', this.paramValue, 'isNumber: ', this.isNumber);
    }

    evalNumber(val) {
        return !isNaN(val as any) && val !== null && val !== '' && val !== 0;
    }

    refresh(): boolean {
        return true;
    }

}
