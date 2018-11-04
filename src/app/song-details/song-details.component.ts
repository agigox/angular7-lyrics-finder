import { Component, OnInit } from '@angular/core';
import { MusixmatchService } from '../musixmatch.service';
import { Song } from '../song';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.sass']
})
export class SongDetailsComponent implements OnInit {

  songDetails: Song;
  constructor(private musixmatchService: MusixmatchService) {}

  getSongDetails(): void {
    this.musixmatchService.getSongDetails().subscribe(
      song => {
        this.songDetails = song;
      }
    );
  }
  ngOnInit() {
    this.getSongDetails();
  }

}
