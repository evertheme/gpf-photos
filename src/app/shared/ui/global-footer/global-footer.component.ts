import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.scss']
})
export class GlobalFooterComponent implements OnInit {
  public startCRD: string;
  public endCRD: string;

  constructor() {
    this.startCRD = '2015';
    this.endCRD = (new Date()).getFullYear().toString();
  }

  ngOnInit() {
  }

}
