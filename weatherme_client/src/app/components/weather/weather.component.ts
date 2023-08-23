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
  current_weather_data$?: Observable<WeatherOverviewModel>;
  // current_weather_data$: any;
  interval: any;
  weather_service: WeatherService = inject(WeatherService);

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeatherData()
    // interval(1000).subscribe(d => this.getCurrentWeatherData())
  }
  
  ngOnDestroy() {
    // code...
  }

  getCurrentWeatherData() {
    this.current_weather_data$ = this.weatherService.getCurrentWeatherData();
  }

  updateCurrentWeatherData(): void {
    this.current_weather_data$ = this.weatherService.getCurrentWeatherData();
  }
}
