import { Injectable } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { SpotifyOAuthCallbackResult } from '../../spotify-oauth-callback-result';
import { HttpHeaders } from '@angular/common/http';
import { Header } from './Interfaces/IHeader';

@Injectable()
export abstract class BaseService {

  constructor(private authSvc: LoginServiceService) { }

  private getStoredOAuthToken(): SpotifyOAuthCallbackResult {
    let response = this.authSvc.getStoredOAuthResponse();

    return response;
  }

  private createHttpHeaders(headers: Header): HttpHeaders {
    var headerSet = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    for (let hdrName in headers) {
      if (headerSet.has(hdrName)) {
        headerSet = headerSet.set(hdrName, headers[hdrName])
      } else {
        headerSet = headerSet.append(hdrName, headers[hdrName])
      }
    }

    return headerSet;
  }

  public createBasicHeaderSet(): HttpHeaders {
    var token = this.getStoredOAuthToken();
    var headers = this.createHttpHeaders({ 'Authorization': `Bearer ${token.AccessToken}` });

    return headers;
  }
}
