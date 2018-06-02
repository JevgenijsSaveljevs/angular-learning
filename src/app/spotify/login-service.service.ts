import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { SpotifyOAuthCallbackResult } from '../spotify-oauth-callback-result';
import * as jwt from 'jwt-decode';

@Injectable()
export class LoginServiceService {

  constructor() { }

  public Login(): void {
    var redirectUri = encodeURI(window.location.origin);
    var clientId = 'd5a445e0f97341f0b6b427fa510f4a0c';
    var url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email&response_type=token&state=123`
    window.location.replace(url);
  }

  public storeOAuthResponse(oAuthData: SpotifyOAuthCallbackResult): void {
    window.localStorage.setItem(Constants.OAuthResponse, JSON.stringify(oAuthData));
  }

  public getStoredOAuthResponse(): SpotifyOAuthCallbackResult {
    var resp = window.localStorage.getItem(Constants.OAuthResponse);

    if (resp) {
      try {
        return JSON.parse(resp) as SpotifyOAuthCallbackResult;
      }
      catch {
        return null;
      }
    }

    return null;
  }

  public decodeToken(token: string): any {
    return jwt(token);
  }
}
