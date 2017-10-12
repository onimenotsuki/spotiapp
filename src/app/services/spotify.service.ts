import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artists: any[] = [];
  urlSearch: string = "https://api.spotify.com/v1/search?";

  constructor(public http: Http) { }

  getArtists(termino: string) {
    let query = `q=${ termino }&type=artist`;
    let url = this.urlSearch + query;
    let headers = new Headers();

    return this.http.get(url)
      .map(res => {
        console.log(res);
      });
  }
}
