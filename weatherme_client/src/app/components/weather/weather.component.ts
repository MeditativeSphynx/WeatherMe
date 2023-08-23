import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherModel, WeatherOverviewModel } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent {
  weather_data$?: Observable<WeatherOverviewModel>;
  weather_service: WeatherService = inject(WeatherService);

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather_data$ = this.getWeatherData();
  }

  getWeatherData(): Observable<WeatherOverviewModel> {
    console.log('>>> something');
    return this.weatherService.getCurrentWeatherData();
  }
}
