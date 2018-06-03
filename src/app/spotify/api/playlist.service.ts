import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';
import { IFeaturedPlaylistsResponse } from './Interfaces/IFeaturedPlaylistsResponse';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token placeholder'
  })
};

@Injectable()
export class PlaylistService {

  private featuredPlaylistsBehaviorSubject: BehaviorSubject<IFeaturedPlaylistsResponse> = new BehaviorSubject<IFeaturedPlaylistsResponse>(null);
  // featuredPlaylistsSubject: Subject<IFeaturedPlaylistsResponse> = new Subject<IFeaturedPlaylistsResponse>();

  public featuredPlaylistsState = this.featuredPlaylistsBehaviorSubject.asObservable();

  constructor(private http: HttpClient, private auth: LoginServiceService) { }

  getFeaturedPlaylists(limit: number = 10, offset: number = 5): Observable<IFeaturedPlaylistsResponse> {
    let response = this.auth.getStoredOAuthResponse();

    var headers = httpOptions.headers.set('Authorization',
      `Bearer ${response.AccessToken}`);

    return this.http.get<IFeaturedPlaylistsResponse>('https://api.spotify.com/v1/browse/featured-playlists', {
      headers
    });
  }

  fillBehaviourSubjectWithHttp(): void {
    this.getFeaturedPlaylists()
      .subscribe(resp => {
        this.featuredPlaylistsBehaviorSubject.next(resp);
      })
  }
}
