import { Component, OnInit } from '@angular/core';
import { MusixmatchService } from '../musixmatch.service';
import { Song } from '../song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.sass']
})
export class SongListComponent implements OnInit {

  songList: Song;
  constructor(private musixmatchService: MusixmatchService) {}

  getSongList(): void {
    this.musixmatchService.getSongList().subscribe(
      songList => {
        console.log(songList);
        this.songList = songList;
      }
    );
  }
  ngOnInit() {
    this.getSongList();
  }

}
