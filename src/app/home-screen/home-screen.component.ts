import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../spotify/api/playlist.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private playlist: PlaylistService) { }

  ngOnInit() {
    console.log('HomeScreenComponent onInit')

    this.playlist.getFeaturedPlaylists();
  }
}
