import { Component } from '@angular/core';
import { Song } from 'src/model/Song';
import { SpotifyService } from '../Services/spotify.service';
import { SpotifyRouterService } from '../Services/spotify-router.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-song-from-play-list',
  templateUrl: './song-from-play-list.component.html',
  styleUrls: ['./song-from-play-list.component.css']
})
export class SongFromPlayListComponent {
playListName?:string;
song?:Song[]
constructor(private spotify:SpotifyService,private router:SpotifyRouterService,private fb:FormBuilder){}
songForm= this.fb.group({
  playListName: ['', Validators.required]
})
// get playListName(){
//   return this.songForm.get('playListname');
// }
ngOnInit(): void {
}
onSubmit(){
 const playListName = this.songForm.get('playListName')?.value;
 if (playListName) {
  this.playListName = playListName;
  this.spotify.getAllSongFromPlayList(this.playListName).subscribe({
    next: data => {
      this.song = data;
    },
    error: e => {
      alert("Failed to fetch Song");
      this.router.navigateToHome();
    }
  })

  }

}
songPlay(){
  alert("Song is Playing");
}
}
