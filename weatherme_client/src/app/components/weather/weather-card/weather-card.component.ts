import { Component, Input } from '@angular/core';
import { WeatherOverviewModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.sass']
})
export class WeatherCardComponent {
  @Input('currentWeather') currentWeather?: WeatherOverviewModel;
}
