import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.auth.currentUser) {
       // console.log('this.auth.currentUser: ', this.auth.currentUser);
       this.router.navigate(['/join']);
    }
  }

}
