import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ColorDirective } from './directive/color.directive';
import { CheckNumberDirective } from './directive/check-number.directive';
import { WeatherComponent } from './component/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { CelciusPipe } from './Pipe/celciusPipe';
@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    CheckNumberDirective,
    WeatherComponent,
    CelciusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class  AppModule { }
