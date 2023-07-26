import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';

import{ HttpClientModule } from '@angular/common/http';


//Importación del módulo 
import { HttpClientModule } from  '@angular/common/http';
import { TablaComponent } from './tabla/tabla.component';
import { CardReverseComponent } from './card-reverse/card-reverse.component';
import { CardComponent } from './card/card.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CardsSectionComponent
=======
    TablaComponent,
    CardReverseComponent,
    CardComponent,
    FeatureComponent
>>>>>>> 14fd8927507ffe89eac58f6ad1477a713f3a67a1
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
