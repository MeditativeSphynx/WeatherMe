import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherCardComponent } from './components/weather/weather-card/weather-card.component';
import { CardHeaderComponent } from './components/weather/weather-card/card-header/card-header.component';
import { CardBodyComponent } from './components/weather/weather-card/card-body/card-body.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherCardComponent,
    CardHeaderComponent,
    CardBodyComponent
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
