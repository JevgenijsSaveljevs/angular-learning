import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../spotify/api/playlist.service';
import { IPlaylist } from '../spotify/api/Interfaces/IPlaylist';
import { IFeaturedPlaylistsResponse } from '../spotify/api/Interfaces/IFeaturedPlaylistsResponse';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  constructor(private playlist: PlaylistService) { }

  ngOnInit() {
  }
}
