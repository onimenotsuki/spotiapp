import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  artist: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              public spotify: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        this.spotify.getArtist(id)
          .subscribe(data => this.artist = data);
      });
  }
}
