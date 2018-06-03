import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { IPlaylist } from '../spotify/api/Interfaces/IPlaylist';
import { Observable } from 'rxjs/Observable';
import { IFeaturedPlaylistsResponse } from '../spotify/api/Interfaces/IFeaturedPlaylistsResponse';
import { Subscription } from 'rxjs/Subscription';
import { PlaylistService } from '../spotify/api/playlist.service';
import { SearchService } from '../spotify/api/search.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit, OnChanges, OnDestroy {

  private playlists: IPlaylist[];
  private playlistSubscription: Subscription;

  constructor(private playlist: PlaylistService) { }

  ngOnInit() {
    this.playlistSubscription = this.playlist.featuredPlaylistsState
      .subscribe(data => {
        if (data) {
          this.playlists = data.playlists.items;
        }
      });
  }

  loadPlaylists(): void {
    this.playlist.fillBehaviourSubjectWithHttp();
  }

  ngOnDestroy(): void {
    this.playlistSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void { }
}