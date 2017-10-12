import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artists: any[] = [];
  urlSearch: string = "https://api.spotify.com/v1/search";

  constructor(public http: Http) { }

  getArtists(termino: string) {
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlSearch + query;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer BQDudAhfjfVjNbi5FFJ_5os5qmPsCpzm2c2K57PDhwpZabA_r0e6sQR_IzHl4ie0ZdJqlPB8ZKyg-IPW5yDEKZc29_wGqWCSmQOlm2Nb_DK_Ddo63bAz-cuVwDUu1xNYF-WVVPpUW8pXnTKQ8D2hIAS7pALpO1LTbg');

    return this.http.get(url, { headers })
      .map(res => {
        this.artists = res.json().artists.items;
        console.log(this.artists);

        return res.json().artists.items;
      });
  }
}
