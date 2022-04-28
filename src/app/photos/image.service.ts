import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

import { PexelsResponse } from './pexels-response';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiKey = '563492ad6f91700001000001dfb4223b89ec462cb64ae894e82ac854';

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<PexelsResponse>(
      'https://api.pexels.com/v1/curated',
      {
        headers: {
          Authorization: this.apiKey,
        },
        params: {
          per_page: 1,
          page: Math.floor(Math.random() * 500)
        }
      }
    )
    // .pipe(
    //   pluck('photos', '0')
    // )
  }
}
