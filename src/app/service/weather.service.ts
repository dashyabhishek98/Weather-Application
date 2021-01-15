import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //private url = "http://api.openweathermap.org/data/2.5/weather";
  //private key = 'ac9c10add477b9cff36c1f35c540f41a';
  private googleApiKey = "AIzaSyBnlh0irdWp9qtlN_L4fm4caV3_Iqvlw34";
  constructor(private http:HttpClient) { }

  getWeatherDailyByCoordinates(lat,lng){
    let params = new HttpParams();
    params = params.append('lat',lat)
    .append('lon',lng)
    //.set('units','imperial')
    .append('appid',environment.weatherKey);
    //console.log(lat+"  "+lng)
    return this.http.get(environment.coordinateURL,{params:params});
  }
  getWeatherByCity(cityName){
    //console.log(cityName);
    let params = new HttpParams();
    params = params.append('q',cityName)
    .append('appid',environment.weatherKey);
    return this.http.get(environment.coordinateURL,{params : params});
  }
  // getGoogleMap(){
  //   let url = "https://maps.googleapis.com/maps/api/js";
  //   let params = new HttpParams();
  //   params = params.append('key',this.googleApiKey).append('callback','initMap');
  //   return this.http.get(this.url,{params:params});
  // }
}
