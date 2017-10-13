import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  accessToken = 'BQDelRbCUsWlP91bc3VZzOuKRLGYsT01cJAk2sjm3cDU3MGvC70YLjhyvDS50NynEkdlLvLfPxQLFw26kdc5Fp4mkH64fN24Nda16lr3-6sGggAxWuJzDYycdw-qQrJWVNFmUIh9g57qY3Dp_71iOro7bg2VQZtZRQ';
  artists: any[] = [];
  urlSearch: string = "https://api.spotify.com/v1/search";
  urlArtist: string = "https://api.spotify.com/v1/artists";

  constructor(public http: Http) {  }

  getArtists(termino: string) {
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlSearch + query;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.accessToken);

    return this.http.get(url, { headers })
      .map(res => {
        this.artists = res.json().artists.items;
        console.log(this.artists);

        return res.json().artists.items;
      });
  }

  getArtist(id: string) {
    let query = `/${ id }`;
    let url = this.urlArtist + query;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.accessToken);

    return this.http.get(url, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getTop(id: string) {
    let query = `/${ id }/top-tracks?country=MX`;
    let url = this.urlArtist + query;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.accessToken);

    return this.http.get(url, { headers })
      .map(res => {
        console.log(res.json().tracks);
        return res.json().tracks;
      });
  }
}
