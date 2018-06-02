import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ArtistsService {

  constructor(private http: HttpClientModule) { }

  getArtists(): void {
    //this.http.get()
  }

}
