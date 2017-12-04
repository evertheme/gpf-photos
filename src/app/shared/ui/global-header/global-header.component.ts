import { Component, OnInit } from '@angular/core';

import { APP } from '../../../shared/constant/app.constant';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {
  public appName: string;

  constructor() { }

  ngOnInit() {
    this.appName = APP.NAME;
  }
}
