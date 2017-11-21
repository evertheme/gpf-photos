import { Component, OnInit } from '@angular/core';

import { APP } from '../../../shared/constant/app.constant';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {
  public appName: string;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.appName = APP.NAME;
  }

  login() {
    console.log('GlobalHeaderComponent: login()');
  }

  logout() {
    this.auth.signOut();
  }

}
