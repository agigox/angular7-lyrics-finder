import { Component, OnInit, Input } from '@angular/core';
import { MusixmatchService } from '../musixmatch.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songList: any;
  songWord: String;
  isLoading: Boolean; // To activate the loader
  constructor(private musixmatchService: MusixmatchService) {}

  getSongList() {
    this.isLoading = true;
    this.songList = [];
    this.musixmatchService.getSongList(this.songWord).subscribe(
      songList => {
        this.isLoading = false;
        this.songList = songList;
      }
    );
  }
  ngOnInit() {
    this.isLoading = false;
  }

}
