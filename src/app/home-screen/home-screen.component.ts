import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../spotify/api/playlist.service';
import { IPlaylist } from '../spotify/api/Interfaces/IPlaylist';
import { IFeaturedPlaylistsResponse } from '../spotify/api/Interfaces/IFeaturedPlaylistsResponse';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  playlists: IPlaylist[];

  constructor(private playlist: PlaylistService) { }

  ngOnInit() {
    console.log('HomeScreenComponent onInit')

    this.playlist.getFeaturedPlaylists()
      .subscribe((data: IFeaturedPlaylistsResponse) => {
        console.log('got data', data.playlists.items)
        this.playlists = data.playlists.items;
      });
  }
}
