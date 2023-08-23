import { Component, inject } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { WeatherModel, WeatherOverviewModel } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent {
  current_weather_data$!: Observable<WeatherOverviewModel>;
  
  interval: any;
  weather_service: WeatherService = inject(WeatherService);

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeatherData();
    // TODO: Make updating the data, more fluid and subtle.
    interval(60000).subscribe(() => this.getCurrentWeatherData());
  }

  getCurrentWeatherData(): void {
    this.current_weather_data$ = this.weatherService.getCurrentWeatherData();
  }

}
