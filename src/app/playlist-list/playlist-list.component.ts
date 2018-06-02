import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPlaylist } from '../spotify/api/Interfaces/IPlaylist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit, OnChanges {

  @Input() playlists: IPlaylist[];

  constructor() {
    console.log('PlaylistListComponent:constructor', this.playlists, typeof (this.playlists))
  }

  ngOnInit() {
    console.log('PlaylistListComponent:ngOnInit', this.playlists, typeof (this.playlists))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PlaylistListComponent:ngOnChanges', changes)

    if (changes['playlists'] && changes.playlists.currentValue) {
      var json = JSON.stringify(changes.playlists.currentValue)
      var list = JSON.parse(json) as IPlaylist[];
      this.playlists = list;
    }
  }
}



// interfrace playlistChanges {
//   playlists: IPlaylist[];
// }
