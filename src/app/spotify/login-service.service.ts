import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {

  constructor() { }

  public Login(): void {
    var redirectUri = encodeURI(window.location.origin);
    var clientId = 'd5a445e0f97341f0b6b427fa510f4a0c';
    var url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email&response_type=token&state=123`
    window.location.replace(url);
  }
}
