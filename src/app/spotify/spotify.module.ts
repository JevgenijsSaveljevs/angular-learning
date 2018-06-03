import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PlaylistService } from './api/playlist.service';
import { SearchService } from './api/search.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [LoginServiceService, PlaylistService, SearchService]
})
export class SpotifyModule { }
