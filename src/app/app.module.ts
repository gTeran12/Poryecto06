import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // Import the FormsModule



//Importación del módulos
import { HttpClientModule } from  '@angular/common/http';
import { TablaComponent } from './tabla/tabla.component';
import { CardReverseComponent } from './card-reverse/card-reverse.component';
import { CardComponent } from './card/card.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CardReverseComponent,
    CardComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
