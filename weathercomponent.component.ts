import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';

@Component({
  selector: 'app-weathercomponent',
  templateUrl: './weathercomponent.component.html',
  styleUrls: ['./weathercomponent.component.css']
})
export class WeathercomponentComponent implements OnInit {
  city!: string;
  weatherdata: any;
  temperature: number | undefined;
  errorData: any;

  constructor(private weatherservice:WeatherserviceService) { }

  ngOnInit(){
      console.log("ng on init")
    
  }
getData(){
  this.weatherservice.getWeatherData(this.city).subscribe(data =>{
    this.weatherdata=data;
    console.log(data)
    this.city=''
    this.errorData=''
  }, (error: HttpErrorResponse) => {
    this.errorData = error.error;
    this.city=''
    this.weatherdata=''
    // this.errorData=''
  }
);
 }

}
