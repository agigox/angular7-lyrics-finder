import { Component, OnInit } from '@angular/core';
import { MusixmatchService } from '../musixmatch.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songList: Array<Song>;
  songWord: String;
  isLoading: Boolean; // To activate the loader
  available: Number;
  pageSizeOptions: Number[] = [5, 10, 25, 100];
  currentPage: Number;
  constructor(private musixmatchService: MusixmatchService) {}

  getSongList() {
    this.isLoading = true;
    this.musixmatchService.getSongList(this.songWord).subscribe(
        data => {
          this.isLoading = false;
          console.log(data)
          this.songList = data.body.track_list;
          this.available = data.header.available;
        }
    );
  }
  ngOnInit() {
    this.isLoading = false;
  }
  turnPage(e) {
    console.log(e);
  }

}
