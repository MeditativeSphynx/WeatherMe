import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WeatherOverviewModel } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  server_uri = 'http://127.0.0.1:5000/api/v1/weather/current'

  constructor(private http: HttpClient) { }

  getCurrentWeatherData(): Observable<WeatherOverviewModel> {
    return this.http.get<WeatherOverviewModel>(this.server_uri);
  }

  updateCurrentWeatherData(): Observable<WeatherOverviewModel> {
    return this.http.get<WeatherOverviewModel>(this.server_uri)
  }

}
