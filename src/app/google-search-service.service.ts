import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchServiceService {

  constructor(private http: HttpClient) { }

  base_url: string = `https://www.googleapis.com/customsearch/v1?key=${environment.GOOGLE_SEARCH_API_KEY}&cx=${environment.GOOGLE_SEARCH_ENGINE_ID}`

  search(query: string): Observable<any> {
    return this.http.get(`${this.base_url}&q=${encodeURI(query)}`)
  }
}
