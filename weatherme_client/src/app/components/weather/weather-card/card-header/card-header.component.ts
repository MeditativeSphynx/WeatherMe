import { Component, Input } from '@angular/core';

import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.sass']
})
export class CardHeaderComponent {
  @Input('currentTempF') currentTempF?: number | null;
  @Input('currentConditionsIcon') currentConditionsIcon?: string;
  @Input('currentConditionsText') currentConditionsText?: string;

  // constructor(private weatherService: WeatherService) {}

  // ngOnInit(): void {
  //   setInterval(() => { this.updateTemp() }, 10000)
  // }

  // updateTemp(): void {
  //   this.currentTempF = this.weatherService.getCurrentWeatherData().pipe()
  // }
}
