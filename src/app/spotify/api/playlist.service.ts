import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClientModule) { }

  getFeaturedPlaylists(limit: number = 10, offset: number = 5) {
    httpOptions.headers.set('Authorization', 'BQCRrYRJukEzwAVm15EI-wWSUW86DVPqxWOECfyAeScqJCoHSWoHCWLoPeiIbx2Y37JVD77cY9eovAGURvFjOgHa_5d8KQEoSjgWGEj1ti2Sy5Eitn6n2UJhpSaoHnuv_q-2PrcpE7XO');
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists')
  }
}
