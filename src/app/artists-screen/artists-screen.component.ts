import { Component, OnInit } from '@angular/core';
import { SearchService } from '../spotify/api/search.service';

@Component({
  selector: 'app-artists-screen',
  templateUrl: './artists-screen.component.html',
  styleUrls: ['./artists-screen.component.css']
})
export class ArtistsScreenComponent implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.search.search('kendrick', 'artist')
  }

}
