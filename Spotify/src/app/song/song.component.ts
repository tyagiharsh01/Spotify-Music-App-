import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from 'src/model/Song';
import { SpotifyService } from '../Services/spotify.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
songData:Song[]=[]
isDisabled:boolean=false;
constructor(private spotifyService:SpotifyService , private router:Router,private auth:AuthService){}
  ngOnInit(): void {
    this.spotifyService.getAllSong()
    .subscribe({
      next:data=>{
        this.songData=data;
      },
      error:e=>{
        alert("Failed to fetch Song");
      }
    })
    
  }
  songPlay(){
    
    if(this.auth.isLoggedIn===true){
      this.isDisabled=true;
    
      alert("Song is Playing");
    }
    }
  addSong(song:Song){
  this.spotifyService.song=song;
    this.router.navigateByUrl("/createPlayList");
  }


}
