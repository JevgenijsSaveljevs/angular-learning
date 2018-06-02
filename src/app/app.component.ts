import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './spotify/login-service.service';
import { SpotifyOAuthCallbackResult } from './spotify-oauth-callback-result';
import { Constants } from './constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _login: LoginServiceService;
  title = 'app';

  constructor(private login: LoginServiceService, private router: Router) {
    this._login = login;
  }

  ngOnInit(): void {
    console.log('AppComponent onInit')
    let hash = window.location.hash;

    if (SpotifyOAuthCallbackResult.IsOAuthCallback(hash)) {
      var oAuthData = new SpotifyOAuthCallbackResult(hash);
      window.localStorage.setItem(Constants.OAuthResponse, JSON.stringify(oAuthData));

      console.log('response payload', oAuthData);
    }

    var token = window.localStorage.getItem(Constants.OAuthResponse);

    if (token) {
      this.router.navigate(['/']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  public DoStuff(): void {
    this._login.Login();
  }

  public GetArtists(search: string): void {

  }
}
