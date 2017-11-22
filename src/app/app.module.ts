import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///// Start FireStarter
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig = environment.firebaseConfig;

// Shared
import { AuthModule } from './auth/auth.module';
import { UiModule } from './shared/ui/ui.module';
import { HomeModule } from './feature/home/home.module';
import { InventoryModule } from './feature/inventory/inventory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AuthModule,
    UiModule,
    HomeModule,
    InventoryModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
