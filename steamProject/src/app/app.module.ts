import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importación del módulo 
import { HttpClientModule } from  '@angular/common/http';
import { TablaComponent } from './tabla/tabla.component';
import { CardReverseComponent } from './card-reverse/card-reverse.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CardReverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
