import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {


  private apiKey = " ";
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';



  constructor(private http: HttpClient) { }

  getWeatherData(city: string){
    
    return this.http.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);

  }
}
