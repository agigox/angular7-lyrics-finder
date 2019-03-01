import { Injectable } from '@angular/core';
import { Song } from './song';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusixmatchService {

  constructor(private http: HttpClient) {
  }


  getSongList(): Observable<Song> {
    return this.http.get<Song>('http://localhost:8082/api/songbyword');
  }
}
