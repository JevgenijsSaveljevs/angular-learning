import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [LoginServiceService]
})
export class SpotifyModule { }
