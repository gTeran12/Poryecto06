import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';





//Importación del módulos
import { HttpClientModule } from  '@angular/common/http';
import { TablaComponent } from './tabla/tabla.component';
import { CardReverseComponent } from './card-reverse/card-reverse.component';
import { CardComponent } from './card/card.component';
import { FeatureComponent } from './feature/feature.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CardReverseComponent,
    CardComponent,
    FeatureComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CanvasJSAngularChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
