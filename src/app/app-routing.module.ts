import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './feature/home/home.component';
import { UserLoginComponent } from './feature/user-login/user-login.component';
import { InventoryComponent } from './feature/inventory/inventory.component';
import { WeddingsComponent } from './feature/weddings/weddings.component';
import { OccasionsComponent } from './feature/occasions/occasions.component';
import { SympathyComponent } from './feature/sympathy/sympathy.component';
import { GalleryComponent } from './feature/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'occasions', component: OccasionsComponent },
  { path: 'sympathy', component: SympathyComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
