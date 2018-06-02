import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';
import { IFeaturedPlaylistsResponse } from './Interfaces/IFeaturedPlaylistsResponse';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token placeholder'
  })
};

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient, private auth: LoginServiceService) { }

  getFeaturedPlaylists(limit: number = 10, offset: number = 5) {
    let response = this.auth.getStoredOAuthResponse();

    var headers = httpOptions.headers.set('Authorization',
      `Bearer ${response.AccessToken}`);

    return this.http.get<IFeaturedPlaylistsResponse>('https://api.spotify.com/v1/browse/featured-playlists', {
      headers
    })
    .subscribe(res => console.log(res));
  }
}
