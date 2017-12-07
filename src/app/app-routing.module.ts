import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './feature/home/home.module#HomeModule' },
  { path: 'weddings', loadChildren: './feature/weddings/weddings.module#WeddingsModule' },
  { path: 'occasions', loadChildren: './feature/occasions/occasions.module#OccasionsModule' },
  { path: 'sympathy', loadChildren: './feature/sympathy/sympathy.module#SympathyModule' },
  { path: 'about', loadChildren: './feature/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './feature/contact/contact.module#ContactModule' },
  { path: 'gallery/:page', loadChildren: './feature/gallery/gallery.module#GalleryModule' },
  { path: 'login', loadChildren: './feature/login/login.module#LoginModule' },
  { path: 'inventory', loadChildren: './feature/inventory/inventory.module#InventoryModule', canActivate: [AuthGuard] }
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
