import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
