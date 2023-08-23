import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherOverviewModel } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get<WeatherOverviewModel>('http://127.0.0.1:5000/api/v1/weather');
  }
}
