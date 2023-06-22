import { Component } from '@angular/core';
import { Song } from 'src/model/Song';
import { SpotifyService } from '../Services/spotify.service';
import { SpotifyRouterService } from '../Services/spotify-router.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-playlist',
  templateUrl: './delete-playlist.component.html',
  styleUrls: ['./delete-playlist.component.css']
})
export class DeletePlaylistComponent {
  playListName?:string;
  song?:Song[]
  constructor(private spotify:SpotifyService,private router:SpotifyRouterService,private fb:FormBuilder,private route:Router){}
  deleteForm= this.fb.group({
    playListName: ['', Validators.required]
  })
  get PlayListName(){
    return this.deleteForm.get('playListName');
  }
  onSubmit(){
  const playListName = this.deleteForm.get('playListName')?.value;
 if (playListName) {
  this.playListName = playListName;
  this.spotify. deletePlayList(this.playListName).subscribe({
    next:() => {
      alert("Deleted successfully");
      this.deleteForm.reset();
      this.route.navigateByUrl("/deletePlaylist")
    },
    error: e => {
      alert("Failed to fetch Song");
      this.router.navigateToHome();
    }
  })
  }
}
}
