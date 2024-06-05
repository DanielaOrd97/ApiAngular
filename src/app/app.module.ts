import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburguerComponent } from './hamburguer/hamburguer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddhamburguerComponent } from './addhamburguer/addhamburguer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdithamburguerComponent } from './edithamburguer/edithamburguer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideFirebaseApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCekCB7epSRxzqWnL2LnKaKdwWmvcklobg',
  authDomain: 'burguerapi-59f2a.firebaseapp.com',
  projectId: 'burguerapi-59f2a',
  storageBucket: 'burguerapi-59f2a.appspot.com',
  messagingSenderId: '748282409597',
  appId: '1:748282409597:web:96dbc7f9730084a523f714',
  measurementId: 'G-85PPHH7J0S',
};

@NgModule({
  declarations: [
    AppComponent,
    HamburguerComponent,
    AddhamburguerComponent,
    EdithamburguerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
