import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { LoginServiceService } from '../login-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService extends BaseService {

  private url = 'https://api.spotify.com/v1/search';

  private artistSearch$ = new BehaviorSubject<string>(null);
  public artistSearchData$ = this.artistSearch$.asObservable();

  constructor(private http: HttpClient, private auth: LoginServiceService) {
    super(auth);
  }

  public search(
    q: string,
    type: 'artist' | 'album' | 'playlist' | 'track',
    limit: number = 2,
    offset: number = 0) {

    var headers = this.createBasicHeaderSet();

    console.log('headers', headers)

    this.http.get(this.url, {
      headers,
      params: {
        q,
        type,
        limit: limit.toString(),
        offset: offset.toString()
      }
    }, )
      .subscribe(data => {
        console.log('data from search', data);
      })
  }
} 
