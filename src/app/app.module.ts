import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SongListComponent } from './song-list/song-list.component';
import { SongSearchComponent } from './song-search/song-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SongDetailsComponent,
    SongListComponent,
    SongSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
