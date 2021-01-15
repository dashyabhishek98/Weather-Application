import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  runLoader = 1;
  private lat;
  private lng;
  weather;
  searchText;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
    //this.getGoogleMap();
  }
  getLocation(){
    if("geolocation" in navigator){
      console.log("------"+navigator);
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lng = success.coords.longitude;
        this.weatherService.getWeatherDailyByCoordinates(this.lat,this.lng).subscribe(data=>{
          this.weather = data;
          this.runLoader = 0;
          this.initMap();          
        })
      })
    }    
  }
  onCitySearch(){
    this.weatherService.getWeatherByCity(this.searchText).subscribe(
      res =>{
        console.log(res);
        this.weather = res;
        this.lat = this.weather.coord.lat;
        this.lng = this.weather.coord.lon;
        this.runLoader = 0;
        this.initMap();
      },
      error =>{
        console.log(error);
      }
    );
  }
  // getGoogleMap(){
  //    this.weatherService.getGoogleMap().subscribe(
  //      res =>{
  //         console.log(res);
  //      },
  //      error =>{
  //       console.log(error);
  //      }
  //    ) 
  // }

  initMap(): void {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: this.lat, lng: 	this.lng },
      disableDefaultUI: true,
    });
    console.log(document.getElementById("map"));
  }
}
