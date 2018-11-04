import { Injectable } from '@angular/core';
import { Song } from './song';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusixmatchService {

  song: Song;
  constructor(private http: HttpClient) {
    this.song = new Song();
  }


  getSongDetails(): Observable<Song> {
    return this.http.get<Song>('http://localhost:8082/api/song');
  }
}
