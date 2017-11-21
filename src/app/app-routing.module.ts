import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './feature/home/home.module#HomeModule'
  },
  {
    path: 'profile',
    loadChildren: './feature/profile/profile.module#ProfileModule'
  },
  {
    path: 'join',
    loadChildren: './feature/join/join.module#JoinModule'
  },
  {
    path: 'upload',
    loadChildren: './feature/uploads/shared/upload.module#UploadModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './feature/user-login/user-login.module#UserLoginModule'
  },
  {
    path: 'inventory',
    loadChildren: './feature/inventory/inventory.module#InventoryModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {

}
